import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const ROOT = path.resolve(__dirname, '..')
const BASE_URL = 'https://www.amanita.barcelona'

function read(relPath) {
  return fs.readFileSync(path.join(ROOT, relPath), 'utf8')
}

function extractMatches(content, regex) {
  const out = []
  let match = regex.exec(content)
  while (match) {
    out.push(match[1])
    match = regex.exec(content)
  }
  return out
}

function normalizeRoute(routePath) {
  if (!routePath || routePath === '*') return null
  const trimmed = routePath.startsWith('/') ? routePath : `/${routePath}`
  if (trimmed.includes(':')) return null
  if (trimmed === '/home') return null
  return trimmed
}

function buildSitemapRoutes() {
  const app = read('src/App.tsx')
  const allRoutePaths = extractMatches(app, /path="([^"]+)"/g).map(normalizeRoute).filter(Boolean)

  const productsSlugs = extractMatches(read('src/data/products.ts'), /slug:\s*'([^']+)'/g)
  const platformSlugs = extractMatches(read('src/data/platforms.ts'), /slug:\s*'([^']+)'/g)
  const eventSlugs = extractMatches(read('src/data/events.ts'), /slug:\s*'([^']+)'/g)
  const caseStudySlugs = extractMatches(read('src/pages/CaseStudiesPage.tsx'), /slug:\s*'([^']+)'/g)
  const homeThemePaths = extractMatches(read('src/data/homeThemes.ts'), /path:\s*'([^']+)'/g)

  const dynamicRoutes = [
    ...productsSlugs.map((slug) => `/products/${slug}`),
    ...platformSlugs.map((slug) => `/platforms/${slug}`),
    ...eventSlugs.map((slug) => `/events/${slug}`),
    ...caseStudySlugs.map((slug) => `/case-studies/${slug}`),
    ...homeThemePaths,
  ]

  const deduped = new Set(['/', ...allRoutePaths, ...dynamicRoutes])
  return [...deduped]
    .map((route) => (route === '' ? '/' : route))
    .sort((a, b) => {
      if (a === '/') return -1
      if (b === '/') return 1
      return a.localeCompare(b)
    })
}

function renderSitemap(routes) {
  const urls = routes
    .map((route) => `  <url><loc>${BASE_URL}${route}</loc></url>`)
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`
}

const routes = buildSitemapRoutes()
const xml = renderSitemap(routes)
const outputPath = path.join(ROOT, 'public', 'sitemap.xml')
fs.writeFileSync(outputPath, xml, 'utf8')
console.log(`Sitemap generated with ${routes.length} routes at public/sitemap.xml`)
