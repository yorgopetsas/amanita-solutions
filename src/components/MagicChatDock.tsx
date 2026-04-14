import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { MessageCircle, Send, Sparkles, X } from 'lucide-react'
import { useCallback, useEffect, useId, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

type Msg = { id: string; role: 'user' | 'assistant'; text: string }

const seedReplies = [
  'I can outline a 3-agent workflow for support triage with human approval on refunds.',
  'Try the Orchestrator product page for routing patterns, or Platforms for model-specific notes.',
  'For RAG, we usually start with a corpus audit—want a checklist?',
]

export function MagicChatDock() {
  const reduceMotion = useReducedMotion()
  const panelId = useId()
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState<Msg[]>([
    {
      id: 'welcome',
      role: 'assistant',
      text: "Hi—I'm a Magic Chat–style demo (inspired by 21st.dev Magic Chat). Ask about agents, RAG, or pricing.",
    },
  ])
  const listRef = useRef<HTMLDivElement>(null)

  const pushAssistant = useCallback((text: string) => {
    setMessages((m) => [...m, { id: crypto.randomUUID(), role: 'assistant', text }])
  }, [])

  useEffect(() => {
    if (!open) return
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: reduceMotion ? 'auto' : 'smooth' })
  }, [messages, open, reduceMotion])

  function send() {
    const trimmed = input.trim()
    if (!trimmed) return
    setInput('')
    setMessages((m) => [...m, { id: crypto.randomUUID(), role: 'user', text: trimmed }])
    window.setTimeout(() => {
      const reply = seedReplies[Math.floor(Math.random() * seedReplies.length)]
      pushAssistant(reply)
    }, 450)
  }

  return (
    <div className="pointer-events-none fixed bottom-6 right-6 z-[250] flex flex-col items-end gap-3 print:hidden">
      <AnimatePresence>
        {open && (
          <motion.div
            id={panelId}
            role="dialog"
            aria-modal="true"
            aria-labelledby={`${panelId}-title`}
            initial={reduceMotion ? false : { opacity: 0, y: 16, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: 16, scale: 0.96 }}
            transition={{ type: 'spring', stiffness: 420, damping: 32 }}
            className="pointer-events-auto w-[min(100vw-2rem,22rem)] overflow-hidden rounded-2xl border border-violet-200/80 bg-white/95 shadow-[0_24px_80px_-24px_rgba(76,29,149,0.45)] backdrop-blur-md dark:border-violet-500/30 dark:bg-slate-950/90"
          >
            <div className="flex items-center justify-between gap-2 border-b border-violet-100 bg-gradient-to-r from-violet-600/10 via-fuchsia-500/10 to-indigo-600/10 px-4 py-3 dark:border-violet-500/20">
              <div className="flex items-center gap-2">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-500 text-white shadow-md">
                  <Sparkles className="h-4 w-4" aria-hidden />
                </span>
                <div>
                  <p id={`${panelId}-title`} className="font-[family-name:var(--font-display)] text-sm font-semibold text-slate-900 dark:text-white">
                    Magic Chat
                  </p>
                  <p className="text-xs text-slate-600 dark:text-violet-200/80">UI inspired by 21st.dev — demo only</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="cursor-pointer rounded-lg p-2 text-slate-500 transition-colors hover:bg-white/60 hover:text-slate-800 dark:hover:bg-white/10 dark:hover:text-white"
                aria-label="Close chat"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <div
              ref={listRef}
              className="max-h-72 space-y-3 overflow-y-auto px-4 py-3"
            >
              {messages.map((m) => (
                <div
                  key={m.id}
                  className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[90%] rounded-2xl px-3 py-2 text-sm leading-relaxed ${
                      m.role === 'user'
                        ? 'bg-violet-600 text-white'
                        : 'bg-slate-100 text-slate-800 dark:bg-slate-800 dark:text-slate-100'
                    }`}
                  >
                    {m.text}
                  </div>
                </div>
              ))}
            </div>
            <div className="border-t border-violet-100 p-3 dark:border-violet-500/20">
              <div className="flex gap-2">
                <label htmlFor={`${panelId}-input`} className="sr-only">
                  Message
                </label>
                <input
                  id={`${panelId}-input`}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && send()}
                  placeholder="Describe the agent you need…"
                  className="min-w-0 flex-1 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm text-slate-900 outline-none ring-violet-500/40 placeholder:text-slate-400 focus:ring-2 dark:border-slate-600 dark:bg-slate-900 dark:text-white"
                />
                <button
                  type="button"
                  onClick={send}
                  className="cursor-pointer rounded-xl bg-violet-600 px-3 py-2 text-white shadow-sm transition hover:bg-violet-500"
                  aria-label="Send message"
                >
                  <Send className="h-4 w-4" />
                </button>
              </div>
              <p className="mt-2 text-center text-[11px] text-slate-500 dark:text-slate-400">
                Not connected to a live model — see{' '}
                <a
                  href="https://21st.dev/magic-chat"
                  className="text-violet-600 underline-offset-2 hover:underline dark:text-violet-300"
                  target="_blank"
                  rel="noreferrer"
                >
                  21st Magic Chat
                </a>{' '}
                for the real product.
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        type="button"
        layout
        onClick={() => setOpen((v) => !v)}
        whileHover={reduceMotion ? undefined : { scale: 1.04 }}
        whileTap={reduceMotion ? undefined : { scale: 0.97 }}
        className="pointer-events-auto flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-gradient-to-br from-violet-600 to-fuchsia-600 text-white shadow-lg shadow-violet-600/40 ring-4 ring-white/50 dark:ring-slate-900/50"
        aria-expanded={open}
        aria-controls={panelId}
      >
        {open ? <X className="h-6 w-6" aria-hidden /> : <MessageCircle className="h-6 w-6" aria-hidden />}
        <span className="sr-only">{open ? 'Close assistant' : 'Open assistant'}</span>
      </motion.button>

      {!open && (
        <Link
          to="/contact"
          className="pointer-events-auto text-xs font-medium text-violet-700 underline-offset-2 hover:underline dark:text-violet-300"
        >
          Prefer human? Contact
        </Link>
      )}
    </div>
  )
}
