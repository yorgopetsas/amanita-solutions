import { Link } from 'react-router-dom'

const messageTemplates = [
  {
    title: 'Warm intro message',
    body:
      'Hey {Name} — noticed your team handles {workflow}. We help teams reduce repetitive work using supervised AI agents (with human fallback and audit trails). If useful, I can share a 2-minute teardown of a similar flow and what KPI moved first.',
  },
  {
    title: 'Follow-up after no reply',
    body:
      'Quick follow-up in case this is relevant: we usually start with a 10-day discovery sprint to map one high-impact workflow, risk boundaries, and ROI assumptions before any build. Happy to send the outline.',
  },
  {
    title: 'Post-call recap',
    body:
      'Great speaking today. Based on your goals, I suggest: 1) Discovery Sprint (10 days), 2) MVP build for {workflow}, 3) monthly ops support. I attached a draft timeline and first KPI targets.',
  },
]

const trackerColumns = ['Prospect', 'Role', 'Company', 'Workflow pain', 'Date contacted', 'Status', 'Next action', 'Offer fit']

export function OutboundPlaybookPage() {
  return (
    <div className="space-y-10">
      <header>
        <p className="text-xs font-semibold uppercase tracking-wide text-violet-600 dark:text-violet-300">Pre-launch outreach</p>
        <h1 className="mt-2 font-[family-name:var(--font-display)] text-4xl font-semibold text-slate-900 dark:text-white">30 prospects/week outbound playbook</h1>
        <p className="mt-3 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
          Keep outreach lightweight, personalized, and measurable. Goal is discovery calls, not mass messaging.
        </p>
      </header>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
        <h2 className="font-semibold text-slate-900 dark:text-white">Weekly operating loop</h2>
        <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
          <li>• Monday: build target list of 30 prospects from your two ICPs.</li>
          <li>• Tuesday-Wednesday: send 10 personalized messages/day.</li>
          <li>• Thursday: follow-ups + call booking.</li>
          <li>• Friday: update pipeline metrics and refine message angles.</li>
        </ul>
      </section>

      <section className="grid gap-5 md:grid-cols-3">
        {messageTemplates.map((template) => (
          <article key={template.title} className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
            <h3 className="font-semibold text-slate-900 dark:text-white">{template.title}</h3>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{template.body}</p>
          </article>
        ))}
      </section>

      <section className="rounded-2xl border border-violet-200 bg-violet-50/70 p-6 dark:border-violet-900/40 dark:bg-violet-950/30">
        <h2 className="font-semibold text-slate-900 dark:text-violet-100">Tracker columns (copy to Sheets/Notion)</h2>
        <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">Use these exact columns to keep your weekly loop simple and reviewable.</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {trackerColumns.map((col) => (
            <span key={col} className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700 dark:bg-slate-900 dark:text-slate-200">
              {col}
            </span>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
        <h2 className="font-semibold text-slate-900 dark:text-white">Weekly KPI targets</h2>
        <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
          <li>• 30 personalized outreaches sent</li>
          <li>• 5 positive replies</li>
          <li>• 2-3 discovery calls booked</li>
          <li>• 1 proposal drafted from calls</li>
        </ul>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link to="/offers" className="cursor-pointer rounded-xl bg-violet-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-violet-500">
            Link prospects to offers
          </Link>
          <Link to="/proof-kit" className="cursor-pointer rounded-xl border border-violet-300 px-4 py-2 text-sm font-semibold text-violet-900 dark:text-violet-100">
            Share proof assets
          </Link>
        </div>
      </section>
    </div>
  )
}
