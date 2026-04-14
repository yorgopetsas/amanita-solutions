import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { Outlet, useLocation } from 'react-router-dom'
import { hasLocaleCoverage } from '../i18n/coverage'
import { useI18n } from '../i18n/I18nProvider'
import { trackPageView } from '../lib/analytics'
import { MagicChatDock } from './MagicChatDock'
import { SiteFooter } from './SiteFooter'
import { SiteNav } from './SiteNav'

export function Layout() {
  const location = useLocation()
  const reduce = useReducedMotion()
  const { locale, t } = useI18n()

  useEffect(() => {
    trackPageView(location.pathname)
  }, [location.pathname])

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'amanita.barcelona',
            url: 'https://amanita.barcelona',
            logo: 'https://amanita.barcelona/favicon.svg',
            sameAs: ['https://github.com/yorgopetsas/amanita-solutions'],
            contactPoint: [
              {
                '@type': 'ContactPoint',
                contactType: 'sales',
                url: 'https://amanita.barcelona/contact',
                availableLanguage: ['en', 'es', 'ca'],
              },
            ],
          })}
        </script>
      </Helmet>
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <motion.div
          aria-hidden
          className="absolute -left-1/4 top-0 h-[42rem] w-[42rem] rounded-full bg-violet-400/15 blur-3xl dark:bg-violet-600/10"
          animate={
            reduce
              ? undefined
              : {
                  x: [0, 40, 0],
                  y: [0, 24, 0],
                  scale: [1, 1.05, 1],
                }
          }
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          aria-hidden
          className="absolute -right-1/4 bottom-0 h-[36rem] w-[36rem] rounded-full bg-fuchsia-400/12 blur-3xl dark:bg-fuchsia-600/10"
          animate={
            reduce
              ? undefined
              : {
                  x: [0, -32, 0],
                  y: [0, -20, 0],
                }
          }
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
      <div className="shrink-0 pb-6 pt-4">
        <SiteNav />
      </div>
      <main className="relative mx-auto w-full max-w-6xl flex-1 px-6 pb-16">
        {!hasLocaleCoverage(locale, location.pathname) && (
          <div className="mb-5 rounded-xl border border-amber-300 bg-amber-50 px-4 py-2 text-sm text-amber-900 dark:border-amber-900 dark:bg-amber-950/40 dark:text-amber-100">
            {t('common.untranslated')}
          </div>
        )}
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={reduce ? false : { opacity: 0, y: 16, filter: 'blur(6px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            exit={reduce ? undefined : { opacity: 0, y: -10, filter: 'blur(4px)' }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <SiteFooter />
      <MagicChatDock />
    </div>
  )
}
