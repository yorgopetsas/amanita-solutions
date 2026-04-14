import { motion, useReducedMotion } from 'motion/react'
import { ArrowRight, Layers, Sparkles, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useI18n } from '../../i18n/I18nProvider'

const pillars = [
  {
    icon: Zap,
    title: 'Ship fast without cutting corners',
    body:
      'Move quicker with agent blueprints, retrieval templates, and eval harnesses—while keeping the craftsmanship your clients expect. amanita pairs repeatable patterns with room for bespoke policy and brand.',
  },
  {
    icon: Layers,
    title: 'When clients grow, you grow',
    body:
      'Launching a pilot is just the beginning. Extend into memory layers, multi-agent orchestration, analytics on agent outcomes, and ongoing operate phases—so retainers compound instead of stalling.',
  },
  {
    icon: Sparkles,
    title: 'One practice. Endless surface area',
    body:
      'Skip brittle one-off scripts and plugin chaos. Design, integrate, observe, and optimize agent fleets from a coherent stack—so every client engagement stays on rails.',
  },
]

const stories = [
  {
    name: 'Jordan Lee',
    role: 'Independent automation lead',
    quote:
      'Before standardizing on Amanita-style playbooks, every client was a snowflake—and the context switching burned me out. Now I hand off runbooks clients can actually run, and I spend time on strategy again.',
  },
  {
    name: 'Priya Desai',
    role: 'Fractional AI ops',
    quote:
      'The biggest win was reducing turnaround time without extending timelines. Less time on wiring, more time on eval design and stakeholder alignment—without sacrificing safety.',
  },
]

const faq = [
  {
    q: 'Can solo builders work with amanita without a full agency bench?',
    a: 'Yes. We often embed as architecture + review while you stay client-facing. You bring relationships; we bring agent patterns, security checklists, and integration depth.',
  },
  {
    q: 'How does this compare to “just using ChatGPT for clients”?',
    a: 'Chat tools are great for drafts. Production agents need tenancy, tool auth, eval regression, and observability. We help you sell and deliver that difference credibly.',
  },
  {
    q: 'What about client handoff when the project ends?',
    a: 'We document memory boundaries, tool schemas, and rollback paths. Clients can operate with guardrails—or you can keep a light managed tier with shared dashboards.',
  },
]

export function FreelancersPage() {
  const reduce = useReducedMotion()
  const { locale } = useI18n()
  const copy = {
    en: {
      badge: 'Solutions · Independent builders',
      title: 'Can your current tools keep up with your clients’ agent expectations?',
      start: 'Start a partnership thread',
      offers: 'See 3 core offers',
      pricing: 'See illustrative pricing',
      trusted: 'Trusted by teams shipping real workflows (demo names)',
      create: 'Create high-impact agent experiences your way',
      faq: 'FAQ',
      ready: 'Ready to try it for yourself?',
      book: 'Book a working session',
    },
    es: {
      badge: 'Soluciones · Builders independientes',
      title: '¿Tus herramientas actuales están a la altura de las expectativas de agentes de tus clientes?',
      start: 'Iniciar colaboración',
      offers: 'Ver 3 ofertas core',
      pricing: 'Ver precios orientativos',
      trusted: 'Confiado por equipos que entregan workflows reales (nombres demo)',
      create: 'Crea experiencias de agentes de alto impacto a tu manera',
      faq: 'FAQ',
      ready: '¿Listo para probarlo?',
      book: 'Reservar sesión de trabajo',
    },
    ca: {
      badge: 'Solucions · Builders independents',
      title: 'Les teves eines actuals poden seguir el ritme de les expectatives d’agents dels clients?',
      start: 'Iniciar col·laboració',
      offers: 'Veure 3 ofertes core',
      pricing: 'Veure preus orientatius',
      trusted: 'Confiat per equips que lliuren workflows reals (noms demo)',
      create: "Crea experiències d'agents d'alt impacte a la teva manera",
      faq: 'FAQ',
      ready: 'Preparat per provar-ho?',
      book: 'Reservar sessió de treball',
    },
  }[locale]
  return (
    <div className="space-y-20">
      <section className="overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-900 via-slate-900 to-violet-950 px-8 py-16 text-white dark:border-slate-800 sm:px-12">
        <motion.p
          className="text-xs font-semibold uppercase tracking-[0.25em] text-violet-300"
          initial={reduce ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {copy.badge}
        </motion.p>
        <motion.h1
          className="mt-4 max-w-3xl font-[family-name:var(--font-display)] text-4xl font-semibold leading-tight sm:text-5xl"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
        >
          {copy.title}
        </motion.h1>
        <motion.p
          className="mt-6 max-w-2xl text-lg text-slate-300"
          initial={reduce ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          As a freelancer or small practice, you strategize, integrate, and de-risk every week. Clients now expect faster launches, measurable outcomes, and safe autonomy—while you still need to win the next project.{' '}
          <span className="text-white">amanita helps you deliver high-impact agent systems, keep clients organized, and take on bolder work without burning out</span>—patterned after how modern platforms talk to independents (see{' '}
          <a href="https://www.amanita.barcelona" className="underline-offset-2 hover:underline" target="_blank" rel="noreferrer">
            Webflow for Freelancers
          </a>
          ).
        </motion.p>
        <motion.div className="mt-8 flex flex-wrap gap-3" initial={reduce ? false : { opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
          <Link to="/contact" className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-violet-100">
            {copy.start} <ArrowRight className="h-4 w-4" />
          </Link>
          <Link to="/offers" className="inline-flex cursor-pointer rounded-xl bg-violet-500/80 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-400">
            {copy.offers}
          </Link>
          <Link to="/pricing" className="inline-flex cursor-pointer rounded-xl border border-white/25 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
            {copy.pricing}
          </Link>
        </motion.div>
      </section>

      <section>
        <p className="text-center text-xs font-semibold uppercase tracking-wide text-slate-500">{copy.trusted}</p>
        <div className="mt-4 flex flex-wrap justify-center gap-3">
          {['IDEO', 'Monday', 'BBDO', 'NYT', 'TED', 'DocuSign'].map((name, i) => (
            <motion.span
              key={name}
              initial={reduce ? false : { opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400"
            >
              {name}
            </motion.span>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-center font-[family-name:var(--font-display)] text-3xl font-semibold text-slate-900 dark:text-white">{copy.create}</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900"
            >
              <p.icon className="h-8 w-8 text-violet-500" aria-hidden />
              <h3 className="mt-4 font-semibold text-slate-900 dark:text-white">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 dark:border-slate-800 dark:bg-slate-900/50">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-slate-900 dark:text-white">Launch faster—with guardrails</h2>
          <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
            Borrowing the “design & build → ROI → client management → hosting” rhythm from{' '}
            <a href="https://www.amanita.barcelona" className="font-medium text-violet-600 hover:underline dark:text-violet-300" target="_blank" rel="noreferrer">
              Webflow’s freelancer narrative
            </a>
            , we map those beats to agents: blueprints, eval dashboards, secure handoffs, and operated runtimes.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-slate-700 dark:text-slate-200">
            <li>• Staging traces before production traffic</li>
            <li>• CMS-like content boundaries for long-form RAG</li>
            <li>• Commenting workflows on prompts and policies</li>
            <li>• Managed hosting metaphors = your cloud + our SRE patterns</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-violet-200 bg-violet-50/80 p-8 dark:border-violet-900/40 dark:bg-violet-950/30">
          <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-slate-900 dark:text-violet-100">Everything you need to deliver great work</h2>
          <p className="mt-3 text-sm text-slate-700 dark:text-slate-300">Templates, libraries, and partner-style growth—reframed for agent builders.</p>
          <ul className="mt-6 space-y-3">
            <li>
              <Link to="/resources" className="text-sm font-semibold text-violet-700 hover:underline dark:text-violet-300">
                Resource library →
              </Link>
            </li>
            <li>
              <Link to="/integrations" className="text-sm font-semibold text-violet-700 hover:underline dark:text-violet-300">
                Integration directory →
              </Link>
            </li>
            <li>
              <Link to="/newsletter" className="text-sm font-semibold text-violet-700 hover:underline dark:text-violet-300">
                Newsletter &amp; lead magnets →
              </Link>
            </li>
          </ul>
        </div>
      </section>

      <section>
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-slate-900 dark:text-white">Builders who want craft + scale</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {stories.map((s, i) => (
            <motion.blockquote
              key={s.name}
              initial={reduce ? false : { opacity: 0, x: i % 2 === 0 ? -8 : 8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900"
            >
              <p className="text-sm leading-relaxed text-slate-700 dark:text-slate-200">“{s.quote}”</p>
              <footer className="mt-4 text-sm">
                <cite className="font-semibold not-italic text-slate-900 dark:text-white">{s.name}</cite>
                <span className="block text-slate-500">{s.role}</span>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </section>

      <section>
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold text-slate-900 dark:text-white">{copy.faq}</h2>
        <div className="mt-6 space-y-3">
          {faq.map((item) => (
            <details key={item.q} className="group rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900">
              <summary className="cursor-pointer font-medium text-slate-900 dark:text-white">{item.q}</summary>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <section className="rounded-3xl bg-gradient-to-r from-violet-600 to-fuchsia-600 px-8 py-12 text-center text-white">
        <h2 className="font-[family-name:var(--font-display)] text-2xl font-semibold">{copy.ready}</h2>
        <p className="mx-auto mt-2 max-w-lg text-sm text-white/90">Join independents who want agent delivery to feel as intentional as premium web work.</p>
        <Link to="/contact" className="mt-6 inline-flex cursor-pointer rounded-xl bg-white px-6 py-3 text-sm font-semibold text-violet-700 transition hover:bg-violet-100">
          {copy.book}
        </Link>
      </section>
    </div>
  )
}
