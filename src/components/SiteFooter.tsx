import { Code2, Mail, Network } from 'lucide-react'
import { Link } from 'react-router-dom'
import { products } from '../data/products'
import { platforms } from '../data/platforms'
import { useI18n } from '../i18n/I18nProvider'

export function SiteFooter() {
  const { t, locale } = useI18n()
  const sitemapLabel = locale === 'es' ? 'Mapa del sitio' : locale === 'ca' ? 'Mapa del lloc' : 'Sitemap'
  const reviewCopy = {
    en: {
      title: 'Review links',
      homeGallery: 'Home concepts gallery',
      homeV1: 'Home variant 1',
      homeV6: 'Home variant 6',
      homeV11: 'Home variant 11',
      platformsIndex: 'Platforms index',
      studioAnimations: 'Studio animations',
      studioComponents: 'Studio components',
      studioCollaborate: 'Studio collaborate',
    },
    es: {
      title: 'Enlaces de revisión',
      homeGallery: 'Galería de home concepts',
      homeV1: 'Home variant 1',
      homeV6: 'Home variant 6',
      homeV11: 'Home variant 11',
      platformsIndex: 'Índice de plataformas',
      studioAnimations: 'Studio animations',
      studioComponents: 'Studio components',
      studioCollaborate: 'Studio collaborate',
    },
    ca: {
      title: 'Enllaços de revisió',
      homeGallery: 'Galeria de home concepts',
      homeV1: 'Home variant 1',
      homeV6: 'Home variant 6',
      homeV11: 'Home variant 11',
      platformsIndex: 'Índex de plataformes',
      studioAnimations: 'Studio animations',
      studioComponents: 'Studio components',
      studioCollaborate: 'Studio collaborate',
    },
  }[locale]

  return (
    <footer className="mt-24 border-t border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-7">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white ring-1 ring-violet-200 shadow-sm dark:bg-slate-100 dark:ring-violet-300/30">
              <img src="/amanita-logo.png" alt="" width={32} height={32} className="h-8 w-8 object-contain" decoding="async" />
            </span>
            <p className="font-[family-name:var(--font-display)] text-lg font-semibold text-slate-900 dark:text-white">amanita.barcelona</p>
          </div>
          <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
            An AI agents agency demo: strategy, build, and operate autonomous workflows across your stack.
          </p>
          <div className="mt-4 flex gap-3">
            <a href="https://www.amanita.barcelona" className="cursor-pointer text-slate-500 transition hover:text-slate-800 dark:hover:text-white" aria-label="GitHub">
              <Code2 className="h-5 w-5" />
            </a>
            <a href="https://www.amanita.barcelona" className="cursor-pointer text-slate-500 transition hover:text-slate-800 dark:hover:text-white" aria-label="LinkedIn">
              <Network className="h-5 w-5" />
            </a>
            <a href="mailto:hello@amanita.barcelona" className="cursor-pointer text-slate-500 transition hover:text-slate-800 dark:hover:text-white" aria-label="Email">
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
                {t('footer.allProducts')}
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
                {t('footer.about')}
              </Link>
            </li>
            <li>
              <Link to="/testimonials" className="cursor-pointer text-slate-700 hover:text-violet-600 dark:text-slate-300">
                {t('nav.testimonials')}
              </Link>
            </li>
            <li>
              <Link to="/pricing" className="cursor-pointer text-slate-700 hover:text-violet-600 dark:text-slate-300">
                {t('nav.pricing')}
              </Link>
            </li>
            <li>
              <Link to="/contact" className="cursor-pointer text-slate-700 hover:text-violet-600 dark:text-slate-300">
                {t('footer.contact')}
              </Link>
            </li>
            <li>
              <Link to="/case-studies" className="cursor-pointer text-slate-700 hover:text-violet-600 dark:text-slate-300">
                {t('footer.caseStudies')}
              </Link>
            </li>
            <li>
              <Link to="/careers" className="cursor-pointer text-slate-700 hover:text-violet-600 dark:text-slate-300">
                {t('footer.careers')}
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{t('footer.solutionsStudio')}</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link to="/solutions/freelancers" className="cursor-pointer text-slate-700 hover:text-violet-600 dark:text-slate-300">
                {t('footer.freelancers')}
              </Link>
            </li>
            <li>
              <Link to="/solutions/agencies" className="cursor-pointer text-slate-700 hover:text-violet-600 dark:text-slate-300">
                {t('nav.agencies')}
              </Link>
            </li>
            <li>
              <Link to="/solutions/enterprise" className="cursor-pointer text-slate-700 hover:text-violet-600 dark:text-slate-300">
                {t('nav.enterprise')}
              </Link>
            </li>
            <li>
              <Link to="/showreel" className="cursor-pointer text-slate-700 hover:text-violet-600 dark:text-slate-300">
                {t('nav.showreel')}
              </Link>
            </li>
            <li>
              <Link to="/studio/design-lab" className="cursor-pointer text-slate-700 hover:text-violet-600 dark:text-slate-300">
                {t('nav.designLab')}
              </Link>
            </li>
            <li>
              <Link to="/studio/motion" className="cursor-pointer text-slate-700 hover:text-violet-600 dark:text-slate-300">
                {t('footer.motionStudio')}
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{t('footer.trustGrowth')}</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link to="/trust" className="cursor-pointer text-slate-700 hover:text-violet-600 dark:text-slate-300">
                {t('nav.trustMetrics')}
              </Link>
            </li>
            <li>
              <Link to="/demo" className="cursor-pointer text-slate-700 hover:text-violet-600 dark:text-slate-300">
                {t('footer.interactiveDemo')}
              </Link>
            </li>
            <li>
              <Link to="/faq" className="cursor-pointer text-slate-700 hover:text-violet-600 dark:text-slate-300">
                {t('nav.faq')}
              </Link>
            </li>
            <li>
              <Link to="/security" className="cursor-pointer text-slate-700 hover:text-violet-600 dark:text-slate-300">
                {t('nav.security')}
              </Link>
            </li>
            <li>
              <Link to="/resources" className="cursor-pointer text-slate-700 hover:text-violet-600 dark:text-slate-300">
                {t('footer.resources')}
              </Link>
            </li>
            <li>
              <Link to="/offers" className="cursor-pointer text-slate-700 hover:text-violet-600 dark:text-slate-300">
                {t('footer.offers')}
              </Link>
            </li>
            <li>
              <Link to="/proof-kit" className="cursor-pointer text-slate-700 hover:text-violet-600 dark:text-slate-300">
                {t('footer.proofKit')}
              </Link>
            </li>
            <li>
              <Link to="/compare" className="cursor-pointer text-slate-700 hover:text-violet-600 dark:text-slate-300">
                {t('footer.compare')}
              </Link>
            </li>
            <li>
              <Link to="/prelaunch/content-cadence" className="cursor-pointer text-slate-700 hover:text-violet-600 dark:text-slate-300">
                {t('footer.contentCadence')}
              </Link>
            </li>
            <li>
              <Link to="/prelaunch/outbound-playbook" className="cursor-pointer text-slate-700 hover:text-violet-600 dark:text-slate-300">
                {t('footer.outboundPlaybook')}
              </Link>
            </li>
            <li>
              <Link to="/newsletter" className="cursor-pointer text-slate-700 hover:text-violet-600 dark:text-slate-300">
                {t('footer.newsletterTools')}
              </Link>
            </li>
            <li>
              <Link to="/status" className="cursor-pointer text-slate-700 hover:text-violet-600 dark:text-slate-300">
                {t('footer.status')}
              </Link>
            </li>
            <li>
              <Link to="/integrations" className="cursor-pointer text-slate-700 hover:text-violet-600 dark:text-slate-300">
                {t('footer.integrations')}
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{reviewCopy.title}</p>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link to="/home/12" className="cursor-pointer text-slate-700 hover:text-violet-600 dark:text-slate-300">
                {reviewCopy.homeGallery}
              </Link>
            </li>
            <li>
              <Link to="/home/1" className="cursor-pointer text-slate-700 hover:text-violet-600 dark:text-slate-300">
                {reviewCopy.homeV1}
              </Link>
            </li>
            <li>
              <Link to="/home/6" className="cursor-pointer text-slate-700 hover:text-violet-600 dark:text-slate-300">
                {reviewCopy.homeV6}
              </Link>
            </li>
            <li>
              <Link to="/home/11" className="cursor-pointer text-slate-700 hover:text-violet-600 dark:text-slate-300">
                {reviewCopy.homeV11}
              </Link>
            </li>
            <li>
              <Link to="/platforms" className="cursor-pointer text-slate-700 hover:text-violet-600 dark:text-slate-300">
                {reviewCopy.platformsIndex}
              </Link>
            </li>
            <li>
              <Link to="/studio/animations" className="cursor-pointer text-slate-700 hover:text-violet-600 dark:text-slate-300">
                {reviewCopy.studioAnimations}
              </Link>
            </li>
            <li>
              <Link to="/studio/components" className="cursor-pointer text-slate-700 hover:text-violet-600 dark:text-slate-300">
                {reviewCopy.studioComponents}
              </Link>
            </li>
            <li>
              <Link to="/studio/collaborate" className="cursor-pointer text-slate-700 hover:text-violet-600 dark:text-slate-300">
                {reviewCopy.studioCollaborate}
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200 py-6 text-center text-xs text-slate-500 dark:border-slate-800">
        {t('footer.demoDisclaimer')} (e.g.{' '}
        <a className="underline-offset-2 hover:underline" href="https://www.amanita.barcelona" target="_blank" rel="noreferrer">
          www.amanita.barcelona
        </a>
        ,{' '}
        <a className="underline-offset-2 hover:underline" href="https://www.amanita.barcelona" target="_blank" rel="noreferrer">
          www.amanita.barcelona
        </a>
        ).{' '}
        <a className="underline-offset-2 hover:underline" href="/sitemap.xml" target="_blank" rel="noreferrer">
          {sitemapLabel}
        </a>
      </div>
    </footer>
  )
}
