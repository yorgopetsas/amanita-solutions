import { motion, useReducedMotion } from 'motion/react'
import { Box, Command, Puzzle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useI18n } from '../../i18n/I18nProvider'

const cards = [
  { title: 'Command surfaces', body: '⌘K-style palettes for operators: jump to traces, policies, or tools.', icon: Command },
  { title: 'Reusable stacks', body: 'Grids that adapt when you add another specialist agent to the roster.', icon: Box },
  { title: 'MCP plugins', body: 'Typed connectors you publish once—clients enable per workspace.', icon: Puzzle },
]

export function ComponentsPage() {
  const reduce = useReducedMotion()
  const { locale } = useI18n()
  const copy = {
    en: { badge: 'Studio · Components', title: 'Build faster with components-not copy-paste prompts.', cta: 'Browse integration directory' },
    es: { badge: 'Studio · Componentes', title: 'Construye más rápido con componentes, no con copy-paste de prompts.', cta: 'Explorar directorio de integraciones' },
    ca: { badge: 'Studio · Components', title: 'Construeix més ràpid amb components, no amb copy-paste de prompts.', cta: "Explorar directori d'integracions" },
  }[locale]
  return (
    <div className="space-y-12">
      <header>
        <p className="text-xs font-semibold uppercase tracking-widest text-violet-600 dark:text-violet-300">{copy.badge}</p>
        <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-semibold text-slate-900 dark:text-white sm:text-5xl">
          {copy.title}
        </h1>
        <p className="mt-4 max-w-2xl text-slate-600 dark:text-slate-300">
          Mirrors the “components & marketplace” story from{' '}
          <a href="https://www.amanita.barcelona" className="font-medium text-violet-600 hover:underline dark:text-violet-300" target="_blank" rel="noreferrer">
            Framer
          </a>{' '}
          and{' '}
          <a href="https://www.amanita.barcelona" className="font-medium text-violet-600 hover:underline dark:text-violet-300" target="_blank" rel="noreferrer">
            Webflow Marketplace
          </a>
          —for agent UI, tool schemas, and runbooks.
        </p>
      </header>

      <div className="grid gap-5 md:grid-cols-3">
        {cards.map((c, i) => (
          <motion.div
            key={c.title}
            initial={reduce ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07 }}
            whileHover={reduce ? undefined : { y: -4 }}
            className="rounded-2xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 p-6 dark:border-slate-800 dark:from-slate-900 dark:to-slate-950"
          >
            <c.icon className="h-7 w-7 text-violet-500" aria-hidden />
            <h2 className="mt-4 font-semibold text-slate-900 dark:text-white">{c.title}</h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{c.body}</p>
          </motion.div>
        ))}
      </div>

      <Link to="/integrations" className="inline-flex cursor-pointer text-sm font-semibold text-violet-600 hover:underline dark:text-violet-300">
        {copy.cta} →
      </Link>
    </div>
  )
}
