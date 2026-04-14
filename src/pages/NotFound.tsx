import { Link } from 'react-router-dom'

export function NotFound() {
  return (
    <div className="py-20 text-center">
      <h1 className="font-[family-name:var(--font-display)] text-3xl font-semibold text-slate-900 dark:text-white">Page not found</h1>
      <p className="mt-2 text-slate-600 dark:text-slate-400">The route does not exist in this demo.</p>
      <Link to="/" className="mt-6 inline-block cursor-pointer font-medium text-violet-600 hover:underline dark:text-violet-300">
        Back home
      </Link>
    </div>
  )
}
