import { motion, useReducedMotion } from 'motion/react'
import { ArrowRight, Bot, Shield, Workflow } from 'lucide-react'
import { Link } from 'react-router-dom'

function CtaRow() {
  return (
    <div className="mt-8 flex flex-wrap gap-3">
      <Link
        to="/contact"
        className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-400"
      >
        Contact sales <ArrowRight className="h-4 w-4" />
      </Link>
      <Link to="/products" className="inline-flex cursor-pointer items-center rounded-xl border border-indigo-200 bg-white px-5 py-3 text-sm font-semibold text-indigo-900 transition hover:border-indigo-400">
        View products
      </Link>
    </div>
  )
}

/** 1 — Indigo gateway (UI/UX Pro Max enterprise flat) */
export function HomeVariant1() {
  const reduce = useReducedMotion()
  return (
    <div className="space-y-6 font-[family-name:var(--font-sans)]">
      <section className="rounded-3xl bg-[#F5F3FF] p-8 ring-1 ring-indigo-100 sm:p-12">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-indigo-600">Enterprise gateway</p>
            <h1 className="mt-2 font-[family-name:var(--font-display)] text-4xl font-semibold leading-tight text-[#1E1B4B] sm:text-5xl">
              Deploy an AI workforce that respects policy, brand, and data boundaries.
            </h1>
            <p className="mt-4 text-lg text-slate-600">
              Nexus Agents designs multi-agent systems with memory, retrieval, and governance—so operators ship outcomes, not experiments.
            </p>
            <CtaRow />
          </div>
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {[
              { icon: Workflow, t: 'Path selection', d: 'Pick industry + role journeys' },
              { icon: Bot, t: 'Agent roster', d: 'Specialists with clear ownership' },
              { icon: Shield, t: 'Trust layer', d: 'Audit, evals, approvals' },
              { icon: ArrowRight, t: 'Fast landing', d: 'Live in days, iterate weekly' },
            ].map((c, i) => (
              <div key={c.t} className="rounded-2xl border border-indigo-100 bg-white p-4">
                <c.icon className="h-6 w-6 text-indigo-500" aria-hidden />
                <p className="mt-3 font-semibold text-[#1E1B4B]">{c.t}</p>
                <p className="mt-1 text-sm text-slate-600">{c.d}</p>
                {!reduce && (
                  <motion.div className="mt-3 h-1 rounded-full bg-indigo-100" initial={{ scaleX: 0 }} animate={{ scaleX: 1 }} transition={{ delay: 0.1 * i, duration: 0.35 }} style={{ originX: 0 }} />
                )}
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}

/** 2 — Neon noir */
export function HomeVariant2() {
  const reduce = useReducedMotion()
  return (
    <div className="-mx-6 space-y-6 rounded-3xl bg-gradient-to-b from-slate-950 via-slate-900 to-black px-6 py-10 text-white ring-1 ring-cyan-500/20 sm:-mx-0 sm:px-10">
      <div className="relative overflow-hidden rounded-2xl border border-cyan-500/30 bg-slate-950/80 p-8 shadow-[0_0_80px_-20px_rgba(34,211,238,0.45)] sm:p-12">
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl"
          animate={reduce ? undefined : { scale: [1, 1.15, 1], opacity: [0.35, 0.55, 0.35] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <div className="relative max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">Autonomous ops</p>
          <h1 className="mt-3 font-[family-name:var(--font-syne)] text-4xl font-bold leading-tight sm:text-5xl">
            Agents that run your playbooks while you sleep.
          </h1>
          <p className="mt-4 text-lg text-slate-300">
            Prospect, research, draft, and execute—with traces, budgets, and kill switches wired in from day one.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" className="cursor-pointer rounded-xl bg-cyan-400 px-5 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-300">
              Deploy agents
            </Link>
            <Link to="/platforms/openai" className="cursor-pointer rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
              Model routes
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

/** 3 — Solar flare warm */
export function HomeVariant3() {
  const reduce = useReducedMotion()
  return (
    <section className="overflow-hidden rounded-3xl bg-gradient-to-br from-amber-50 via-orange-50 to-rose-50 p-8 ring-1 ring-amber-100 sm:p-12">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <h1 className="font-[family-name:var(--font-serif-display)] text-4xl font-semibold leading-tight text-amber-950 sm:text-[2.75rem]">
            AI teammates with empathy, memory, and taste.
          </h1>
          <p className="mt-4 text-lg text-amber-900/80">
            We build agents that sound like your brand, remember your customers, and escalate gracefully when uncertainty spikes.
          </p>
          <motion.ul className="mt-6 space-y-3 text-amber-950/90" initial="hidden" animate="show" variants={reduce ? undefined : { show: { transition: { staggerChildren: 0.08 } }, hidden: {} }}>
            {['Human handoff paths', 'Brand voice reinforcement', 'Delightful UI surfaces'].map((t) => (
              <motion.li key={t} variants={reduce ? undefined : { hidden: { opacity: 0, x: -8 }, show: { opacity: 1, x: 0 } }} className="flex items-center gap-2 text-sm font-medium">
                <span className="h-2 w-2 rounded-full bg-rose-500" />
                {t}
              </motion.li>
            ))}
          </motion.ul>
          <Link to="/testimonials" className="mt-8 inline-flex cursor-pointer rounded-full bg-rose-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-rose-500">
            Read client stories
          </Link>
        </div>
        <motion.div
          className="relative aspect-square max-w-md rounded-[2rem] bg-gradient-to-tr from-rose-400/80 to-amber-300/90 p-1 shadow-xl"
          whileHover={reduce ? undefined : { rotate: -1, scale: 1.01 }}
        >
          <div className="flex h-full flex-col justify-between rounded-[1.8rem] bg-white/90 p-6 backdrop-blur">
            <p className="text-sm font-semibold text-rose-700">Live pulse</p>
            <p className="font-[family-name:var(--font-display)] text-3xl font-semibold text-slate-900">94%</p>
            <p className="text-sm text-slate-600">Tickets resolved without escalation this week (demo metric).</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

/** 4 — Brutalist mono */
export function HomeVariant4() {
  return (
    <section className="rounded-none border-4 border-black bg-white p-8 sm:p-12">
      <p className="font-[family-name:var(--font-mono)] text-xs font-semibold uppercase">Nexus_agents // v2</p>
      <h1 className="mt-4 font-[family-name:var(--font-mono)] text-4xl font-semibold uppercase leading-none sm:text-6xl">
        Ship agents.
        <br />
        Skip theatre.
      </h1>
      <p className="mt-6 max-w-xl font-[family-name:var(--font-mono)] text-sm leading-relaxed">
        Strategy, integration, evals. No vague “AI transformation” decks—executable systems with owners and SLOs.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {['MEMORY', 'TOOLS', 'POLICY'].map((t) => (
          <div key={t} className="border-2 border-black bg-[#bfff00] p-4 font-[family-name:var(--font-mono)] text-sm font-bold">
            {t}
          </div>
        ))}
      </div>
      <Link to="/pricing" className="mt-8 inline-block cursor-pointer border-2 border-black bg-black px-6 py-3 font-[family-name:var(--font-mono)] text-sm font-semibold text-white transition hover:bg-white hover:text-black">
        SEE_PRICING
      </Link>
    </section>
  )
}

/** 5 — Glass aurora */
export function HomeVariant5() {
  const reduce = useReducedMotion()
  return (
    <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-sky-100 via-white to-violet-100 p-8 ring-1 ring-sky-200/80 sm:p-12">
      <motion.div
        aria-hidden
        className="absolute inset-0 opacity-60"
        animate={reduce ? undefined : { backgroundPosition: ['0% 0%', '100% 100%'] }}
        transition={{ duration: 18, repeat: Infinity, repeatType: 'mirror' }}
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(56,189,248,0.35), transparent 40%), radial-gradient(circle at 80% 30%, rgba(167,139,250,0.35), transparent 35%)',
          backgroundSize: '200% 200%',
        }}
      />
      <div className="relative grid gap-8 lg:grid-cols-2 lg:items-center">
        <div className="rounded-3xl border border-white/70 bg-white/70 p-8 shadow-sm backdrop-blur-md dark:border-white/10 dark:bg-slate-900/40">
          <h1 className="font-[family-name:var(--font-outfit)] text-4xl font-semibold text-slate-900 dark:text-white sm:text-5xl">
            Crystal-clear agent UX for demanding teams.
          </h1>
          <p className="mt-4 text-slate-600 dark:text-slate-300">
            Glass surfaces, legible hierarchy, and motion that respects reduced-motion settings—enterprise polish without the clutter.
          </p>
          <Link to="/products/connect-mcp" className="mt-6 inline-flex cursor-pointer rounded-2xl bg-sky-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-sky-500">
            Explore Mesh Connect
          </Link>
        </div>
        <div className="rounded-3xl border border-white/60 bg-white/50 p-6 backdrop-blur-md dark:border-white/10 dark:bg-slate-900/30">
          <p className="text-xs font-semibold uppercase text-slate-500">Stack preview</p>
          <div className="mt-4 space-y-3">
            {['Retrieval', 'Planning', 'Tool calls', 'Human review'].map((label, i) => (
              <motion.div
                key={label}
                className="flex items-center justify-between rounded-2xl bg-white/80 px-4 py-3 text-sm font-medium text-slate-800 shadow-sm dark:bg-slate-800/80 dark:text-slate-100"
                initial={reduce ? false : { opacity: 0, x: 12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                {label}
                <span className="text-xs text-emerald-600">OK</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
