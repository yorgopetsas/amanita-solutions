import { Link } from 'react-router-dom'

const calendar = [
  { week: 'Week 1', insight: 'Post: 3 mistakes when teams launch agents too early', teardown: 'Teardown: support triage workflow map' },
  { week: 'Week 2', insight: 'Post: How to pick your first AI-agent KPI', teardown: 'Teardown: before/after first response timeline' },
  { week: 'Week 3', insight: 'Post: Retrieval patterns non-engineers should know', teardown: 'Teardown: RAG checklist applied to one domain' },
  { week: 'Week 4', insight: 'Post: Tool-calling safety in plain language', teardown: 'Teardown: confidence threshold design' },
  { week: 'Week 5', insight: 'Post: Why evals matter more than model hype', teardown: 'Teardown: mini regression dashboard walkthrough' },
  { week: 'Week 6', insight: 'Post: Human handoff patterns that prevent incidents', teardown: 'Teardown: escalation UX for operators' },
  { week: 'Week 7', insight: 'Post: How to scope agent retainers transparently', teardown: 'Teardown: monthly ops report format' },
  { week: 'Week 8', insight: 'Post: What we learned from 8 weeks of pilot delivery', teardown: 'Teardown: case summary with metrics' },
]

export function ContentCadencePage() {
  return (
    <div className="space-y-10">
      <header>
        <p className="text-xs font-semibold uppercase tracking-wide text-violet-600 dark:text-violet-300">Pre-launch publishing</p>
        <h1 className="mt-2 font-[family-name:var(--font-display)] text-4xl font-semibold text-slate-900 dark:text-white">2-posts-per-week content cadence</h1>
        <p className="mt-3 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
          One insight post and one practical teardown every week. This creates authority without requiring daily posting.
        </p>
      </header>

      <section className="overflow-x-auto rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
        <table className="w-full min-w-[700px] text-sm">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50 text-left text-xs uppercase tracking-wide text-slate-500 dark:border-slate-800 dark:bg-slate-800/40">
              <th className="px-4 py-3 font-semibold">Week</th>
              <th className="px-4 py-3 font-semibold">Insight post</th>
              <th className="px-4 py-3 font-semibold">Teardown post</th>
            </tr>
          </thead>
          <tbody>
            {calendar.map((row) => (
              <tr key={row.week} className="border-b border-slate-100 dark:border-slate-800">
                <td className="px-4 py-3 font-medium text-slate-900 dark:text-white">{row.week}</td>
                <td className="px-4 py-3 text-slate-600 dark:text-slate-300">{row.insight}</td>
                <td className="px-4 py-3 text-slate-600 dark:text-slate-300">{row.teardown}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="grid gap-6 lg:grid-cols-2">
        <article className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
          <h2 className="font-semibold text-slate-900 dark:text-white">Post template: Insight</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-slate-600 dark:text-slate-300">
            <li>Hook with one concrete pain metric.</li>
            <li>Share 2-3 operating principles.</li>
            <li>Add one “do this next” action.</li>
            <li>CTA: link to `/offers` or `/contact`.</li>
          </ol>
        </article>
        <article className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
          <h2 className="font-semibold text-slate-900 dark:text-white">Post template: Teardown</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-slate-600 dark:text-slate-300">
            <li>Problem setup (one paragraph).</li>
            <li>Screenshot / architecture snippet.</li>
            <li>Before vs after KPI comparison.</li>
            <li>CTA: “Want this mapped to your workflow?”</li>
          </ol>
        </article>
      </section>

      <p className="text-sm text-slate-600 dark:text-slate-400">
        For channel execution, publish long-form on LinkedIn and repurpose a shorter version for X/community channels.
        Tie each post back to your offer page and one proof asset.
      </p>

      <div className="flex flex-wrap gap-3">
        <Link to="/proof-kit" className="cursor-pointer rounded-xl bg-violet-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-violet-500">
          Open proof kit
        </Link>
        <Link to="/offers" className="cursor-pointer rounded-xl border border-violet-300 px-4 py-2 text-sm font-semibold text-violet-900 dark:text-violet-100">
          Open offers
        </Link>
      </div>
    </div>
  )
}
