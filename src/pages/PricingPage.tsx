import { Check } from 'lucide-react'
import { Link } from 'react-router-dom'

const tiers = [
  {
    name: 'Launch',
    price: '$18k',
    cadence: 'one-time + $2.5k/mo',
    blurb: 'Single workflow, one primary model route, baseline evals.',
    items: ['Discovery + architecture', 'MVP agent + UI shell', '30-day hypercare'],
  },
  {
    name: 'Scale',
    price: '$48k',
    cadence: 'one-time + $8k/mo',
    blurb: 'Multi-agent with memory + retrieval, CI eval hooks, on-call rotation.',
    items: ['Everything in Launch', 'Orchestration + governance pack', 'Slack/email escalation'],
    featured: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    cadence: 'annual',
    blurb: 'Private networking, multi-tenant controls, bespoke compliance artifacts.',
    items: ['Embedded squad', 'Custom SLAs', 'Security reviews & pen-test support'],
  },
]

export function PricingPage() {
  return (
    <div className="space-y-12">
      <header className="text-center">
        <h1 className="font-[family-name:var(--font-display)] text-4xl font-semibold text-slate-900 dark:text-white">Pricing</h1>
        <p className="mx-auto mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
          Illustrative bands modeled after public AI agency pages (deployment fees + monthly operation). Final scopes follow discovery.
        </p>
      </header>
      <div className="grid gap-6 lg:grid-cols-3">
        {tiers.map((t) => (
          <div
            key={t.name}
            className={`flex flex-col rounded-2xl border p-6 ${
              t.featured
                ? 'border-violet-400 bg-gradient-to-b from-violet-50 to-white shadow-lg dark:border-violet-600 dark:from-violet-950/50 dark:to-slate-900'
                : 'border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900'
            }`}
          >
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-500">{t.name}</p>
            <p className="mt-2 font-[family-name:var(--font-display)] text-3xl font-semibold text-slate-900 dark:text-white">{t.price}</p>
            <p className="text-sm text-slate-500">{t.cadence}</p>
            <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">{t.blurb}</p>
            <ul className="mt-6 flex-1 space-y-2 text-sm">
              {t.items.map((i) => (
                <li key={i} className="flex gap-2 text-slate-700 dark:text-slate-200">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" aria-hidden />
                  {i}
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className={`mt-6 cursor-pointer rounded-xl py-3 text-center text-sm font-semibold transition ${
                t.featured
                  ? 'bg-violet-600 text-white hover:bg-violet-500'
                  : 'border border-slate-300 text-slate-900 hover:border-violet-400 dark:border-slate-600 dark:text-white'
              }`}
            >
              Talk to us
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
