import { Check, Minus, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/I18nProvider'

const rows = [
  { label: 'Time to first production workflow', inHouse: 'High (hire + ramp)', agency: 'Medium (scoped)', diy: 'Variable (tooling debt)' },
  { label: 'Eval & regression discipline', inHouse: 'You build', agency: 'Packaged', diy: 'Often missing' },
  { label: 'Integration depth (CRM/ITSM)', inHouse: 'Strong if staffed', agency: 'Playbooks', diy: 'Fragmented' },
  { label: 'Vendor diversification', inHouse: 'Your strategy', agency: 'Neutral routing', diy: 'You orchestrate' },
  { label: 'Ongoing operations', inHouse: 'Your on-call', agency: 'Shared / managed', diy: 'You own' },
]

function Cell({ value }: { value: 'yes' | 'partial' | 'no' }) {
  if (value === 'yes') return <Check className="mx-auto h-5 w-5 text-emerald-500" aria-label="Strong" />
  if (value === 'partial') return <Minus className="mx-auto h-5 w-5 text-amber-500" aria-label="Mixed" />
  return <X className="mx-auto h-5 w-5 text-slate-300 dark:text-slate-600" aria-label="Limited" />
}

const matrix: { label: string; inHouse: 'yes' | 'partial' | 'no'; agency: 'yes' | 'partial' | 'no'; diy: 'yes' | 'partial' | 'no' }[] = [
  { label: 'Dedicated agent expertise', inHouse: 'partial', agency: 'yes', diy: 'no' },
  { label: 'Faster initial delivery', inHouse: 'no', agency: 'yes', diy: 'partial' },
  { label: 'Lowest long-run cost (at scale)', inHouse: 'yes', agency: 'partial', diy: 'partial' },
  { label: 'Neutral multi-vendor advice', inHouse: 'partial', agency: 'yes', diy: 'yes' },
]

export function ComparePage() {
  const { locale } = useI18n()
  const copy = {
    en: {
      title: 'Compare approaches',
      body: 'In-house build vs. agency partner vs. DIY tool stacks. Icons are directional—your actual trade-offs depend on team size and risk tolerance.',
      dimension: 'Dimension',
      inHouse: 'In-house',
      agency: 'Agency (Nexus-style)',
      diy: 'DIY SaaS glue',
      glance: 'At-a-glance signals',
      capability: 'Capability',
      legend: 'Legend: check = strong, dash = mixed, X = limited.',
      ready: 'Ready to talk scope?',
      call: 'Book a call',
    },
    es: {
      title: 'Comparar enfoques',
      body: 'Build in-house vs partner de agencia vs stack DIY. Los iconos son orientativos: los trade-offs reales dependen del equipo y del riesgo.',
      dimension: 'Dimensión',
      inHouse: 'In-house',
      agency: 'Agencia (estilo Nexus)',
      diy: 'DIY SaaS',
      glance: 'Señales rápidas',
      capability: 'Capacidad',
      legend: 'Leyenda: check = fuerte, guion = mixto, X = limitado.',
      ready: '¿Listo para definir alcance?',
      call: 'Reservar llamada',
    },
    ca: {
      title: 'Comparar enfocaments',
      body: "Build in-house vs partner d'agència vs stack DIY. Les icones són orientatives: els trade-offs reals depenen de l'equip i del risc.",
      dimension: 'Dimensió',
      inHouse: 'In-house',
      agency: 'Agència (estil Nexus)',
      diy: 'DIY SaaS',
      glance: 'Senyals ràpides',
      capability: 'Capacitat',
      legend: 'Llegenda: check = fort, guió = mixt, X = limitat.',
      ready: "Preparat per definir l'abast?",
      call: 'Reservar trucada',
    },
  }[locale]
  return (
    <div className="space-y-10">
      <header>
        <h1 className="font-[family-name:var(--font-display)] text-4xl font-semibold text-slate-900 dark:text-white">{copy.title}</h1>
        <p className="mt-3 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
          {copy.body}
        </p>
      </header>

      <div className="overflow-x-auto rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead>
            <tr className="border-b border-slate-200 bg-slate-50 text-xs uppercase tracking-wide text-slate-500 dark:border-slate-800 dark:bg-slate-800/50">
              <th className="px-4 py-3 font-semibold">{copy.dimension}</th>
              <th className="px-4 py-3 font-semibold">{copy.inHouse}</th>
              <th className="px-4 py-3 font-semibold">{copy.agency}</th>
              <th className="px-4 py-3 font-semibold">{copy.diy}</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.label} className="border-b border-slate-100 dark:border-slate-800">
                <td className="px-4 py-3 font-medium text-slate-800 dark:text-slate-200">{r.label}</td>
                <td className="px-4 py-3 text-slate-600 dark:text-slate-400">{r.inHouse}</td>
                <td className="px-4 py-3 text-slate-600 dark:text-slate-400">{r.agency}</td>
                <td className="px-4 py-3 text-slate-600 dark:text-slate-400">{r.diy}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <section>
        <h2 className="text-lg font-semibold text-slate-900 dark:text-white">{copy.glance}</h2>
        <div className="mt-4 overflow-x-auto rounded-2xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
          <table className="w-full min-w-[520px] text-sm">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-800">
                <th className="px-4 py-3 text-left font-semibold text-slate-700 dark:text-slate-200">{copy.capability}</th>
                <th className="px-4 py-3 text-center font-semibold text-slate-700 dark:text-slate-200">{copy.inHouse}</th>
                <th className="px-4 py-3 text-center font-semibold text-slate-700 dark:text-slate-200">Agency</th>
                <th className="px-4 py-3 text-center font-semibold text-slate-700 dark:text-slate-200">DIY</th>
              </tr>
            </thead>
            <tbody>
              {matrix.map((m) => (
                <tr key={m.label} className="border-b border-slate-100 dark:border-slate-800">
                  <td className="px-4 py-3 font-medium text-slate-800 dark:text-slate-200">{m.label}</td>
                  <td className="px-4 py-3">
                    <Cell value={m.inHouse === 'yes' ? 'yes' : m.inHouse === 'partial' ? 'partial' : 'no'} />
                  </td>
                  <td className="px-4 py-3">
                    <Cell value={m.agency === 'yes' ? 'yes' : m.agency === 'partial' ? 'partial' : 'no'} />
                  </td>
                  <td className="px-4 py-3">
                    <Cell value={m.diy === 'yes' ? 'yes' : m.diy === 'partial' ? 'partial' : 'no'} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-slate-500">{copy.legend}</p>
      </section>

      <p className="text-sm text-slate-600 dark:text-slate-400">
        {copy.ready}{' '}
        <Link to="/contact" className="font-semibold text-violet-600 hover:underline dark:text-violet-300">
          {copy.call}
        </Link>{' '}
        or read <Link to="/faq" className="font-semibold text-violet-600 hover:underline dark:text-violet-300">FAQ</Link>.
      </p>
    </div>
  )
}
