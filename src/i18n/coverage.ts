import type { Locale } from './I18nProvider'

const fullCoverage: string[] = ['/', '/contact', '/pricing']

export function hasLocaleCoverage(locale: Locale, pathname: string) {
  if (locale === 'en') return true
  return fullCoverage.includes(pathname)
}
