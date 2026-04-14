declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
    dataLayer?: unknown[]
    plausible?: (event: string, options?: { props?: Record<string, string | number | boolean> }) => void
  }
}

const gaId = import.meta.env.VITE_GA_ID as string | undefined
const plausibleDomain = import.meta.env.VITE_PLAUSIBLE_DOMAIN as string | undefined

export function initAnalytics() {
  if (gaId && typeof window.gtag === 'undefined') {
    const script = document.createElement('script')
    script.async = true
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`
    document.head.appendChild(script)

    window.dataLayer = window.dataLayer || []
    const gtag = (...args: unknown[]) => {
      window.dataLayer?.push(args)
    }
    gtag('js', new Date())
    gtag('config', gaId)
    window.gtag = gtag
  }

  if (plausibleDomain && !document.querySelector('script[data-domain]')) {
    const script = document.createElement('script')
    script.defer = true
    script.src = 'https://plausible.io/js/script.js'
    script.setAttribute('data-domain', plausibleDomain)
    document.head.appendChild(script)
  }
}

export function trackEvent(name: string, props?: Record<string, string | number | boolean>) {
  if (window.gtag) {
    window.gtag('event', name, props || {})
  }
  if (window.plausible) {
    window.plausible(name, props ? { props } : undefined)
  }
}

export function trackPageView(path: string) {
  if (window.gtag) {
    window.gtag('event', 'page_view', { page_path: path })
  }
}
