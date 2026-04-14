import { motion, useReducedMotion } from 'motion/react'
import { MessageSquare, UserPlus, Wand2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useI18n } from '../../i18n/I18nProvider'

export function CollaboratePage() {
  const reduce = useReducedMotion()
  const { locale } = useI18n()
  const copy = {
    en: { title: 'Collaborate in real time-on prompts, policies, and traces.', handoff: 'Handoff checklist (freelancer-friendly)', cta: 'Invite us to your workspace' },
    es: { title: 'Colabora en tiempo real con prompts, políticas y trazas.', handoff: 'Checklist de handoff (freelancer-friendly)', cta: 'Invítanos a tu workspace' },
    ca: { title: 'Col·labora en temps real amb prompts, polítiques i traces.', handoff: 'Checklist de handoff (freelancer-friendly)', cta: 'Convida’ns al teu workspace' },
  }[locale]
  return (
    <div className="space-y-14">
      <header className="mx-auto max-w-3xl text-center">
        <h1 className="font-[family-name:var(--font-display)] text-4xl font-semibold text-slate-900 dark:text-white sm:text-5xl">
          {copy.title}
        </h1>
        <p className="mt-4 text-slate-600 dark:text-slate-300">
          Drawing from Framer’s collaboration story and Webflow’s client-handoff flows: invite reviewers, thread comments on agent behavior, and ship with{' '}
          <span className="font-medium text-slate-900 dark:text-white">guest access</span> that cannot break production tools.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-3">
        {[
          { icon: UserPlus, t: 'Unlimited reviewers', d: 'Stakeholders see only the slices you grant.' },
          { icon: MessageSquare, t: 'Inline feedback', d: 'Pin notes to traces, prompts, and eval regressions.' },
          { icon: Wand2, t: 'AI layout assist', d: 'Generate first-pass runbooks—then human-curate (Wireframer energy).' },
        ].map((item, i) => (
          <motion.div
            key={item.t}
            initial={reduce ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="rounded-2xl border border-slate-200 bg-white p-6 text-center dark:border-slate-800 dark:bg-slate-900"
          >
            <item.icon className="mx-auto h-8 w-8 text-fuchsia-500" aria-hidden />
            <h2 className="mt-4 font-semibold text-slate-900 dark:text-white">{item.t}</h2>
            <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{item.d}</p>
          </motion.div>
        ))}
      </div>

      <section className="rounded-3xl border border-slate-200 bg-slate-50 p-8 dark:border-slate-800 dark:bg-slate-900/60">
        <h2 className="font-semibold text-slate-900 dark:text-white">{copy.handoff}</h2>
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-slate-600 dark:text-slate-300">
          <li>Transfer workspace ownership—or keep amanita as guest in yours.</li>
          <li>Scope client-safe CMS zones for RAG corpora updates.</li>
          <li>Document kill switches and on-call rotation.</li>
        </ol>
        <p className="mt-4 text-xs text-slate-500">
          Parallels ideas from{' '}
          <a href="https://webflow.com/solutions/freelancers" className="text-violet-600 hover:underline dark:text-violet-300" target="_blank" rel="noreferrer">
            Webflow’s freelancer FAQ on handoff
          </a>
          .
        </p>
      </section>

      <div className="text-center">
        <Link to="/contact" className="inline-flex cursor-pointer rounded-xl bg-slate-900 px-6 py-3 text-sm font-semibold text-white dark:bg-white dark:text-slate-900">
          {copy.cta}
        </Link>
      </div>
    </div>
  )
}
