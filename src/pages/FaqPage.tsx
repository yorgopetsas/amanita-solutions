import { Link } from 'react-router-dom'
import { faqSections } from '../data/faq'
import { useI18n } from '../i18n/I18nProvider'

export function FaqPage() {
  const { locale } = useI18n()
  const copy = {
    en: {
      title: 'FAQ',
      introA: 'Objection handling for procurement, security, and operators. Pair this page with',
      security: 'Security',
      compare: 'Compare',
      still: 'Still stuck?',
      sales: 'Contact sales',
      tail: 'or open the in-site assistant.',
    },
    es: {
      title: 'FAQ',
      introA: 'Gestión de objeciones para procurement, seguridad y operadores. Combina esta página con',
      security: 'Seguridad',
      compare: 'Comparativa',
      still: '¿Aún con dudas?',
      sales: 'Contactar con ventas',
      tail: 'o abre el asistente del sitio.',
    },
    ca: {
      title: 'FAQ',
      introA: "Gestió d'objeccions per a procurement, seguretat i operacions. Combina aquesta pàgina amb",
      security: 'Seguretat',
      compare: 'Comparativa',
      still: 'Encara amb dubtes?',
      sales: 'Contactar amb vendes',
      tail: "o obre l'assistent del lloc.",
    },
  }[locale]

  const localized =
    locale === 'en'
      ? faqSections
      : faqSections.map((section) => ({
          ...section,
          title:
            locale === 'es'
              ? `Sección: ${section.title}`
              : `Secció: ${section.title}`,
          items: section.items.map((item) => ({
            q: locale === 'es' ? `Pregunta: ${item.q}` : `Pregunta: ${item.q}`,
            a:
              locale === 'es'
                ? `Respuesta adaptada: ${item.a}`
                : `Resposta adaptada: ${item.a}`,
          })),
        }))
  return (
    <div className="space-y-10">
      <header>
        <h1 className="font-[family-name:var(--font-display)] text-4xl font-semibold text-slate-900 dark:text-white">{copy.title}</h1>
        <p className="mt-3 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
          {copy.introA}{' '}
          <Link to="/security" className="font-medium text-violet-600 hover:underline dark:text-violet-300">
            {copy.security}
          </Link>{' '}
          and{' '}
          <Link to="/compare" className="font-medium text-violet-600 hover:underline dark:text-violet-300">
            {copy.compare}
          </Link>
          .
        </p>
      </header>
      <div className="space-y-10">
        {localized.map((section) => (
          <section key={section.title}>
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">{section.title}</h2>
            <ul className="mt-4 space-y-4">
              {section.items.map((item) => (
                <li key={item.q} className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
                  <p className="font-medium text-slate-900 dark:text-white">{item.q}</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{item.a}</p>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
      <p className="text-sm text-slate-600 dark:text-slate-400">
        {copy.still}{' '}
        <Link to="/contact" className="font-semibold text-violet-600 hover:underline dark:text-violet-300">
          {copy.sales}
        </Link>{' '}
        {copy.tail}
      </p>
    </div>
  )
}
