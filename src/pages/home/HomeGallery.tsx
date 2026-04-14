import { motion, useReducedMotion } from 'motion/react'
import { ArrowRight, Palette } from 'lucide-react'
import { Link } from 'react-router-dom'
import { TrustStrip } from '../../components/TrustStrip'
import { homeThemes } from '../../data/homeThemes'

export function HomeGallery() {
  const reduce = useReducedMotion()
  return (
    <div className="space-y-12">
      <section className="rounded-3xl border border-slate-200 bg-gradient-to-br from-violet-50 via-white to-fuchsia-50 p-8 shadow-sm dark:border-slate-800 dark:from-slate-900 dark:via-slate-950 dark:to-violet-950/40 sm:p-12">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-violet-700 ring-1 ring-violet-200 dark:bg-slate-900/80 dark:text-violet-200 dark:ring-violet-500/30">
              <Palette className="h-3.5 w-3.5" aria-hidden />
              11 homepage concepts
            </p>
            <h1 className="mt-4 font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl">
              Pick the entrance that fits your brand.
            </h1>
            <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
              Each theme is a full hero experience with Motion for React. Explore liquid “neural” motion, anatomy maps, bento storytelling, and more—then reuse components in production.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex cursor-pointer items-center gap-2 rounded-2xl bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-white dark:text-slate-900 dark:hover:bg-violet-100"
          >
            Start a project <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <TrustStrip />

      <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {homeThemes.map((h, i) => (
          <motion.article
            key={h.id}
            initial={reduce ? false : { opacity: 0, y: 12 }}
            whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ delay: i * 0.04, duration: 0.35 }}
            className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:border-violet-300 hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:hover:border-violet-500/50"
          >
            <div className="h-2 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-indigo-500 opacity-80" style={{ backgroundSize: '200% 100%' }} />
            <div className="p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">Theme {h.id}</p>
              <h2 className="mt-1 font-[family-name:var(--font-display)] text-xl font-semibold text-slate-900 dark:text-white">{h.title}</h2>
              <p className="mt-2 text-sm text-violet-700 dark:text-violet-300">{h.palette}</p>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{h.vibe}</p>
              <Link
                to={h.path}
                className="mt-4 inline-flex cursor-pointer items-center gap-1 text-sm font-semibold text-violet-600 transition group-hover:gap-2 dark:text-violet-300"
              >
                Open full homepage <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.article>
        ))}
      </section>
    </div>
  )
}
