import { Link } from 'react-router-dom'
import { useI18n } from '../../i18n/I18nProvider'

const terms: { term: string; def: string }[] = [
  { term: 'Agent', def: 'A system that plans, calls tools, and iterates toward a goal—not just a single-shot completion.' },
  { term: 'Tool / function calling', def: 'Structured API the model can invoke; must be validated, authenticated, and rate-limited.' },
  { term: 'MCP', def: 'Model Context Protocol pattern for composable tool servers and context providers.' },
  { term: 'RAG', def: 'Retrieval-augmented generation: fetch evidence, then generate with citations.' },
  { term: 'Memory (episodic)', def: 'Conversation- or session-scoped recall, often with TTL and PII rules.' },
  { term: 'Memory (semantic)', def: 'Longer-lived embeddings/graphs for organizational knowledge.' },
  { term: 'Planner', def: 'Component that decomposes tasks and selects tools; may be explicit code or model-guided.' },
  { term: 'Supervisor', def: 'Agent that routes to specialists and merges results under policy constraints.' },
  { term: 'Human-in-the-loop', def: 'Mandatory approval or edit step before irreversible actions.' },
  { term: 'Eval harness', def: 'Automated tests + dashboards measuring quality, safety, and cost over time.' },
]

export function GlossaryPage() {
  const { locale } = useI18n()
  const copy = {
    en: {
      back: '← Resources',
      title: 'Agents glossary',
      body: 'Shared vocabulary for sales, engineering, and compliance conversations.',
    },
    es: {
      back: '← Recursos',
      title: 'Glosario de agentes',
      body: 'Vocabulario compartido para conversaciones de ventas, ingeniería y compliance.',
    },
    ca: {
      back: '← Recursos',
      title: "Glossari d'agents",
      body: 'Vocabulari compartit per a converses de vendes, enginyeria i compliance.',
    },
  }[locale]
  return (
    <article className="space-y-8">
      <Link to="/resources" className="text-sm font-medium text-violet-600 hover:underline dark:text-violet-300">
        {copy.back}
      </Link>
      <header>
        <h1 className="font-[family-name:var(--font-display)] text-3xl font-semibold text-slate-900 dark:text-white">{copy.title}</h1>
        <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">{copy.body}</p>
      </header>
      <dl className="space-y-4">
        {terms.map((row) => (
          <div key={row.term} className="rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
            <dt className="font-semibold text-slate-900 dark:text-white">{row.term}</dt>
            <dd className="mt-1 text-sm text-slate-600 dark:text-slate-300">{row.def}</dd>
          </div>
        ))}
      </dl>
    </article>
  )
}
