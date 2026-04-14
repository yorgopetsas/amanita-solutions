import { Link } from 'react-router-dom'

const sections = [
  {
    title: 'Golden sets',
    bullets: ['Curate 200–2000 tasks per workflow', 'Stratify easy/medium/hard', 'Version datasets like code'],
  },
  {
    title: 'Automatic metrics',
    bullets: ['Task success (binary or graded)', 'Tool-call validity', 'Groundedness where citations exist', 'Latency & cost per success'],
  },
  {
    title: 'LLM-as-judge (carefully)',
    bullets: ['Use rubrics, not open-ended scores', 'Calibrate against human labels', 'Watch for judge drift when models change'],
  },
  {
    title: 'Release gates',
    bullets: ['CI job on golden set', 'Shadow mode for risky changes', 'Rollback + feature flags'],
  },
]

export function EvalPlaybookPage() {
  return (
    <article className="space-y-8">
      <Link to="/resources" className="text-sm font-medium text-violet-600 hover:underline dark:text-violet-300">
        ← Resources
      </Link>
      <header>
        <h1 className="font-[family-name:var(--font-display)] text-3xl font-semibold text-slate-900 dark:text-white">Agent eval playbook</h1>
        <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
          How we think about eval discipline for agent fleets—portable across OpenAI, Anthropic, Azure, and open-weight stacks.
        </p>
      </header>
      <div className="space-y-6">
        {sections.map((s) => (
          <section key={s.title} className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
            <h2 className="font-semibold text-slate-900 dark:text-white">{s.title}</h2>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-slate-600 dark:text-slate-300">
              {s.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
      <p className="text-sm text-slate-600 dark:text-slate-400">
        Product tie-in:{' '}
        <Link to="/products/governance" className="font-medium text-violet-600 hover:underline dark:text-violet-300">
          Sentinel Governance
        </Link>
        .
      </p>
    </article>
  )
}
