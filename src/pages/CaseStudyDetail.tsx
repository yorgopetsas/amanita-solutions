import { Link, Navigate, useParams } from 'react-router-dom'

const titles: Record<string, string> = {
  'support-triage': 'Support triage with human refunds gate',
  'research-copilot': 'Research copilot on private filings',
  'sales-outreach': 'Prospector agent with CRM hygiene',
}

export function CaseStudyDetail() {
  const { slug } = useParams()
  const title = slug ? titles[slug] : undefined
  if (!title) return <Navigate to="/case-studies" replace />

  return (
    <article className="space-y-6">
      <Link to="/case-studies" className="text-sm font-medium text-violet-600 hover:underline dark:text-violet-300">
        ← All case studies
      </Link>
      <h1 className="font-[family-name:var(--font-display)] text-3xl font-semibold text-slate-900 dark:text-white">{title}</h1>
      <p className="text-slate-600 dark:text-slate-300">
        Long-form narrative, architecture diagram, and metrics tables would live here. This route exists so you can wire CMS content or MDX later.
      </p>
    </article>
  )
}
