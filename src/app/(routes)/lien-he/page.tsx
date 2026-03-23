'use client'

import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import ContactForm from '@/components/contact/ContactForm'
import { publicContact, primaryPhone } from '@/lib/config/contact'

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Liên hệ với chúng tôi</h1>
            <p className="text-xl text-gray-300">
              Chúng tôi sẵn sàng hỗ trợ bạn 24/7
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="bg-gray-50 p-8 rounded-xl">
                <h2 className="text-2xl font-bold mb-6">Thông tin liên hệ</h2>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-red-600 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Địa chỉ</h3>
                      <p className="text-gray-600 text-sm">
                        {publicContact.address}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="w-6 h-6 text-red-600 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Hotline</h3>
                      <div className="space-y-1">
                        {publicContact.phones.map((phone) => (
                          <div key={phone.raw}>
                            <a href={phone.href} className="text-red-600 hover:text-red-700 text-sm">
                              {phone.display}
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="w-6 h-6 text-red-600 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <a href={publicContact.emailHref} className="text-red-600 hover:text-red-700 text-sm">
                        {publicContact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="w-6 h-6 text-red-600 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold mb-1">Giờ làm việc</h3>
                      <p className="text-gray-600 text-sm">
                        Thứ 2 - Thứ 6: 8:00 - 18:00
                      </p>
                      <p className="text-gray-600 text-sm">
                        Thứ 7: 8:00 - 12:00
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Map placeholder */}
      <section className="h-96 bg-gray-200">
        <div className="w-full h-full flex items-center justify-center text-gray-500">
          <div className="text-center">
            <MapPin className="w-12 h-12 mx-auto mb-4" />
            <p>Bản đồ sẽ được hiển thị ở đây</p>
            <p className="text-sm">Có thể tích hợp Google Maps hoặc OpenStreetMap</p>
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Cần hỗ trợ gấp?</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Hotline của chúng tôi luôn sẵn sàng 24/7
          </p>
          <a
            href={primaryPhone.href}
            className="inline-block bg-white text-red-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors"
          >
            📞 Gọi ngay: {primaryPhone.display}
          </a>
        </div>
      </section>
    </div>
  )
}
