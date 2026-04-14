import { MapPin, Clock } from 'lucide-react'
import { Link } from 'react-router-dom'

const roles = [
  {
    title: 'Senior Agent Engineer',
    location: 'Remote (EU/US overlap)',
    type: 'Full-time',
    blurb: 'Own tool schemas, retrieval pipelines, and eval harnesses for customer agents.',
  },
  {
    title: 'Forward Deployed Architect',
    location: 'Hybrid — NYC / London',
    type: 'Full-time',
    blurb: 'Embed with clients, translate workflows into agent graphs, and train operators.',
  },
  {
    title: 'Applied Research (Evals)',
    location: 'Remote',
    type: 'Full-time',
    blurb: 'Design benchmarks, judge models, and harden safety/regression suites.',
  },
]

export function CareersPage() {
  return (
    <div className="space-y-10">
      <header>
        <h1 className="font-[family-name:var(--font-display)] text-4xl font-semibold text-slate-900 dark:text-white">Careers</h1>
        <p className="mt-3 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
          Demo listings—replace with your ATS links (Greenhouse, Lever, Ashby). A visible careers page signals you ship production systems, not only slides.
        </p>
      </header>
      <ul className="space-y-4">
        {roles.map((r) => (
          <li key={r.title} className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-slate-900 dark:text-white">{r.title}</h2>
                <div className="mt-2 flex flex-wrap gap-3 text-xs font-medium text-slate-500">
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5" aria-hidden />
                    {r.location}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" aria-hidden />
                    {r.type}
                  </span>
                </div>
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{r.blurb}</p>
              </div>
              <a
                href="mailto:careers@nexusagents.example?subject=Application"
                className="shrink-0 cursor-pointer rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-violet-100"
              >
                Apply
              </a>
            </div>
          </li>
        ))}
      </ul>
      <p className="text-sm text-slate-600 dark:text-slate-400">
        No fit?{' '}
        <Link to="/contact" className="font-semibold text-violet-600 hover:underline dark:text-violet-300">
          Send a general pitch
        </Link>
        .
      </p>
    </div>
  )
}
