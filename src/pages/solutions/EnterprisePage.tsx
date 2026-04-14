import { motion, useReducedMotion } from 'motion/react'
import { Building2, Lock, Shield } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useI18n } from '../../i18n/I18nProvider'

export function EnterprisePage() {
  const reduce = useReducedMotion()
  const { locale } = useI18n()
  const copy = {
    en: { badge: 'Solutions · Enterprise', title: 'Layout templates for governance-heavy agent fleets.', cta: 'Open security & compliance hub' },
    es: { badge: 'Soluciones · Enterprise', title: 'Plantillas de layout para fleets de agentes con fuerte gobierno.', cta: 'Abrir hub de seguridad y compliance' },
    ca: { badge: 'Solucions · Enterprise', title: "Plantilles de layout per a fleets d'agents amb govern fort.", cta: 'Obrir hub de seguretat i compliance' },
  }[locale]
  return (
    <div className="space-y-16">
      <section className="rounded-3xl border border-slate-200 bg-gradient-to-b from-white to-slate-50 px-8 py-14 dark:border-slate-800 dark:from-slate-900 dark:to-slate-950 sm:px-12">
        <p className="text-xs font-semibold uppercase tracking-widest text-violet-600 dark:text-violet-300">{copy.badge}</p>
        <h1 className="mt-3 max-w-3xl font-[family-name:var(--font-display)] text-4xl font-semibold text-slate-900 dark:text-white sm:text-5xl">
          {copy.title}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
          Inspired by “design at scale” and layout-template thinking from{' '}
          <a href="https://www.framer.com/design/" className="font-medium text-violet-600 hover:underline dark:text-violet-300" target="_blank" rel="noreferrer">
            Framer’s design surface
          </a>
          —applied to org-wide nav patterns, policy tiers, and audited traces.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {[
            { icon: Building2, label: 'Multi-BU rollouts', text: 'Shared core, tenant-specific tools.' },
            { icon: Lock, label: 'Private networking', text: 'VPC, PrivateLink, key custody.' },
            { icon: Shield, label: 'Compliance packs', text: 'SOC2 narrative + subprocessors.' },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={reduce ? false : { opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900"
            >
              <item.icon className="h-6 w-6 text-violet-500" aria-hidden />
              <p className="mt-3 font-semibold text-slate-900 dark:text-white">{item.label}</p>
              <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{item.text}</p>
            </motion.div>
          ))}
        </div>
        <Link to="/security" className="mt-8 inline-block cursor-pointer text-sm font-semibold text-violet-600 hover:underline dark:text-violet-300">
          {copy.cta} →
        </Link>
      </section>
    </div>
  )
}
