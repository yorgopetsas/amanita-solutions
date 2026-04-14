import { Link, Navigate, useParams } from 'react-router-dom'
import { useI18n } from '../i18n/I18nProvider'

const titles: Record<string, string> = {
  'support-triage': 'Support triage with human refunds gate',
  'research-copilot': 'Research copilot on private filings',
  'sales-outreach': 'Prospector agent with CRM hygiene',
  'support-triage-proof': 'Support triage proof (pre-launch sample)',
}

const bodies: Record<string, string> = {
  'support-triage':
    'Workflow: classify incoming tickets, retrieve known fixes, draft response, and escalate refund-intent cases. Pilot result: lower first response time and stronger auditability for policy-sensitive paths.',
  'research-copilot':
    'Workflow: semantic retrieval over filings and internal notes, citation rendering, and analyst handoff. Pilot result: reduced repetitive research prep hours and faster briefing cycles.',
  'sales-outreach':
    'Workflow: account research, sequence drafting, CRM logging, and reply triage with human approval for final send. Pilot result: more qualified meetings with cleaner CRM hygiene.',
  'support-triage-proof':
    'Use this as your first public proof asset: 60-90 second demo recording, one architecture panel, and one KPI delta. Keep it concise and concrete.',
}

export function CaseStudyDetail() {
  const { slug } = useParams()
  const { locale } = useI18n()
  const title = slug ? titles[slug] : undefined
  if (!title) return <Navigate to="/case-studies" replace />

  const copy = {
    en: {
      all: '← All case studies',
      tipA: 'Tip: pair this page with the',
      tipLink: 'proof kit',
      tipB: 'and embed a short demo recording.',
    },
    es: {
      all: '← Todos los casos de estudio',
      tipA: 'Tip: combina esta página con el',
      tipLink: 'proof kit',
      tipB: 'e incrusta una demo corta.',
    },
    ca: {
      all: "← Tots els casos d'estudi",
      tipA: 'Tip: combina aquesta pàgina amb el',
      tipLink: 'proof kit',
      tipB: 'i incrusta una demo curta.',
    },
  }[locale]

  return (
    <article className="space-y-6">
      <Link to="/case-studies" className="text-sm font-medium text-violet-600 hover:underline dark:text-violet-300">
        {copy.all}
      </Link>
      <h1 className="font-[family-name:var(--font-display)] text-3xl font-semibold text-slate-900 dark:text-white">{title}</h1>
      <p className="text-slate-600 dark:text-slate-300">
        {slug ? bodies[slug] : ''}
      </p>
      <div className="rounded-xl border border-slate-200 bg-white p-4 text-sm text-slate-600 dark:border-slate-800 dark:bg-slate-900 dark:text-slate-300">
        {copy.tipA} <Link to="/proof-kit" className="font-medium text-violet-600 hover:underline dark:text-violet-300">{copy.tipLink}</Link> {copy.tipB}
      </div>
    </article>
  )
}
