import { motion, useReducedMotion } from 'motion/react'
import { ArrowRight, CalendarDays, GraduationCap, MapPin, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Seo } from '../../components/Seo'
import { useI18n } from '../../i18n/I18nProvider'

export function HomeAmanita() {
  const reduce = useReducedMotion()
  const { locale } = useI18n()
  const eventsByLocale = {
    en: [
      {
        slug: 'ai-summit-barcelona-2026',
        title: 'AI Summit Barcelona 2026',
        desc: "Europe's biggest AI event hosted in Barcelona, bringing 10,000+ attendees, 200+ speakers, and two days of demos, keynotes, and practical AI use cases.",
        img: '/event-images/ai-summit-barcelona.jpg',
        imgAlt: 'AI Summit Barcelona official visual',
      },
      {
        slug: 'mobile-world-congress',
        title: 'World Mobile Congress',
        desc: 'The world-leading connectivity conference at Fira Gran Via where telecom infrastructure, devices, and enterprise AI adoption roadmaps meet at scale.',
        img: '/event-images/mwc-barcelona.jpg',
        imgAlt: 'MWC official press visual',
      },
      {
        slug: '4yfn-startup-event',
        title: '4YFN startup event',
        desc: 'MWC startup platform focused on funding, investor matchmaking, and startup visibility for founders building AI-native products in Europe.',
        img: '/event-images/4yfn-barcelona.jpg',
        imgAlt: '4YFN official event visual',
      },
    ],
    es: [
      {
        slug: 'ai-summit-barcelona-2026',
        title: 'AI Summit Barcelona 2026',
        desc: 'El mayor evento de IA en Europa, con más de 10.000 asistentes, más de 200 ponentes y dos días centrados en demos, tracks prácticos y ejecución real.',
        img: '/event-images/ai-summit-barcelona.jpg',
        imgAlt: 'Visual oficial de AI Summit Barcelona',
      },
      {
        slug: 'mobile-world-congress',
        title: 'World Mobile Congress',
        desc: 'La conferencia global de conectividad en Fira Gran Via, donde convergen infraestructura telecom, dispositivos y adopción enterprise de IA.',
        img: '/event-images/mwc-barcelona.jpg',
        imgAlt: 'Visual oficial de prensa de MWC',
      },
      {
        slug: '4yfn-startup-event',
        title: 'Evento startup 4YFN',
        desc: 'Plataforma startup de MWC enfocada en inversión, conexiones con VCs y visibilidad internacional para productos IA de nueva generación.',
        img: '/event-images/4yfn-barcelona.jpg',
        imgAlt: 'Visual oficial del evento 4YFN',
      },
    ],
    ca: [
      {
        slug: 'ai-summit-barcelona-2026',
        title: 'AI Summit Barcelona 2026',
        desc: "L'esdeveniment d'IA més gran d'Europa, amb més de 10.000 assistents, més de 200 ponents i dos dies centrats en demos i execució real.",
        img: '/event-images/ai-summit-barcelona.jpg',
        imgAlt: 'Visual oficial de AI Summit Barcelona',
      },
      {
        slug: 'mobile-world-congress',
        title: 'World Mobile Congress',
        desc: "La conferència global de connectivitat a Fira Gran Via, on convergeixen infraestructura telecom, dispositius i adopció enterprise d'IA.",
        img: '/event-images/mwc-barcelona.jpg',
        imgAlt: 'Visual oficial de premsa de MWC',
      },
      {
        slug: '4yfn-startup-event',
        title: 'Esdeveniment startup 4YFN',
        desc: "Plataforma startup de MWC enfocada en inversió, connexions amb VCs i visibilitat internacional per a productes d'IA de nova generació.",
        img: '/event-images/4yfn-barcelona.jpg',
        imgAlt: 'Visual oficial de 4YFN',
      },
    ],
  }[locale]
  const educationByLocale = {
    en: [
      {
        name: 'Universitat de Barcelona',
        focus: 'Public university with strong research groups in AI, data science, and computational disciplines connected to Barcelona’s innovation ecosystem.',
        img: '/event-images/universitat-barcelona.jpg',
        imgAlt: 'Universitat de Barcelona historic building',
      },
      {
        name: 'Universitat Politècnica de Catalunya',
        focus: 'Engineering-focused university with leading programs in machine learning, systems, and applied technology for industry.',
        img: '/upc-university.webp',
        imgAlt: 'Universitat Politècnica de Catalunya campus',
      },
      {
        name: 'Barcelona Tech Academies',
        focus: 'Practice-first academies like 42 Barcelona offering peer-to-peer, project-based pathways for AI and software talent development.',
        img: '/event-images/barcelona-tech-academy.png',
        imgAlt: '42 Barcelona academy campus',
      },
    ],
    es: [
      {
        name: 'Universitat de Barcelona',
        focus: 'Universidad pública con grupos sólidos de investigación en IA, ciencia de datos y disciplinas computacionales ligadas al ecosistema de innovación local.',
        img: '/event-images/universitat-barcelona.jpg',
        imgAlt: 'Edificio histórico de la Universitat de Barcelona',
      },
      {
        name: 'Universitat Politècnica de Catalunya',
        focus: 'Universidad orientada a ingeniería con programas líderes en machine learning, sistemas y tecnología aplicada a industria.',
        img: '/upc-university.webp',
        imgAlt: 'Campus de la Universitat Politècnica de Catalunya',
      },
      {
        name: 'Academias tech de Barcelona',
        focus: 'Academias prácticas como 42 Barcelona, con metodologías peer-to-peer y proyectos reales para talento digital y perfiles IA.',
        img: '/event-images/barcelona-tech-academy.png',
        imgAlt: 'Campus de la academia 42 Barcelona',
      },
    ],
    ca: [
      {
        name: 'Universitat de Barcelona',
        focus: "Universitat pública amb grups de recerca sòlids en IA, ciència de dades i disciplines computacionals connectades amb l'ecosistema local d'innovació.",
        img: '/event-images/universitat-barcelona.jpg',
        imgAlt: 'Edifici històric de la Universitat de Barcelona',
      },
      {
        name: 'Universitat Politècnica de Catalunya',
        focus: "Universitat enfocada en enginyeria amb programes líders en machine learning, sistemes i tecnologia aplicada a indústria.",
        img: '/upc-university.webp',
        imgAlt: 'Campus de la Universitat Politècnica de Catalunya',
      },
      {
        name: 'Acadèmies tech de Barcelona',
        focus: 'Acadèmies pràctiques com 42 Barcelona, amb metodologies peer-to-peer i projectes reals per a talent digital i perfils IA.',
        img: '/event-images/barcelona-tech-academy.png',
        imgAlt: 'Campus de l’acadèmia 42 Barcelona',
      },
    ],
  }[locale]
  const copy = {
    en: {
      badge: 'Amanita Barcelona',
      title: 'Barcelona - where AI excels',
      body: 'We help teams design and deploy production AI agents with local context, global quality, and measurable business outcomes.',
      ctaPrimary: 'Book a strategy call',
      ctaSecondary: 'Explore products',
      eventsTitle: 'AI events in Barcelona',
      eventsBody: 'Amanita.barcelona keeps your roadmap connected to the local AI ecosystem and practical operator community.',
      educationTitle: 'AI education opportunities',
      educationBody: 'Universities and academies across Barcelona create a strong talent and learning pipeline for AI teams.',
      oldHome: 'Open previous homepage gallery (home-12)',
    },
    es: {
      badge: 'Amanita Barcelona',
      title: 'Barcelona - donde la IA destaca',
      body: 'Ayudamos a equipos a diseñar y desplegar agentes IA en producción con contexto local, calidad global y resultados medibles de negocio.',
      ctaPrimary: 'Reservar llamada estratégica',
      ctaSecondary: 'Explorar productos',
      eventsTitle: 'Eventos de IA en Barcelona',
      eventsBody: 'Amanita.barcelona conecta tu roadmap con el ecosistema local de IA y su comunidad práctica de operadores.',
      educationTitle: 'Oportunidades educativas en IA',
      educationBody: 'Universidades y academias de Barcelona crean un pipeline sólido de talento y aprendizaje para equipos de IA.',
      oldHome: 'Abrir homepage anterior (home-12)',
    },
    ca: {
      badge: 'Amanita Barcelona',
      title: 'Barcelona - on la IA excel·leix',
      body: 'Ajudem equips a dissenyar i desplegar agents IA en producció amb context local, qualitat global i resultats de negoci mesurables.',
      ctaPrimary: 'Reservar trucada estratègica',
      ctaSecondary: 'Explorar productes',
      eventsTitle: 'Esdeveniments d’IA a Barcelona',
      eventsBody: "Amanita.barcelona connecta el teu roadmap amb l'ecosistema local d’IA i la comunitat pràctica d’operadors.",
      educationTitle: "Oportunitats educatives d'IA",
      educationBody: "Universitats i acadèmies de Barcelona creen un pipeline sòlid de talent i aprenentatge per a equips d'IA.",
      oldHome: 'Obrir homepage anterior (home-12)',
    },
  }[locale]

  return (
    <div className="space-y-14" data-no-auto-translate="true">
      <Seo
        title={locale === 'en' ? 'Barcelona AI Agency | amanita.barcelona' : locale === 'es' ? 'Agencia IA en Barcelona | amanita.barcelona' : "Agència IA a Barcelona | amanita.barcelona"}
        description={
          locale === 'en'
            ? 'Amanita designs and deploys production AI agents for teams in Barcelona and beyond.'
            : locale === 'es'
              ? 'Amanita diseña y despliega agentes IA en producción para equipos en Barcelona y más allá.'
              : 'Amanita dissenya i desplega agents IA en producció per a equips de Barcelona i més enllà.'
        }
        path="/"
        image="/upc-university.webp"
      />
      <section className="relative overflow-hidden rounded-3xl border border-stone-200 bg-gradient-to-br from-stone-50 to-amber-50 p-8 sm:p-12">
        <motion.div
          aria-hidden
          className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-amber-300/30 blur-3xl"
          animate={reduce ? undefined : { x: [0, -14, 0], y: [0, 16, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="relative max-w-3xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-stone-700">
            <Sparkles className="h-3.5 w-3.5" aria-hidden />
            {copy.badge}
          </p>
          <h1 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight text-stone-900 sm:text-6xl">
            {copy.title}
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-stone-700">{copy.body}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-stone-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-stone-800">
              {copy.ctaPrimary} <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/products" className="inline-flex cursor-pointer rounded-xl border border-stone-300 bg-white px-5 py-3 text-sm font-semibold text-stone-900 transition hover:border-amber-500">
              {copy.ctaSecondary}
            </Link>
          </div>
        </div>
      </section>

      <section className="space-y-5">
        <div className="flex items-center gap-2 text-stone-900">
          <CalendarDays className="h-5 w-5 text-amber-600" aria-hidden />
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold">{copy.eventsTitle}</h2>
        </div>
        <p className="max-w-3xl text-stone-600">{copy.eventsBody}</p>
        <div className="grid gap-5 md:grid-cols-3">
          {eventsByLocale.map((event) => (
            <article key={event.title} className="overflow-hidden rounded-2xl border border-stone-200 bg-white">
              <img src={event.img} alt={event.imgAlt} className="h-40 w-full object-cover" loading="lazy" />
              <div className="p-5">
                <h3 className="font-semibold text-stone-900">{event.title}</h3>
                <p className="mt-2 text-sm text-stone-600">{event.desc}</p>
                <p className="mt-3 inline-flex items-center gap-1 text-xs text-stone-500">
                  <MapPin className="h-3.5 w-3.5" aria-hidden />
                  {event.imgAlt}
                </p>
                <Link to={`/events/${event.slug}`} className="mt-3 inline-block text-sm font-semibold text-amber-700 hover:underline">
                  {locale === 'es' ? 'Ver evento' : locale === 'ca' ? 'Veure esdeveniment' : 'View event'}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="space-y-5">
        <div className="flex items-center gap-2 text-stone-900">
          <GraduationCap className="h-5 w-5 text-amber-600" aria-hidden />
          <h2 className="font-[family-name:var(--font-display)] text-3xl font-semibold">{copy.educationTitle}</h2>
        </div>
        <p className="max-w-3xl text-stone-600">{copy.educationBody}</p>
        <div className="grid gap-5 md:grid-cols-3">
          {educationByLocale.map((item) => (
            <article key={item.name} className="overflow-hidden rounded-2xl border border-stone-200 bg-white">
              <img src={item.img} alt={item.imgAlt} className="h-40 w-full object-cover" loading="lazy" />
              <div className="p-5">
                <h3 className="font-semibold text-stone-900">{item.name}</h3>
                <p className="mt-2 text-sm text-stone-600">{item.focus}</p>
                <p className="mt-3 text-xs text-stone-500">{item.imgAlt}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <p className="text-center text-sm text-stone-600">
        <Link to="/home/12" className="cursor-pointer font-semibold text-amber-700 hover:underline">
          {copy.oldHome}
        </Link>
      </p>
    </div>
  )
}
