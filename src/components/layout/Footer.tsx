import Link from 'next/link'
import { Facebook, Youtube, Linkedin, Mail, Phone, MapPin } from 'lucide-react'
import { publicContact } from '@/lib/config/contact'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-6">
              <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-xl">M</span>
              </div>
              <span className="text-xl font-bold text-white">MACLAND</span>
            </div>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              Tư vấn và xúc tiến đầu tư bất động sản công nghiệp uy tín tại Việt Nam. 15+ năm kinh nghiệm.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-lg flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-lg flex items-center justify-center transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-red-600 rounded-lg flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">Liên kết nhanh</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/san-pham" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Sản phẩm
                </Link>
              </li>
              <li>
                <Link href="/dich-vu" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Dịch vụ
                </Link>
              </li>
              <li>
                <Link href="/ve-chung-toi" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Về chúng tôi
                </Link>
              </li>
              <li>
                <Link href="/lien-he" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">Danh mục</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/san-pham?type=khu-cong-nghiep" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Khu công nghiệp
                </Link>
              </li>
              <li>
                <Link href="/san-pham?type=dat-nen" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Đất nền
                </Link>
              </li>
              <li>
                <Link href="/san-pham?type=nha-xuong" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Nhà xưởng
                </Link>
              </li>
              <li>
                <Link href="/san-pham?type=kho-bai" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Kho bãi
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">Liên hệ</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-gray-400">{publicContact.address}</span>
              </li>
              {publicContact.phones.map((phone) => (
                <li key={phone.raw} className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <a href={phone.href} className="text-sm text-gray-400 hover:text-white transition-colors">
                    {phone.display}
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-red-500 flex-shrink-0" />
                <a href={publicContact.emailHref} className="text-sm text-gray-400 hover:text-white transition-colors">
                  {publicContact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Macland. All rights reserved. Built with ❤️
          </p>
        </div>
      </div>
    </footer>
  )
}
