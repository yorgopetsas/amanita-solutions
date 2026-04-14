import { motion, useReducedMotion } from 'motion/react'
import { LayoutGrid, Monitor, Smartphone, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useI18n } from '../../i18n/I18nProvider'

const blocks = [
  { title: 'Design freely', body: 'Explore agent UX like a canvas—states, empty screens, escalation paths—before you commit to production wiring.', href: 'https://www.amanita.barcelona' },
  { title: 'Move to live agents', body: 'Promote mocks to Web Pages: add breakpoints for mobile ops, supervisor views, and exec summaries.', href: 'https://www.amanita.barcelona' },
  { title: 'Beyond single pages', body: 'Use the lab for tool schemas, eval cards, and social-ready explainers—all in one system.', href: 'https://www.amanita.barcelona' },
]

export function DesignLabPage() {
  const reduce = useReducedMotion()
  const { locale } = useI18n()
  const copy = {
    en: { badge: 'Studio · Design Lab', title: 'The only free-thinking space that brings agent UX to the web.', trace: 'See live trace demo' },
    es: { badge: 'Studio · Design Lab', title: 'El espacio creativo que lleva UX de agentes a la web.', trace: 'Ver demo de trazas en vivo' },
    ca: { badge: 'Studio · Design Lab', title: "L'espai creatiu que porta UX d'agents al web.", trace: 'Veure demo de traces en viu' },
  }[locale]
  return (
    <div className="space-y-16">
      <section className="text-center">
        <motion.div initial={reduce ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 rounded-full bg-violet-100 px-4 py-1.5 text-xs font-semibold text-violet-800 dark:bg-violet-950 dark:text-violet-200">
          <Sparkles className="h-3.5 w-3.5" aria-hidden />
          {copy.badge}
        </motion.div>
        <h1 className="mx-auto mt-6 max-w-3xl font-[family-name:var(--font-display)] text-4xl font-semibold text-slate-900 dark:text-white sm:text-5xl">
          {copy.title}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-slate-600 dark:text-slate-300">
          Paraphrasing{' '}
          <a href="https://www.amanita.barcelona" className="font-medium text-violet-600 hover:underline dark:text-violet-300" target="_blank" rel="noreferrer">
            Framer Design
          </a>
          : skip static decks—prototype how operators actually steer agents, then publish patterns your team reuses.
        </p>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        {blocks.map((b, i) => (
          <motion.article
            key={b.title}
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900"
          >
            <LayoutGrid className="h-7 w-7 text-violet-500" aria-hidden />
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-lg font-semibold text-slate-900 dark:text-white">{b.title}</h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{b.body}</p>
            <a href={b.href} className="mt-4 inline-block cursor-pointer text-xs font-semibold text-violet-600 hover:underline dark:text-violet-300" target="_blank" rel="noreferrer">
              Framer reference →
            </a>
          </motion.article>
        ))}
      </section>

      <section className="flex flex-wrap items-center justify-center gap-8 rounded-3xl border border-dashed border-slate-300 bg-slate-50 py-10 dark:border-slate-700 dark:bg-slate-900/50">
        <motion.div whileHover={reduce ? undefined : { y: -4 }} className="flex flex-col items-center gap-2">
          <Monitor className="h-10 w-10 text-slate-400" aria-hidden />
          <span className="text-xs font-semibold text-slate-500">Desktop control</span>
        </motion.div>
        <motion.div whileHover={reduce ? undefined : { y: -4 }} className="flex flex-col items-center gap-2">
          <Smartphone className="h-10 w-10 text-slate-400" aria-hidden />
          <span className="text-xs font-semibold text-slate-500">Mobile approve</span>
        </motion.div>
        <Link to="/demo" className="rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white dark:bg-white dark:text-slate-900">
          {copy.trace}
        </Link>
      </section>
    </div>
  )
}
