import type { Metadata } from 'next'
import { Plus_Jakarta_Sans } from 'next/font/google'

import './globals.css'
import ChatbotWidget from '@/components/contact/ChatbotWidget'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import LanguageSelectionModal from '@/components/layout/LanguageSelectionModal'
import { defaultLocale } from '@/lib/i18n/config'
import { getDictionary } from '@/lib/i18n/dictionaries'
import { getRequestLocale } from '@/lib/i18n/server'

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: getDictionary(defaultLocale).metadata.title,
  description: getDictionary(defaultLocale).metadata.description,
  keywords: 'Hai Phong industrial real estate, industrial park, factory, warehouse, Haiphongindustrialhub.vn',
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const locale = await getRequestLocale()
  const dict = getDictionary(locale)

  return (
    <html
      lang={locale}
      className={`${plusJakartaSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-white text-gray-900">
        <Header locale={locale} />
        <main className="flex-1 pt-16 lg:pt-20">
          {children}
        </main>
        <ChatbotWidget locale={locale} />
        <Footer locale={locale} />
        <LanguageSelectionModal
          initialLocale={locale}
          isFirstVisit={false}
          title={dict.language.modalTitle}
          description={dict.language.modalDescription}
          confirmLabel={dict.language.confirm}
          helper={dict.language.helper}
          recommendedLabel={dict.language.recommended}
          closeLabel={dict.common.close}
        />
      </body>
    </html>
  )
}
