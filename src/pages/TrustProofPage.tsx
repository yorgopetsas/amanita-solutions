import { motion, useReducedMotion } from 'motion/react'
import { ArrowRight, BarChart3, Building2, ShieldCheck } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/I18nProvider'

const proofRows = [
  { metric: '3.1×', label: 'Qualified meetings', detail: 'Outbound agent + CRM hygiene pilot (demo).' },
  { metric: '−62%', label: 'Time on manual research', detail: 'RAG over filings + internal memos.' },
  { metric: '99.2%', label: 'Tool success rate', detail: 'After schema hardening + retries.' },
]

export function TrustProofPage() {
  const reduce = useReducedMotion()
  const { locale } = useI18n()
  const copy = {
    en: {
      badge: 'Social proof',
      title: 'Logos, metrics, and outcomes',
      body: 'Fictional brands for layout—swap with real logos (SVG) and audited metrics. This pattern mirrors high-performing AI agency landings that lead with proof.',
      wall: 'Logo wall',
      narrative: 'Want the narrative version?',
      narrativeBody: 'Testimonials and case routes flesh out the story.',
      read: 'Read testimonials',
      compliance: 'Compliance-ready positioning',
      complianceBodyA: 'Link logo rows to your',
      complianceLink: 'security & compliance hub',
      complianceBodyB: 'so procurement can self-serve.',
    },
    es: {
      badge: 'Prueba social',
      title: 'Logos, métricas y resultados',
      body: 'Marcas ficticias para maquetación; sustitúyelas por logos reales (SVG) y métricas auditadas. Este patrón replica landings de agencias IA orientadas a prueba.',
      wall: 'Muro de logos',
      narrative: '¿Quieres la versión narrativa?',
      narrativeBody: 'Testimonios y rutas de casos completan la historia.',
      read: 'Leer testimonios',
      compliance: 'Posicionamiento listo para compliance',
      complianceBodyA: 'Conecta la fila de logos con tu',
      complianceLink: 'hub de seguridad y compliance',
      complianceBodyB: 'para que procurement pueda auto-servirse.',
    },
    ca: {
      badge: 'Prova social',
      title: 'Logos, mètriques i resultats',
      body: 'Marques fictícies per a maquetació; substitueix-les per logos reals (SVG) i mètriques auditades. Aquest patró replica landings d’agències IA orientades a prova.',
      wall: 'Mur de logos',
      narrative: 'Vols la versió narrativa?',
      narrativeBody: 'Testimonis i rutes de casos completen la història.',
      read: 'Llegir testimonis',
      compliance: 'Posicionament llest per a compliance',
      complianceBodyA: 'Connecta la fila de logos amb el teu',
      complianceLink: 'hub de seguretat i compliance',
      complianceBodyB: 'perquè procurement es pugui auto-serveir.',
    },
  }[locale]

  const rows =
    locale === 'en'
      ? proofRows
      : proofRows.map((row) => ({
          ...row,
          label: locale === 'es' ? `Métrica: ${row.label}` : `Mètrica: ${row.label}`,
          detail:
            locale === 'es'
              ? `Caso ilustrativo: ${row.detail}`
              : `Cas il·lustratiu: ${row.detail}`,
        }))
  return (
    <div className="space-y-12">
      <header className="rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-white p-8 dark:border-slate-800 dark:from-slate-900 dark:to-slate-950 sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-wide text-violet-600 dark:text-violet-300">{copy.badge}</p>
        <h1 className="mt-2 font-[family-name:var(--font-display)] text-4xl font-semibold text-slate-900 dark:text-white">{copy.title}</h1>
        <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
          {copy.body}
        </p>
      </header>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
        <div className="flex items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white">
          <Building2 className="h-5 w-5 text-violet-500" aria-hidden />
          {copy.wall}
        </div>
        <div className="mt-4 flex flex-wrap gap-3">
          {['Vertex Rail', 'Blue Canopy', 'Harbor Health', 'Lumen Bank', 'Atlas Freight', 'Kite Security', 'Cedar Ed', 'Nova Grid'].map((name, i) => (
            <motion.span
              key={name}
              initial={reduce ? false : { opacity: 0, scale: 0.97 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.03 }}
              className="inline-flex min-h-[44px] min-w-[120px] cursor-default items-center justify-center rounded-xl border border-slate-200 bg-slate-50 px-4 text-xs font-bold uppercase tracking-wide text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
            >
              {name}
            </motion.span>
          ))}
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {rows.map((row, i) => (
          <motion.div
            key={row.label}
            initial={reduce ? false : { opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
            className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900"
          >
            <p className="font-[family-name:var(--font-display)] text-3xl font-semibold text-violet-600 dark:text-violet-300">{row.metric}</p>
            <p className="mt-1 font-semibold text-slate-900 dark:text-white">{row.label}</p>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{row.detail}</p>
          </motion.div>
        ))}
      </section>

      <section className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-violet-200 bg-violet-50/80 p-6 dark:border-violet-900/50 dark:bg-violet-950/30">
        <div className="flex items-start gap-3">
          <BarChart3 className="mt-0.5 h-6 w-6 text-violet-600 dark:text-violet-300" aria-hidden />
          <div>
            <p className="font-semibold text-slate-900 dark:text-white">{copy.narrative}</p>
            <p className="text-sm text-slate-600 dark:text-slate-300">{copy.narrativeBody}</p>
          </div>
        </div>
        <Link
          to="/testimonials"
          className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-violet-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-violet-500"
        >
          {copy.read} <ArrowRight className="h-4 w-4" />
        </Link>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
        <div className="flex items-center gap-2 font-semibold text-slate-900 dark:text-white">
          <ShieldCheck className="h-5 w-5 text-emerald-500" aria-hidden />
          {copy.compliance}
        </div>
        <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">
          {copy.complianceBodyA}{' '}
          <Link to="/security" className="font-medium text-violet-600 hover:underline dark:text-violet-300">
            {copy.complianceLink}
          </Link>{' '}
          {copy.complianceBodyB}
        </p>
      </section>
    </div>
  )
}
