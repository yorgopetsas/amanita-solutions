import { Quote } from 'lucide-react'

const stories = [
  {
    quote: 'They replaced a brittle script farm with three supervised agents—our ops team finally trusts the automation.',
    name: 'Jordan Lee',
    role: 'VP Operations, Series C logistics',
    metric: '−38% handle time',
  },
  {
    quote: 'The retrieval stack actually cites sources. Legal said yes on the first review.',
    name: 'Priya Desai',
    role: 'General Counsel, fintech',
    metric: '100% cited answers in pilot',
  },
  {
    quote: 'We went from “ChatGPT in a tab” to embedded agents in Salesforce and Jira in six weeks.',
    name: 'Marcus O.',
    role: 'Head of IT, healthcare network',
    metric: '6 weeks to prod pilot',
  },
]

export function TestimonialsPage() {
  return (
    <div className="space-y-10">
      <header>
        <h1 className="font-[family-name:var(--font-display)] text-4xl font-semibold text-slate-900 dark:text-white">Testimonials</h1>
        <p className="mt-3 max-w-2xl text-slate-600 dark:text-slate-300">
          Synthetic quotes for layout purposes—swap with real customers when you ship. Agent landings like AgentWeb and The AI Agency lean heavily on proof and metrics.
        </p>
      </header>
      <div className="grid gap-6 md:grid-cols-3">
        {stories.map((s) => (
          <figure key={s.name} className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
            <Quote className="h-8 w-8 text-violet-200 dark:text-violet-800" aria-hidden />
            <blockquote className="mt-3 text-sm leading-relaxed text-slate-700 dark:text-slate-200">“{s.quote}”</blockquote>
            <figcaption className="mt-4 text-sm">
              <span className="font-semibold text-slate-900 dark:text-white">{s.name}</span>
              <span className="block text-slate-500">{s.role}</span>
              <span className="mt-2 inline-block rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800 dark:bg-emerald-950 dark:text-emerald-200">
                {s.metric}
              </span>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  )
}
