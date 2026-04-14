import { motion, useReducedMotion } from 'motion/react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useI18n } from '../../i18n/I18nProvider'

const filters = ['All', 'RAG', 'Multi-agent', 'Titles', 'Tools', 'Realtime', 'Brand', 'Compliance'] as const

const tiles = [
  { client: 'Vertex Rail', title: 'Orchestrator reel', cat: 'Multi-agent' },
  { client: 'Harbor Health', title: 'Grounded memos', cat: 'RAG' },
  { client: 'Spotify', title: 'Pop classics loop', cat: 'Brand' },
  { client: 'Disney', title: 'Lion King outernet', cat: 'Titles' },
  { client: 'PUMA', title: 'F1 kinetic type', cat: 'Realtime' },
  { client: 'Google', title: 'Fitbit Ace LTE', cat: 'Brand' },
  { client: 'Nike', title: 'Airphoria burst', cat: 'Realtime' },
  { client: 'Netflix', title: 'House titles', cat: 'Titles' },
]

export function MotionStudioPage() {
  const [active, setActive] = useState<(typeof filters)[number]>('All')
  const reduce = useReducedMotion()
  const { locale } = useI18n()
  const filtered = active === 'All' ? tiles : tiles.filter((t) => t.cat === active)
  const copy = {
    en: { badge: 'Studio · Motion', title: 'Motion for agents.', reel: 'Open full showreel' },
    es: { badge: 'Studio · Motion', title: 'Motion para agentes.', reel: 'Abrir showreel completo' },
    ca: { badge: 'Studio · Motion', title: 'Motion per a agents.', reel: 'Obrir showreel complet' },
  }[locale]

  return (
    <div className="space-y-12">
      <header className="border-b border-slate-200 pb-10 dark:border-slate-800">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{copy.badge}</p>
        <h1 className="mt-4 max-w-4xl font-[family-name:var(--font-syne)] text-5xl font-bold leading-[1.05] text-slate-900 dark:text-white sm:text-6xl">
          {copy.title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
          Editorial rhythm borrowed from{' '}
          <a href="https://nexusstudios.com/motion-design/" className="font-medium text-violet-600 hover:underline dark:text-violet-300" target="_blank" rel="noreferrer">
            Nexus Studios — Motion Design
          </a>
          —applied to traces, handoffs, and “title sequences” for your agent brand.
        </p>
      </header>

      <div className="flex flex-wrap gap-2">
        {filters.map((f) => (
          <button
            key={f}
            type="button"
            onClick={() => setActive(f)}
            className={`cursor-pointer rounded-full px-4 py-2 text-xs font-semibold transition ${
              active === f
                ? 'bg-slate-900 text-white dark:bg-white dark:text-slate-900'
                : 'bg-slate-100 text-slate-600 hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-slate-700'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <ul key={active} className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {filtered.map((t, i) => (
          <motion.li
            key={t.title}
            initial={reduce ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.04 }}
            whileHover={reduce ? undefined : { y: -6 }}
            className="group cursor-pointer overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="aspect-[4/5] bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900" />
            <div className="p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{t.client}</p>
              <p className="mt-1 font-[family-name:var(--font-display)] font-semibold text-slate-900 dark:text-white">{t.title}</p>
              <p className="mt-1 text-xs text-violet-600 dark:text-violet-300">{t.cat}</p>
            </div>
          </motion.li>
        ))}
      </ul>

      <p className="text-center text-sm text-slate-500">
        Fictional tile labels echo public portfolio formatting—swap with your reel.{' '}
        <Link to="/showreel" className="font-semibold text-violet-600 hover:underline dark:text-violet-300">
          {copy.reel}
        </Link>
      </p>
    </div>
  )
}
