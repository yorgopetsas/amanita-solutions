import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/I18nProvider'

const cases = [
  { slug: 'support-triage', title: 'Support triage with human refunds gate', kpi: 'CSAT +12 pts' },
  { slug: 'research-copilot', title: 'Research copilot on private filings', kpi: '40h/mo saved' },
  { slug: 'sales-outreach', title: 'Prospector agent with CRM hygiene', kpi: '3× qualified meetings' },
  { slug: 'support-triage-proof', title: 'Support triage proof page (pre-launch)', kpi: '60-90s demo + KPI delta' },
]

export function CaseStudiesPage() {
  const { locale } = useI18n()
  const copy = {
    en: {
      title: 'Case studies',
      body: 'Placeholder routes you can duplicate into long-form stories + PDF one-pagers.',
    },
    es: {
      title: 'Casos de estudio',
      body: 'Rutas base que puedes duplicar como historias long-form + one-pagers en PDF.',
    },
    ca: {
      title: "Casos d'estudi",
      body: 'Rutes base que pots duplicar com a històries long-form + one-pagers en PDF.',
    },
  }[locale]

  const localizedCases =
    locale === 'en'
      ? cases
      : locale === 'es'
        ? [
            { ...cases[0], title: 'Triage de soporte con puerta humana para reembolsos', kpi: 'CSAT +12 pts' },
            { ...cases[1], title: 'Copiloto de research sobre documentos privados', kpi: '40h/mes ahorradas' },
            { ...cases[2], title: 'Agente prospector con higiene de CRM', kpi: '3× reuniones cualificadas' },
            { ...cases[3], title: 'Página de prueba de triage de soporte (pre-lanzamiento)', kpi: 'Demo de 60-90s + delta KPI' },
          ]
        : [
            { ...cases[0], title: 'Triage de suport amb porta humana per a reemborsaments', kpi: 'CSAT +12 pts' },
            { ...cases[1], title: 'Copilot de research sobre documents privats', kpi: '40h/mes estalviades' },
            { ...cases[2], title: 'Agent prospector amb higiene de CRM', kpi: '3× reunions qualificades' },
            { ...cases[3], title: 'Pàgina de prova de triatge de suport (prellançament)', kpi: 'Demo de 60-90s + delta KPI' },
          ]
  return (
    <div className="space-y-8">
      <header>
        <h1 className="font-[family-name:var(--font-display)] text-4xl font-semibold text-slate-900 dark:text-white">{copy.title}</h1>
        <p className="mt-3 text-slate-600 dark:text-slate-300">{copy.body}</p>
      </header>
      <ul className="space-y-4">
        {localizedCases.map((c) => (
          <li key={c.slug}>
            <Link
              to={`/case-studies/${c.slug}`}
              className="block cursor-pointer rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-violet-300 dark:border-slate-800 dark:bg-slate-900"
            >
              <span className="font-semibold text-slate-900 dark:text-white">{c.title}</span>
              <span className="mt-1 block text-sm text-emerald-600 dark:text-emerald-400">{c.kpi}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
