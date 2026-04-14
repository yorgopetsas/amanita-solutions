import { Check, Minus, X } from 'lucide-react'
import { Link } from 'react-router-dom'

const rows = [
  { label: 'Time to first production workflow', inHouse: 'High (hire + ramp)', agency: 'Medium (scoped)', diy: 'Variable (tooling debt)' },
  { label: 'Eval & regression discipline', inHouse: 'You build', agency: 'Packaged', diy: 'Often missing' },
  { label: 'Integration depth (CRM/ITSM)', inHouse: 'Strong if staffed', agency: 'Playbooks', diy: 'Fragmented' },
  { label: 'Vendor diversification', inHouse: 'Your strategy', agency: 'Neutral routing', diy: 'You orchestrate' },
  { label: 'Ongoing operations', inHouse: 'Your on-call', agency: 'Shared / managed', diy: 'You own' },
]

function Cell({ value }: { value: 'yes' | 'partial' | 'no' }) {
  if (value === 'yes') return <Check className="mx-auto h-5 w-5 text-emerald-500" aria-label="Strong" />
  if (value === 'partial') return <Minus className="mx-auto h-5 w-5 text-amber-500" aria-label="Mixed" />
  return <X className="mx-auto h-5 w-5 text-slate-300 dark:text-slate-600" aria-label="Limited" />
}

const matrix: { label: string; inHouse: 'yes' | 'partial' | 'no'; agency: 'yes' | 'partial' | 'no'; diy: 'yes' | 'partial' | 'no' }[] = [
  { label: 'Dedicated agent expertise', inHouse: 'partial', agency: 'yes', diy: 'no' },
  { label: 'Faster initial delivery', inHouse: 'no', agency: 'yes', diy: 'partial' },
  { label: 'Lowest long-run cost (at scale)', inHouse: 'yes', agency: 'partial', diy: 'partial' },
  { label: 'Neutral multi-vendor advice', inHouse: 'partial', agency: 'yes', diy: 'yes' },
]

export function ComparePage() {
  return (
    <div className="space-y-10">
      <header>
        <h1 className="font-[family-name:var(--font-display)] text-4xl font-semibold text-slate-900 dark:text-white">Compare approaches</h1>
        <p className="mt-3 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
          In-house build vs. agency partner vs. DIY tool stacks. Icons are directional—your actual trade-offs depend on team size and risk tolerance.
        </p>
      </header>

      <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50 text-xs uppercase tracking-wide text-slate-500 dark:border-slate-800 dark:bg-slate-800/50">
              <th className="px-4 py-3 font-semibold">Dimension</th>
              <th className="px-4 py-3 font-semibold">In-house</th>
              <th className="px-4 py-3 font-semibold">Agency (Nexus-style)</th>
              <th className="px-4 py-3 font-semibold">DIY SaaS glue</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.label} className="border-b border-slate-100 dark:border-slate-800">
                <td className="px-4 py-3 font-medium text-slate-800 dark:text-slate-200">{r.label}</td>
                <td className="px-4 py-3 text-slate-600 dark:text-slate-400">{r.inHouse}</td>
                <td className="px-4 py-3 text-slate-600 dark:text-slate-400">{r.agency}</td>
                <td className="px-4 py-3 text-slate-600 dark:text-slate-400">{r.diy}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section>
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white">At-a-glance signals</h2>
        <div className="mt-4 overflow-x-auto rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
          <table className="w-full min-w-[520px] text-sm">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-800">
                <th className="px-4 py-3 text-left font-semibold text-slate-700 dark:text-slate-200">Capability</th>
                <th className="px-4 py-3 text-center font-semibold text-slate-700 dark:text-slate-200">In-house</th>
                <th className="px-4 py-3 text-center font-semibold text-slate-700 dark:text-slate-200">Agency</th>
                <th className="px-4 py-3 text-center font-semibold text-slate-700 dark:text-slate-200">DIY</th>
              </tr>
            </thead>
            <tbody>
              {matrix.map((m) => (
                <tr key={m.label} className="border-b border-slate-100 dark:border-slate-800">
                  <td className="px-4 py-3 font-medium text-slate-800 dark:text-slate-200">{m.label}</td>
                  <td className="px-4 py-3">
                    <Cell value={m.inHouse === 'yes' ? 'yes' : m.inHouse === 'partial' ? 'partial' : 'no'} />
                  </td>
                  <td className="px-4 py-3">
                    <Cell value={m.agency === 'yes' ? 'yes' : m.agency === 'partial' ? 'partial' : 'no'} />
                  </td>
                  <td className="px-4 py-3">
                    <Cell value={m.diy === 'yes' ? 'yes' : m.diy === 'partial' ? 'partial' : 'no'} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-slate-500">Legend: check = strong, dash = mixed, X = limited.</p>
      </section>

      <p className="text-sm text-slate-600 dark:text-slate-400">
        Ready to talk scope?{' '}
        <Link to="/contact" className="font-semibold text-violet-600 hover:underline dark:text-violet-300">
          Book a call
        </Link>{' '}
        or read <Link to="/faq" className="font-semibold text-violet-600 hover:underline dark:text-violet-300">FAQ</Link>.
      </p>
    </div>
  )
}
