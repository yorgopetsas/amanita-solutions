import { Link } from 'react-router-dom'

export function AboutPage() {
  return (
    <article className="max-w-3xl space-y-6">
      <h1 className="font-[family-name:var(--font-display)] text-4xl font-semibold text-slate-900 dark:text-white">About Nexus Agents</h1>
      <p className="text-lg leading-relaxed text-slate-600 dark:text-slate-300">
        We are a demo studio site showing how an AI agents agency can structure products, platform briefs, multiple homepage narratives, and conversion paths (pricing, testimonials, chat).
      </p>
      <h2 className="text-xl font-semibold text-slate-900 dark:text-white">Principles</h2>
      <ul className="list-disc space-y-2 pl-5 text-slate-600 dark:text-slate-300">
        <li>Outcome-owned delivery with evals, not open-ended “AI transformation.”</li>
        <li>Memory and governance treated as first-class—not bolt-ons after launch.</li>
        <li>Provider-agnostic routing so you can diversify models responsibly.</li>
      </ul>
      <p className="text-slate-600 dark:text-slate-300">
        Explore <Link to="/products" className="font-medium text-violet-600 hover:underline dark:text-violet-300">products</Link>,{' '}
        <Link to="/platforms" className="font-medium text-violet-600 hover:underline dark:text-violet-300">platform briefs</Link>, or{' '}
        <Link to="/" className="font-medium text-violet-600 hover:underline dark:text-violet-300">ten homepage themes</Link> to see how positioning can flex by brand.
      </p>
    </article>
  )
}
