import { FileText, Lock, Server, Users } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useI18n } from '../i18n/I18nProvider'

const subprocessors = [
  { name: 'Cloud provider (AWS / Azure / GCP)', purpose: 'Compute, storage, networking', data: 'Customer-configured region' },
  { name: 'Model API vendor(s)', purpose: 'Inference per routing policy', data: 'Prompts/outputs per DPA' },
  { name: 'Observability (e.g. OTel vendor)', purpose: 'Traces, metrics, alerting', data: 'Redacted spans by default' },
]

export function SecurityPage() {
  const { locale } = useI18n()
  const copy = {
    en: {
      title: 'Security & compliance',
      body: 'A starter compliance hub you can extend with PDFs, SOC2 report access, and subprocessors detail. Content is illustrative for this demo site.',
      soc: 'SOC 2 roadmap',
      dpa: 'DPA & data processing',
      dpaCta: 'Request DPA template',
      sub: 'Subprocessors (summary)',
      th1: 'Subprocessor',
      th2: 'Purpose',
      th3: 'Data notes',
      retention: 'Retention & deletion',
    },
    es: {
      title: 'Seguridad y compliance',
      body: 'Hub inicial de compliance que puedes extender con PDFs, acceso al informe SOC2 y detalle de subprocesadores. El contenido es ilustrativo para este sitio demo.',
      soc: 'Roadmap SOC 2',
      dpa: 'DPA y tratamiento de datos',
      dpaCta: 'Solicitar plantilla DPA',
      sub: 'Subprocesadores (resumen)',
      th1: 'Subprocesador',
      th2: 'Propósito',
      th3: 'Notas de datos',
      retention: 'Retención y eliminación',
    },
    ca: {
      title: 'Seguretat i compliance',
      body: 'Hub inicial de compliance que pots ampliar amb PDFs, accés a informe SOC2 i detall de subprocesadors. El contingut és il·lustratiu per a aquest lloc demo.',
      soc: 'Roadmap SOC 2',
      dpa: 'DPA i tractament de dades',
      dpaCta: 'Sol·licitar plantilla DPA',
      sub: 'Subprocesadors (resum)',
      th1: 'Subprocesador',
      th2: 'Propòsit',
      th3: 'Notes de dades',
      retention: 'Retenció i eliminació',
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

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
          <div className="flex items-center gap-2 font-semibold text-slate-900 dark:text-white">
            <Lock className="h-5 w-5 text-violet-500" aria-hidden />
            {copy.soc}
          </div>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-600 dark:text-slate-300">
            <li>Type II readiness: controls mapped, evidence collection cadence quarterly.</li>
            <li>Penetration test window: scheduled annually + after major architecture changes.</li>
            <li>Customer audit support: architecture sessions and log exports under NDA.</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
          <div className="flex items-center gap-2 font-semibold text-slate-900 dark:text-white">
            <FileText className="h-5 w-5 text-emerald-500" aria-hidden />
            {copy.dpa}
          </div>
          <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
            Standard DPA includes subprocessors disclosure, SCCs where applicable, and subprocessors change notification (30 days). Attach your retention schedule
            per workload—agents should not retain longer than the business record policy.
          </p>
          <Link to="/contact" className="mt-4 inline-block cursor-pointer text-sm font-semibold text-violet-600 hover:underline dark:text-violet-300">
            {copy.dpaCta}
          </Link>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
        <div className="flex items-center gap-2 font-semibold text-slate-900 dark:text-white">
          <Server className="h-5 w-5 text-sky-500" aria-hidden />
          {copy.sub}
        </div>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[520px] text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-xs uppercase tracking-wide text-slate-500 dark:border-slate-700">
                <th className="py-2 pr-4 font-semibold">{copy.th1}</th>
                <th className="py-2 pr-4 font-semibold">{copy.th2}</th>
                <th className="py-2 font-semibold">{copy.th3}</th>
              </tr>
            </thead>
            <tbody>
              {subprocessors.map((row) => (
                <tr key={row.name} className="border-b border-slate-100 dark:border-slate-800">
                  <td className="py-3 pr-4 font-medium text-slate-800 dark:text-slate-200">{row.name}</td>
                  <td className="py-3 pr-4 text-slate-600 dark:text-slate-400">{row.purpose}</td>
                  <td className="py-3 text-slate-600 dark:text-slate-400">{row.data}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
        <div className="flex items-center gap-2 font-semibold text-slate-900 dark:text-white">
          <Users className="h-5 w-5 text-amber-500" aria-hidden />
          {copy.retention}
        </div>
        <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
          Default agent memory TTL: 30 days rolling (configurable). Customer-initiated deletion requests processed within 30 days unless legal hold applies.
          Backups rotate on provider defaults; restores are tested semi-annually.
        </p>
      </section>
    </div>
  )
}
