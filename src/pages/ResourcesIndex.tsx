import { BookOpen, FileStack, GraduationCap } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/I18nProvider'

const guides = [
  {
    to: '/resources/rag-checklist',
    title: 'RAG readiness checklist',
    desc: 'Chunking, rerank, citations, and eval gates before you promise grounded answers.',
    icon: FileStack,
  },
  {
    to: '/resources/eval-playbook',
    title: 'Agent eval playbook',
    desc: 'Regression sets, LLM-as-judge guardrails, and human rubrics that scale.',
    icon: GraduationCap,
  },
  {
    to: '/resources/glossary',
    title: 'Agents glossary',
    desc: 'Shared language for memory, tools, planning, and multi-agent patterns.',
    icon: BookOpen,
  },
  {
    to: '/proof-kit',
    title: 'Proof kit',
    desc: 'Demo recording script + case-page template for pre-launch credibility.',
    icon: FileStack,
  },
  {
    to: '/prelaunch/content-cadence',
    title: 'Content cadence',
    desc: '8-week posting plan with two posts per week and reusable templates.',
    icon: GraduationCap,
  },
  {
    to: '/prelaunch/outbound-playbook',
    title: 'Outbound playbook',
    desc: 'Weekly outreach loop, templates, and KPI tracker columns.',
    icon: BookOpen,
  },
]

export function ResourcesIndex() {
  const { locale } = useI18n()
  const copy = {
    en: { title: 'Resources', open: 'Open guide ->', blog: 'Blog route idea: mirror top posts here as cards linking to' },
    es: { title: 'Recursos', open: 'Abrir guía ->', blog: 'Idea de ruta para blog: replica aquí los mejores posts como tarjetas enlazando a' },
    ca: { title: 'Recursos', open: 'Obrir guia ->', blog: 'Idea de ruta per al blog: replica aquí els millors posts com a targetes enllaçant a' },
  }[locale]

  const localizedGuides =
    locale === 'en'
      ? guides
      : locale === 'es'
        ? [
            { ...guides[0], title: 'Checklist de preparación RAG', desc: 'Chunking, rerank, citas y puertas de eval antes de prometer respuestas fundamentadas.' },
            { ...guides[1], title: 'Playbook de eval para agentes', desc: 'Sets de regresión, guardrails LLM-as-judge y rúbricas humanas escalables.' },
            { ...guides[2], title: 'Glosario de agentes', desc: 'Lenguaje compartido para memoria, tools, planning y patrones multiagente.' },
            { ...guides[3], title: 'Proof kit', desc: 'Script para grabar demos + plantilla de case page para credibilidad pre-lanzamiento.' },
            { ...guides[4], title: 'Cadencia de contenido', desc: 'Plan de publicación de 8 semanas con dos posts semanales y plantillas reutilizables.' },
            { ...guides[5], title: 'Playbook de outbound', desc: 'Loop semanal de outreach, plantillas y columnas de seguimiento KPI.' },
          ]
        : [
            { ...guides[0], title: 'Checklist de preparació RAG', desc: 'Chunking, rerank, cites i portes d’eval abans de prometre respostes fonamentades.' },
            { ...guides[1], title: "Playbook d'eval per a agents", desc: "Sets de regressió, guardrails LLM-as-judge i rúbriques humanes escalables." },
            { ...guides[2], title: 'Glossari d’agents', desc: 'Llenguatge compartit per a memòria, tools, planning i patrons multiagent.' },
            { ...guides[3], title: 'Proof kit', desc: 'Script per gravar demos + plantilla de case page per a credibilitat prellançament.' },
            { ...guides[4], title: 'Cadència de contingut', desc: 'Pla de publicació de 8 setmanes amb dos posts setmanals i plantilles reutilitzables.' },
            { ...guides[5], title: "Playbook d'outbound", desc: "Loop setmanal d'outreach, plantilles i columnes de seguiment KPI." },
          ]
  return (
    <div className="space-y-10">
      <header>
        <h1 className="font-[family-name:var(--font-display)] text-4xl font-semibold text-slate-900 dark:text-white">{copy.title}</h1>
        <p className="mt-3 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
          Guides and glossary pages you can later back with MDX or a CMS. Newsletter and downloadable templates live under{' '}
          <Link to="/newsletter" className="font-medium text-violet-600 hover:underline dark:text-violet-300">
            Newsletter &amp; tools
          </Link>
          .
        </p>
      </header>
      <ul className="grid gap-5 md:grid-cols-3">
        {localizedGuides.map((g) => (
          <li key={g.to}>
            <Link
              to={g.to}
              className="flex h-full cursor-pointer flex-col rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-violet-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-violet-500/50"
            >
              <g.icon className="h-8 w-8 text-violet-500" aria-hidden />
              <h2 className="mt-4 font-[family-name:var(--font-display)] text-lg font-semibold text-slate-900 dark:text-white">{g.title}</h2>
              <p className="mt-2 flex-1 text-sm text-slate-600 dark:text-slate-400">{g.desc}</p>
              <span className="mt-4 text-sm font-semibold text-violet-600 dark:text-violet-300">{copy.open}</span>
            </Link>
          </li>
        ))}
      </ul>
      <p className="text-sm text-slate-600 dark:text-slate-400">
        {copy.blog} <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">/blog/slug</code> when you add content.
      </p>
    </div>
  )
}
