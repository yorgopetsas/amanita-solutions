import { motion, useReducedMotion } from 'motion/react'
import { Link } from 'react-router-dom'
import { Palette, PenTool, Shapes } from 'lucide-react'

const work = [
  'Genesis — Black Canvas',
  'Playgrounds — In Motion Titles',
  'Mercedes — Morph',
  'National Geographic — Idents',
  'Apple — M1 launch system',
  'FourLeaf — Brand identity',
]

export function SystemsPage() {
  const reduce = useReducedMotion()
  return (
    <div className="space-y-16">
      <header>
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">Studio · Systems</p>
        <h1 className="mt-4 max-w-3xl font-[family-name:var(--font-display)] text-4xl font-semibold leading-tight text-slate-900 dark:text-white sm:text-5xl">
          Design systems for agent-native products.
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
          Motion-first thinking meets long-term partnerships—patterned after{' '}
          <a href="https://nexusstudios.com/design-studio/" className="font-medium text-violet-600 hover:underline dark:text-violet-300" target="_blank" rel="noreferrer">
            Nexus Studios — Design Studio
          </a>
          , reframed for interfaces where memory, tools, and policy are first-class.
        </p>
      </header>

      <section className="grid gap-8 lg:grid-cols-[1fr_1.2fr]">
        <div className="space-y-4">
          {[
            { icon: Shapes, t: 'Tokens & grids', d: 'Stacks that adapt to dense operator UIs.' },
            { icon: PenTool, t: 'Typography', d: 'Readable trace streams + exec summaries.' },
            { icon: Palette, t: 'Color logic', d: 'Severity, model route, and compliance states.' },
          ].map((item, i) => (
            <motion.div
              key={item.t}
              initial={reduce ? false : { opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900"
            >
              <item.icon className="h-6 w-6 shrink-0 text-fuchsia-500" aria-hidden />
              <div>
                <p className="font-semibold text-slate-900 dark:text-white">{item.t}</p>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{item.d}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <ul className="grid gap-3 sm:grid-cols-2">
          {work.map((line, i) => (
            <motion.li
              key={line}
              initial={reduce ? false : { opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-800 dark:border-slate-800 dark:bg-slate-800/50 dark:text-slate-200"
            >
              {line}
            </motion.li>
          ))}
        </ul>
      </section>

      <Link to="/contact" className="inline-flex cursor-pointer text-sm font-semibold text-violet-600 hover:underline dark:text-violet-300">
        We’d love to chat about your system →
      </Link>
    </div>
  )
}
