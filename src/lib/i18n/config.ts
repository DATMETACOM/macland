export const languageCookieName = 'macland-lang'

export const locales = ['vi', 'en', 'zh', 'ko', 'ja'] as const

export type Locale = (typeof locales)[number]

export type LanguageOption = {
  code: Locale
  label: string
  nativeLabel: string
  shortLabel: string
}

export const defaultLocale: Locale = 'vi'

export const languageOptions: LanguageOption[] = [
  { code: 'vi', label: 'Vietnamese', nativeLabel: 'Vietnamese', shortLabel: 'VI' },
  { code: 'en', label: 'English', nativeLabel: 'English', shortLabel: 'EN' },
  { code: 'zh', label: 'Chinese', nativeLabel: 'Chinese', shortLabel: 'ZH' },
  { code: 'ko', label: 'Korean', nativeLabel: 'Korean', shortLabel: 'KO' },
  { code: 'ja', label: 'Japanese', nativeLabel: 'Japanese', shortLabel: 'JA' },
]

export function isLocale(value: string | null | undefined): value is Locale {
  return locales.includes((value || '').toLowerCase() as Locale)
}
