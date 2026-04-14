import { useState } from 'react'

export function ContactPage() {
  const [sent, setSent] = useState(false)
  return (
    <div className="mx-auto max-w-xl space-y-6">
      <h1 className="font-[family-name:var(--font-display)] text-4xl font-semibold text-slate-900 dark:text-white">Contact</h1>
      <p className="text-slate-600 dark:text-slate-300">Demo form — wire to your CRM or email service. Prefer chat? Use the Magic Chat–style assistant.</p>
      {sent ? (
        <p className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900 dark:border-emerald-900 dark:bg-emerald-950 dark:text-emerald-100">
          Thanks—this is a static demo, so nothing was sent. Connect the form action in your deployment.
        </p>
      ) : (
        <form
          className="space-y-4"
          onSubmit={(e) => {
            e.preventDefault()
            setSent(true)
          }}
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-200">
              Name
            </label>
            <input id="name" name="name" required className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm dark:border-slate-600 dark:bg-slate-900" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-200">
              Work email
            </label>
            <input id="email" name="email" type="email" required className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm dark:border-slate-600 dark:bg-slate-900" />
          </div>
          <div>
            <label htmlFor="notes" className="block text-sm font-medium text-slate-700 dark:text-slate-200">
              What should agents do for you?
            </label>
            <textarea id="notes" name="notes" rows={4} className="mt-1 w-full rounded-xl border border-slate-300 px-3 py-2 text-sm dark:border-slate-600 dark:bg-slate-900" />
          </div>
          <button type="submit" className="w-full cursor-pointer rounded-xl bg-slate-900 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-900">
            Request a call
          </button>
        </form>
      )}
    </div>
  )
}
