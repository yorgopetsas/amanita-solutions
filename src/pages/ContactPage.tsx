import { type FormEvent, useState } from 'react'
import { getBookingUrl, submitLead } from '../lib/leadCapture'
import { trackEvent } from '../lib/analytics'

export function ContactPage() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  const bookingUrl = getBookingUrl()

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const name = String(form.get('name') || '')
    const email = String(form.get('email') || '')
    const notes = String(form.get('notes') || '')
    setLoading(true)
    const result = await submitLead({ source: 'contact-page', name, email, message: notes })
    trackEvent('lead_submitted', { source: 'contact-page', mode: result.mode })
    setLoading(false)
    setSent(true)
  }

  return (
    <div className="mx-auto max-w-xl space-y-6">
      <h1 className="font-[family-name:var(--font-display)] text-4xl font-semibold text-slate-900 dark:text-white">Contact</h1>
      <p className="text-slate-600 dark:text-slate-300">
        Lead form supports webhook mode via <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">VITE_LEAD_WEBHOOK_URL</code>. Booking link uses{' '}
        <code className="rounded bg-slate-100 px-1 dark:bg-slate-800">VITE_CALENDLY_URL</code>.
      </p>
      <a
        href={bookingUrl}
        target="_blank"
        rel="noreferrer"
        onClick={() => trackEvent('booking_clicked', { source: 'contact-page' })}
        className="inline-flex cursor-pointer rounded-xl border border-violet-300 px-4 py-2 text-sm font-semibold text-violet-900 transition hover:border-violet-500 dark:border-violet-700 dark:text-violet-200"
      >
        Book directly in Calendly
      </a>
      {sent ? (
        <p className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900 dark:border-emerald-900 dark:bg-emerald-950 dark:text-emerald-100">
          Thanks. Lead captured successfully (live webhook if configured, otherwise demo mode).
        </p>
      ) : (
        <form className="space-y-4" onSubmit={onSubmit}>
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
          <button
            type="submit"
            disabled={loading}
            className="w-full cursor-pointer rounded-xl bg-slate-900 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 disabled:cursor-not-allowed disabled:opacity-70 dark:bg-white dark:text-slate-900"
          >
            {loading ? 'Submitting...' : 'Request a call'}
          </button>
        </form>
      )}
    </div>
  )
}
