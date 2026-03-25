import 'server-only'

import enTranslations from '@/../data/product-translations/en.json'
import jaTranslations from '@/../data/product-translations/ja.json'
import koTranslations from '@/../data/product-translations/ko.json'
import zhTranslations from '@/../data/product-translations/zh.json'
import { Locale } from '@/lib/i18n/config'
import { Product } from '@/types/product'

type ProductTranslationEntry = {
  title?: string
  content?: {
    description?: string
    full_content?: string
  }
  location?: {
    province?: string
    district?: string
    address?: string
  }
  details?: {
    occupancy_rate?: string
  }
  legal?: {
    status?: string
  }
}

type ProductTranslationMap = Record<string, ProductTranslationEntry>

const productTranslations: Record<Locale, ProductTranslationMap> = {
  vi: {},
  en: enTranslations,
  zh: zhTranslations,
  ko: koTranslations,
  ja: jaTranslations,
}

export function getProductTranslation(slug: string, locale: Locale): ProductTranslationEntry | null {
  if (locale === 'vi') {
    return null
  }

  return productTranslations[locale][slug] || null
}

export function getLocalizedProduct(product: Product, locale: Locale): Product {
  const translation = getProductTranslation(product.slug, locale)

  if (!translation) {
    return product
  }

  return {
    ...product,
    title: translation.title || product.title,
    content: {
      ...product.content,
      description: translation.content?.description || product.content.description,
      full_content: translation.content?.full_content || product.content.full_content,
    },
    location: {
      ...product.location,
      province: translation.location?.province || product.location.province,
      district: translation.location?.district || product.location.district,
      address: translation.location?.address || product.location.address,
    },
    details: {
      ...product.details,
      occupancy_rate: translation.details?.occupancy_rate || product.details.occupancy_rate,
    },
    legal: {
      ...product.legal,
      status: translation.legal?.status || product.legal.status,
    },
  }
}
