import { Link } from 'react-router-dom'

const shotList = [
  'Open on problem context and KPI baseline (15s)',
  'Show current workflow pain in one screenshot (10s)',
  'Run interactive demo from /demo with narration (30s)',
  'Highlight one measurable outcome (15s)',
  'Close with CTA: discovery call + offer fit (10s)',
]

const recordingChecklist = [
  'Script in plain language (no model jargon first minute)',
  '1080p recording, clean browser tabs, zoom at 110-125%',
  'Visible cursor and click highlights',
  'One metric callout card prepared in advance',
  'Upload to Loom/YouTube unlisted and add to case page',
]

export function ProofKitPage() {
  return (
    <div className="space-y-10">
      <header>
        <p className="text-xs font-semibold uppercase tracking-wide text-violet-600 dark:text-violet-300">Proof assets</p>
        <h1 className="mt-2 font-[family-name:var(--font-display)] text-4xl font-semibold text-slate-900 dark:text-white">Demo recording + case proof kit</h1>
        <p className="mt-3 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
          Use this package to generate your first proof artifacts: one short demo video and one case-style page you can share privately before launch.
        </p>
      </header>

      <section className="grid gap-6 lg:grid-cols-2">
        <article className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
          <h2 className="font-semibold text-slate-900 dark:text-white">60-90 second demo script</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-slate-600 dark:text-slate-300">
            {shotList.map((shot) => (
              <li key={shot}>{shot}</li>
            ))}
          </ol>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link to="/demo" className="cursor-pointer rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white dark:bg-white dark:text-slate-900">
              Open live demo
            </Link>
            <Link to="/contact" className="cursor-pointer rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-900 dark:border-slate-600 dark:text-slate-100">
              Add booking CTA
            </Link>
          </div>
        </article>

        <article className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
          <h2 className="font-semibold text-slate-900 dark:text-white">Recording checklist</h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
            {recordingChecklist.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-slate-500">Tip: first proof only needs to be “clear and credible,” not cinematic.</p>
        </article>
      </section>

      <section className="rounded-2xl border border-violet-200 bg-violet-50/70 p-6 dark:border-violet-900/40 dark:bg-violet-950/30">
        <h2 className="font-semibold text-slate-900 dark:text-violet-100">Case-style proof page template</h2>
        <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">Duplicate this structure: context to architecture to implementation to outcomes to next step.</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link to="/proof/case-support-triage" className="cursor-pointer rounded-xl bg-violet-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-violet-500">
            Open sample case page
          </Link>
          <Link to="/case-studies" className="cursor-pointer rounded-xl border border-violet-300 px-4 py-2 text-sm font-semibold text-violet-900 dark:text-violet-100">
            View all case routes
          </Link>
        </div>
      </section>
    </div>
  )
}
