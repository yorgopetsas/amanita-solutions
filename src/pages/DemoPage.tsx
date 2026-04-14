import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { Activity, CheckCircle2, Database, Search, Wrench } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/I18nProvider'

type Step = { id: string; label: string; detail: string; icon: typeof Search }

const steps: Step[] = [
  { id: 'plan', label: 'Plan', detail: 'Decompose user goal into retrievable sub-questions', icon: Activity },
  { id: 'retrieve', label: 'Retrieve', detail: 'Hybrid search + rerank on ticket KB (demo)', icon: Search },
  { id: 'tool', label: 'Tool', detail: 'Zendesk: fetch related tickets (scoped)', icon: Wrench },
  { id: 'memory', label: 'Memory', detail: 'Write summary to session store with TTL', icon: Database },
  { id: 'answer', label: 'Answer', detail: 'Grounded reply with citations + confidence', icon: CheckCircle2 },
]

export function DemoPage() {
  const reduce = useReducedMotion()
  const [idx, setIdx] = useState(0)
  const [running, setRunning] = useState(true)
  const { locale } = useI18n()
  const copy = {
    en: {
      title: 'Interactive demo',
      body: 'A looping trace visualization (no backend). In production, embed a screen recording or wire this UI to your observability feed.',
      pause: 'Pause loop',
      resume: 'Resume loop',
      book: 'Book live walkthrough',
      kit: 'Demo recording kit',
      live: 'Live span',
      tip: 'Tip: use the proof kit to record a 60-90 second walkthrough and embed it on your case page.',
    },
    es: {
      title: 'Demo interactiva',
      body: 'Visualización de trazas en bucle (sin backend). En producción, inserta una grabación de pantalla o conecta esta UI a tu feed de observabilidad.',
      pause: 'Pausar bucle',
      resume: 'Reanudar bucle',
      book: 'Reservar walkthrough en vivo',
      kit: 'Kit de grabación de demo',
      live: 'Span en vivo',
      tip: 'Tip: usa el proof kit para grabar un walkthrough de 60-90 segundos e incrustarlo en tu case page.',
    },
    ca: {
      title: 'Demo interactiva',
      body: "Visualització de traces en bucle (sense backend). En producció, incrusta una gravació de pantalla o connecta aquesta UI al teu feed d'observabilitat.",
      pause: 'Pausar bucle',
      resume: 'Reprendre bucle',
      book: 'Reservar walkthrough en viu',
      kit: 'Kit de gravació de demo',
      live: 'Span en viu',
      tip: 'Tip: fes servir el proof kit per gravar un walkthrough de 60-90 segons i incrustar-lo a la teva case page.',
    },
  }[locale]

  useEffect(() => {
    if (!running || reduce) return
    const t = window.setInterval(() => {
      setIdx((i) => (i + 1) % steps.length)
    }, 1600)
    return () => window.clearInterval(t)
  }, [running, reduce])

  const current = steps[idx]

  return (
    <div className="space-y-10">
      <header>
        <h1 className="font-[family-name:var(--font-display)] text-4xl font-semibold text-slate-900 dark:text-white">{copy.title}</h1>
        <p className="mt-3 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
          {copy.body}
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={() => setRunning((r) => !r)}
            className="cursor-pointer rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:border-violet-400 dark:border-slate-600 dark:text-slate-100"
          >
            {running ? copy.pause : copy.resume}
          </button>
          <Link to="/contact" className="cursor-pointer rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white dark:bg-white dark:text-slate-900">
            {copy.book}
          </Link>
          <Link to="/proof-kit" className="cursor-pointer rounded-xl border border-violet-300 px-4 py-2 text-sm font-semibold text-violet-700 dark:border-violet-700 dark:text-violet-300">
            {copy.kit}
          </Link>
        </div>
      </header>

      <div className="grid gap-8 lg:grid-cols-[1fr_280px]">
        <div className="rounded-3xl border border-slate-200 bg-slate-950 p-6 text-slate-100 shadow-inner dark:border-slate-800">
          <p className="font-mono text-xs uppercase tracking-widest text-violet-300">trace_id: demo-7f3a</p>
          <p className="mt-2 font-mono text-sm text-slate-400">goal: “Summarize ACME ticket #4481 and suggest next action”</p>
          <div className="mt-6 space-y-3">
            {steps.map((s, i) => {
              const active = i === idx
              const done = i < idx
              return (
                <motion.div
                  key={s.id}
                  layout
                  className={`flex gap-3 rounded-2xl border px-4 py-3 ${
                    active ? 'border-violet-500/80 bg-violet-500/10' : done ? 'border-emerald-500/40 bg-emerald-500/5' : 'border-white/10 bg-white/5'
                  }`}
                >
                  <s.icon className={`mt-0.5 h-5 w-5 shrink-0 ${active ? 'text-violet-300' : done ? 'text-emerald-400' : 'text-slate-500'}`} aria-hidden />
                  <div>
                    <p className="text-sm font-semibold">{s.label}</p>
                    <p className="text-xs text-slate-400">{s.detail}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
            <p className="text-xs font-semibold uppercase text-slate-500">{copy.live}</p>
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={reduce ? false : { opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, y: -6 }}
                transition={{ duration: 0.2 }}
                className="mt-3"
              >
                <p className="font-[family-name:var(--font-display)] text-xl font-semibold text-slate-900 dark:text-white">{current.label}</p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{current.detail}</p>
              </motion.div>
            </AnimatePresence>
            <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500"
                animate={{ width: `${((idx + 1) / steps.length) * 100}%` }}
                transition={{ duration: reduce ? 0 : 0.35 }}
              />
            </div>
          </div>
          <p className="text-xs text-slate-500">
            {copy.tip}
          </p>
        </div>
      </div>
    </div>
  )
}
