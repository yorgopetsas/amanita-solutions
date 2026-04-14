import { motion, useReducedMotion } from 'motion/react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { products } from '../data/products'

export function ProductsIndex() {
  const reduce = useReducedMotion()
  return (
    <div className="space-y-10">
      <header>
        <h1 className="font-[family-name:var(--font-display)] text-4xl font-semibold text-slate-900 dark:text-white">Products</h1>
        <p className="mt-3 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
          Six composable lines you can mix: orchestration, memory, retrieval, planning, integrations, and governance. Each can ship as a landing program with evals and runbooks.
        </p>
      </header>
      <ul className="grid gap-5 md:grid-cols-2">
        {products.map((p, i) => (
          <motion.li
            key={p.slug}
            initial={reduce ? false : { opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.04 }}
          >
            <Link
              to={`/products/${p.slug}`}
              className="group flex h-full cursor-pointer flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-violet-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-violet-500/50"
            >
              <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-slate-900 dark:text-white">{p.name}</h2>
              <p className="mt-2 text-sm text-violet-700 dark:text-violet-300">{p.tagline}</p>
              <p className="mt-3 flex-1 text-sm text-slate-600 dark:text-slate-400">{p.description}</p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-violet-600 group-hover:gap-2 dark:text-violet-300">
                Open landing <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          </motion.li>
        ))}
      </ul>
    </div>
  )
}
