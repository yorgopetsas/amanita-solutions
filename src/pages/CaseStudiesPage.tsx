import { Link } from 'react-router-dom'

const cases = [
  { slug: 'support-triage', title: 'Support triage with human refunds gate', kpi: 'CSAT +12 pts' },
  { slug: 'research-copilot', title: 'Research copilot on private filings', kpi: '40h/mo saved' },
  { slug: 'sales-outreach', title: 'Prospector agent with CRM hygiene', kpi: '3× qualified meetings' },
]

export function CaseStudiesPage() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="font-[family-name:var(--font-display)] text-4xl font-semibold text-slate-900 dark:text-white">Case studies</h1>
        <p className="mt-3 text-slate-600 dark:text-slate-300">Placeholder routes you can duplicate into long-form stories + PDF one-pagers.</p>
      </header>
      <ul className="space-y-4">
        {cases.map((c) => (
          <li key={c.slug}>
            <Link
              to={`/case-studies/${c.slug}`}
              className="block cursor-pointer rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-violet-300 dark:border-slate-800 dark:bg-slate-900"
            >
              <span className="font-semibold text-slate-900 dark:text-white">{c.title}</span>
              <span className="mt-1 block text-sm text-emerald-600 dark:text-emerald-400">{c.kpi}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
