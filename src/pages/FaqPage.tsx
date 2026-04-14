import { Link } from 'react-router-dom'
import { faqSections } from '../data/faq'

export function FaqPage() {
  return (
    <div className="space-y-10">
      <header>
        <h1 className="font-[family-name:var(--font-display)] text-4xl font-semibold text-slate-900 dark:text-white">FAQ</h1>
        <p className="mt-3 max-w-2xl text-lg text-slate-600 dark:text-slate-300">
          Objection handling for procurement, security, and operators. Pair this page with{' '}
          <Link to="/security" className="font-medium text-violet-600 hover:underline dark:text-violet-300">
            Security
          </Link>{' '}
          and{' '}
          <Link to="/compare" className="font-medium text-violet-600 hover:underline dark:text-violet-300">
            Compare
          </Link>
          .
        </p>
      </header>
      <div className="space-y-10">
        {faqSections.map((section) => (
          <section key={section.title}>
            <h2 className="text-lg font-semibold text-slate-900 dark:text-white">{section.title}</h2>
            <ul className="mt-4 space-y-4">
              {section.items.map((item) => (
                <li key={item.q} className="rounded-2xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900">
                  <p className="font-medium text-slate-900 dark:text-white">{item.q}</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-300">{item.a}</p>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
      <p className="text-sm text-slate-600 dark:text-slate-400">
        Still stuck?{' '}
        <Link to="/contact" className="font-semibold text-violet-600 hover:underline dark:text-violet-300">
          Contact sales
        </Link>{' '}
        or open the in-site assistant.
      </p>
    </div>
  )
}
