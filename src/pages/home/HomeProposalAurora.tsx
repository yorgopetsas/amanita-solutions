import { motion, useReducedMotion } from 'motion/react'
import { ArrowRight, Orbit, Sparkles, Waves } from 'lucide-react'
import { Link } from 'react-router-dom'
import { MagicChatDock } from '../../components/MagicChatDock'
import { SiteFooter } from '../../components/SiteFooter'
import { SiteNav } from '../../components/SiteNav'
import { useI18n } from '../../i18n/I18nProvider'

const reels = [
  { label: 'Realtime supervisor', value: '124 traces/min', hue: 'from-cyan-400 to-sky-500' },
  { label: 'Agent precision', value: '97.1%', hue: 'from-fuchsia-400 to-violet-500' },
  { label: 'Escalation latency', value: '12.4s', hue: 'from-emerald-400 to-teal-500' },
]

export function HomeProposalAurora() {
  const reduce = useReducedMotion()
  const { locale } = useI18n()
  const copy = {
    en: { badge: 'New proposal · Aurora Flux', title: 'A slick, cinematic entry for your AI agency.', start: 'Start this direction', back: 'Back to all themes', why: 'Why this one feels slick' },
    es: { badge: 'Nueva propuesta · Aurora Flux', title: 'Una entrada cinematográfica para tu agencia IA.', start: 'Iniciar esta dirección', back: 'Volver a todos los temas', why: 'Por qué esta opción se siente slick' },
    ca: { badge: 'Nova proposta · Aurora Flux', title: 'Una entrada cinematogràfica per a la teva agència IA.', start: 'Iniciar aquesta direcció', back: 'Tornar a tots els temes', why: 'Per què aquesta opció es veu tan slick' },
  }[locale]

  return (
    <div className="min-h-screen bg-[#050914] text-white">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <motion.div
          aria-hidden
          className="absolute -left-24 top-[-6rem] h-[30rem] w-[30rem] rounded-full bg-cyan-500/30 blur-3xl"
          animate={reduce ? undefined : { x: [0, 40, 0], y: [0, 24, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          aria-hidden
          className="absolute right-[-8rem] top-[12rem] h-[26rem] w-[26rem] rounded-full bg-fuchsia-500/30 blur-3xl"
          animate={reduce ? undefined : { x: [0, -34, 0], y: [0, -18, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      <div className="pt-4">
        <SiteNav variant="transparent" />
      </div>

      <main className="mx-auto w-full max-w-6xl px-6 pb-16">
        <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] px-8 pb-14 pt-12 shadow-[0_40px_100px_-40px_rgba(34,211,238,0.45)] backdrop-blur-md sm:px-12 sm:pt-16">
          <motion.div
            aria-hidden
            className="absolute inset-0 bg-[radial-gradient(circle_at_10%_10%,rgba(34,211,238,0.22),transparent_38%),radial-gradient(circle_at_88%_26%,rgba(217,70,239,0.2),transparent_32%),radial-gradient(circle_at_40%_85%,rgba(59,130,246,0.16),transparent_36%)]"
            animate={reduce ? undefined : { opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          />
          <div className="relative grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-cyan-300/40 bg-cyan-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-cyan-200">
                <Sparkles className="h-3.5 w-3.5" aria-hidden />
                {copy.badge}
              </p>
              <h1 className="mt-4 max-w-2xl font-[family-name:var(--font-display)] text-5xl font-semibold leading-[1.02] tracking-tight text-white sm:text-6xl">
                {copy.title}
              </h1>
              <p className="mt-5 max-w-xl text-lg text-slate-200/90">
                Different color universe, transparent header feel, and motion-first storytelling. This version is designed to be eye-catching on first load while keeping enterprise credibility.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="inline-flex cursor-pointer items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-cyan-100"
                >
                  {copy.start} <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  to="/"
                  className="inline-flex cursor-pointer rounded-xl border border-white/25 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  {copy.back}
                </Link>
              </div>
            </div>

            <div className="relative">
              <motion.div
                className="mx-auto aspect-square w-[min(78vw,24rem)] rounded-[2rem] border border-white/15 bg-gradient-to-br from-cyan-400/25 via-blue-500/20 to-fuchsia-500/25 p-1"
                animate={
                  reduce
                    ? undefined
                    : {
                        rotate: [0, 2, -1, 0],
                        borderRadius: ['28% 72% 68% 32% / 28% 28% 72% 72%', '42% 58% 56% 44% / 40% 34% 66% 60%', '28% 72% 68% 32% / 28% 28% 72% 72%'],
                      }
                }
                transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
              >
                <div className="flex h-full flex-col justify-between rounded-[1.8rem] border border-white/15 bg-slate-950/70 p-6 backdrop-blur">
                  <p className="text-xs font-semibold uppercase tracking-wide text-cyan-200">Live control room</p>
                  <Orbit className="h-14 w-14 text-fuchsia-300" aria-hidden />
                  <div className="space-y-2">
                    <p className="font-[family-name:var(--font-display)] text-3xl font-semibold">Amanita Core</p>
                    <p className="text-sm text-slate-300">Orchestrates memory, retrieval, planning, and multi-agent handoffs in one fluid UI.</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="mt-10 grid gap-4 md:grid-cols-3">
          {reels.map((item, i) => (
            <motion.article
              key={item.label}
              initial={reduce ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur"
            >
              <div className={`h-1.5 rounded-full bg-gradient-to-r ${item.hue}`} />
              <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-slate-300">{item.label}</p>
              <p className="mt-2 font-[family-name:var(--font-display)] text-3xl font-semibold text-white">{item.value}</p>
            </motion.article>
          ))}
        </section>

        <section className="mt-12 rounded-2xl border border-white/10 bg-slate-900/60 p-6">
          <div className="flex items-center gap-2 text-cyan-200">
            <Waves className="h-5 w-5" aria-hidden />
            <p className="text-sm font-semibold uppercase tracking-wider">{copy.why}</p>
          </div>
          <ul className="mt-4 grid gap-2 text-sm text-slate-200 sm:grid-cols-2">
            <li>• Transparent header treatment over luminous hero layers</li>
            <li>• Cinematic gradients + slow drifting blur fields</li>
            <li>• Large type, tighter vertical rhythm, higher first-impression impact</li>
            <li>• Motion accents that still respect reduced-motion preferences</li>
          </ul>
        </section>
      </main>

      <SiteFooter />
      <MagicChatDock />
    </div>
  )
}
