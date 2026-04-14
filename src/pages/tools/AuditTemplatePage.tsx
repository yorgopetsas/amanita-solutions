import { Link } from 'react-router-dom'

const sections = [
  {
    title: '1. Business outcome',
    items: ['Primary KPI (e.g. FRT, resolution rate, meetings booked)', 'Secondary KPIs and guardrails', 'Non-goals (what agents must not do)'],
  },
  {
    title: '2. Workflow map',
    items: ['Trigger sources (webhook, queue, manual)', 'Happy path steps', 'Exception paths + human handoff', 'Irreversible actions list'],
  },
  {
    title: '3. Data & retrieval',
    items: ['Systems of record', 'PII classes present', 'Retention policy', 'Citation requirements'],
  },
  {
    title: '4. Tools & permissions',
    items: ['Tool list + owners', 'Auth model (OAuth, PAT, VPC)', 'Rate limits and idempotency', 'Sandbox vs production'],
  },
  {
    title: '5. Eval & launch',
    items: ['Golden tasks count & difficulty mix', 'CI eval command', 'Shadow mode duration', 'Rollback / kill switch owner'],
  },
]

export function AuditTemplatePage() {
  return (
    <article className="space-y-8">
      <Link to="/newsletter" className="text-sm font-medium text-violet-600 hover:underline dark:text-violet-300">
        ← Newsletter &amp; tools
      </Link>
      <header className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="font-[family-name:var(--font-display)] text-3xl font-semibold text-slate-900 dark:text-white">Agent readiness audit</h1>
          <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
            Printable template for workshops. Use browser print to PDF.
          </p>
        </div>
        <button
          type="button"
          onClick={() => window.print()}
          className="cursor-pointer rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:border-violet-400 print:hidden dark:border-slate-600 dark:text-slate-100"
        >
          Print / Save PDF
        </button>
      </header>

      <div className="space-y-6 print:space-y-4">
        {sections.map((s) => (
          <section key={s.title} className="rounded-2xl border border-slate-200 bg-white p-5 break-inside-avoid dark:border-slate-800 dark:bg-slate-900">
            <h2 className="font-semibold text-slate-900 dark:text-white">{s.title}</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-600 dark:text-slate-300">
              {s.items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
            <div className="mt-4 h-24 rounded-lg border border-dashed border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-800/50" aria-hidden />
          </section>
        ))}
      </div>
    </article>
  )
}
