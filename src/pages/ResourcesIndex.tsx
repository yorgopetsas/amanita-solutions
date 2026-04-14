import { BookOpen, FileStack, GraduationCap } from 'lucide-react'
import { Link } from 'react-router-dom'

const guides = [
  {
    to: '/resources/rag-checklist',
    title: 'RAG readiness checklist',
    desc: 'Chunking, rerank, citations, and eval gates before you promise grounded answers.',
    icon: FileStack,
  },
  {
    to: '/resources/eval-playbook',
    title: 'Agent eval playbook',
    desc: 'Regression sets, LLM-as-judge guardrails, and human rubrics that scale.',
    icon: GraduationCap,
  },
  {
    to: '/resources/glossary',
    title: 'Agents glossary',
    desc: 'Shared language for memory, tools, planning, and multi-agent patterns.',
    icon: BookOpen,
  },
  {
    to: '/proof-kit',
    title: 'Proof kit',
    desc: 'Demo recording script + case-page template for pre-launch credibility.',
    icon: FileStack,
  },
  {
    to: '/prelaunch/content-cadence',
    title: 'Content cadence',
    desc: '8-week posting plan with two posts per week and reusable templates.',
    icon: GraduationCap,
  },
  {
    to: '/prelaunch/outbound-playbook',
    title: 'Outbound playbook',
    desc: 'Weekly outreach loop, templates, and KPI tracker columns.',
    icon: BookOpen,
  },
]

export function ResourcesIndex() {
  return (
    <div className="space-y-10">
      <header>
        <h1 className="font-[family-name:var(--font-display)] text-4xl font-semibold text-slate-900 dark:text-white">Resources</h1>
        <p className="mt-3 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
          Guides and glossary pages you can later back with MDX or a CMS. Newsletter and downloadable templates live under{' '}
          <Link to="/newsletter" className="font-medium text-violet-600 hover:underline dark:text-violet-300">
            Newsletter &amp; tools
          </Link>
          .
        </p>
      </header>
      <ul className="grid gap-5 md:grid-cols-3">
        {guides.map((g) => (
          <li key={g.to}>
            <Link
              to={g.to}
              className="flex h-full cursor-pointer flex-col rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-violet-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-violet-500/50"
            >
              <g.icon className="h-8 w-8 text-violet-500" aria-hidden />
              <h2 className="mt-4 font-[family-name:var(--font-display)] text-lg font-semibold text-slate-900 dark:text-white">{g.title}</h2>
              <p className="mt-2 flex-1 text-sm text-slate-600 dark:text-slate-400">{g.desc}</p>
              <span className="mt-4 text-sm font-semibold text-violet-600 dark:text-violet-300">Open guide →</span>
            </Link>
          </li>
        ))}
      </ul>
      <p className="text-sm text-slate-600 dark:text-slate-400">
        Blog route idea: mirror top posts here as cards linking to <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">/blog/slug</code> when you add content.
      </p>
    </div>
  )
}
