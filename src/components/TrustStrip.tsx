import { motion, useReducedMotion } from 'motion/react'

const logos = ['Aperture Labs', 'Northwind', 'Contoso', 'Fabrikam', 'Umbrella Ops', 'Initech']

const metrics = [
  { label: 'Median time-to-pilot', value: '23 days', hint: 'demo benchmark' },
  { label: 'Tickets deflected', value: '41%', hint: 'support programs' },
  { label: 'Human override rate', value: '6%', hint: 'after tuning' },
]

export function TrustStrip() {
  const reduce = useReducedMotion()
  return (
    <section className="rounded-2xl border border-slate-200 bg-white px-4 py-6 shadow-sm dark:border-slate-800 dark:bg-slate-900 sm:px-6">
      <p className="text-center text-xs font-semibold uppercase tracking-wide text-slate-500">Trusted by teams shipping real workflows</p>
      <motion.div
        className="mt-4 flex flex-wrap items-center justify-center gap-3"
        initial={reduce ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {logos.map((name) => (
          <span
            key={name}
            className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-xs font-semibold text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
          >
            {name}
          </span>
        ))}
      </motion.div>
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {metrics.map((m, i) => (
          <motion.div
            key={m.label}
            initial={reduce ? false : { opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="rounded-xl border border-slate-100 bg-slate-50/80 px-4 py-3 text-center dark:border-slate-800 dark:bg-slate-800/50"
          >
            <p className="font-[family-name:var(--font-display)] text-2xl font-semibold text-slate-900 dark:text-white">{m.value}</p>
            <p className="text-xs font-medium text-slate-600 dark:text-slate-400">{m.label}</p>
            <p className="mt-1 text-[10px] uppercase tracking-wide text-slate-400">{m.hint}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
