import { motion, useReducedMotion } from 'motion/react'
import { Link } from 'react-router-dom'
import { integrations } from '../data/integrations'

const categories = ['CRM', 'Data', 'Comms', 'Support', 'Dev', 'MCP'] as const

export function IntegrationsPage() {
  const reduce = useReducedMotion()
  return (
    <div className="space-y-10">
      <header>
        <h1 className="font-[family-name:var(--font-display)] text-4xl font-semibold text-slate-900 dark:text-white">Integrations &amp; partners</h1>
        <p className="mt-3 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
          Directory of connectors and MCP-style surfaces. Pair with{' '}
          <Link to="/products/connect-mcp" className="font-medium text-violet-600 hover:underline dark:text-violet-300">
            Mesh Connect
          </Link>{' '}
          for implementation detail.
        </p>
      </header>

      <div className="flex flex-wrap gap-2">
        {categories.map((c) => (
          <span key={c} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600 dark:bg-slate-800 dark:text-slate-300">
            {c}
          </span>
        ))}
      </div>

      <ul className="grid gap-4 md:grid-cols-2">
        {integrations.map((item, i) => (
          <motion.li
            key={item.name}
            initial={reduce ? false : { opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (i % 6) * 0.03 }}
            className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h2 className="font-[family-name:var(--font-display)] text-lg font-semibold text-slate-900 dark:text-white">{item.name}</h2>
              <span className="rounded-full bg-violet-100 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-violet-800 dark:bg-violet-950 dark:text-violet-200">
                {item.category}
              </span>
            </div>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{item.description}</p>
            <p className="mt-3 text-xs font-semibold uppercase text-slate-500">Status: {item.status}</p>
          </motion.li>
        ))}
      </ul>

      <section className="rounded-2xl border border-dashed border-slate-300 p-6 text-center dark:border-slate-600">
        <p className="text-sm text-slate-600 dark:text-slate-300">Need a partner badge wall? Co-sell logos can live here with linking policy.</p>
        <Link to="/contact" className="mt-3 inline-block cursor-pointer text-sm font-semibold text-violet-600 hover:underline dark:text-violet-300">
          Request a new connector
        </Link>
      </section>
    </div>
  )
}
