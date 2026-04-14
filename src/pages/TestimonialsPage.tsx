import { Quote } from 'lucide-react'
import { useI18n } from '../i18n/I18nProvider'

const stories = [
  {
    quote: 'They replaced a brittle script farm with three supervised agents—our ops team finally trusts the automation.',
    name: 'Jordan Lee',
    role: 'VP Operations, Series C logistics',
    metric: '−38% handle time',
  },
  {
    quote: 'The retrieval stack actually cites sources. Legal said yes on the first review.',
    name: 'Priya Desai',
    role: 'General Counsel, fintech',
    metric: '100% cited answers in pilot',
  },
  {
    quote: 'We went from “ChatGPT in a tab” to embedded agents in Salesforce and Jira in six weeks.',
    name: 'Marcus O.',
    role: 'Head of IT, healthcare network',
    metric: '6 weeks to prod pilot',
  },
]

export function TestimonialsPage() {
  const { locale } = useI18n()
  const copy = {
    en: {
      title: 'Testimonials',
      body: 'Synthetic quotes for layout purposes—swap with real customers when you ship. Agent landings like AgentWeb and The AI Agency lean heavily on proof and metrics.',
    },
    es: {
      title: 'Testimonios',
      body: 'Citas sintéticas para maquetación; sustitúyelas por clientes reales al publicar. Las landings de agencias de agentes suelen apoyarse mucho en prueba social y métricas.',
    },
    ca: {
      title: 'Testimonis',
      body: 'Cites sintètiques per a maquetació; substitueix-les per clients reals quan publiquis. Les landings d’agències d’agents es basen molt en prova social i mètriques.',
    },
  }[locale]
  const localizedStories =
    locale === 'en'
      ? stories
      : locale === 'es'
        ? [
            {
              ...stories[0],
              quote: 'Reemplazaron una granja frágil de scripts por tres agentes supervisados; por fin nuestro equipo de operaciones confía en la automatización.',
              role: 'VP de Operaciones, logística Series C',
            },
            {
              ...stories[1],
              quote: 'La capa de retrieval cita fuentes de verdad. Legal aprobó en la primera revisión.',
              role: 'General Counsel, fintech',
            },
            {
              ...stories[2],
              quote: 'Pasamos de "ChatGPT en una pestaña" a agentes embebidos en Salesforce y Jira en seis semanas.',
              role: 'Head of IT, red sanitaria',
            },
          ]
        : [
            {
              ...stories[0],
              quote: 'Van substituir una granja fràgil de scripts per tres agents supervisats; finalment el nostre equip d’operacions confia en l’automatització.',
              role: "VP d'Operacions, logística Series C",
            },
            {
              ...stories[1],
              quote: 'La capa de retrieval cita fonts de veritat. Legal va aprovar en la primera revisió.',
              role: 'General Counsel, fintech',
            },
            {
              ...stories[2],
              quote: 'Vam passar de "ChatGPT en una pestanya" a agents embeguts a Salesforce i Jira en sis setmanes.',
              role: "Head of IT, xarxa sanitària",
            },
          ]
  return (
    <div className="space-y-10">
      <header>
        <h1 className="font-[family-name:var(--font-display)] text-4xl font-semibold text-slate-900 dark:text-white">{copy.title}</h1>
        <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
          {copy.body}
        </p>
      </header>
      <div className="grid gap-6 md:grid-cols-3">
        {localizedStories.map((s) => (
          <figure key={s.name} className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
            <Quote className="h-8 w-8 text-violet-200 dark:text-violet-800" aria-hidden />
            <blockquote className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-200">“{s.quote}”</blockquote>
            <figcaption className="mt-4 text-sm">
              <span className="font-semibold text-slate-900 dark:text-white">{s.name}</span>
              <span className="block text-slate-500">{s.role}</span>
              <span className="mt-2 inline-block rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800 dark:bg-emerald-950 dark:text-emerald-200">
                {s.metric}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  )
}
