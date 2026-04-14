import { Link } from 'react-router-dom'
import { platforms } from '../data/platforms'

export function PlatformsIndex() {
  return (
    <div className="space-y-8">
      <header>
        <h1 className="font-[family-name:var(--font-display)] text-4xl font-semibold text-slate-900 dark:text-white">Platforms & model families</h1>
        <p className="mt-3 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
          Ten focused briefs on the stacks clients ask about most—what they are strong at, what to watch, and how Nexus meets you there.
        </p>
      </header>
      <ul className="grid gap-4 sm:grid-cols-2">
        {platforms.map((pl) => (
          <li key={pl.slug}>
            <Link
              to={`/platforms/${pl.slug}`}
              className="block cursor-pointer rounded-2xl border border-slate-200 bg-white p-5 transition hover:border-violet-300 hover:shadow-sm dark:border-slate-800 dark:bg-slate-900 dark:hover:border-violet-500/50"
            >
              <h2 className="font-[family-name:var(--font-display)] text-lg font-semibold text-slate-900 dark:text-white">{pl.name}</h2>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">{pl.headline}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
