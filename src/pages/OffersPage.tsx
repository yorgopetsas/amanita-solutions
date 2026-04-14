import { CheckCircle2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { icpProfiles, productizedOffers } from '../data/offers'
import { useI18n } from '../i18n/I18nProvider'

export function OffersPage() {
  const { locale } = useI18n()
  const copy = {
    en: {
      badge: 'Pre-launch core offers',
      title: 'Productized service ladder',
      body: 'Structured for a hybrid launch: one discovery entry point, one build package, and one monthly operations retainer.',
      pains: 'Main pains',
      outcomes: 'Expected outcomes',
      timeline: 'Timeline',
      investment: 'Investment',
      deliverables: 'Deliverables',
      success: 'Success metrics',
      next: 'Next conversion step',
      nextBody: 'Use Discovery Sprint as the default call-to-action in early outreach, then graduate qualified leads into MVP Build.',
      pricing: 'View pricing page',
      book: 'Book discovery call',
    },
    es: {
      badge: 'Ofertas core pre-lanzamiento',
      title: 'Escalera de servicios productizados',
      body: 'Estructurado para un lanzamiento híbrido: una entrada de discovery, un paquete de build y un retainer mensual de operaciones.',
      pains: 'Principales dolores',
      outcomes: 'Resultados esperados',
      timeline: 'Plazo',
      investment: 'Inversión',
      deliverables: 'Entregables',
      success: 'Métricas de éxito',
      next: 'Siguiente paso de conversión',
      nextBody: 'Usa Discovery Sprint como llamada a la acción principal en el outreach inicial y luego pasa leads cualificados a MVP Build.',
      pricing: 'Ver página de precios',
      book: 'Reservar llamada de discovery',
    },
    ca: {
      badge: 'Ofertes core prellançament',
      title: 'Escala de serveis productitzats',
      body: "Estructurat per a un llançament híbrid: una entrada de discovery, un paquet de build i un retainer mensual d'operacions.",
      pains: 'Dolors principals',
      outcomes: 'Resultats esperats',
      timeline: 'Termini',
      investment: 'Inversió',
      deliverables: 'Entregables',
      success: 'Mètriques d’èxit',
      next: 'Següent pas de conversió',
      nextBody: 'Fes servir Discovery Sprint com a CTA principal en el primer outreach i després porta els leads qualificats cap a MVP Build.',
      pricing: 'Veure pàgina de preus',
      book: 'Reservar trucada de discovery',
    },
  }[locale]

  const localizedIcp =
    locale === 'en'
      ? icpProfiles
      : locale === 'es'
        ? [
            {
              ...icpProfiles[0],
              title: 'Equipos SMB con operaciones intensivas',
              pains: ['Triage manual de tickets', 'Seguimiento lento de clientes', 'Sin memoria de proceso consistente'],
              outcomes: ['Mejor tiempo de primera respuesta', 'Menor carga repetitiva', 'Automatización trazable con fallback humano'],
            },
            {
              ...icpProfiles[1],
              title: 'Agencias y operadores fraccionales',
              pains: ['Implementaciones puntuales', 'Handoffs difíciles', 'Difícil demostrar ROI rápido'],
              outcomes: ['Plantillas de entrega reutilizables', 'Playbooks de handoff seguros para cliente', 'Reporting mensual para retainer'],
            },
          ]
        : [
            {
              ...icpProfiles[0],
              title: "Equips SMB amb operacions intensives",
              pains: ['Triage manual de tiquets', 'Seguiment lent de clients', 'Sense memòria de procés consistent'],
              outcomes: ['Millor temps de primera resposta', 'Menys càrrega repetitiva', 'Automatització traçable amb fallback humà'],
            },
            {
              ...icpProfiles[1],
              title: 'Agències i operadors fraccionals',
              pains: ['Implementacions puntuals', 'Handoffs difícils', 'Difícil demostrar ROI ràpid'],
              outcomes: ['Plantilles de lliurament reutilitzables', 'Playbooks de handoff segurs per al client', 'Reporting mensual per a retainer'],
            },
          ]

  const localizedOffers =
    locale === 'en'
      ? productizedOffers
      : locale === 'es'
        ? [
            {
              ...productizedOffers[0],
              name: 'Agent Discovery Sprint',
              fit: 'Ideal para equipos que deciden qué automatizar primero',
              timeline: '10 días laborables',
              summary:
                'Paquete de discovery enfocado para mapear workflows, límites de riesgo y KPIs medibles antes de empezar a construir.',
              deliverables: [
                'Mapa de workflows + matriz de priorización',
                'Score de preparación de datos y herramientas',
                'Roadmap de implementación a 90 días',
              ],
              successMetrics: ['Lista priorizada de oportunidades aprobada', 'Línea base de KPI documentada', 'Alineación de stakeholders por función'],
            },
            {
              ...productizedOffers[1],
              name: 'MVP Agent Build',
              fit: 'Ideal para un workflow de alto valor en producción',
              timeline: '3-6 semanas',
              summary:
                'Implementación orientada a producción de un workflow de agente con retrieval, llamadas a herramientas y escalado humano, con guardrails de lanzamiento.',
              deliverables: ['Flujo de agente operativo + UI de operador', 'Suite de evaluación y baseline de regresión', 'Runbook + procedimiento de rollback'],
              successMetrics: ['Tiempo a primer valor menor de 45 días', 'Tasa de deflexión del workflow objetivo', 'Calidad de escalado y cumplimiento de SLA'],
            },
            {
              ...productizedOffers[2],
              name: 'Agent Ops Retainer',
              fit: 'Ideal para optimización continua y escalado multi-workflow',
              timeline: 'Compromiso mensual',
              summary:
                'Monitorización continua, mejoras de prompts y tools, revisiones de evaluación e iteración de roadmap para mejorar rendimiento del agente en el tiempo.',
              deliverables: ['Reporte mensual de calidad + coste', 'Backlog de tareas de optimización', 'Respuesta a incidentes y gestión de cambios'],
              successMetrics: ['Mejora sostenida del pass-rate de evals', 'Menor coste por tarea exitosa', 'Menor recurrencia de incidentes'],
            },
          ]
        : [
            {
              ...productizedOffers[0],
              name: 'Agent Discovery Sprint',
              fit: 'Ideal per a equips que decideixen què automatitzar primer',
              timeline: '10 dies laborables',
              summary:
                'Paquet de discovery enfocat per mapar workflows, límits de risc i KPIs mesurables abans de començar la construcció.',
              deliverables: [
                'Mapa de workflows + matriu de priorització',
                "Score de preparació de dades i eines",
                "Roadmap d'implementació a 90 dies",
              ],
              successMetrics: ["Llista prioritzada d'oportunitats aprovada", 'Línia base de KPI documentada', "Alineació d'stakeholders per funció"],
            },
            {
              ...productizedOffers[1],
              name: 'MVP Agent Build',
              fit: 'Ideal per a un workflow de gran valor en producció',
              timeline: '3-6 setmanes',
              summary:
                "Implementació orientada a producció d'un workflow d'agent amb retrieval, crides a eines i escalat humà, amb guardrails de llançament.",
              deliverables: ["Flux d'agent operatiu + UI d'operador", "Suite d'avaluació i baseline de regressió", 'Runbook + procediment de rollback'],
              successMetrics: ['Temps a primer valor inferior a 45 dies', 'Taxa de deflexió del workflow objectiu', "Qualitat d'escalat i compliment d'SLA"],
            },
            {
              ...productizedOffers[2],
              name: 'Agent Ops Retainer',
              fit: 'Ideal per a optimització contínua i escalat multi-workflow',
              timeline: 'Compromís mensual',
              summary:
                "Monitoratge continu, millores de prompts i tools, revisions d'avaluació i iteració del roadmap per millorar el rendiment de l'agent.",
              deliverables: ['Informe mensual de qualitat + cost', "Backlog de tasques d'optimització", "Resposta a incidents i gestió de canvis"],
              successMetrics: ["Millora sostinguda del pass-rate d'evals", 'Menor cost per tasca exitosa', "Menor recurrència d'incidents"],
            },
          ]

  return (
    <div className="space-y-12" data-no-auto-translate="true">
      <header>
        <p className="text-xs font-semibold uppercase tracking-wide text-violet-600 dark:text-violet-300">{copy.badge}</p>
        <h1 className="mt-2 font-[family-name:var(--font-display)] text-4xl font-semibold text-slate-900 dark:text-white">{copy.title}</h1>
        <p className="mt-3 max-w-3xl text-lg text-slate-600 dark:text-slate-300">
          {copy.body}
        </p>
      </header>

      <section className="grid gap-5 md:grid-cols-2">
        {localizedIcp.map((icp) => (
          <article key={icp.id} className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
            <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-slate-900 dark:text-white">{icp.title}</h2>
            <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-slate-500">{copy.pains}</p>
            <ul className="mt-2 space-y-2 text-sm text-slate-600 dark:text-slate-300">
              {icp.pains.map((p) => (
                <li key={p}>• {p}</li>
              ))}
            </ul>
            <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-slate-500">{copy.outcomes}</p>
            <ul className="mt-2 space-y-2 text-sm text-emerald-700 dark:text-emerald-300">
              {icp.outcomes.map((o) => (
                <li key={o}>• {o}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        {localizedOffers.map((offer) => (
          <article key={offer.slug} className="flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
            <h3 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-slate-900 dark:text-white">{offer.name}</h3>
            <p className="mt-2 text-sm text-violet-700 dark:text-violet-300">{offer.fit}</p>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">{offer.summary}</p>
            <div className="mt-4 rounded-xl bg-slate-50 p-3 text-sm dark:bg-slate-800/60">
              <p className="font-semibold text-slate-800 dark:text-slate-100">
                {copy.timeline}: {offer.timeline}
              </p>
              <p className="text-slate-600 dark:text-slate-300">
                {copy.investment}: {offer.priceBand}
              </p>
            </div>
            <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-slate-500">{copy.deliverables}</p>
            <ul className="mt-2 space-y-2 text-sm text-slate-600 dark:text-slate-300">
              {offer.deliverables.map((d) => (
                <li key={d} className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-500" aria-hidden />
                  {d}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-slate-500">{copy.success}</p>
            <ul className="mt-2 space-y-1 text-sm text-slate-600 dark:text-slate-300">
              {offer.successMetrics.map((m) => (
                <li key={m}>• {m}</li>
              ))}
            </ul>
          </article>
        ))}
      </section>

      <section className="rounded-2xl border border-violet-200 bg-violet-50/70 p-6 dark:border-violet-900/50 dark:bg-violet-950/30">
        <h2 className="font-semibold text-slate-900 dark:text-violet-100">{copy.next}</h2>
        <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">
          {copy.nextBody}
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <Link to="/pricing" className="cursor-pointer rounded-xl bg-violet-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-violet-500">
            {copy.pricing}
          </Link>
          <Link to="/contact" className="cursor-pointer rounded-xl border border-violet-300 px-4 py-2 text-sm font-semibold text-violet-800 transition hover:border-violet-500 dark:text-violet-100">
            {copy.book}
          </Link>
        </div>
      </section>
    </div>
  )
}
