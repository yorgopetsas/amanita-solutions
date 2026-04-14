import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/I18nProvider'

export function HighIntentCtaStrip() {
  const { locale } = useI18n()
  const copy = {
    en: {
      title: 'Ready to map your AI roadmap?',
      body: 'Book a strategy call and we will propose the highest-impact workflow to ship first.',
      primary: 'Book strategy call',
      secondary: 'View pricing',
    },
    es: {
      title: '¿Listo para definir tu roadmap de IA?',
      body: 'Reserva una llamada estratégica y te proponemos el workflow de mayor impacto para lanzar primero.',
      primary: 'Reservar llamada estratégica',
      secondary: 'Ver precios',
    },
    ca: {
      title: 'Preparat per definir el teu roadmap d’IA?',
      body: 'Reserva una trucada estratègica i et proposem el workflow de major impacte per llançar primer.',
      primary: 'Reservar trucada estratègica',
      secondary: 'Veure preus',
    },
  }[locale]

  return (
    <section className="rounded-2xl border border-violet-200 bg-violet-50/70 p-6 dark:border-violet-900/50 dark:bg-violet-950/30">
      <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-slate-900 dark:text-violet-100">{copy.title}</h2>
      <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">{copy.body}</p>
      <div className="mt-4 flex flex-wrap gap-3">
        <Link to="/contact" className="cursor-pointer rounded-xl bg-violet-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-violet-500">
          {copy.primary}
        </Link>
        <Link to="/pricing" className="cursor-pointer rounded-xl border border-violet-300 px-4 py-2 text-sm font-semibold text-violet-800 transition hover:border-violet-500 dark:text-violet-100">
          {copy.secondary}
        </Link>
      </div>
    </section>
  )
}
