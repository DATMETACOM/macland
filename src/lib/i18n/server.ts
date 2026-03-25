import { cookies, headers } from 'next/headers'

import { defaultLocale, isLocale, Locale, languageCookieName } from '@/lib/i18n/config'
import { getDictionary } from '@/lib/i18n/dictionaries'

const countryToLocale: Record<string, Locale> = {
  CN: 'zh',
  TW: 'zh',
  HK: 'zh',
  MO: 'zh',
  KR: 'ko',
  KP: 'ko',
  JP: 'ja',
  US: 'en',
  GB: 'en',
  AU: 'en',
  CA: 'en',
  SG: 'en',
  IN: 'en',
  VN: 'vi',
}

const languageToLocale: Array<{ prefix: string; locale: Locale }> = [
  { prefix: 'vi', locale: 'vi' },
  { prefix: 'zh', locale: 'zh' },
  { prefix: 'ko', locale: 'ko' },
  { prefix: 'ja', locale: 'ja' },
  { prefix: 'en', locale: 'en' },
]

function pickLocaleFromAcceptLanguage(value: string | null): Locale | null {
  if (!value) return null

  const candidates = value
    .split(',')
    .map((entry) => entry.trim().split(';')[0]?.toLowerCase())
    .filter(Boolean) as string[]

  for (const candidate of candidates) {
    const match = languageToLocale.find(({ prefix }) => candidate === prefix || candidate.startsWith(`${prefix}-`))
    if (match) return match.locale
  }

  return null
}

async function getDetectedLocale(): Promise<Locale> {
  const requestHeaders = await headers()
  const countryHeader = (
    requestHeaders.get('x-vercel-ip-country')
    || requestHeaders.get('cf-ipcountry')
    || requestHeaders.get('x-country-code')
    || ''
  ).toUpperCase()

  if (countryHeader && countryToLocale[countryHeader]) {
    return countryToLocale[countryHeader]
  }

  return pickLocaleFromAcceptLanguage(requestHeaders.get('accept-language')) || defaultLocale
}

export async function getRequestLocale(): Promise<Locale> {
  const cookieStore = await cookies()
  const cookieLocale = cookieStore.get(languageCookieName)?.value

  if (isLocale(cookieLocale)) {
    return cookieLocale
  }

  return getDetectedLocale()
}

export async function getRequestDictionary() {
  const locale = await getRequestLocale()

  return {
    locale,
    dict: getDictionary(locale),
  }
}

export async function hasLanguageCookie() {
  const cookieStore = await cookies()
  return Boolean(cookieStore.get(languageCookieName)?.value)
}
