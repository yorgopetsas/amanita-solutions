import { motion, useReducedMotion } from 'motion/react'
import { ArrowRight, CalendarDays, GraduationCap, MapPin, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useI18n } from '../../i18n/I18nProvider'

const events = [
  {
    slug: 'ai-summit-barcelona-2026',
    title: 'AI Summit Barcelona 2026',
    desc: "Europe's biggest AI event hosted in Barcelona.",
    img: 'https://ai-summit-barcelona-public.b-cdn.net/og-image.jpg',
    imgAlt: 'AI Summit Barcelona official visual',
  },
  {
    slug: 'mobile-world-congress',
    title: 'World Mobile Congress',
    desc: 'Global technology and connectivity conference at Fira Barcelona.',
    img: 'https://event-assets.gsma.com/_1200x630_crop_center-center_82_none/mwc-barcelona-press-zone-video-cameras-700x467.jpg?mtime=1750068067',
    imgAlt: 'MWC official press visual',
  },
  {
    slug: '4yfn-startup-event',
    title: '4YFN startup event',
    desc: 'Startup, investor, and innovation ecosystem gathering co-located with MWC.',
    img: 'https://event-assets.gsma.com/4YFN/logos/_1200x630_crop_center-center_82_none/4yfn-logo-card-800x533.jpg?mtime=1750066362',
    imgAlt: '4YFN official event visual',
  },
]

const education = [
  {
    name: 'Universitat de Barcelona',
    focus: 'AI, data science, and advanced research programs.',
    img: 'https://web.ub.edu/documents/2685349/2697071/Edifici+fa%C3%A7ana+3.jpg/3cfe6e4c-f823-4ee2-2025-b54e1f3eeb07?version=2.1&t=1734081965180&imagePreview=1',
    imgAlt: 'Universitat de Barcelona historic building',
  },
  {
    name: 'Universitat Politècnica de Catalunya',
    focus: 'Engineering pathways in machine learning and systems.',
    img: 'https://commons.wikimedia.org/wiki/Special:FilePath/Barcelona_-_Universidad_Polit%C3%A9cnica_de_Catalu%C3%B1a_(UPC)_-_Campus_Norte_1.jpg',
    imgAlt: 'Universitat Politècnica de Catalunya campus',
  },
  {
    name: 'Barcelona Tech Academies',
    focus: 'Bootcamps and short programs for AI practitioners and teams.',
    img: 'https://www.42network.org/wp-content/uploads/2021/04/WEB42NETWORK-BARCELONA-1-min.png',
    imgAlt: '42 Barcelona academy campus',
  },
]

export function HomeAmanita() {
  const reduce = useReducedMotion()
  const { locale } = useI18n()
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
          {events.map((event) => (
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
          {education.map((item) => (
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
