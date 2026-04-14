import { Link } from 'react-router-dom'

export function ProofCaseSupportPage() {
  return (
    <article className="space-y-8">
      <Link to="/proof-kit" className="text-sm font-medium text-violet-600 hover:underline dark:text-violet-300">
        ← Back to proof kit
      </Link>

      <header className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-8 dark:border-slate-800 dark:from-slate-900 dark:to-slate-950">
        <p className="text-xs font-semibold uppercase tracking-wide text-violet-600 dark:text-violet-300">Case-style proof (sample)</p>
        <h1 className="mt-2 font-[family-name:var(--font-display)] text-4xl font-semibold text-slate-900 dark:text-white">Support triage with human refunds gate</h1>
        <p className="mt-3 text-slate-600 dark:text-slate-300">Demonstrates how an agent can resolve repetitive tickets while escalating risky refund decisions to a human queue.</p>
      </header>

      <section className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
          <p className="text-xs uppercase tracking-wide text-slate-500">Context</p>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">2,100 tickets/month, 12-minute average handling time, inconsistent macros and long first response delays.</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
          <p className="text-xs uppercase tracking-wide text-slate-500">Architecture</p>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">Retrieval from KB + ticket history, tool call into helpdesk API, confidence scoring, and human escalation for refund intents.</p>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
          <p className="text-xs uppercase tracking-wide text-slate-500">Outcome (pilot)</p>
          <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">41% routine deflection, -27% first response time, and clearer audit trail for policy-sensitive actions.</p>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
        <h2 className="font-semibold text-slate-900 dark:text-white">Implementation notes</h2>
        <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
          <li>• Week 1: discovery, taxonomy cleanup, and escalation policy definition.</li>
          <li>• Week 2: retrieval and triage intent classification baseline.</li>
          <li>• Week 3: tool-call hardening, confidence thresholds, and shadow mode.</li>
          <li>• Week 4: production launch with daily eval review and rollback drills.</li>
        </ul>
      </section>

      <section className="rounded-2xl border border-violet-200 bg-violet-50/70 p-6 dark:border-violet-900/40 dark:bg-violet-950/30">
        <h2 className="font-semibold text-slate-900 dark:text-violet-100">Next best step</h2>
        <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">Package this as your first reusable one-pager and link it directly in outbound messages for prospects with support operations pain.</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link to="/offers" className="cursor-pointer rounded-xl bg-violet-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-violet-500">
            See offer ladder
          </Link>
          <Link to="/contact" className="cursor-pointer rounded-xl border border-violet-300 px-4 py-2 text-sm font-semibold text-violet-900 dark:text-violet-100">
            Book discovery call
          </Link>
        </div>
      </section>
    </article>
  )
}
