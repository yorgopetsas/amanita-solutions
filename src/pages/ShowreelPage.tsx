import { motion, useReducedMotion } from 'motion/react'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { showreelItems } from '../data/showreel'

export function ShowreelPage() {
  const reduce = useReducedMotion()
  return (
    <div className="space-y-12">
      <header className="flex flex-wrap items-end justify-between gap-6 border-b border-slate-200 pb-10 dark:border-slate-800">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">Studio · Showreel</p>
          <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-semibold text-slate-900 dark:text-white sm:text-5xl">
            Agent work, presented like film.
          </h1>
          <p className="mt-4 max-w-xl text-slate-600 dark:text-slate-300">
            Grid and pacing influenced by{' '}
            <a href="https://nexusstudios.com/motion-design/" className="font-medium text-violet-600 hover:underline dark:text-violet-300" target="_blank" rel="noreferrer">
              Nexus Studios motion reels
            </a>
            —each tile is a fictional “premiere” you can replace with case studies.
          </p>
        </div>
        <Link
          to="/studio/motion"
          className="inline-flex cursor-pointer items-center gap-2 text-sm font-semibold text-violet-600 hover:underline dark:text-violet-300"
        >
          Motion studio <ArrowUpRight className="h-4 w-4" />
        </Link>
      </header>

      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {showreelItems.map((item, i) => (
          <motion.li
            key={item.slug}
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: (i % 4) * 0.05 }}
            whileHover={reduce ? undefined : { y: -8, transition: { type: 'spring', stiffness: 400, damping: 25 } }}
          >
            <Link
              to="/case-studies"
              className={`block cursor-pointer overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-lg dark:border-slate-800 dark:bg-slate-900`}
            >
              <div className={`aspect-video bg-gradient-to-br ${item.accent} opacity-90`} />
              <div className="p-4">
                <p className="text-xs font-bold uppercase tracking-wide text-slate-500">{item.client}</p>
                <p className="mt-1 font-[family-name:var(--font-display)] font-semibold text-slate-900 dark:text-white">{item.title}</p>
                <p className="mt-2 text-xs text-violet-600 dark:text-violet-300">{item.tags.join(' · ')}</p>
              </div>
            </Link>
          </motion.li>
        ))}
      </ul>
    </div>
  )
}
