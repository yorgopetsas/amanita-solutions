import { AnimatePresence, motion, useReducedMotion } from 'motion/react'
import { ChevronDown, Menu, X } from 'lucide-react'
import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { homeThemes } from '../data/homeThemes'
import { products } from '../data/products'
import { platforms } from '../data/platforms'
import { LanguageSwitcher } from './LanguageSwitcher'
import { useI18n } from '../i18n/I18nProvider'

const linkBase =
  'rounded-lg px-3 py-2 text-sm font-medium transition-colors cursor-pointer'

type MegaKey = 'products' | 'platforms' | 'solutions' | 'studio' | 'homes' | 'explore'

type NavProps = {
  variant?: 'light' | 'dark' | 'transparent'
}

function NavDropdown({
  id,
  mega,
  setMega,
  align,
  panelClassName,
  triggerContent,
  children,
}: {
  id: MegaKey
  mega: MegaKey | null
  setMega: (v: MegaKey | null) => void
  align: 'left' | 'right'
  panelClassName: string
  triggerContent: ReactNode
  children: ReactNode
}) {
  const reduce = useReducedMotion()
  const open = mega === id
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const cancelClose = useCallback(() => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current)
      closeTimer.current = null
    }
  }, [])

  const scheduleClose = useCallback(() => {
    cancelClose()
    closeTimer.current = setTimeout(() => setMega(null), 120)
  }, [cancelClose, setMega])

  useEffect(
    () => () => {
      if (closeTimer.current) clearTimeout(closeTimer.current)
    },
    [],
  )

  const openNow = useCallback(() => {
    cancelClose()
    setMega(id)
  }, [cancelClose, id, setMega])

  return (
    <div
      className="relative"
      onMouseEnter={openNow}
      onMouseLeave={scheduleClose}
    >
      <button
        type="button"
        className={`${linkBase} text-slate-800 inline-flex items-center gap-1 hover:bg-black/5 dark:text-slate-100 dark:hover:bg-white/10 ${open ? 'bg-black/5 dark:bg-white/10' : ''}`}
        aria-expanded={open}
        aria-haspopup="true"
        onFocus={openNow}
      >
        {triggerContent}{' '}
        <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ type: 'spring', stiffness: 400, damping: 28 }}>
          <ChevronDown className="h-4 w-4 opacity-70" aria-hidden />
        </motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            className={`absolute top-full z-[200] ${align === 'right' ? 'right-0' : 'left-0'}`}
            initial={reduce ? false : { opacity: 0, y: -10, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduce ? undefined : { opacity: 0, y: -8, scale: 0.98 }}
            transition={{ type: 'spring', stiffness: 420, damping: 32, mass: 0.7 }}
            style={{ transformOrigin: align === 'right' ? 'top right' : 'top left' }}
            onMouseEnter={cancelClose}
          >
            {/* Invisible bridge so pointer never crosses “dead air” over the page */}
            <div className="h-3 w-full min-w-[8rem]" aria-hidden />
            <div
              className={`rounded-2xl border border-slate-200/90 bg-white/95 p-4 shadow-[0_24px_50px_-12px_rgba(15,23,42,0.25)] ring-1 ring-black/5 backdrop-blur-md dark:border-slate-600/80 dark:bg-slate-900/95 dark:ring-white/10 ${panelClassName}`}
            >
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function SiteNav({ variant = 'light' }: NavProps) {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mega, setMega] = useState<MegaKey | null>(null)
  const reduceMotion = useReducedMotion()
  const { t } = useI18n()

  useEffect(() => {
    if (!mega) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMega(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [mega])

  const muted = variant === 'dark' || variant === 'transparent' ? 'text-white/75' : 'text-slate-600'
  const navBg =
    variant === 'transparent'
      ? 'bg-transparent'
      : variant === 'dark'
        ? 'bg-slate-950/80 border-white/10'
        : 'bg-white/90 border-slate-200/80'

  const logoText = variant === 'dark' || variant === 'transparent' ? 'text-white' : 'text-slate-800'

  return (
    <header
      className={`sticky top-4 z-[100] mx-auto flex w-[min(100%-2rem,72rem)] items-center justify-between gap-4 overflow-visible rounded-2xl border px-4 py-3 shadow-sm backdrop-blur-md ${navBg}`}
    >
      <motion.div whileHover={reduceMotion ? undefined : { scale: 1.02 }} whileTap={reduceMotion ? undefined : { scale: 0.98 }}>
        <Link
          to="/"
          className={`flex items-center gap-2 font-[family-name:var(--font-display)] text-lg font-semibold tracking-tight ${logoText}`}
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-600 to-fuchsia-500 text-sm font-bold text-white shadow-md shadow-violet-500/30">
            Nx
          </span>
          Nexus Agents
        </Link>
      </motion.div>

      <nav className="hidden items-center gap-0.5 lg:flex" aria-label="Primary">
        <NavDropdown
          id="products"
          mega={mega}
          setMega={setMega}
          align="left"
          panelClassName="w-[min(90vw,28rem)]"
          triggerContent={t('nav.products')}
        >
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Capabilities</p>
          <ul className="grid gap-2 sm:grid-cols-2">
            {products.map((p, i) => (
              <motion.li
                key={p.slug}
                initial={reduceMotion ? false : { opacity: 0, x: -6 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.03, duration: 0.2 }}
              >
                <Link
                  to={`/products/${p.slug}`}
                  className="block cursor-pointer rounded-xl px-3 py-2 transition-colors hover:bg-violet-50 dark:hover:bg-slate-800"
                  onClick={() => setMega(null)}
                >
                  <span className="block text-sm font-semibold text-slate-900 dark:text-white">{p.name}</span>
                  <span className="block text-xs text-slate-600 dark:text-slate-400">{p.tagline}</span>
                </Link>
              </motion.li>
            ))}
          </ul>
          <Link
            to="/products"
            className="mt-3 block cursor-pointer text-center text-sm font-medium text-violet-600 transition hover:underline dark:text-violet-300"
            onClick={() => setMega(null)}
          >
            View all products
          </Link>
        </NavDropdown>

        <NavDropdown
          id="platforms"
          mega={mega}
          setMega={setMega}
          align="left"
          panelClassName="w-[min(90vw,32rem)]"
          triggerContent={t('nav.platforms')}
        >
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Major stacks</p>
          <ul className="grid max-h-64 grid-cols-2 gap-1 overflow-y-auto pr-1 text-sm">
            {platforms.map((pl, i) => (
              <motion.li
                key={pl.slug}
                initial={reduceMotion ? false : { opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: Math.min(i * 0.02, 0.24), duration: 0.18 }}
              >
                <Link
                  to={`/platforms/${pl.slug}`}
                  className="block cursor-pointer rounded-lg px-2 py-1.5 text-slate-700 transition-colors hover:bg-violet-50 dark:text-slate-200 dark:hover:bg-slate-800"
                  onClick={() => setMega(null)}
                >
                  {pl.name}
                </Link>
              </motion.li>
            ))}
          </ul>
        </NavDropdown>

        <NavDropdown
          id="solutions"
          mega={mega}
          setMega={setMega}
          align="left"
          panelClassName="w-[min(90vw,17rem)]"
          triggerContent={t('nav.solutions')}
        >
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Who you are</p>
          <ul className="space-y-1 text-sm">
            <li>
              <Link
                to="/solutions/freelancers"
                className="block cursor-pointer rounded-lg px-2 py-2 font-medium text-slate-800 transition-colors hover:bg-violet-50 dark:text-slate-100 dark:hover:bg-slate-800"
                onClick={() => setMega(null)}
              >
                Freelancers &amp; solos
              </Link>
            </li>
            <li>
              <Link
                to="/solutions/agencies"
                className="block cursor-pointer rounded-lg px-2 py-2 font-medium text-slate-800 transition-colors hover:bg-violet-50 dark:text-slate-100 dark:hover:bg-slate-800"
                onClick={() => setMega(null)}
              >
                Agencies
              </Link>
            </li>
            <li>
              <Link
                to="/solutions/enterprise"
                className="block cursor-pointer rounded-lg px-2 py-2 font-medium text-slate-800 transition-colors hover:bg-violet-50 dark:text-slate-100 dark:hover:bg-slate-800"
                onClick={() => setMega(null)}
              >
                Enterprise
              </Link>
            </li>
          </ul>
        </NavDropdown>

        <NavDropdown
          id="studio"
          mega={mega}
          setMega={setMega}
          align="left"
          panelClassName="w-[min(92vw,24rem)]"
          triggerContent={t('nav.studio')}
        >
          <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Creative &amp; craft</p>
          <div className="grid grid-cols-2 gap-x-3 gap-y-1 text-sm">
            {[
              ['/studio/design-lab', 'Design Lab'],
              ['/studio/motion', 'Motion'],
              ['/studio/systems', 'Systems'],
              ['/studio/animations', 'Animations'],
              ['/studio/components', 'Components'],
              ['/studio/collaborate', 'Collaborate'],
              ['/showreel', 'Showreel'],
            ].map(([to, label]) => (
              <Link
                key={to}
                to={to}
                className="block cursor-pointer rounded-lg px-2 py-1.5 text-slate-700 transition-colors hover:bg-violet-50 dark:text-slate-200 dark:hover:bg-slate-800"
                onClick={() => setMega(null)}
              >
                {label}
              </Link>
            ))}
          </div>
        </NavDropdown>

        <NavDropdown
          id="homes"
          mega={mega}
          setMega={setMega}
          align="right"
          panelClassName="w-[min(90vw,22rem)]"
          triggerContent={t('nav.homeThemes')}
        >
          <ul className="max-h-80 space-y-1 overflow-y-auto pr-1">
            {homeThemes.map((h, i) => (
              <motion.li
                key={h.id}
                initial={reduceMotion ? false : { opacity: 0, x: 6 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.025, duration: 0.2 }}
              >
                <Link
                  to={h.path}
                  className="block cursor-pointer rounded-xl px-3 py-2 transition-colors hover:bg-violet-50 dark:hover:bg-slate-800"
                  onClick={() => setMega(null)}
                >
                  <span className="block text-sm font-semibold text-slate-900 dark:text-white">
                    {h.id}. {h.title}
                  </span>
                  <span className="block text-xs text-slate-600 dark:text-slate-400">{h.vibe}</span>
                </Link>
              </motion.li>
            ))}
          </ul>
        </NavDropdown>

        <NavDropdown
          id="explore"
          mega={mega}
          setMega={setMega}
          align="right"
          panelClassName="w-[min(94vw,40rem)]"
          triggerContent={t('nav.explore')}
        >
          <div className="grid gap-4 sm:grid-cols-3">
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Trust &amp; proof</p>
              <ul className="space-y-1 text-sm">
                {[
                  ['/trust', 'Trust & metrics'],
                  ['/demo', 'Interactive demo'],
                  ['/faq', 'FAQ'],
                  ['/security', 'Security'],
                ].map(([to, label]) => (
                  <li key={to}>
                    <Link
                      to={to}
                      className="block cursor-pointer rounded-lg px-2 py-1.5 transition-colors hover:bg-violet-50 dark:hover:bg-slate-800"
                      onClick={() => setMega(null)}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Learn &amp; compare</p>
              <ul className="space-y-1 text-sm">
                {[
                  ['/resources', 'Resources'],
                  ['/offers', 'Offers'],
                  ['/proof-kit', 'Proof kit'],
                  ['/compare', 'Compare options'],
                  ['/prelaunch/content-cadence', 'Content cadence'],
                  ['/prelaunch/outbound-playbook', 'Outbound playbook'],
                ].map(([to, label]) => (
                  <li key={to}>
                    <Link
                      to={to}
                      className="block cursor-pointer rounded-lg px-2 py-1.5 transition-colors hover:bg-violet-50 dark:hover:bg-slate-800"
                      onClick={() => setMega(null)}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">Product surface</p>
              <ul className="space-y-1 text-sm">
                {[
                  ['/status', 'Status'],
                  ['/integrations', 'Integrations'],
                  ['/tools/roi-calculator', 'ROI calculator'],
                  ['/tools/agent-audit', 'Audit template'],
                ].map(([to, label]) => (
                  <li key={to}>
                    <Link
                      to={to}
                      className="block cursor-pointer rounded-lg px-2 py-1.5 transition-colors hover:bg-violet-50 dark:hover:bg-slate-800"
                      onClick={() => setMega(null)}
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </NavDropdown>

        <NavLink
          to="/pricing"
          className={({ isActive }) =>
            `${linkBase} text-slate-800 hover:bg-black/5 dark:text-slate-100 dark:hover:bg-white/10 ${isActive ? 'bg-black/5 dark:bg-white/10' : ''}`
          }
        >
          {t('nav.pricing')}
        </NavLink>
        <NavLink
          to="/testimonials"
          className={({ isActive }) =>
            `${linkBase} text-slate-800 hover:bg-black/5 dark:text-slate-100 dark:hover:bg-white/10 ${isActive ? 'bg-black/5 dark:bg-white/10' : ''}`
          }
        >
          {t('nav.testimonials')}
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `${linkBase} text-slate-800 hover:bg-black/5 dark:text-slate-100 dark:hover:bg-white/10 ${isActive ? 'bg-black/5 dark:bg-white/10' : ''}`
          }
        >
          {t('nav.about')}
        </NavLink>
      </nav>

      <div className="hidden items-center gap-2 lg:flex">
        <LanguageSwitcher />
        <motion.div whileHover={reduceMotion ? undefined : { scale: 1.03 }} whileTap={reduceMotion ? undefined : { scale: 0.97 }}>
          <Link
            to="/contact"
            className={`inline-flex cursor-pointer rounded-xl px-4 py-2 text-sm font-semibold shadow-lg shadow-violet-500/20 transition-colors ${
              variant === 'light'
                ? 'bg-gradient-to-r from-slate-900 to-slate-800 text-white hover:from-slate-800 hover:to-slate-700'
                : 'bg-white text-slate-900 hover:bg-violet-100'
            }`}
          >
            {t('nav.bookCall')}
          </Link>
        </motion.div>
      </div>

      <button
        type="button"
        className={`inline-flex cursor-pointer rounded-lg p-2 lg:hidden ${logoText}`}
        onClick={() => setMobileOpen((v) => !v)}
        aria-expanded={mobileOpen}
        aria-label="Toggle menu"
      >
        {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={reduceMotion ? false : { opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0, y: -6, scale: 0.99 }}
            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
            className={`absolute left-4 right-4 top-full z-[200] mt-2 rounded-2xl border p-4 shadow-2xl lg:hidden ${
              variant === 'dark' ? 'border-white/10 bg-slate-950' : 'border-slate-200 bg-white'
            }`}
          >
            <div className={`mb-2 text-xs font-semibold uppercase ${muted}`}>Navigate</div>
            <div className="flex max-h-[min(70vh,28rem)] flex-col gap-1 overflow-y-auto">
              <div className="mb-2">
                <LanguageSwitcher />
              </div>
              <Link to="/products" className="cursor-pointer rounded-lg px-2 py-2 text-sm font-medium text-slate-800 dark:text-white" onClick={() => setMobileOpen(false)}>
                Products
              </Link>
              <Link to="/platforms" className="cursor-pointer rounded-lg px-2 py-2 text-sm font-medium text-slate-800 dark:text-white" onClick={() => setMobileOpen(false)}>
                Platforms
              </Link>
              <p className={`px-2 pt-3 text-xs font-semibold uppercase ${muted}`}>Solutions</p>
              <Link to="/solutions/freelancers" className="cursor-pointer rounded-lg px-2 py-2 text-sm font-medium text-slate-800 dark:text-white" onClick={() => setMobileOpen(false)}>
                Freelancers &amp; solos
              </Link>
              <Link to="/solutions/agencies" className="cursor-pointer rounded-lg px-2 py-2 text-sm font-medium text-slate-800 dark:text-white" onClick={() => setMobileOpen(false)}>
                Agencies
              </Link>
              <Link to="/solutions/enterprise" className="cursor-pointer rounded-lg px-2 py-2 text-sm font-medium text-slate-800 dark:text-white" onClick={() => setMobileOpen(false)}>
                Enterprise
              </Link>
              <p className={`px-2 pt-3 text-xs font-semibold uppercase ${muted}`}>Studio</p>
              <Link to="/studio/design-lab" className="cursor-pointer rounded-lg px-2 py-2 text-sm font-medium text-slate-800 dark:text-white" onClick={() => setMobileOpen(false)}>
                Design Lab
              </Link>
              <Link to="/studio/motion" className="cursor-pointer rounded-lg px-2 py-2 text-sm font-medium text-slate-800 dark:text-white" onClick={() => setMobileOpen(false)}>
                Motion
              </Link>
              <Link to="/studio/systems" className="cursor-pointer rounded-lg px-2 py-2 text-sm font-medium text-slate-800 dark:text-white" onClick={() => setMobileOpen(false)}>
                Systems
              </Link>
              <Link to="/studio/animations" className="cursor-pointer rounded-lg px-2 py-2 text-sm font-medium text-slate-800 dark:text-white" onClick={() => setMobileOpen(false)}>
                Animations
              </Link>
              <Link to="/studio/components" className="cursor-pointer rounded-lg px-2 py-2 text-sm font-medium text-slate-800 dark:text-white" onClick={() => setMobileOpen(false)}>
                Components
              </Link>
              <Link to="/studio/collaborate" className="cursor-pointer rounded-lg px-2 py-2 text-sm font-medium text-slate-800 dark:text-white" onClick={() => setMobileOpen(false)}>
                Collaborate
              </Link>
              <Link to="/showreel" className="cursor-pointer rounded-lg px-2 py-2 text-sm font-medium text-slate-800 dark:text-white" onClick={() => setMobileOpen(false)}>
                Showreel
              </Link>
              <Link to="/" className="cursor-pointer rounded-lg px-2 py-2 text-sm font-medium text-slate-800 dark:text-white" onClick={() => setMobileOpen(false)}>
                Home themes gallery
              </Link>
              <Link to="/pricing" className="cursor-pointer rounded-lg px-2 py-2 text-sm font-medium text-slate-800 dark:text-white" onClick={() => setMobileOpen(false)}>
                Pricing
              </Link>
              <Link to="/trust" className="cursor-pointer rounded-lg px-2 py-2 text-sm font-medium text-slate-800 dark:text-white" onClick={() => setMobileOpen(false)}>
                Trust &amp; metrics
              </Link>
              <Link to="/demo" className="cursor-pointer rounded-lg px-2 py-2 text-sm font-medium text-slate-800 dark:text-white" onClick={() => setMobileOpen(false)}>
                Interactive demo
              </Link>
              <Link to="/faq" className="cursor-pointer rounded-lg px-2 py-2 text-sm font-medium text-slate-800 dark:text-white" onClick={() => setMobileOpen(false)}>
                FAQ
              </Link>
              <Link to="/security" className="cursor-pointer rounded-lg px-2 py-2 text-sm font-medium text-slate-800 dark:text-white" onClick={() => setMobileOpen(false)}>
                Security
              </Link>
              <Link to="/resources" className="cursor-pointer rounded-lg px-2 py-2 text-sm font-medium text-slate-800 dark:text-white" onClick={() => setMobileOpen(false)}>
                Resources
              </Link>
              <Link to="/offers" className="cursor-pointer rounded-lg px-2 py-2 text-sm font-medium text-slate-800 dark:text-white" onClick={() => setMobileOpen(false)}>
                Offers
              </Link>
              <Link to="/proof-kit" className="cursor-pointer rounded-lg px-2 py-2 text-sm font-medium text-slate-800 dark:text-white" onClick={() => setMobileOpen(false)}>
                Proof kit
              </Link>
              <Link to="/compare" className="cursor-pointer rounded-lg px-2 py-2 text-sm font-medium text-slate-800 dark:text-white" onClick={() => setMobileOpen(false)}>
                Compare
              </Link>
              <Link to="/prelaunch/content-cadence" className="cursor-pointer rounded-lg px-2 py-2 text-sm font-medium text-slate-800 dark:text-white" onClick={() => setMobileOpen(false)}>
                Content cadence
              </Link>
              <Link to="/prelaunch/outbound-playbook" className="cursor-pointer rounded-lg px-2 py-2 text-sm font-medium text-slate-800 dark:text-white" onClick={() => setMobileOpen(false)}>
                Outbound playbook
              </Link>
              <Link to="/status" className="cursor-pointer rounded-lg px-2 py-2 text-sm font-medium text-slate-800 dark:text-white" onClick={() => setMobileOpen(false)}>
                Status
              </Link>
              <Link to="/integrations" className="cursor-pointer rounded-lg px-2 py-2 text-sm font-medium text-slate-800 dark:text-white" onClick={() => setMobileOpen(false)}>
                Integrations
              </Link>
              <Link
                to="/contact"
                className="mt-2 cursor-pointer rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 py-3 text-center text-sm font-semibold text-white shadow-md"
                onClick={() => setMobileOpen(false)}
              >
                Book a call
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
