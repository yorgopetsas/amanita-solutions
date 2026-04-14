import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'

export type Locale = 'en' | 'es' | 'ca'

type I18nContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (key: string, fallback?: string) => string
}

const I18nContext = createContext<I18nContextValue | null>(null)

const STORAGE_KEY = 'amanita.locale'

const messages: Record<Locale, Record<string, string>> = {
  en: {
    'lang.en': 'EN',
    'lang.es': 'ES',
    'lang.ca': 'CA',
    'nav.products': 'Products',
    'nav.platforms': 'Platforms',
    'nav.solutions': 'Solutions',
    'nav.studio': 'Studio',
    'nav.homeThemes': 'Home themes',
    'nav.explore': 'Explore',
    'nav.pricing': 'Pricing',
    'nav.testimonials': 'Testimonials',
    'nav.about': 'About',
    'nav.bookCall': 'Book a call',
    'footer.products': 'Products',
    'footer.platforms': 'Platforms',
    'footer.company': 'Company',
    'footer.solutionsStudio': 'Solutions & studio',
    'footer.trustGrowth': 'Trust & growth',
    'homeGallery.badge': '11 homepage concepts',
    'homeGallery.title': 'Pick the entrance that fits your brand.',
    'homeGallery.body':
      'Each theme is a full hero experience with Motion for React. Explore liquid neural motion, anatomy maps, bento storytelling, and more, then reuse components in production.',
    'homeGallery.cta': 'Start a project',
    'contact.title': 'Contact',
    'contact.body': 'Lead form supports webhook mode and booking links from environment variables.',
    'contact.bookCalendly': 'Book directly in Calendly',
    'contact.name': 'Name',
    'contact.workEmail': 'Work email',
    'contact.notes': 'What should agents do for you?',
    'contact.submit': 'Request a call',
    'contact.submitting': 'Submitting...',
    'pricing.title': 'Pricing',
    'pricing.body':
      'Illustrative bands modeled after public AI agency pages (deployment fees + monthly operation). Final scopes follow discovery.',
    'pricing.offerLink': 'See productized offer ladder',
    'common.untranslated':
      'This page is currently shown in English while translation is in progress.',
  },
  es: {
    'lang.en': 'EN',
    'lang.es': 'ES',
    'lang.ca': 'CA',
    'nav.products': 'Productos',
    'nav.platforms': 'Plataformas',
    'nav.solutions': 'Soluciones',
    'nav.studio': 'Estudio',
    'nav.homeThemes': 'Home themes',
    'nav.explore': 'Explorar',
    'nav.pricing': 'Precios',
    'nav.testimonials': 'Testimonios',
    'nav.about': 'Sobre nosotros',
    'nav.bookCall': 'Reservar llamada',
    'footer.products': 'Productos',
    'footer.platforms': 'Plataformas',
    'footer.company': 'Empresa',
    'footer.solutionsStudio': 'Soluciones y estudio',
    'footer.trustGrowth': 'Confianza y crecimiento',
    'homeGallery.badge': '11 propuestas de homepage',
    'homeGallery.title': 'Elige la entrada que mejor encaja con tu marca.',
    'homeGallery.body':
      'Cada tema es una experiencia completa de hero con Motion for React. Explora movimiento líquido, mapas de anatomía, storytelling bento y más, y reutiliza componentes en producción.',
    'homeGallery.cta': 'Iniciar proyecto',
    'contact.title': 'Contacto',
    'contact.body': 'El formulario soporta modo webhook y enlaces de reserva desde variables de entorno.',
    'contact.bookCalendly': 'Reservar directamente en Calendly',
    'contact.name': 'Nombre',
    'contact.workEmail': 'Email de trabajo',
    'contact.notes': '¿Qué deberían hacer los agentes por ti?',
    'contact.submit': 'Solicitar llamada',
    'contact.submitting': 'Enviando...',
    'pricing.title': 'Precios',
    'pricing.body':
      'Bandas orientativas inspiradas en agencias de IA públicas (despliegue + operación mensual). El alcance final se define tras discovery.',
    'pricing.offerLink': 'Ver ofertas productizadas',
    'common.untranslated':
      'Esta página se muestra en inglés mientras completamos la traducción.',
  },
  ca: {
    'lang.en': 'EN',
    'lang.es': 'ES',
    'lang.ca': 'CA',
    'nav.products': 'Productes',
    'nav.platforms': 'Plataformes',
    'nav.solutions': 'Solucions',
    'nav.studio': 'Estudi',
    'nav.homeThemes': 'Home themes',
    'nav.explore': 'Explorar',
    'nav.pricing': 'Preus',
    'nav.testimonials': 'Testimonis',
    'nav.about': 'Sobre nosaltres',
    'nav.bookCall': 'Reservar trucada',
    'footer.products': 'Productes',
    'footer.platforms': 'Plataformes',
    'footer.company': 'Empresa',
    'footer.solutionsStudio': 'Solucions i estudi',
    'footer.trustGrowth': 'Confiança i creixement',
    'homeGallery.badge': '11 propostes de homepage',
    'homeGallery.title': 'Tria l’entrada que millor encaixa amb la teva marca.',
    'homeGallery.body':
      'Cada tema és una experiència completa de hero amb Motion for React. Explora moviment líquid, mapes d’anatomia, storytelling bento i més, i reutilitza components en producció.',
    'homeGallery.cta': 'Iniciar projecte',
    'contact.title': 'Contacte',
    'contact.body': 'El formulari admet mode webhook i enllaços de reserva des de variables d’entorn.',
    'contact.bookCalendly': 'Reservar directament a Calendly',
    'contact.name': 'Nom',
    'contact.workEmail': 'Email de feina',
    'contact.notes': 'Què haurien de fer els agents per a tu?',
    'contact.submit': 'Sol·licitar trucada',
    'contact.submitting': 'Enviant...',
    'pricing.title': 'Preus',
    'pricing.body':
      'Franges orientatives inspirades en agències d’IA públiques (desplegament + operació mensual). L’abast final es defineix després del discovery.',
    'pricing.offerLink': 'Veure ofertes productitzades',
    'common.untranslated':
      'Aquesta pàgina es mostra en anglès mentre completem la traducció.',
  },
}

function detectInitialLocale(): Locale {
  const stored = localStorage.getItem(STORAGE_KEY)
  if (stored === 'en' || stored === 'es' || stored === 'ca') return stored
  return 'en'
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => detectInitialLocale())

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  const setLocale = (next: Locale) => {
    setLocaleState(next)
    localStorage.setItem(STORAGE_KEY, next)
    document.documentElement.lang = next
  }

  const value = useMemo<I18nContextValue>(
    () => ({
      locale,
      setLocale,
      t: (key: string, fallback?: string) => messages[locale][key] ?? fallback ?? messages.en[key] ?? key,
    }),
    [locale],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used inside I18nProvider')
  return ctx
}
