import { useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import { useI18n } from '../../i18n/I18nProvider'

export function RoiCalculatorPage() {
  const { locale } = useI18n()
  const copy = {
    en: {
      back: '← Newsletter & tools',
      title: 'ROI calculator (demo)',
      body: 'Illustrative labor savings from partial automation—tune assumptions for your CFO narrative. Not financial advice.',
      tickets: 'Tickets / month',
      minutes: 'Minutes per ticket (human)',
      hourly: 'Fully loaded hourly cost (USD)',
      coverage: 'Agent coverage (% of workload)',
      savings: 'Estimated monthly labor savings',
      formula: 'Formula: tickets × minutes ÷ 60 × hourly rate × coverage. Add model spend and implementation amortization separately.',
      validate: 'Validate with our team',
    },
    es: {
      back: '← Newsletter y tools',
      title: 'Calculadora ROI (demo)',
      body: 'Ahorro laboral ilustrativo por automatización parcial. Ajusta supuestos para tu narrativa con CFO. No es asesoría financiera.',
      tickets: 'Tickets / mes',
      minutes: 'Minutos por ticket (humano)',
      hourly: 'Coste por hora total (USD)',
      coverage: 'Cobertura del agente (% de carga)',
      savings: 'Ahorro laboral mensual estimado',
      formula: 'Fórmula: tickets × minutos ÷ 60 × coste hora × cobertura. Añade gasto de modelo y amortización de implementación por separado.',
      validate: 'Validar con nuestro equipo',
    },
    ca: {
      back: '← Newsletter i tools',
      title: 'Calculadora ROI (demo)',
      body: "Estalvi laboral il·lustratiu per automatització parcial. Ajusta supòsits per a la narrativa amb el CFO. No és assessorament financer.",
      tickets: 'Tiquets / mes',
      minutes: 'Minuts per tiquet (humà)',
      hourly: 'Cost per hora total (USD)',
      coverage: "Cobertura de l'agent (% de càrrega)",
      savings: 'Estalvi laboral mensual estimat',
      formula: "Fórmula: tiquets × minuts ÷ 60 × cost hora × cobertura. Afegeix despesa de model i amortització d'implementació per separat.",
      validate: 'Validar amb el nostre equip',
    },
  }[locale]
  const [tickets, setTickets] = useState(2000)
  const [minutes, setMinutes] = useState(12)
  const [hourly, setHourly] = useState(45)
  const [coverage, setCoverage] = useState(35)

  const savings = useMemo(() => {
    const hoursPerMonth = (tickets * minutes) / 60
    const labor = hoursPerMonth * hourly
    return Math.round((labor * coverage) / 100)
  }, [tickets, minutes, hourly, coverage])

  return (
    <article className="space-y-8">
      <Link to="/newsletter" className="text-sm font-medium text-violet-600 hover:underline dark:text-violet-300">
        {copy.back}
      </Link>
      <header>
        <h1 className="font-[family-name:var(--font-display)] text-3xl font-semibold text-slate-900 dark:text-white">{copy.title}</h1>
        <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
          {copy.body}
        </p>
      </header>

      <div className="grid gap-8 rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 lg:grid-cols-2">
        <div className="space-y-4">
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
            {copy.tickets}
            <input
              type="number"
              min={0}
              value={tickets}
              onChange={(e) => setTickets(Number(e.target.value))}
              className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm dark:border-slate-600 dark:bg-slate-950"
            />
          </label>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
            {copy.minutes}
            <input
              type="number"
              min={0}
              value={minutes}
              onChange={(e) => setMinutes(Number(e.target.value))}
              className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm dark:border-slate-600 dark:bg-slate-950"
            />
          </label>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
            {copy.hourly}
            <input
              type="number"
              min={0}
              value={hourly}
              onChange={(e) => setHourly(Number(e.target.value))}
              className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm dark:border-slate-600 dark:bg-slate-950"
            />
          </label>
          <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
            {copy.coverage}
            <input
              type="range"
              min={5}
              max={80}
              value={coverage}
              onChange={(e) => setCoverage(Number(e.target.value))}
              className="mt-2 w-full cursor-pointer"
            />
            <span className="text-xs text-slate-500">{coverage}%</span>
          </label>
        </div>
        <div className="flex flex-col justify-center rounded-2xl bg-gradient-to-br from-violet-600 to-fuchsia-600 p-6 text-white">
          <p className="text-sm font-medium text-white/90">{copy.savings}</p>
          <p className="mt-2 font-[family-name:var(--font-display)] text-4xl font-semibold">${savings.toLocaleString()}</p>
          <p className="mt-3 text-xs text-white/80">
            {copy.formula}
          </p>
          <Link
            to="/contact"
            className="mt-6 inline-flex cursor-pointer justify-center rounded-xl bg-white px-4 py-2 text-sm font-semibold text-violet-700 transition hover:bg-violet-100"
          >
            {copy.validate}
          </Link>
        </div>
      </div>
    </article>
  )
}
