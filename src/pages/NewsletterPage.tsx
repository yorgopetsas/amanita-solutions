import { type FormEvent, useState } from 'react'
import { Link } from 'react-router-dom'
import { FileDown, Mail, Sparkles } from 'lucide-react'
import { submitLead } from '../lib/leadCapture'
import { trackEvent } from '../lib/analytics'
import { useI18n } from '../i18n/I18nProvider'

export function NewsletterPage() {
  const [ok, setOk] = useState(false)
  const [loading, setLoading] = useState(false)
  const { locale } = useI18n()
  const copy = {
    en: {
      title: 'Newsletter & lead magnets',
      body: 'Capture emails with a monthly "agent ops" note, and route high-intent visitors to downloadable templates and calculators.',
      subscribe: 'Subscribe (demo)',
      thanks: 'Thanks. Subscription captured (live webhook if configured, otherwise demo mode).',
      email: 'Email',
      placeholder: 'you@company.com',
      submitting: 'Submitting...',
      join: 'Join the list',
      magnets: 'Lead magnets',
      audit: 'Agent readiness audit (printable)',
      roi: 'ROI calculator (interactive)',
      rag: 'RAG checklist (on-site)',
      cadence: '8-week content cadence',
      outbound: 'Outbound playbook',
    },
    es: {
      title: 'Newsletter y lead magnets',
      body: 'Captura emails con una nota mensual de "agent ops" y dirige visitantes de alta intención hacia plantillas y calculadoras descargables.',
      subscribe: 'Suscribirse (demo)',
      thanks: 'Gracias. Suscripción capturada (webhook en vivo si está configurado, de lo contrario modo demo).',
      email: 'Email',
      placeholder: 'tu@empresa.com',
      submitting: 'Enviando...',
      join: 'Unirme a la lista',
      magnets: 'Lead magnets',
      audit: 'Auditoría de preparación de agentes (imprimible)',
      roi: 'Calculadora ROI (interactiva)',
      rag: 'Checklist RAG (en sitio)',
      cadence: 'Cadencia de contenido de 8 semanas',
      outbound: 'Playbook de outbound',
    },
    ca: {
      title: 'Newsletter i lead magnets',
      body: 'Capta emails amb una nota mensual d’"agent ops" i envia visitants d’alta intenció cap a plantilles i calculadores descarregables.',
      subscribe: 'Subscriure (demo)',
      thanks: 'Gràcies. Subscripció capturada (webhook en viu si està configurat, altrament mode demo).',
      email: 'Email',
      placeholder: 'tu@empresa.com',
      submitting: 'Enviant...',
      join: "Uneix-me a la llista",
      magnets: 'Lead magnets',
      audit: "Auditoria de preparació d'agents (imprimible)",
      roi: 'Calculadora ROI (interactiva)',
      rag: 'Checklist RAG (al web)',
      cadence: 'Cadència de contingut de 8 setmanes',
      outbound: "Playbook d'outbound",
    },
  }[locale]

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const email = String(form.get('email') || '')
    setLoading(true)
    const result = await submitLead({ source: 'newsletter', email, message: 'newsletter-subscription' })
    trackEvent('newsletter_subscribed', { mode: result.mode })
    setLoading(false)
    setOk(true)
  }

  return (
    <div className="space-y-10" data-no-auto-translate="true">
      <header>
        <h1 className="font-[family-name:var(--font-display)] text-4xl font-semibold text-slate-900 dark:text-white">{copy.title}</h1>
        <p className="mt-3 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
          {copy.body}
        </p>
      </header>

      <section className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
          <div className="flex items-center gap-2 font-semibold text-slate-900 dark:text-white">
            <Mail className="h-5 w-5 text-violet-500" aria-hidden />
            {copy.subscribe}
          </div>
          {ok ? (
            <p className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-900 dark:border-emerald-900 dark:bg-emerald-950 dark:text-emerald-100">
              {copy.thanks}
            </p>
          ) : (
            <form className="mt-4 space-y-3" onSubmit={onSubmit}>
              <label htmlFor="nl-email" className="sr-only">
                {copy.email}
              </label>
              <input
                id="nl-email"
                name="email"
                type="email"
                required
                placeholder={copy.placeholder}
                className="w-full rounded-xl border border-slate-300 px-3 py-2 text-sm dark:border-slate-600 dark:bg-slate-950"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full cursor-pointer rounded-xl bg-violet-600 py-2.5 text-sm font-semibold text-white transition hover:bg-violet-500 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {loading ? copy.submitting : copy.join}
              </button>
            </form>
          )}
        </div>

        <div className="rounded-2xl border border-violet-200 bg-violet-50/80 p-6 dark:border-violet-900/50 dark:bg-violet-950/30">
          <div className="flex items-center gap-2 font-semibold text-slate-900 dark:text-violet-100">
            <Sparkles className="h-5 w-5 text-violet-600 dark:text-violet-300" aria-hidden />
            {copy.magnets}
          </div>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <Link to="/tools/agent-audit" className="inline-flex cursor-pointer items-center gap-2 font-medium text-violet-700 hover:underline dark:text-violet-300">
                <FileDown className="h-4 w-4" aria-hidden />
                {copy.audit}
              </Link>
            </li>
            <li>
              <Link to="/tools/roi-calculator" className="inline-flex cursor-pointer items-center gap-2 font-medium text-violet-700 hover:underline dark:text-violet-300">
                <FileDown className="h-4 w-4" aria-hidden />
                {copy.roi}
              </Link>
            </li>
            <li>
              <Link to="/resources/rag-checklist" className="font-medium text-violet-700 hover:underline dark:text-violet-300">
                {copy.rag}
              </Link>
            </li>
            <li>
              <Link to="/prelaunch/content-cadence" className="font-medium text-violet-700 hover:underline dark:text-violet-300">
                {copy.cadence}
              </Link>
            </li>
            <li>
              <Link to="/prelaunch/outbound-playbook" className="font-medium text-violet-700 hover:underline dark:text-violet-300">
                {copy.outbound}
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </div>
  )
}
