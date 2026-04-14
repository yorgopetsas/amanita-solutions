import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/I18nProvider'

const shotList = [
  'Open on problem context and KPI baseline (15s)',
  'Show current workflow pain in one screenshot (10s)',
  'Run interactive demo from /demo with narration (30s)',
  'Highlight one measurable outcome (15s)',
  'Close with CTA: discovery call + offer fit (10s)',
]

const recordingChecklist = [
  'Script in plain language (no model jargon first minute)',
  '1080p recording, clean browser tabs, zoom at 110-125%',
  'Visible cursor and click highlights',
  'One metric callout card prepared in advance',
  'Upload to Loom/YouTube unlisted and add to case page',
]

export function ProofKitPage() {
  const { locale } = useI18n()
  const copy = {
    en: {
      badge: 'Proof assets',
      title: 'Demo recording + case proof kit',
      body: 'Use this package to generate your first proof artifacts: one short demo video and one case-style page you can share privately before launch.',
      script: '60-90 second demo script',
      openDemo: 'Open live demo',
      addBooking: 'Add booking CTA',
      checklist: 'Recording checklist',
      tip: 'Tip: first proof only needs to be “clear and credible,” not cinematic.',
      template: 'Case-style proof page template',
      templateBody: 'Duplicate this structure: context to architecture to implementation to outcomes to next step.',
      sample: 'Open sample case page',
      routes: 'View all case routes',
    },
    es: {
      badge: 'Activos de prueba',
      title: 'Kit de grabación demo + prueba tipo caso',
      body: 'Usa este paquete para crear tus primeros activos de prueba: un video demo corto y una case page para compartir en privado antes del lanzamiento.',
      script: 'Script demo de 60-90 segundos',
      openDemo: 'Abrir demo en vivo',
      addBooking: 'Añadir CTA de reserva',
      checklist: 'Checklist de grabación',
      tip: 'Tip: la primera prueba solo necesita ser clara y creíble, no cinematográfica.',
      template: 'Plantilla de case page de prueba',
      templateBody: 'Duplica esta estructura: contexto, arquitectura, implementación, resultados y siguiente paso.',
      sample: 'Abrir case page de ejemplo',
      routes: 'Ver todas las rutas de casos',
    },
    ca: {
      badge: 'Actius de prova',
      title: 'Kit de gravació demo + prova tipus cas',
      body: 'Fes servir aquest paquet per crear els primers actius de prova: un vídeo demo curt i una case page per compartir en privat abans del llançament.',
      script: 'Script demo de 60-90 segons',
      openDemo: 'Obrir demo en viu',
      addBooking: 'Afegir CTA de reserva',
      checklist: 'Checklist de gravació',
      tip: 'Tip: la primera prova només cal que sigui clara i creïble, no cinematogràfica.',
      template: 'Plantilla de case page de prova',
      templateBody: 'Duplica aquesta estructura: context, arquitectura, implementació, resultats i següent pas.',
      sample: 'Obrir case page de mostra',
      routes: 'Veure totes les rutes de casos',
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

      <section className="grid gap-6 lg:grid-cols-2">
        <article className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
          <h2 className="font-semibold text-slate-900 dark:text-white">{copy.script}</h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-slate-600 dark:text-slate-300">
            {shotList.map((shot) => (
              <li key={shot}>{shot}</li>
            ))}
          </ol>
          <div className="mt-5 flex flex-wrap gap-3">
            <Link to="/demo" className="cursor-pointer rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white dark:bg-white dark:text-slate-900">
              {copy.openDemo}
            </Link>
            <Link to="/contact" className="cursor-pointer rounded-xl border border-slate-300 px-4 py-2 text-sm font-semibold text-slate-900 dark:border-slate-600 dark:text-slate-100">
              {copy.addBooking}
            </Link>
          </div>
        </article>

        <article className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
          <h2 className="font-semibold text-slate-900 dark:text-white">{copy.checklist}</h2>
          <ul className="mt-4 space-y-2 text-sm text-slate-600 dark:text-slate-300">
            {recordingChecklist.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
          <p className="mt-4 text-xs text-slate-500">{copy.tip}</p>
        </article>
      </section>

      <section className="rounded-2xl border border-violet-200 bg-violet-50/70 p-6 dark:border-violet-900/40 dark:bg-violet-950/30">
        <h2 className="font-semibold text-slate-900 dark:text-violet-100">{copy.template}</h2>
        <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">{copy.templateBody}</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link to="/proof/case-support-triage" className="cursor-pointer rounded-xl bg-violet-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-violet-500">
            {copy.sample}
          </Link>
          <Link to="/case-studies" className="cursor-pointer rounded-xl border border-violet-300 px-4 py-2 text-sm font-semibold text-violet-900 dark:text-violet-100">
            {copy.routes}
          </Link>
        </div>
      </section>
    </div>
  )
}
