import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FileDown, Mail, Sparkles } from 'lucide-react'

export function NewsletterPage() {
  const [ok, setOk] = useState(false)
  return (
    <div className="space-y-10">
      <header>
        <h1 className="font-[family-name:var(--font-display)] text-4xl font-semibold text-slate-900 dark:text-white">Newsletter &amp; lead magnets</h1>
        <p className="mt-3 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
          Capture emails with a monthly “agent ops” note, and route high-intent visitors to downloadable templates and calculators.
        </p>
      </header>

      <section className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
          <div className="flex items-center gap-2 font-semibold text-slate-900 dark:text-white">
            <Mail className="h-5 w-5 text-violet-500" aria-hidden />
            Subscribe (demo)
          </div>
          {ok ? (
            <p className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900 dark:border-emerald-900 dark:bg-emerald-950 dark:text-emerald-100">
              Thanks—hook this form to your ESP (Customer.io, HubSpot, etc.).
            </p>
          ) : (
            <form
              className="mt-4 space-y-3"
              onSubmit={(e) => {
                e.preventDefault()
                setOk(true)
              }}
            >
              <label htmlFor="nl-email" className="sr-only">
                Email
              </label>
              <input
                id="nl-email"
                name="email"
                type="email"
                required
                placeholder="you@company.com"
                className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm dark:border-slate-600 dark:bg-slate-950"
              />
              <button type="submit" className="w-full cursor-pointer rounded-xl bg-violet-600 py-2.5 text-sm font-semibold text-white transition hover:bg-violet-500">
                Join the list
              </button>
            </form>
          )}
        </div>

        <div className="rounded-2xl border border-violet-200 bg-violet-50/80 p-6 dark:border-violet-900/50 dark:bg-violet-950/30">
          <div className="flex items-center gap-2 font-semibold text-slate-900 dark:text-violet-100">
            <Sparkles className="h-5 w-5 text-violet-600 dark:text-violet-300" aria-hidden />
            Lead magnets
          </div>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <Link to="/tools/agent-audit" className="inline-flex cursor-pointer items-center gap-2 font-medium text-violet-700 hover:underline dark:text-violet-300">
                <FileDown className="h-4 w-4" aria-hidden />
                Agent readiness audit (printable)
              </Link>
            </li>
            <li>
              <Link to="/tools/roi-calculator" className="inline-flex cursor-pointer items-center gap-2 font-medium text-violet-700 hover:underline dark:text-violet-300">
                <FileDown className="h-4 w-4" aria-hidden />
                ROI calculator (interactive)
              </Link>
            </li>
            <li>
              <Link to="/resources/rag-checklist" className="font-medium text-violet-700 hover:underline dark:text-violet-300">
                RAG checklist (on-site)
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}
