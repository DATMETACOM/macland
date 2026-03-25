'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { Check, ChevronDown, Languages } from 'lucide-react'

import { cn } from '@/lib/utils/cn'
import { languageCookieName, languageOptions, Locale } from '@/lib/i18n/config'

type LanguageSwitcherProps = {
  currentLocale: Locale
  label: string
  className?: string
  buttonClassName?: string
  menuClassName?: string
}

function persistLocale(locale: Locale) {
  document.cookie = `${languageCookieName}=${locale}; path=/; max-age=31536000; SameSite=Lax`
  window.location.reload()
}

export default function LanguageSwitcher({
  currentLocale,
  label,
  className,
  buttonClassName,
  menuClassName,
}: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false)
  const containerRef = useRef<HTMLDivElement | null>(null)

  const activeLanguage = useMemo(
    () => languageOptions.find((option) => option.code === currentLocale) || languageOptions[0],
    [currentLocale]
  )

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false)
      }
    }

    window.addEventListener('mousedown', handleClick)
    window.addEventListener('keydown', handleEscape)

    return () => {
      window.removeEventListener('mousedown', handleClick)
      window.removeEventListener('keydown', handleEscape)
    }
  }, [])

  return (
    <div ref={containerRef} className={cn('relative', className)}>
      <button
        type="button"
        className={cn(
          'inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm transition hover:border-red-200 hover:text-red-600',
          buttonClassName
        )}
        aria-label={label}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((value) => !value)}
      >
        <Languages className="h-4 w-4" />
        <span>{activeLanguage.shortLabel}</span>
        <ChevronDown className={cn('h-4 w-4 transition-transform', isOpen && 'rotate-180')} />
      </button>

      {isOpen && (
        <div
          className={cn(
            'absolute right-0 top-full z-[70] mt-2 min-w-[220px] overflow-hidden rounded-2xl border border-gray-200 bg-white p-2 shadow-2xl',
            menuClassName
          )}
        >
          {languageOptions.map((option) => {
            const isActive = option.code === currentLocale

            return (
              <button
                key={option.code}
                type="button"
                className={cn(
                  'flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-left text-sm transition',
                  isActive
                    ? 'bg-red-50 text-red-700'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                )}
                onClick={() => {
                  setIsOpen(false)
                  if (!isActive) {
                    persistLocale(option.code)
                  }
                }}
              >
                <span className="flex flex-col">
                  <span className="font-semibold">{option.nativeLabel}</span>
                  <span className="text-xs text-gray-500">{option.label}</span>
                </span>
                {isActive && <Check className="h-4 w-4 text-red-600" />}
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
