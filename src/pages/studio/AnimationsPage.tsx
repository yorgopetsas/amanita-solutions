import { motion, useReducedMotion } from 'motion/react'
import { Link } from 'react-router-dom'
import { Timer, Waves } from 'lucide-react'
import { useI18n } from '../../i18n/I18nProvider'

export function AnimationsPage() {
  const reduce = useReducedMotion()
  const { locale } = useI18n()
  const copy = {
    en: { badge: 'Studio · Animations', title: 'The beauty is in the easing.', cta: 'See motion inside the trace demo' },
    es: { badge: 'Studio · Animaciones', title: 'La belleza está en el easing.', cta: 'Ver motion dentro de la demo de trazas' },
    ca: { badge: 'Studio · Animacions', title: "La bellesa és a l'easing.", cta: 'Veure motion dins la demo de traces' },
  }[locale]
  return (
    <div className="space-y-12">
      <header className="rounded-3xl bg-slate-950 px-8 py-14 text-white sm:px-12">
        <p className="text-xs font-semibold uppercase tracking-widest text-violet-300">{copy.badge}</p>
        <h1 className="mt-4 max-w-2xl font-[family-name:var(--font-display)] text-4xl font-semibold sm:text-5xl">{copy.title}</h1>
        <p className="mt-4 max-w-xl text-slate-400">
          Inspired by Framer’s animation controls (spring, delay, stagger)—implemented here with{' '}
          <a href="https://motion.dev" className="text-violet-300 underline-offset-2 hover:underline" target="_blank" rel="noreferrer">
            Motion for React
          </a>
          . No external motion tools required for these demos.
        </p>
      </header>

      <div className="grid gap-8 lg:grid-cols-2">
        <motion.div
          className="rounded-2xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-900"
          whileHover={reduce ? undefined : { scale: 1.01 }}
          transition={{ type: 'spring', stiffness: 400, damping: 25 }}
        >
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white">
            <Waves className="h-5 w-5 text-violet-500" aria-hidden />
            Spring choreography
          </div>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
            Trace steps that “land” with spring physics instead of linear fades—operators perceive readiness and failure modes faster.
          </p>
          <div className="mt-6 flex gap-2">
            {[0, 1, 2, 3].map((i) => (
              <motion.span
                key={i}
                className="h-3 w-3 rounded-full bg-violet-500"
                animate={reduce ? undefined : { y: [0, -8, 0] }}
                transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.12 }}
              />
            ))}
          </div>
        </motion.div>

        <div className="rounded-2xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-900">
          <div className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white">
            <Timer className="h-5 w-5 text-fuchsia-500" aria-hidden />
            Delay &amp; stagger
          </div>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
            Reveal eval metrics in sequence so execs read the story once—not as a wall of numbers.
          </p>
          <div className="mt-6 space-y-2">
            {['Latency', 'Cost', 'Success'].map((label, i) => (
              <motion.div
                key={label}
                initial={reduce ? false : { opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="rounded-lg bg-slate-100 px-3 py-2 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200"
              >
                {label}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <Link to="/demo" className="inline-flex cursor-pointer text-sm font-semibold text-violet-600 hover:underline dark:text-violet-300">
        {copy.cta} →
      </Link>
    </div>
  )
}
