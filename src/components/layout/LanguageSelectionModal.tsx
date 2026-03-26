'use client'

import { useEffect, useMemo, useState } from 'react'
import { Check, MapPin, X } from 'lucide-react'

import { cn } from '@/lib/utils/cn'
import { languageCookieName, languageOptions, Locale } from '@/lib/i18n/config'

type LanguageSelectionModalProps = {
  initialLocale: Locale
  isFirstVisit: boolean
  title: string
  description: string
  confirmLabel: string
  helper: string
  recommendedLabel: string
  closeLabel: string
}

function persistLocale(locale: Locale) {
  document.cookie = `${languageCookieName}=${locale}; path=/; max-age=31536000; SameSite=Lax`
  window.location.reload()
}

export default function LanguageSelectionModal({
  initialLocale,
  isFirstVisit,
  title,
  description,
  confirmLabel,
  helper,
  recommendedLabel,
  closeLabel,
}: LanguageSelectionModalProps) {
  const [isOpen, setIsOpen] = useState(isFirstVisit)
  const [selectedLocale, setSelectedLocale] = useState<Locale>(initialLocale)

  const recommendedLocale = useMemo(
    () => languageOptions.find((option) => option.code === initialLocale) || languageOptions[0],
    [initialLocale]
  )

  useEffect(() => {
    if (!isOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [isOpen])

  if (!isOpen) {
    return null
  }

  return (
    <div className="fixed inset-0 z-[95] bg-gray-950/55 backdrop-blur-sm">
      <div className="flex min-h-full items-center justify-center p-3 sm:p-4">
        <div className="relative flex max-h-[calc(100dvh-1.5rem)] w-full max-w-lg flex-col overflow-hidden rounded-[24px] bg-white shadow-2xl sm:max-h-[calc(100dvh-2rem)] sm:rounded-[28px]">
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="absolute right-4 top-4 rounded-full p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-900"
            aria-label={closeLabel}
          >
            <X className="h-5 w-5" />
          </button>

          <div className="shrink-0 bg-gradient-to-r from-gray-900 via-gray-800 to-red-700 px-5 py-5 text-white sm:px-8 sm:py-7">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-red-50 sm:text-xs">
              <MapPin className="h-3.5 w-3.5" />
              {recommendedLabel}: {recommendedLocale.nativeLabel}
            </div>
            <h2 className="max-w-xl text-xl font-bold sm:text-3xl">{title}</h2>
            <p className="mt-2 max-w-xl text-sm leading-6 text-gray-200 sm:mt-3 sm:text-base">{description}</p>
          </div>

          <div className="flex-1 overflow-y-auto px-5 py-5 sm:px-8 sm:py-7">
            <div className="grid gap-2.5 sm:grid-cols-2 sm:gap-3">
              {languageOptions.map((option) => {
                const isSelected = option.code === selectedLocale
                const isRecommended = option.code === initialLocale

                return (
                  <button
                    key={option.code}
                    type="button"
                    onClick={() => setSelectedLocale(option.code)}
                    className={cn(
                      'rounded-2xl border px-4 py-3.5 text-left transition sm:py-4',
                      isSelected
                        ? 'border-red-500 bg-red-50 shadow-sm'
                        : 'border-gray-200 bg-white hover:border-gray-300 hover:bg-gray-50'
                    )}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-base font-semibold text-gray-900">{option.nativeLabel}</span>
                          {isRecommended && (
                            <span className="rounded-full bg-gray-100 px-2 py-0.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-gray-600">
                              {recommendedLabel}
                            </span>
                          )}
                        </div>
                        <p className="mt-1 text-xs text-gray-500 sm:text-sm">{option.label}</p>
                      </div>
                      {isSelected && (
                        <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-red-600 text-white">
                          <Check className="h-4 w-4" />
                        </span>
                      )}
                    </div>
                  </button>
                )
              })}
            </div>
          </div>

          <div className="shrink-0 border-t border-gray-100 bg-white px-5 py-4 sm:px-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="text-sm text-gray-500">{helper}</p>
              <button
                type="button"
                onClick={() => persistLocale(selectedLocale)}
                className="inline-flex w-full items-center justify-center rounded-xl bg-red-600 px-5 py-3 font-semibold text-white transition hover:bg-red-700 sm:w-auto"
              >
                {confirmLabel}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
