import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/I18nProvider'

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
  const { locale } = useI18n()
  const copy = {
    en: {
      badge: 'Pre-launch outreach',
      title: '30 prospects/week outbound playbook',
      body: 'Keep outreach lightweight, personalized, and measurable. Goal is discovery calls, not mass messaging.',
      loop: 'Weekly operating loop',
      tracker: 'Tracker columns (copy to Sheets/Notion)',
      trackerBody: 'Use these exact columns to keep your weekly loop simple and reviewable.',
      kpi: 'Weekly KPI targets',
      offers: 'Link prospects to offers',
      proof: 'Share proof assets',
    },
    es: {
      badge: 'Outreach pre-lanzamiento',
      title: 'Playbook outbound de 30 prospectos/semana',
      body: 'Mantén el outreach ligero, personalizado y medible. El objetivo son discovery calls, no mensajería masiva.',
      loop: 'Loop operativo semanal',
      tracker: 'Columnas del tracker (copiar a Sheets/Notion)',
      trackerBody: 'Usa estas columnas exactas para mantener el loop semanal simple y revisable.',
      kpi: 'Objetivos KPI semanales',
      offers: 'Vincular prospectos a ofertas',
      proof: 'Compartir activos de prueba',
    },
    ca: {
      badge: 'Outreach prellançament',
      title: "Playbook outbound de 30 prospects/setmana",
      body: "Mantén l'outreach lleuger, personalitzat i mesurable. L'objectiu són discovery calls, no missatgeria massiva.",
      loop: 'Loop operatiu setmanal',
      tracker: 'Columnes del tracker (copiar a Sheets/Notion)',
      trackerBody: 'Fes servir aquestes columnes exactes per mantenir el loop setmanal simple i revisable.',
      kpi: 'Objectius KPI setmanals',
      offers: 'Enllaçar prospects a ofertes',
      proof: 'Compartir actius de prova',
    },
  }[locale]
  return (
    <div className="space-y-10">
      <header>
        <p className="text-xs font-semibold uppercase tracking-wide text-violet-600 dark:text-violet-300">{copy.badge}</p>
        <h1 className="mt-2 font-[family-name:var(--font-display)] text-4xl font-semibold text-slate-900 dark:text-white">{copy.title}</h1>
        <p className="mt-3 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
          {copy.body}
        </p>
      </header>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
        <h2 className="font-semibold text-slate-900 dark:text-white">{copy.loop}</h2>
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
        <h2 className="font-semibold text-slate-900 dark:text-violet-100">{copy.tracker}</h2>
        <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">{copy.trackerBody}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {trackerColumns.map((col) => (
            <span key={col} className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700 dark:bg-slate-900 dark:text-slate-200">
              {col}
            </span>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
        <h2 className="font-semibold text-slate-900 dark:text-white">{copy.kpi}</h2>
        <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
          <li>• 30 personalized outreaches sent</li>
          <li>• 5 positive replies</li>
          <li>• 2-3 discovery calls booked</li>
          <li>• 1 proposal drafted from calls</li>
        </ul>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link to="/offers" className="cursor-pointer rounded-xl bg-violet-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-violet-500">
            {copy.offers}
          </Link>
          <Link to="/proof-kit" className="cursor-pointer rounded-xl border border-violet-300 px-4 py-2 text-sm font-semibold text-violet-900 dark:text-violet-100">
            {copy.proof}
          </Link>
        </div>
      </section>
    </div>
  )
}
