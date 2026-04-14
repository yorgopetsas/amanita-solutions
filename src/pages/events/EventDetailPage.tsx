import { Link, Navigate, useParams } from 'react-router-dom'
import { HighIntentCtaStrip } from '../../components/HighIntentCtaStrip'
import { Seo } from '../../components/Seo'
import { events } from '../../data/events'
import { useI18n } from '../../i18n/I18nProvider'

const content = {
  'ai-summit-barcelona-2026': {
    en: {
      title: "AI Summit Barcelona 2026 | Europe's Biggest AI Event",
      lead: 'A large-scale summit bringing founders, operators, and business leaders together for practical AI deployment.',
      body: 'The event positions Barcelona as a European AI execution hub, with tracks for demos, workshops, and business outcomes. The 2026 edition emphasizes applied systems over speculative AI narratives.',
    },
    es: {
      title: 'AI Summit Barcelona 2026 | El mayor evento de IA en Europa',
      lead: 'Un summit de gran escala que reúne founders, operadores y líderes empresariales para despliegues prácticos de IA.',
      body: 'El evento posiciona Barcelona como hub europeo de ejecución en IA, con tracks de demos, workshops y resultados de negocio.',
    },
    ca: {
      title: "AI Summit Barcelona 2026 | L'esdeveniment d'IA més gran d'Europa",
      lead: "Un summit de gran escala que reuneix founders, operadors i líders empresarials per a desplegaments pràctics d'IA.",
      body: "L'esdeveniment posiciona Barcelona com a hub europeu d'execució en IA, amb tracks de demos, workshops i resultats de negoci.",
    },
  },
  'mobile-world-congress': {
    en: {
      title: 'World Mobile Congress',
      lead: 'The global connectivity event where telecom, infrastructure, and AI products converge in Barcelona.',
      body: 'For AI teams, MWC is relevant because business adoption happens where infrastructure, devices, and platform ecosystems meet. It is one of the strongest places to validate AI go-to-market partnerships.',
    },
    es: {
      title: 'World Mobile Congress',
      lead: 'El evento global de conectividad donde convergen telecom, infraestructura y productos de IA en Barcelona.',
      body: 'Para equipos de IA, MWC es clave porque la adopción empresarial ocurre donde se unen infraestructura, dispositivos y ecosistemas de plataforma.',
    },
    ca: {
      title: 'World Mobile Congress',
      lead: "L'esdeveniment global de connectivitat on convergeixen telecom, infraestructura i productes d'IA a Barcelona.",
      body: "Per als equips d'IA, MWC és clau perquè l'adopció empresarial passa on s'uneixen infraestructura, dispositius i ecosistemes de plataforma.",
    },
  },
  '4yfn-startup-event': {
    en: {
      title: '4YFN startup event',
      lead: 'The startup growth layer around MWC, focused on fundraising, partner visibility, and venture access.',
      body: '4YFN is where early and growth-stage AI startups connect with investors and corporates. It is especially useful for positioning AI products in front of decision-makers beyond pure technical audiences.',
    },
    es: {
      title: 'Evento startup 4YFN',
      lead: 'La capa startup alrededor de MWC, enfocada en fundraising, visibilidad y acceso a inversión.',
      body: '4YFN es donde startups de IA en fase temprana y de crecimiento conectan con inversores y corporates.',
    },
    ca: {
      title: 'Esdeveniment startup 4YFN',
      lead: "La capa startup al voltant de MWC, enfocada en fundraising, visibilitat i accés a inversió.",
      body: "4YFN és on startups d'IA en fase inicial i de creixement connecten amb inversors i corporates.",
    },
  },
  'barcelona-ai-week': {
    en: {
      title: 'Barcelona AI Week',
      lead: 'A citywide rhythm of AI side-events that turns Barcelona into one connected learning and networking graph.',
      body: 'The week format allows teams to combine flagship conferences with smaller meetups, dinners, and technical sessions. It is ideal for building relationships that continue after the main stage events.',
    },
    es: {
      title: 'Barcelona AI Week',
      lead: 'Un ritmo de eventos por toda la ciudad que convierte Barcelona en un grafo único de aprendizaje y networking.',
      body: 'El formato de semana permite combinar conferencias grandes con meetups, cenas y sesiones técnicas más pequeñas.',
    },
    ca: {
      title: 'Barcelona AI Week',
      lead: "Un ritme d'esdeveniments per tota la ciutat que converteix Barcelona en un graf únic d'aprenentatge i networking.",
      body: "El format de setmana permet combinar conferències grans amb meetups, sopars i sessions tècniques més petites.",
    },
  },
  'applied-agents-meetup': {
    en: {
      title: 'Applied Agents Meetup',
      lead: 'A practical meetup format centered on retrieval quality, agent reliability, and operational lessons.',
      body: 'Compared to broad conference talks, this meetup style focuses on what worked in production and what failed. The objective is to exchange implementation patterns teams can reuse immediately.',
    },
    es: {
      title: 'Applied Agents Meetup',
      lead: 'Un meetup práctico centrado en calidad de retrieval, fiabilidad de agentes y lecciones operativas.',
      body: 'Frente a conferencias generales, este formato se centra en lo que funcionó en producción y lo que falló.',
    },
    ca: {
      title: 'Applied Agents Meetup',
      lead: "Un meetup pràctic centrat en qualitat de retrieval, fiabilitat d'agents i lliçons operatives.",
      body: "Enfront de conferències generals, aquest format se centra en el que va funcionar en producció i el que va fallar.",
    },
  },
  'enterprise-ai-roundtable': {
    en: {
      title: 'Enterprise AI Roundtable',
      lead: 'A closed-format discussion for leadership teams aligning AI strategy, governance, and execution.',
      body: 'Roundtables help decision-makers compare policy models, procurement constraints, and operating metrics before committing to large-scale AI programs. The value comes from peer exchange and concrete planning.',
    },
    es: {
      title: 'Enterprise AI Roundtable',
      lead: 'Un formato cerrado para líderes que alinean estrategia de IA, gobernanza y ejecución.',
      body: 'Los roundtables ayudan a comparar modelos de política, límites de procurement y métricas operativas.',
    },
    ca: {
      title: 'Enterprise AI Roundtable',
      lead: "Un format tancat per a líders que alineen estratègia d'IA, governança i execució.",
      body: "Els roundtables ajuden a comparar models de política, límits de procurement i mètriques operatives.",
    },
  },
} as const

export function EventDetailPage() {
  const { slug } = useParams()
  const { locale } = useI18n()
  if (!slug || !events.some((e) => e.slug === slug) || !(slug in content)) return <Navigate to="/events" replace />
  const event = events.find((e) => e.slug === slug)!
  const c = content[slug as keyof typeof content][locale]
  const back = locale === 'es' ? 'Volver a eventos' : locale === 'ca' ? 'Tornar als esdeveniments' : 'Back to events'
  const source = locale === 'es' ? 'Fuente oficial' : locale === 'ca' ? 'Font oficial' : 'Official source'
  return (
    <article className="space-y-6" data-no-auto-translate="true">
      <Seo
        title={`${c.title} | amanita.barcelona`}
        description={c.lead}
        path={`/events/${slug}`}
        image={event.image}
      />
      <img src={event.image} alt={event.imageAlt} className="h-72 w-full rounded-2xl object-cover" />
      <h1 className="font-[family-name:var(--font-display)] text-4xl font-semibold text-slate-900 dark:text-white">{c.title}</h1>
      <p className="text-lg text-slate-700 dark:text-slate-200">{c.lead}</p>
      <p className="text-slate-600 dark:text-slate-300">{c.body}</p>
      <div className="flex gap-4 text-sm">
        <Link to="/events" className="font-semibold text-violet-600 hover:underline dark:text-violet-300">
          {back}
        </Link>
        <a href={event.sourceUrl} target="_blank" rel="noreferrer" className="text-slate-500 hover:underline">
          {source}
        </a>
      </div>
      <HighIntentCtaStrip />
    </article>
  )
}
