import { AlertTriangle, Link2, Sparkles } from 'lucide-react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { getPlatform } from '../data/platforms'
import { useI18n } from '../i18n/I18nProvider'

export function PlatformPage() {
  const { slug } = useParams()
  const platform = slug ? getPlatform(slug) : undefined
  const { locale } = useI18n()
  if (!platform) return <Navigate to="/platforms" replace />

  const copy = {
    en: {
      brief: 'Platform brief',
      strengths: 'Strengths',
      watchouts: 'Watchouts',
      amanita: 'How Amanita shows up',
      review: 'Book architecture review',
      map: 'Map to products',
    },
    es: {
      brief: 'Brief de plataforma',
      strengths: 'Fortalezas',
      watchouts: 'Riesgos',
      amanita: 'Cómo aparece amanita',
      review: 'Reservar revisión de arquitectura',
      map: 'Mapear a productos',
    },
    ca: {
      brief: 'Brief de plataforma',
      strengths: 'Fortaleses',
      watchouts: 'Riscos',
      amanita: 'Com aterra amanita',
      review: "Reservar revisió d'arquitectura",
      map: 'Mapar a productes',
    },
  }[locale]

  const localized =
    locale === 'en'
      ? platform
      : {
          ...platform,
          summary:
            locale === 'es'
              ? `Resumen adaptado para ${platform.name}: arquitectura, costes y operaciones listos para producción en entornos reales.`
              : `Resum adaptat per a ${platform.name}: arquitectura, costos i operacions llestos per a producció en entorns reals.`,
          strengths:
            locale === 'es'
              ? platform.strengths.map((s) => `Fortaleza: ${s}`)
              : platform.strengths.map((s) => `Fortalesa: ${s}`),
          watchouts:
            locale === 'es'
              ? platform.watchouts.map((w) => `Vigilar: ${w}`)
              : platform.watchouts.map((w) => `Vigilar: ${w}`),
          amanitaAngle:
            locale === 'es'
              ? `amanita adapta este stack a tu contexto con métricas, guardrails y handoff operativo: ${platform.amanitaAngle}`
              : `amanita adapta aquest stack al teu context amb mètriques, guardrails i handoff operatiu: ${platform.amanitaAngle}`,
        }

  return (
    <article className="space-y-10">
      <header>
        <p className="text-xs font-semibold uppercase tracking-wide text-violet-600 dark:text-violet-300">{copy.brief}</p>
        <h1 className="mt-2 font-[family-name:var(--font-display)] text-4xl font-semibold text-slate-900 dark:text-white">{localized.name}</h1>
        <p className="mt-3 max-w-3xl text-xl text-slate-700 dark:text-slate-200">{localized.headline}</p>
        <p className="mt-4 max-w-3xl text-slate-600 dark:text-slate-400">{localized.summary}</p>
      </header>

      <div className="grid gap-6 lg:grid-cols-2">
        <section className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
          <h2 className="flex items-center gap-2 font-semibold text-slate-900 dark:text-white">
            <Sparkles className="h-5 w-5 text-emerald-500" aria-hidden />
            {copy.strengths}
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
            {localized.strengths.map((s) => (
              <li key={s}>• {s}</li>
            ))}
          </ul>
        </section>
        <section className="rounded-2xl border border-amber-200/80 bg-amber-50/80 p-6 dark:border-amber-900/50 dark:bg-amber-950/40">
          <h2 className="flex items-center gap-2 font-semibold text-amber-950 dark:text-amber-100">
            <AlertTriangle className="h-5 w-5 text-amber-600" aria-hidden />
            {copy.watchouts}
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-amber-950/90 dark:text-amber-100/90">
            {localized.watchouts.map((w) => (
              <li key={w}>• {w}</li>
            ))}
          </ul>
        </section>
      </div>

      <section className="rounded-2xl border border-violet-200 bg-violet-50/60 p-6 dark:border-violet-900/50 dark:bg-violet-950/30">
        <h2 className="flex items-center gap-2 font-semibold text-slate-900 dark:text-violet-100">
          <Link2 className="h-5 w-5 text-violet-600 dark:text-violet-300" aria-hidden />
          {copy.amanita}
        </h2>
        <p className="mt-3 text-slate-700 dark:text-slate-300">{localized.amanitaAngle}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link to="/contact" className="cursor-pointer rounded-xl bg-violet-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-violet-500">
            {copy.review}
          </Link>
          <Link to="/products" className="cursor-pointer rounded-xl border border-violet-300 bg-white px-4 py-2 text-sm font-semibold text-violet-900 transition hover:border-violet-500 dark:border-violet-700 dark:bg-slate-900 dark:text-violet-100">
            {copy.map}
          </Link>
        </div>
      </section>
    </article>
  )
}
