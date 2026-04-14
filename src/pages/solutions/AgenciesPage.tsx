import { motion, useReducedMotion } from 'motion/react'
import { ArrowRight, Users, Workflow } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useI18n } from '../../i18n/I18nProvider'

export function AgenciesPage() {
  const reduce = useReducedMotion()
  const { locale } = useI18n()
  const copy = {
    en: {
      badge: 'Solutions · Agencies',
      title: 'Co-deliver agent programs without hiring a full research lab.',
      body: 'White-label depth, shared dashboards, and playbooks your PMs can repeat—similar to how platforms court agency partners, tuned for autonomous workflows.',
      cta: 'Request partner deck',
      embed: 'What we typically embed',
    },
    es: {
      badge: 'Soluciones · Agencias',
      title: 'Co-entrega programas de agentes sin contratar un laboratorio completo.',
      body: 'Profundidad white-label, dashboards compartidos y playbooks repetibles por PMs.',
      cta: 'Solicitar deck para partners',
      embed: 'Lo que solemos integrar',
    },
    ca: {
      badge: 'Solucions · Agències',
      title: "Co-entrega programes d'agents sense contractar un laboratori complet.",
      body: 'Profunditat white-label, dashboards compartits i playbooks repetibles pels PMs.',
      cta: 'Sol·licitar deck per partners',
      embed: 'El que acostumem a integrar',
    },
  }[locale]
  return (
    <div className="space-y-16">
      <header className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-violet-600 dark:text-violet-300">{copy.badge}</p>
          <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-semibold text-slate-900 dark:text-white sm:text-5xl">
            {copy.title}
          </h1>
          <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
            {copy.body}{' '}
            {' '}
            <a href="https://www.amanita.barcelona" className="font-medium text-violet-600 hover:underline dark:text-violet-300" target="_blank" rel="noreferrer">
              agency partners
            </a>
          </p>
          <Link to="/contact" className="mt-6 inline-flex cursor-pointer items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white dark:bg-white dark:text-slate-900">
            {copy.cta} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <motion.div
          className="grid grid-cols-2 gap-3"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {[
            { icon: Users, t: 'Seat model', d: 'Architects + your leads' },
            { icon: Workflow, t: 'Reusable SOWs', d: 'Scope packs by industry' },
          ].map((c) => (
            <div key={c.t} className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
              <c.icon className="h-6 w-6 text-fuchsia-500" aria-hidden />
              <p className="mt-3 font-semibold text-slate-900 dark:text-white">{c.t}</p>
              <p className="mt-1 text-xs text-slate-600 dark:text-slate-400">{c.d}</p>
            </div>
          ))}
        </motion.div>
      </header>
      <section className="rounded-3xl border border-slate-200 bg-white p-8 dark:border-slate-800 dark:bg-slate-900">
        <h2 className="font-[family-name:var(--font-display)] text-xl font-semibold text-slate-900 dark:text-white">{copy.embed}</h2>
        <ul className="mt-4 grid gap-3 text-sm text-slate-600 dark:text-slate-300 sm:grid-cols-2">
          <li>• Joint discovery with your creative and data leads</li>
          <li>• Branded agent UX kits for your design system</li>
          <li>• Weekly eval review with client-friendly summaries</li>
          <li>• Escalation runbooks your account team can execute</li>
        </ul>
      </section>
    </div>
  )
}
