'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Button from '@/components/ui/Button'
import { cn } from '@/lib/utils/cn'
import { Locale } from '@/lib/i18n/config'
import { getDictionary } from '@/lib/i18n/dictionaries'
import LanguageSwitcher from '@/components/layout/LanguageSwitcher'

type HeaderProps = {
  locale: Locale
}

export default function Header({ locale }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const dict = getDictionary(locale)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: dict.nav.home, href: '/' },
    { name: dict.nav.products, href: '/san-pham' },
    { name: dict.nav.services, href: '/dich-vu' },
    { name: dict.nav.about, href: '/ve-chung-toi' },
    { name: dict.nav.contact, href: '/lien-he' },
  ]

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
          isScrolled
            ? 'bg-white/96 backdrop-blur-md shadow-[0_10px_30px_rgba(15,23,42,0.10)]'
            : 'bg-white/92 backdrop-blur-sm shadow-[0_6px_24px_rgba(15,23,42,0.08)]'
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex min-w-0 items-center gap-2.5 group">
              <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-lg bg-white shadow-md ring-1 ring-slate-200">
                <Image
                  src="/brand/haiphong-industrial-hub-logo.jpg"
                  alt="Hai Phong Industrial Hub"
                  fill
                  sizes="40px"
                  className="object-cover object-left"
                  priority
                />
              </div>
              <span className={cn(
                "max-w-[190px] truncate text-sm font-bold tracking-tight sm:max-w-none sm:text-base xl:text-xl",
                isScrolled ? "text-gray-900" : "text-gray-900 drop-shadow-lg"
              )}>
                Hai Phong Industrial Hub
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-all duration-200 hover:scale-105",
                    isScrolled
                      ? "text-gray-700 hover:text-orange-600"
                      : "text-gray-900 hover:text-orange-600 drop-shadow-md"
                  )}
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* CTA Section */}
            <div className="hidden lg:flex items-center gap-4">
              <LanguageSwitcher
                currentLocale={locale}
                label={dict.language.label}
                buttonClassName={cn(
                  isScrolled ? 'bg-white text-gray-700' : 'bg-white text-gray-700'
                )}
              />
              <Link href="/lien-he">
                <Button size="sm" variant="primary" className="shadow-md hover:shadow-lg">
                  {dict.nav.consultation}
                </Button>
              </Link>
            </div>

            <div className="flex items-center gap-2 lg:hidden">
              <LanguageSwitcher
                currentLocale={locale}
                label={dict.language.label}
                buttonClassName="min-w-[72px] justify-center gap-1.5 rounded-lg px-2.5 py-2 text-xs font-semibold"
                menuClassName="right-0 min-w-[200px]"
              />
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className={cn(
                  "p-2.5 rounded-lg transition-all duration-200",
                  isScrolled
                    ? "hover:bg-gray-100 text-gray-900"
                    : "hover:bg-gray-100 text-gray-900"
                )}
                aria-label={dict.nav.menu}
                aria-expanded={isMobileMenuOpen}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed top-16 lg:top-20 left-0 right-0 bg-white border-b border-gray-200 shadow-xl z-40"
          >
            <nav className="container mx-auto px-4 sm:px-6 py-6">
              <div className="flex flex-col space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-900 hover:text-orange-600 hover:bg-orange-50 px-4 py-3 rounded-lg font-medium transition-all duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-6 mt-6 border-t border-gray-200 space-y-4">
                  <Link href="/lien-he" onClick={() => setIsMobileMenuOpen(false)}>
                    <Button variant="primary" className="w-full shadow-md">
                      {dict.nav.consultation}
                    </Button>
                  </Link>
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
