import { motion, useReducedMotion } from 'motion/react'
import { ArrowRight, Brain, Cable, Database, GitBranch, Network, Search, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useI18n } from '../../../i18n/I18nProvider'

/** 6 — Liquid neural bloom (AI brain metaphor) */
export function HomeVariant6() {
  const reduce = useReducedMotion()
  const { locale } = useI18n()
  const copy = {
    en: {
      badge: 'Neural bloom',
      title: 'Intelligence that moves like thought-fluid, continuous, adaptive.',
      body: 'A living core represents your agent: retrieval, planning, and action flowing without brittle seams.',
      cta1: 'See orchestration',
      cta2: 'Memory architecture',
    },
    es: {
      badge: 'Flor neural',
      title: 'Inteligencia que se mueve como el pensamiento: fluida, continua y adaptable.',
      body: 'Un núcleo vivo representa tu agente: retrieval, planificación y acción sin costuras frágiles.',
      cta1: 'Ver orquestación',
      cta2: 'Arquitectura de memoria',
    },
    ca: {
      badge: 'Flor neural',
      title: 'Intel·ligència que es mou com el pensament: fluida, contínua i adaptable.',
      body: 'Un nucli viu representa el teu agent: retrieval, planificació i acció sense costures fràgils.',
      cta1: 'Veure orquestració',
      cta2: 'Arquitectura de memòria',
    },
  }[locale]
  return (
    <section className="relative overflow-hidden rounded-3xl bg-[#0b0221] px-6 py-16 text-white sm:px-12">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(168,85,247,0.35),transparent_45%),radial-gradient(circle_at_70%_60%,rgba(236,72,153,0.3),transparent_40%)]" />
      <div className="relative grid items-center gap-12 lg:grid-cols-2">
        <div>
          <p className="inline-flex items-center gap-2 text-sm font-medium text-fuchsia-200">
            <Brain className="h-4 w-4" aria-hidden />
            {copy.badge}
          </p>
          <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-semibold leading-tight sm:text-5xl">
            {copy.title}
          </h1>
          <p className="mt-4 text-lg text-violet-100/90">
            {copy.body}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/products/orchestrator" className="cursor-pointer rounded-xl bg-fuchsia-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-fuchsia-400">
              {copy.cta1}
            </Link>
            <Link to="/products/memory-layer" className="cursor-pointer rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
              {copy.cta2}
            </Link>
          </div>
        </div>
        <div className="relative mx-auto flex h-[min(70vw,22rem)] w-[min(70vw,22rem)] items-center justify-center">
          <motion.div
            aria-hidden
            className="absolute h-3/4 w-3/4 bg-gradient-to-br from-fuchsia-500 via-violet-500 to-indigo-600 opacity-70 blur-3xl"
            animate={
              reduce
                ? undefined
                : {
                    borderRadius: [
                      '42% 58% 70% 30% / 42% 42% 58% 58%',
                      '58% 42% 32% 68% / 58% 48% 52% 42%',
                      '38% 62% 68% 32% / 48% 52% 48% 52%',
                      '42% 58% 70% 30% / 42% 42% 58% 58%',
                    ],
                    rotate: [0, 120, 240, 360],
                  }
            }
            transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
          />
          <motion.div
            aria-hidden
            className="absolute h-2/3 w-2/3 bg-gradient-to-tr from-cyan-400/80 to-fuchsia-500/80 opacity-80 mix-blend-screen blur-2xl"
            animate={
              reduce
                ? undefined
                : {
                    borderRadius: [
                      '55% 45% 38% 62% / 52% 38% 62% 48%',
                      '35% 65% 58% 42% / 40% 60% 40% 60%',
                      '55% 45% 38% 62% / 52% 38% 62% 48%',
                    ],
                    scale: [1, 1.08, 1],
                  }
            }
            transition={{ duration: 8, repeat: Infinity, repeatType: 'mirror' }}
          />
          <motion.div
            className="relative flex h-52 w-52 items-center justify-center rounded-[2rem] border border-white/20 bg-white/5 shadow-[0_0_0_1px_rgba(255,255,255,0.06)] backdrop-blur"
            animate={reduce ? undefined : { y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          >
            <Sparkles className="h-14 w-14 text-fuchsia-200" aria-hidden />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const anatomy = [
  { icon: Database, title: 'Memory', body: 'Durable recall with tenancy, TTL, and redaction.' },
  { icon: Search, title: 'Retrieval', body: 'Hybrid search + rerank tuned to messy corpora.' },
  { icon: GitBranch, title: 'Planning', body: 'Decompose goals, select tools, recover gracefully.' },
  { icon: Cable, title: 'Tooling & MCP', body: 'Typed integrations with auth and quotas.' },
  { icon: Network, title: 'Multi-agent mesh', body: 'Supervisors, specialists, and handoff contracts.' },
]

/** 7 — Human body + agent sections */
export function HomeVariant7() {
  const reduce = useReducedMotion()
  const { locale } = useI18n()
  const copy = {
    en: {
      caption: 'Agent anatomy mapped to human scale',
      title: 'Your agent stack, articulated like a living system.',
      body: 'Memory at the core, retrieval as senses, planning as motor control, tools as limbs, and multi-agent routing as the nervous network.',
      cta: 'Browse capability products',
    },
    es: {
      caption: 'Anatomía de agentes a escala humana',
      title: 'Tu stack de agentes articulado como un sistema vivo.',
      body: 'Memoria en el núcleo, retrieval como sentidos, planificación como control motor, tools como extremidades y routing multiagente como red nerviosa.',
      cta: 'Ver productos de capacidades',
    },
    ca: {
      caption: "Anatomia d'agents a escala humana",
      title: "El teu stack d'agents articulat com un sistema viu.",
      body: 'Memòria al nucli, retrieval com a sentits, planificació com a control motor, tools com a extremitats i routing multiagent com a xarxa nerviosa.',
      cta: 'Veure productes de capacitats',
    },
  }[locale]
  return (
    <section className="rounded-3xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-8 dark:border-slate-800 dark:from-slate-950 dark:to-slate-900 sm:p-12">
      <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="relative mx-auto w-full max-w-xs">
          <svg viewBox="0 0 200 420" className="w-full text-slate-300 dark:text-slate-600" aria-hidden>
            <path
              fill="currentColor"
              d="M100 20c-12 0-22 10-22 22 0 14 10 24 22 28v18c-28 6-48 32-48 62v210h36V280h8v62h36V132c0-30-20-56-48-62V70c12-4 22-14 22-28 0-12-10-22-22-22z"
              opacity="0.35"
            />
            <motion.circle
              cx="100"
              cy="78"
              r="10"
              className="fill-teal-400/90"
              animate={reduce ? undefined : { r: [9, 11, 9], opacity: [0.85, 1, 0.85] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
            <motion.rect
              x="86"
              y="120"
              width="28"
              height="44"
              rx="8"
              className="fill-rose-400/90"
              animate={reduce ? undefined : { opacity: [0.7, 1, 0.7] }}
              transition={{ duration: 3.2, repeat: Infinity, delay: 0.2 }}
            />
            <motion.rect
              x="78"
              y="200"
              width="44"
              height="52"
              rx="10"
              className="fill-violet-400/90"
              animate={reduce ? undefined : { opacity: [0.75, 1, 0.75] }}
              transition={{ duration: 3.4, repeat: Infinity, delay: 0.4 }}
            />
            <motion.rect
              x="82"
              y="290"
              width="36"
              height="70"
              rx="10"
              className="fill-amber-400/90"
              animate={reduce ? undefined : { opacity: [0.72, 1, 0.72] }}
              transition={{ duration: 3.1, repeat: Infinity, delay: 0.6 }}
            />
          </svg>
          <p className="mt-4 text-center text-xs font-medium uppercase tracking-wide text-slate-500">{copy.caption}</p>
        </div>
        <div>
          <h1 className="font-[family-name:var(--font-display)] text-4xl font-semibold text-slate-900 dark:text-white sm:text-5xl">
            {copy.title}
          </h1>
          <p className="mt-3 text-lg text-slate-600 dark:text-slate-300">
            {copy.body}
          </p>
          <ul className="mt-8 space-y-4">
            {anatomy.map((item, i) => (
              <motion.li
                key={item.title}
                initial={reduce ? false : { opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-700 dark:bg-slate-800/60"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-100 text-teal-700 dark:bg-teal-950 dark:text-teal-200">
                  <item.icon className="h-5 w-5" aria-hidden />
                </span>
                <div>
                  <p className="font-semibold text-slate-900 dark:text-white">{item.title}</p>
                  <p className="mt-1 text-sm text-slate-600 dark:text-slate-400">{item.body}</p>
                </div>
              </motion.li>
            ))}
          </ul>
          <Link to="/products" className="mt-8 inline-flex cursor-pointer items-center gap-2 text-sm font-semibold text-teal-700 hover:underline dark:text-teal-300">
            {copy.cta} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

/** 8 — Bento pop */
export function HomeVariant8() {
  const reduce = useReducedMotion()
  const { locale } = useI18n()
  const copy = {
    en: { title: 'Bento storytelling for complex agent platforms.', body: 'Color blocks, crisp copy, and motion reveal-perfect for demos and board-ready narratives.', cta: 'View case study tiles (demo)' },
    es: { title: 'Storytelling bento para plataformas de agentes complejas.', body: 'Bloques de color, copy claro y motion para demos y narrativas listas para dirección.', cta: 'Ver mosaico de casos (demo)' },
    ca: { title: "Storytelling bento per a plataformes d'agents complexes.", body: 'Blocs de color, copy clar i motion per a demos i narratives llestes per direcció.', cta: 'Veure mosaic de casos (demo)' },
  }[locale]
  const tiles = [
    { c: 'from-violet-500 to-indigo-600', t: 'Fleet health', d: 'Latency, cost, quality in one pane.' },
    { c: 'from-amber-400 to-orange-500', t: 'Playbooks', d: 'Reusable agent recipes per team.' },
    { c: 'from-emerald-400 to-teal-600', t: 'Eval harness', d: 'Regression tests on real tickets.' },
    { c: 'from-fuchsia-500 to-pink-500', t: 'Brand voice', d: 'Guardrailed tone + style.' },
  ]
  return (
    <section className="space-y-6">
      <div className="rounded-3xl bg-slate-950 p-8 text-white sm:p-10">
        <h1 className="max-w-3xl font-[family-name:var(--font-outfit)] text-4xl font-semibold sm:text-5xl">{copy.title}</h1>
        <p className="mt-3 max-w-2xl text-slate-300">{copy.body}</p>
      </div>
      <div className="grid gap-4 md:grid-cols-4">
        {tiles.map((tile, i) => (
          <motion.div
            key={tile.t}
            initial={reduce ? false : { opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className={`cursor-pointer rounded-2xl bg-gradient-to-br ${tile.c} p-5 text-white shadow-lg transition hover:brightness-110`}
          >
            <p className="text-sm font-semibold uppercase tracking-wide text-white/80">{tile.t}</p>
            <p className="mt-2 text-lg font-semibold leading-snug">{tile.d}</p>
          </motion.div>
        ))}
      </div>
      <div className="rounded-2xl border border-dashed border-slate-300 p-6 text-center dark:border-slate-700">
        <Link to="/case-studies" className="cursor-pointer text-sm font-semibold text-violet-600 hover:underline dark:text-violet-300">
          {copy.cta}
        </Link>
      </div>
    </section>
  )
}

/** 9 — Swiss minimal */
export function HomeVariant9() {
  const { locale } = useI18n()
  const copy = {
    en: { title: 'Autonomy, articulated.', body: 'We design and operate agent systems for teams who want measurable throughput-not slide decks.', about: 'About', pricing: 'Pricing', contact: 'Contact' },
    es: { title: 'Autonomía, articulada.', body: 'Diseñamos y operamos sistemas de agentes para equipos que buscan throughput medible, no solo presentaciones.', about: 'Sobre nosotros', pricing: 'Precios', contact: 'Contacto' },
    ca: { title: 'Autonomia, articulada.', body: "Dissenyem i operem sistemes d'agents per a equips que busquen throughput mesurable, no només presentacions.", about: 'Sobre nosaltres', pricing: 'Preus', contact: 'Contacte' },
  }[locale]
  return (
    <section className="border-y border-black bg-white py-16 dark:border-white dark:bg-black">
      <div className="mx-auto max-w-3xl text-center">
        <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">amanita.barcelona</p>
        <h1 className="mt-6 font-[family-name:var(--font-instrument)] text-5xl font-normal leading-[1.05] text-slate-900 dark:text-white sm:text-6xl">
          {copy.title}
        </h1>
        <p className="mx-auto mt-6 max-w-xl font-[family-name:var(--font-sans)] text-base text-slate-600 dark:text-slate-300">
          {copy.body}
        </p>
        <div className="mt-10 flex justify-center gap-8 text-sm">
          <Link to="/about" className="cursor-pointer border-b border-black pb-1 font-medium dark:border-white">
            {copy.about}
          </Link>
          <Link to="/pricing" className="cursor-pointer border-b border-black pb-1 font-medium dark:border-white">
            {copy.pricing}
          </Link>
          <Link to="/contact" className="cursor-pointer border-b border-black pb-1 font-medium dark:border-white">
            {copy.contact}
          </Link>
        </div>
      </div>
    </section>
  )
}

/** 10 — Deep orbit premium */
export function HomeVariant10() {
  const reduce = useReducedMotion()
  const { locale } = useI18n()
  const copy = {
    en: {
      badge: 'Mission control',
      title: 'Premium agent operations for regulated, global teams.',
      body: 'Gold accents, disciplined typography, and motion that whispers instead of shouts-built for board rooms and CISO reviews.',
      snap: 'Executive snapshot',
      figures: 'Across 4 business units - demo figures',
      cta: 'Review Sentinel Governance',
    },
    es: {
      badge: 'Control de misión',
      title: 'Operaciones premium de agentes para equipos globales y regulados.',
      body: 'Acentos dorados, tipografía disciplinada y motion discreto para comités de dirección y revisiones CISO.',
      snap: 'Resumen ejecutivo',
      figures: 'En 4 unidades de negocio - cifras demo',
      cta: 'Revisar Sentinel Governance',
    },
    ca: {
      badge: 'Control de missió',
      title: "Operacions premium d'agents per a equips globals i regulats.",
      body: 'Accents daurats, tipografia disciplinada i motion discret per a comitès de direcció i revisions CISO.',
      snap: 'Resum executiu',
      figures: 'En 4 unitats de negoci - xifres demo',
      cta: 'Revisar Sentinel Governance',
    },
  }[locale]
  return (
    <section className="relative overflow-hidden rounded-3xl bg-[#050816] px-6 py-16 text-white sm:px-14">
      <motion.div
        aria-hidden
        className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-amber-500/15 blur-3xl"
        animate={reduce ? undefined : { x: [0, 30, 0], y: [0, 20, 0] }}
        transition={{ duration: 12, repeat: Infinity }}
      />
      <div className="relative grid gap-10 lg:grid-cols-2 lg:items-end">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-200/90">{copy.badge}</p>
          <h1 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-semibold leading-tight sm:text-[2.75rem]">
            {copy.title}
          </h1>
          <p className="mt-4 text-slate-300">
            {copy.body}
          </p>
        </div>
        <motion.div
          className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm text-amber-100/90">{copy.snap}</p>
          <p className="mt-2 font-[family-name:var(--font-display)] text-3xl font-semibold">12 agents</p>
          <p className="text-sm text-slate-400">{copy.figures}</p>
          <Link to="/products/governance" className="mt-4 inline-flex cursor-pointer text-sm font-semibold text-amber-200 hover:underline">
            {copy.cta}
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
