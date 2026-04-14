import type { Locale } from './I18nProvider'

const originalText = new WeakMap<Text, string>()
const cache = new Map<string, string>()

function shouldSkipTextNode(node: Text) {
  const parent = node.parentElement
  if (!parent) return true
  if (!node.nodeValue?.trim()) return true
  const tag = parent.tagName
  if (['SCRIPT', 'STYLE', 'NOSCRIPT', 'CODE', 'PRE', 'TEXTAREA', 'INPUT', 'SELECT', 'OPTION'].includes(tag)) {
    return true
  }
  if (parent.closest('[data-no-auto-translate="true"]')) return true
  return false
}

function collectTextNodes(root: ParentNode) {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT)
  const nodes: Text[] = []
  let current = walker.nextNode()
  while (current) {
    const textNode = current as Text
    if (!shouldSkipTextNode(textNode)) {
      nodes.push(textNode)
    }
    current = walker.nextNode()
  }
  return nodes
}

async function translateBatch(texts: string[], target: Exclude<Locale, 'en'>) {
  const query = texts.map((t) => `q=${encodeURIComponent(t)}`).join('&')
  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=en&tl=${target}&dt=t&${query}`
  const res = await fetch(url)
  if (!res.ok) throw new Error('Translation request failed')
  const data = (await res.json()) as unknown
  if (!Array.isArray(data)) throw new Error('Unexpected translation response')

  // Multi-query shape from gtx can vary. Normalize into a flat array.
  const entries = data as Array<unknown>
  const first = entries[0]
  if (!Array.isArray(first)) return texts

  if (first.length && Array.isArray(first[0]) && typeof (first[0] as unknown[])[0] === 'string' && texts.length === 1) {
    return [(first as unknown[][]).map((part) => String(part[0] ?? '')).join('')]
  }

  if (first.length === texts.length && first.every((item) => Array.isArray(item))) {
    return (first as unknown[][]).map((item) => {
      if (Array.isArray(item[0])) {
        return (item as unknown[][]).map((part) => String(part[0] ?? '')).join('')
      }
      return String(item[0] ?? '')
    })
  }

  return texts
}

export async function translateDocument(target: Locale) {
  const root = document.body
  if (!root) return

  const nodes = collectTextNodes(root)
  for (const node of nodes) {
    if (!originalText.has(node)) {
      originalText.set(node, node.nodeValue ?? '')
    }
  }

  if (target === 'en') {
    for (const node of nodes) {
      const original = originalText.get(node)
      if (original != null) node.nodeValue = original
    }
    return
  }

  const sourceTexts = nodes.map((node) => originalText.get(node) ?? node.nodeValue ?? '')
  const toTranslate = [...new Set(sourceTexts.filter((text) => text.trim().length > 0).filter((text) => !cache.has(`${target}:${text}`)))]

  const chunkSize = 20
  for (let i = 0; i < toTranslate.length; i += chunkSize) {
    const chunk = toTranslate.slice(i, i + chunkSize)
    try {
      const translated = await translateBatch(chunk, target)
      chunk.forEach((original, idx) => {
        cache.set(`${target}:${original}`, translated[idx] ?? original)
      })
    } catch {
      chunk.forEach((original) => cache.set(`${target}:${original}`, original))
    }
  }

  for (const [idx, node] of nodes.entries()) {
    const original = sourceTexts[idx]
    node.nodeValue = cache.get(`${target}:${original}`) ?? original
  }
}
