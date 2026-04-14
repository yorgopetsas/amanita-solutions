import { CheckCircle2 } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { getProduct } from '../data/products'

export function ProductPage() {
  const { slug } = useParams()
  const product = slug ? getProduct(slug) : undefined
  if (!product) return <Navigate to="/products" replace />

  return (
    <article className="space-y-10">
      <header className="rounded-3xl border border-slate-200 bg-gradient-to-br from-violet-50 to-white p-8 dark:border-slate-800 dark:from-slate-900 dark:to-slate-950 sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-wide text-violet-600 dark:text-violet-300">Product</p>
        <h1 className="mt-2 font-[family-name:var(--font-display)] text-4xl font-semibold text-slate-900 dark:text-white">{product.name}</h1>
        <p className="mt-3 max-w-2xl text-lg text-slate-700 dark:text-slate-300">{product.tagline}</p>
        <p className="mt-4 max-w-3xl text-slate-600 dark:text-slate-400">{product.description}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            to="/contact"
            className="cursor-pointer rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-violet-100"
          >
            {product.cta}
          </Link>
          <Link to="/pricing" className="cursor-pointer rounded-xl border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-800 transition hover:border-violet-400 dark:border-slate-600 dark:text-slate-100">
            View pricing bands
          </Link>
        </div>
      </header>

      <section className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
          <h2 className="font-semibold text-slate-900 dark:text-white">Outcomes</h2>
          <ul className="mt-4 space-y-3">
            {product.outcomes.map((o) => (
              <li key={o} className="flex gap-2 text-sm text-slate-600 dark:text-slate-300">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" aria-hidden />
                {o}
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
          <h2 className="font-semibold text-slate-900 dark:text-white">Typical stack touches</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {product.stack.map((s) => (
              <li key={s} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                {s}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-sm text-slate-600 dark:text-slate-400">
            Need a co-branded one-pager for sales? Pair this product with a dedicated{' '}
            <Link to="/case-studies" className="font-medium text-violet-600 hover:underline dark:text-violet-300">
              case study
            </Link>{' '}
            route and a{' '}
            <Link to="/platforms/openai" className="font-medium text-violet-600 hover:underline dark:text-violet-300">
              platform note
            </Link>
            .
          </p>
        </div>
      </section>
    </article>
  )
}
