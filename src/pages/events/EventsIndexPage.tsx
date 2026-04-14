import { Link } from 'react-router-dom'
import { events } from '../../data/events'
import { useI18n } from '../../i18n/I18nProvider'

export function EventsIndexPage() {
  const { locale } = useI18n()
  const copy = {
    en: {
      title: 'AI Events in Barcelona',
      body: 'Conference radar for founders, operators, and enterprise teams building with AI in Barcelona.',
      read: 'Read article',
      source: 'Official source',
    },
    es: {
      title: 'Eventos de IA en Barcelona',
      body: 'Radar de conferencias para founders, operadores y equipos enterprise que construyen con IA en Barcelona.',
      read: 'Leer artículo',
      source: 'Fuente oficial',
    },
    ca: {
      title: "Esdeveniments d'IA a Barcelona",
      body: "Radar de conferències per a founders, operadors i equips enterprise que construeixen amb IA a Barcelona.",
      read: "Llegir article",
      source: 'Font oficial',
    },
  }[locale]

  const names: Record<string, Record<typeof locale, string>> = {
    'ai-summit-barcelona-2026': {
      en: "AI Summit Barcelona 2026 | Europe's Biggest AI Event",
      es: 'AI Summit Barcelona 2026 | El mayor evento de IA en Europa',
      ca: "AI Summit Barcelona 2026 | L'esdeveniment d'IA més gran d'Europa",
    },
    'mobile-world-congress': {
      en: 'World Mobile Congress',
      es: 'World Mobile Congress',
      ca: 'World Mobile Congress',
    },
    '4yfn-startup-event': {
      en: '4YFN startup event',
      es: 'Evento startup 4YFN',
      ca: 'Esdeveniment startup 4YFN',
    },
    'barcelona-ai-week': {
      en: 'Barcelona AI Week',
      es: 'Barcelona AI Week',
      ca: 'Barcelona AI Week',
    },
    'applied-agents-meetup': {
      en: 'Applied Agents Meetup',
      es: 'Applied Agents Meetup',
      ca: 'Applied Agents Meetup',
    },
    'enterprise-ai-roundtable': {
      en: 'Enterprise AI Roundtable',
      es: 'Enterprise AI Roundtable',
      ca: 'Enterprise AI Roundtable',
    },
  }

  return (
    <div className="space-y-8" data-no-auto-translate="true">
      <header>
        <h1 className="font-[family-name:var(--font-display)] text-4xl font-semibold text-slate-900 dark:text-white">{copy.title}</h1>
        <p className="mt-3 max-w-3xl text-slate-600 dark:text-slate-300">{copy.body}</p>
      </header>

      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <article key={event.slug} className="overflow-hidden rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
            <img src={event.image} alt={event.imageAlt} className="h-44 w-full object-cover" loading="lazy" />
            <div className="space-y-3 p-5">
              <h2 className="font-semibold text-slate-900 dark:text-white">{names[event.slug][locale]}</h2>
              <div className="flex items-center justify-between text-sm">
                <Link to={`/events/${event.slug}`} className="font-semibold text-violet-600 hover:underline dark:text-violet-300">
                  {copy.read}
                </Link>
                <a href={event.sourceUrl} target="_blank" rel="noreferrer" className="text-slate-500 hover:underline">
                  {copy.source}
                </a>
              </div>
            </div>
          </article>
        ))}
      </section>
    </div>
  )
}
