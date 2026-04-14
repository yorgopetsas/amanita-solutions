import { Code2, Mail, Network } from 'lucide-react'
import { Link } from 'react-router-dom'
import { products } from '../data/products'
import { platforms } from '../data/platforms'
import { useI18n } from '../i18n/I18nProvider'

export function SiteFooter() {
  const { t } = useI18n()
  return (
    <footer className="mt-24 border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        <div>
          <p className="font-[family-name:var(--font-display)] text-lg font-semibold text-slate-900 dark:text-white">Nexus Agents</p>
          <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            An AI agents agency demo: strategy, build, and operate autonomous workflows across your stack.
          </p>
          <div className="mt-4 flex gap-3">
            <a href="https://github.com" className="cursor-pointer text-slate-500 transition hover:text-slate-800 dark:hover:text-white" aria-label="GitHub">
              <Code2 className="h-5 w-5" />
            </a>
            <a href="https://linkedin.com" className="cursor-pointer text-slate-500 transition hover:text-slate-800 dark:hover:text-white" aria-label="LinkedIn">
              <Network className="h-5 w-5" />
            </a>
            <a href="mailto:hello@nexusagents.example" className="cursor-pointer text-slate-500 transition hover:text-slate-800 dark:hover:text-white" aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{t('footer.products')}</p>
          <ul className="mt-3 space-y-2 text-sm">
            {products.slice(0, 5).map((p) => (
              <li key={p.slug}>
                <Link to={`/products/${p.slug}`} className="cursor-pointer text-slate-700 hover:text-violet-600 dark:text-slate-300 dark:hover:text-violet-300">
                  {p.name}
                </Link>
              </li>
            ))}
            <li>
              <Link to="/products" className="cursor-pointer font-medium text-violet-600 hover:underline dark:text-violet-300">
                All products
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{t('footer.platforms')}</p>
          <ul className="mt-3 grid grid-cols-2 gap-x-2 gap-y-2 text-sm">
            {platforms.map((pl) => (
              <li key={pl.slug}>
                <Link to={`/platforms/${pl.slug}`} className="cursor-pointer text-slate-700 hover:text-violet-600 dark:text-slate-300 dark:hover:text-violet-300">
                  {pl.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{t('footer.company')}</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link to="/about" className="cursor-pointer text-slate-700 hover:text-violet-600 dark:text-slate-300">
                About
              </Link>
            </li>
            <li>
              <Link to="/testimonials" className="cursor-pointer text-slate-700 hover:text-violet-600 dark:text-slate-300">
                Testimonials
              </Link>
            </li>
            <li>
              <Link to="/pricing" className="cursor-pointer text-slate-700 hover:text-violet-600 dark:text-slate-300">
                Pricing
              </Link>
            </li>
            <li>
              <Link to="/contact" className="cursor-pointer text-slate-700 hover:text-violet-600 dark:text-slate-300">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/case-studies" className="cursor-pointer text-slate-700 hover:text-violet-600 dark:text-slate-300">
                Case studies
              </Link>
            </li>
            <li>
              <Link to="/careers" className="cursor-pointer text-slate-700 hover:text-violet-600 dark:text-slate-300">
                Careers
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{t('footer.solutionsStudio')}</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link to="/solutions/freelancers" className="cursor-pointer text-slate-700 hover:text-violet-600 dark:text-slate-300">
                Freelancers
              </Link>
            </li>
            <li>
              <Link to="/solutions/agencies" className="cursor-pointer text-slate-700 hover:text-violet-600 dark:text-slate-300">
                Agencies
              </Link>
            </li>
            <li>
              <Link to="/solutions/enterprise" className="cursor-pointer text-slate-700 hover:text-violet-600 dark:text-slate-300">
                Enterprise
              </Link>
            </li>
            <li>
              <Link to="/showreel" className="cursor-pointer text-slate-700 hover:text-violet-600 dark:text-slate-300">
                Showreel
              </Link>
            </li>
            <li>
              <Link to="/studio/design-lab" className="cursor-pointer text-slate-700 hover:text-violet-600 dark:text-slate-300">
                Design Lab
              </Link>
            </li>
            <li>
              <Link to="/studio/motion" className="cursor-pointer text-slate-700 hover:text-violet-600 dark:text-slate-300">
                Motion studio
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{t('footer.trustGrowth')}</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link to="/trust" className="cursor-pointer text-slate-700 hover:text-violet-600 dark:text-slate-300">
                Trust &amp; metrics
              </Link>
            </li>
            <li>
              <Link to="/demo" className="cursor-pointer text-slate-700 hover:text-violet-600 dark:text-slate-300">
                Interactive demo
              </Link>
            </li>
            <li>
              <Link to="/faq" className="cursor-pointer text-slate-700 hover:text-violet-600 dark:text-slate-300">
                FAQ
              </Link>
            </li>
            <li>
              <Link to="/security" className="cursor-pointer text-slate-700 hover:text-violet-600 dark:text-slate-300">
                Security
              </Link>
            </li>
            <li>
              <Link to="/resources" className="cursor-pointer text-slate-700 hover:text-violet-600 dark:text-slate-300">
                Resources
              </Link>
            </li>
            <li>
              <Link to="/offers" className="cursor-pointer text-slate-700 hover:text-violet-600 dark:text-slate-300">
                Offers
              </Link>
            </li>
            <li>
              <Link to="/proof-kit" className="cursor-pointer text-slate-700 hover:text-violet-600 dark:text-slate-300">
                Proof kit
              </Link>
            </li>
            <li>
              <Link to="/compare" className="cursor-pointer text-slate-700 hover:text-violet-600 dark:text-slate-300">
                Compare
              </Link>
            </li>
            <li>
              <Link to="/prelaunch/content-cadence" className="cursor-pointer text-slate-700 hover:text-violet-600 dark:text-slate-300">
                Content cadence
              </Link>
            </li>
            <li>
              <Link to="/prelaunch/outbound-playbook" className="cursor-pointer text-slate-700 hover:text-violet-600 dark:text-slate-300">
                Outbound playbook
              </Link>
            </li>
            <li>
              <Link to="/newsletter" className="cursor-pointer text-slate-700 hover:text-violet-600 dark:text-slate-300">
                Newsletter &amp; tools
              </Link>
            </li>
            <li>
              <Link to="/status" className="cursor-pointer text-slate-700 hover:text-violet-600 dark:text-slate-300">
                Status
              </Link>
            </li>
            <li>
              <Link to="/integrations" className="cursor-pointer text-slate-700 hover:text-violet-600 dark:text-slate-300">
                Integrations
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200 py-6 text-center text-xs text-slate-500 dark:border-slate-800">
        Demo site — patterns informed by public AI agency landings (e.g.{' '}
        <a className="underline-offset-2 hover:underline" href="https://theaiagency.io/" target="_blank" rel="noreferrer">
          theaiagency.io
        </a>
        ,{' '}
        <a className="underline-offset-2 hover:underline" href="https://agentweb.pro/" target="_blank" rel="noreferrer">
          agentweb.pro
        </a>
        ).
      </div>
    </footer>
  )
}
