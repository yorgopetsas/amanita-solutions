import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/I18nProvider'

export function NotFound() {
  const { locale } = useI18n()
  const copy = {
    en: { title: 'Page not found', body: 'The route does not exist in this demo.', back: 'Back home' },
    es: { title: 'Página no encontrada', body: 'La ruta no existe en esta demo.', back: 'Volver al inicio' },
    ca: { title: 'Pàgina no trobada', body: 'La ruta no existeix en aquesta demo.', back: "Tornar a l'inici" },
  }[locale]
  return (
    <div className="py-20 text-center">
      <h1 className="font-[family-name:var(--font-display)] text-3xl font-semibold text-slate-900 dark:text-white">{copy.title}</h1>
      <p className="mt-2 text-slate-600 dark:text-slate-400">{copy.body}</p>
      <Link to="/" className="mt-6 inline-block cursor-pointer font-medium text-violet-600 hover:underline dark:text-violet-300">
        {copy.back}
      </Link>
    </div>
  )
}
