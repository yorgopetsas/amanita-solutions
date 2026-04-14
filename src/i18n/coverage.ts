import type { Locale } from './I18nProvider'

export function hasLocaleCoverage(locale: Locale, pathname: string) {
  void pathname
  return locale === 'en' || locale === 'es' || locale === 'ca'
}
