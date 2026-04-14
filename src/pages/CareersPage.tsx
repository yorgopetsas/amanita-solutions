import { MapPin, Clock } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/I18nProvider'

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
  const { locale } = useI18n()
  const copy = {
    en: {
      title: 'Careers',
      body: 'Demo listings—replace with your ATS links (Greenhouse, Lever, Ashby). A visible careers page signals you ship production systems, not only slides.',
      apply: 'Apply',
      noFit: 'No fit?',
      pitch: 'Send a general pitch',
    },
    es: {
      title: 'Carreras',
      body: 'Vacantes demo; sustitúyelas con enlaces de tu ATS (Greenhouse, Lever, Ashby). Una página de carreras visible señala que entregas sistemas reales en producción.',
      apply: 'Aplicar',
      noFit: '¿No encajas en una vacante?',
      pitch: 'Enviar candidatura general',
    },
    ca: {
      title: 'Carreres',
      body: "Vacants demo; substitueix-les amb enllaços del teu ATS (Greenhouse, Lever, Ashby). Una pàgina de carreres visible indica que lliures sistemes reals en producció.",
      apply: 'Aplicar',
      noFit: 'No encaixes en cap vacant?',
      pitch: 'Enviar candidatura general',
    },
  }[locale]

  const localizedRoles =
    locale === 'en'
      ? roles
      : roles.map((r) => ({
          ...r,
          blurb: locale === 'es' ? `Rol clave: ${r.blurb}` : `Rol clau: ${r.blurb}`,
        }))
  return (
    <div className="space-y-10">
      <header>
        <h1 className="font-[family-name:var(--font-display)] text-4xl font-semibold text-slate-900 dark:text-white">{copy.title}</h1>
        <p className="mt-3 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
          {copy.body}
        </p>
      </header>
      <ul className="space-y-4">
        {localizedRoles.map((r) => (
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
                href="mailto:careers@amanita.barcelona?subject=Application"
                className="shrink-0 cursor-pointer rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-violet-100"
              >
                {copy.apply}
              </a>
            </div>
          </li>
        ))}
      </ul>
      <p className="text-sm text-slate-600 dark:text-slate-400">
        {copy.noFit}{' '}
        <Link to="/contact" className="font-semibold text-violet-600 hover:underline dark:text-violet-300">
          {copy.pitch}
        </Link>
        .
      </p>
    </div>
  )
}
