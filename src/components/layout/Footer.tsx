import Link from 'next/link'
import Image from 'next/image'
import { Facebook, Youtube, Linkedin, Mail, Phone, MapPin } from 'lucide-react'
import ConsultantContactCard from '@/components/contact/ConsultantContactCard'
import { publicContact } from '@/lib/config/contact'
import { Locale } from '@/lib/i18n/config'
import { getDictionary } from '@/lib/i18n/dictionaries'

type FooterProps = {
  locale: Locale
}

export default function Footer({ locale }: FooterProps) {
  const dict = getDictionary(locale)

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div className="relative h-14 w-[260px] max-w-full overflow-hidden bg-white">
                <Image
                  src="/brand/haiphong-industrial-hub-logo-full.png"
                  alt="Hai Phong Industrial Hub"
                  fill
                  sizes="260px"
                  className="object-contain object-left"
                />
              </div>
            </div>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              {dict.common.companyTagline}
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-orange-600 rounded-lg flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-orange-600 rounded-lg flex items-center justify-center transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-orange-600 rounded-lg flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">{dict.footer.quickLinks}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/san-pham" className="text-gray-400 hover:text-white transition-colors text-sm">
                  {dict.nav.products}
                </Link>
              </li>
              <li>
                <Link href="/dich-vu" className="text-gray-400 hover:text-white transition-colors text-sm">
                  {dict.nav.services}
                </Link>
              </li>
              <li>
                <Link href="/tin-tuc" className="text-gray-400 hover:text-white transition-colors text-sm">
                  {locale === 'vi' ? 'Tin tức' : 'News'}
                </Link>
              </li>
              <li>
                <Link href="/ve-chung-toi" className="text-gray-400 hover:text-white transition-colors text-sm">
                  {dict.nav.about}
                </Link>
              </li>
              <li>
                <Link href="/lien-he" className="text-gray-400 hover:text-white transition-colors text-sm">
                  {dict.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">{dict.footer.categories}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/san-pham?type=khu-cong-nghiep" className="text-gray-400 hover:text-white transition-colors text-sm">
                  {dict.footer.industrialPark}
                </Link>
              </li>
              <li>
                <Link href="/san-pham?type=dat-nen" className="text-gray-400 hover:text-white transition-colors text-sm">
                  {dict.footer.land}
                </Link>
              </li>
              <li>
                <Link href="/san-pham?type=nha-xuong" className="text-gray-400 hover:text-white transition-colors text-sm">
                  {dict.footer.factory}
                </Link>
              </li>
              <li>
                <Link href="/san-pham?type=kho-bai" className="text-gray-400 hover:text-white transition-colors text-sm">
                  {dict.footer.warehouse}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">{dict.footer.contact}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-400">{publicContact.address}</span>
              </li>
              {publicContact.phones.map((phone) => (
                <li key={phone.raw} className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-orange-500 flex-shrink-0" />
                  <a href={phone.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {phone.display}
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <a href={publicContact.emailHref} className="text-sm text-gray-400 hover:text-white transition-colors">
                  {publicContact.email}
                </a>
              </li>
            </ul>
            <ConsultantContactCard compact className="mt-6 border-white/10 bg-gray-800 text-white [&_p]:text-white [&_a]:text-orange-400" />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Haiphongindustrialhub.vn. {dict.common.allRightsReserved}
          </p>
        </div>
      </div>
    </footer>
  )
}
