'use client'

import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Bot, MessageCircle, X } from 'lucide-react'

import ContactForm from '@/components/contact/ContactForm'
import { Locale } from '@/lib/i18n/config'
import { getDictionary } from '@/lib/i18n/dictionaries'

const firstSeenKey = 'macland-chatbot-first-seen-at'
const readyKey = 'macland-chatbot-ready'
const delayMs = 10_000

type ChatbotWidgetProps = {
  locale: Locale
}

export default function ChatbotWidget({ locale }: ChatbotWidgetProps) {
  const dict = getDictionary(locale)
  const [isReady, setIsReady] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (typeof window === 'undefined') {
      return
    }

    if (window.localStorage.getItem(readyKey) === 'true') {
      const readyTimer = window.setTimeout(() => {
        setIsReady(true)
      }, 0)

      return () => window.clearTimeout(readyTimer)
    }

    const now = Date.now()
    const stored = window.localStorage.getItem(firstSeenKey)
    const firstSeen = stored ? Number(stored) : now

    if (!stored) {
      window.localStorage.setItem(firstSeenKey, String(firstSeen))
    }

    const timer = window.setTimeout(() => {
      window.localStorage.setItem(readyKey, 'true')
      setIsReady(true)
    }, Math.max(delayMs - (now - firstSeen), 0))

    return () => window.clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!isOpen) {
      return
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [isOpen])

  if (!isReady) {
    return null
  }

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] bg-gray-950/50 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 24, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 24, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              className="absolute inset-x-4 bottom-24 top-20 mx-auto max-w-xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex h-full flex-col overflow-hidden rounded-3xl border border-white/70 bg-white shadow-2xl">
                <div className="flex items-center justify-between border-b border-gray-100 bg-gradient-to-r from-red-600 to-red-700 px-6 py-4 text-white">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-red-100">Chatbot</p>
                    <h2 className="text-xl font-bold">{dict.chatbot.panelTitle}</h2>
                  </div>
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="rounded-full p-2 text-white/90 transition hover:bg-white/10 hover:text-white"
                    aria-label={dict.common.close}
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto bg-gray-50 p-4 sm:p-6">
                  <ContactForm
                    locale={locale}
                    title={dict.chatbot.formTitle}
                    className="rounded-2xl bg-white p-6 shadow-sm sm:p-8"
                    submitLabel={dict.chatbot.submit}
                  />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="fixed bottom-5 right-5 z-[80] flex flex-col items-end gap-3">
        {!isOpen && (
          <div className="max-w-[220px] rounded-2xl border border-red-100 bg-white px-4 py-3 text-sm text-gray-700 shadow-lg">
            {dict.chatbot.teaser}
          </div>
        )}
        <button
          type="button"
          onClick={() => setIsOpen((current) => !current)}
          className="group flex items-center gap-3 rounded-full bg-gradient-to-r from-red-600 to-red-700 px-5 py-4 text-white shadow-xl transition hover:from-red-700 hover:to-red-800"
          aria-label={isOpen ? dict.chatbot.close : dict.chatbot.open}
        >
          <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-white/15">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/20" />
            {isOpen ? <X className="relative h-5 w-5" /> : <Bot className="relative h-5 w-5" />}
          </div>
          <div className="hidden text-left sm:block">
            <p className="text-xs uppercase tracking-[0.18em] text-red-100">{dict.chatbot.eyebrow}</p>
            <p className="text-sm font-semibold">{isOpen ? dict.chatbot.close : dict.chatbot.open}</p>
          </div>
          <MessageCircle className="h-5 w-5 sm:hidden" />
        </button>
      </div>
    </>
  )
}
