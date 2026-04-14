import { Link } from 'react-router-dom'
import { useI18n } from '../../i18n/I18nProvider'

const items = [
  'Source inventory: systems of record vs. stale exports',
  'Legal review for copyright, PII, and licensing',
  'Chunking strategy matched to document types (tables vs prose)',
  'Metadata filters (tenant, product line, date)',
  'Hybrid retrieval baseline before “vector only”',
  'Reranker in the loop for top-k refinement',
  'Citation UX: inline anchors + jump targets',
  'Offline eval: precision/recall on labeled Q&A pairs',
  'Online eval: thumbs + escalation taxonomy',
  'Latency & cost budgets per query class',
  'Fallback when retrieval confidence is low',
  'Drift monitoring when corpus updates',
]

export function RagChecklistPage() {
  const { locale } = useI18n()
  const copy = {
    en: {
      back: '← Resources',
      title: 'RAG readiness checklist',
      body: 'Use this during discovery workshops. Check boxes in your PM tool; this page is a static reference for the demo site.',
      pair: 'Pair with',
      signal: 'Signal Retrieval',
      audit: 'Agent audit template',
    },
    es: {
      back: '← Recursos',
      title: 'Checklist de preparación RAG',
      body: 'Úsalo en workshops de discovery. Marca checks en tu herramienta PM; esta página es referencia estática para la demo.',
      pair: 'Combínalo con',
      signal: 'Signal Retrieval',
      audit: 'Plantilla de auditoría de agentes',
    },
    ca: {
      back: '← Recursos',
      title: 'Checklist de preparació RAG',
      body: "Fes-lo servir en workshops de discovery. Marca checks a la teva eina PM; aquesta pàgina és una referència estàtica per a la demo.",
      pair: 'Combina-ho amb',
      signal: 'Signal Retrieval',
      audit: "Plantilla d'auditoria d'agents",
    },
  }[locale]
  return (
    <article className="space-y-8">
      <Link to="/resources" className="text-sm font-medium text-violet-600 hover:underline dark:text-violet-300">
        {copy.back}
      </Link>
      <header>
        <h1 className="font-[family-name:var(--font-display)] text-3xl font-semibold text-slate-900 dark:text-white">{copy.title}</h1>
        <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
          {copy.body}
        </p>
      </header>
      <ol className="list-decimal space-y-3 pl-5 text-sm text-slate-700 dark:text-slate-300">
        {items.map((t) => (
          <li key={t}>{t}</li>
        ))}
      </ol>
      <p className="text-sm text-slate-600 dark:text-slate-400">
        {copy.pair} <Link to="/products/retrieval-rag" className="font-medium text-violet-600 hover:underline dark:text-violet-300">{copy.signal}</Link> and{' '}
        <Link to="/tools/agent-audit" className="font-medium text-violet-600 hover:underline dark:text-violet-300">{copy.audit}</Link>.
      </p>
    </article>
  )
}
