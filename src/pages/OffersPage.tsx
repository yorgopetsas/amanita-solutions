import { CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { icpProfiles, productizedOffers } from '../data/offers'

export function OffersPage() {
  return (
    <div className="space-y-12">
      <header>
        <p className="text-xs font-semibold uppercase tracking-wide text-violet-600 dark:text-violet-300">Pre-launch core offers</p>
        <h1 className="mt-2 font-[family-name:var(--font-display)] text-4xl font-semibold text-slate-900 dark:text-white">Productized service ladder</h1>
        <p className="mt-3 max-w-3xl text-lg text-slate-600 dark:text-slate-300">
          Structured for a hybrid launch: one discovery entry point, one build package, and one monthly operations retainer.
        </p>
      </header>

      <section className="grid gap-5 md:grid-cols-2">
        {icpProfiles.map((icp) => (
          <article key={icp.id} className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-slate-900 dark:text-white">{icp.title}</h2>
            <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-slate-500">Main pains</p>
            <ul className="mt-2 space-y-2 text-sm text-slate-600 dark:text-slate-300">
              {icp.pains.map((p) => (
                <li key={p}>• {p}</li>
              ))}
            </ul>
            <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-slate-500">Expected outcomes</p>
            <ul className="mt-2 space-y-2 text-sm text-emerald-700 dark:text-emerald-300">
              {icp.outcomes.map((o) => (
                <li key={o}>• {o}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        {productizedOffers.map((offer) => (
          <article key={offer.slug} className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
            <h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-slate-900 dark:text-white">{offer.name}</h3>
            <p className="mt-2 text-sm text-violet-700 dark:text-violet-300">{offer.fit}</p>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{offer.summary}</p>
            <div className="mt-4 rounded-xl bg-slate-50 p-3 text-sm dark:bg-slate-800/60">
              <p className="font-semibold text-slate-800 dark:text-slate-100">Timeline: {offer.timeline}</p>
              <p className="text-slate-600 dark:text-slate-300">Investment: {offer.priceBand}</p>
            </div>
            <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-slate-500">Deliverables</p>
            <ul className="mt-2 space-y-2 text-sm text-slate-600 dark:text-slate-300">
              {offer.deliverables.map((d) => (
                <li key={d} className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" aria-hidden />
                  {d}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-slate-500">Success metrics</p>
            <ul className="mt-2 space-y-1 text-sm text-slate-600 dark:text-slate-300">
              {offer.successMetrics.map((m) => (
                <li key={m}>• {m}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="rounded-2xl border border-violet-200 bg-violet-50/70 p-6 dark:border-violet-900/50 dark:bg-violet-950/30">
        <h2 className="font-semibold text-slate-900 dark:text-violet-100">Next conversion step</h2>
        <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
          Use Discovery Sprint as the default call-to-action in early outreach, then graduate qualified leads into MVP Build.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link to="/pricing" className="cursor-pointer rounded-xl bg-violet-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-violet-500">
            View pricing page
          </Link>
          <Link to="/contact" className="cursor-pointer rounded-xl border border-violet-300 px-4 py-2 text-sm font-semibold text-violet-800 transition hover:border-violet-500 dark:text-violet-100">
            Book discovery call
          </Link>
        </div>
      </section>
    </div>
  )
}
