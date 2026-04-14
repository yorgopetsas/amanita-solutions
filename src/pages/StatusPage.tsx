import { Activity, CheckCircle2, AlertCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/I18nProvider'

const services = [
  { name: 'Agent API (demo)', status: 'operational' as const, detail: 'Synthetic status for marketing site' },
  { name: 'Magic Chat assistant', status: 'operational' as const, detail: 'Client-side demo only' },
  { name: 'Integration webhooks', status: 'degraded' as const, detail: 'Placeholder—show yellow UI state' },
]

const changelog = [
  { date: '2026-04-12', title: 'Added status & changelog routes', body: 'Productized agents should publish incidents here.' },
  { date: '2026-04-10', title: 'Trust strip on home gallery', body: 'Logo row + headline metrics for social proof.' },
  { date: '2026-04-08', title: 'Interactive trace demo', body: 'Looping Motion UI for sales calls.' },
]

function StatusIcon({ status }: { status: 'operational' | 'degraded' }) {
  if (status === 'operational') return <CheckCircle2 className="h-5 w-5 text-emerald-500" aria-hidden />
  return <AlertCircle className="h-5 w-5 text-amber-500" aria-hidden />
}

export function StatusPage() {
  const { locale } = useI18n()
  const copy = {
    en: {
      title: 'Status',
      body: 'Service health and changelog for productized agents or APIs. Replace with statuspage.io or Better Stack embed when you go live.',
      nominal: 'All demo systems nominal',
      services: 'Services',
      changelog: 'Changelog',
      incident: 'Incident comms: link to',
      security: 'Security',
      incidentTail: 'for customer obligations.',
    },
    es: {
      title: 'Estado',
      body: 'Salud de servicio y changelog para agentes productizados o APIs. Reemplaza por statuspage.io o Better Stack al pasar a producción.',
      nominal: 'Todos los sistemas demo nominales',
      services: 'Servicios',
      changelog: 'Changelog',
      incident: 'Comunicaciones de incidentes: enlaza con',
      security: 'Seguridad',
      incidentTail: 'para obligaciones con clientes.',
    },
    ca: {
      title: 'Estat',
      body: 'Salut de servei i changelog per a agents productitzats o APIs. Substitueix-ho per statuspage.io o Better Stack quan passis a producció.',
      nominal: 'Tots els sistemes demo nominals',
      services: 'Serveis',
      changelog: 'Changelog',
      incident: "Comunicacions d'incidents: enllaça amb",
      security: 'Seguretat',
      incidentTail: 'per a obligacions amb clients.',
    },
  }[locale]
  return (
    <div className="space-y-10">
      <header className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="font-[family-name:var(--font-display)] text-4xl font-semibold text-slate-900 dark:text-white">{copy.title}</h1>
          <p className="mt-2 max-w-2xl text-slate-600 dark:text-slate-300">
            {copy.body}
          </p>
        </div>
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-600 dark:border-slate-700 dark:bg-slate-900">
          <Activity className="h-4 w-4 text-emerald-500" aria-hidden />
          {copy.nominal}
        </div>
      </header>

      <section className="rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
        <h2 className="border-b border-slate-200 px-5 py-3 text-sm font-semibold uppercase tracking-wide text-slate-500 dark:border-slate-800">
          {copy.services}
        </h2>
        <ul>
          {services.map((s) => (
            <li key={s.name} className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 px-5 py-4 last:border-0 dark:border-slate-800">
              <div className="flex items-center gap-3">
                <StatusIcon status={s.status} />
                <div>
                  <p className="font-medium text-slate-900 dark:text-white">{s.name}</p>
                  <p className="text-sm text-slate-500">{s.detail}</p>
                </div>
              </div>
              <span className="text-xs font-semibold uppercase text-slate-500">{s.status}</span>
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white">{copy.changelog}</h2>
        <ol className="mt-4 space-y-4">
          {changelog.map((entry) => (
            <li key={entry.title} className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
              <p className="text-xs font-semibold uppercase tracking-wide text-violet-600 dark:text-violet-300">{entry.date}</p>
              <p className="mt-1 font-semibold text-slate-900 dark:text-white">{entry.title}</p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{entry.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <p className="text-sm text-slate-600 dark:text-slate-400">
        {copy.incident} <Link to="/security" className="font-medium text-violet-600 hover:underline dark:text-violet-300">{copy.security}</Link> {copy.incidentTail}
      </p>
    </div>
  )
}
