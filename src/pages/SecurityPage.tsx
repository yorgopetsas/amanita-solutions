import { FileText, Lock, Server, Users } from 'lucide-react'
import { Link } from 'react-router-dom'

const subprocessors = [
  { name: 'Cloud provider (AWS / Azure / GCP)', purpose: 'Compute, storage, networking', data: 'Customer-configured region' },
  { name: 'Model API vendor(s)', purpose: 'Inference per routing policy', data: 'Prompts/outputs per DPA' },
  { name: 'Observability (e.g. OTel vendor)', purpose: 'Traces, metrics, alerting', data: 'Redacted spans by default' },
]

export function SecurityPage() {
  return (
    <div className="space-y-10">
      <header>
        <h1 className="font-[family-name:var(--font-display)] text-4xl font-semibold text-slate-900 dark:text-white">Security &amp; compliance</h1>
        <p className="mt-3 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
          A starter compliance hub you can extend with PDFs, SOC2 report access, and subprocessors detail. Content is illustrative for this demo site.
        </p>
      </header>

      <section className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
          <div className="flex items-center gap-2 font-semibold text-slate-900 dark:text-white">
            <Lock className="h-5 w-5 text-violet-500" aria-hidden />
            SOC 2 roadmap
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
            DPA &amp; data processing
          </div>
          <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
            Standard DPA includes subprocessors disclosure, SCCs where applicable, and subprocessors change notification (30 days). Attach your retention schedule
            per workload—agents should not retain longer than the business record policy.
          </p>
          <Link to="/contact" className="mt-4 inline-block cursor-pointer text-sm font-semibold text-violet-600 hover:underline dark:text-violet-300">
            Request DPA template
          </Link>
        </div>
      </section>

      <section className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
        <div className="flex items-center gap-2 font-semibold text-slate-900 dark:text-white">
          <Server className="h-5 w-5 text-sky-500" aria-hidden />
          Subprocessors (summary)
        </div>
        <div className="mt-4 overflow-x-auto">
          <table className="w-full min-w-[520px] text-left text-sm">
            <thead>
              <tr className="border-b border-slate-200 text-xs uppercase tracking-wide text-slate-500 dark:border-slate-700">
                <th className="py-2 pr-4 font-semibold">Subprocessor</th>
                <th className="py-2 pr-4 font-semibold">Purpose</th>
                <th className="py-2 font-semibold">Data notes</th>
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
          Retention &amp; deletion
        </div>
        <p className="mt-4 text-sm text-slate-600 dark:text-slate-300">
          Default agent memory TTL: 30 days rolling (configurable). Customer-initiated deletion requests processed within 30 days unless legal hold applies.
          Backups rotate on provider defaults; restores are tested semi-annually.
        </p>
      </section>
    </div>
  )
}
