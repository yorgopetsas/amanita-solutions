import { useI18n, type Locale } from '../i18n/I18nProvider'

const locales: Locale[] = ['en', 'es', 'ca']

export function LanguageSwitcher() {
  const { locale, setLocale, t } = useI18n()

  return (
    <div className="inline-flex items-center gap-1 rounded-xl border border-slate-200 bg-white/80 p-1 text-xs shadow-sm backdrop-blur dark:border-slate-700 dark:bg-slate-900/70">
      {locales.map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLocale(code)}
          className={`cursor-pointer rounded-lg px-2.5 py-1 font-semibold transition ${
            locale === code
              ? 'bg-violet-600 text-white'
              : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800'
          }`}
          aria-pressed={locale === code}
        >
          {t(`lang.${code}`)}
        </button>
      ))}
    </div>
  )
}
