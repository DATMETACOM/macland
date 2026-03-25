import { Clock, Mail, MapPin, Phone } from 'lucide-react'

import ContactForm from '@/components/contact/ContactForm'
import { primaryPhone, publicContact } from '@/lib/config/contact'
import { getRequestDictionary } from '@/lib/i18n/server'

export default async function ContactPage() {
  const { locale, dict } = await getRequestDictionary()

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">{dict.contact.title}</h1>
            <p className="text-xl text-gray-300">{dict.contact.description}</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="lg:col-span-1">
              <div className="rounded-xl bg-gray-50 p-8">
                <h2 className="mb-6 text-2xl font-bold">{dict.contact.infoTitle}</h2>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="mr-3 mt-1 h-6 w-6 flex-shrink-0 text-red-600" />
                    <div>
                      <h3 className="mb-1 font-semibold">{dict.contact.address}</h3>
                      <p className="text-sm text-gray-600">{publicContact.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="mr-3 mt-1 h-6 w-6 flex-shrink-0 text-red-600" />
                    <div>
                      <h3 className="mb-1 font-semibold">{dict.contact.hotline}</h3>
                      <div className="space-y-1">
                        {publicContact.phones.map((phone) => (
                          <div key={phone.raw}>
                            <a href={phone.href} className="text-sm text-red-600 hover:text-red-700">
                              {phone.display}
                            </a>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="mr-3 mt-1 h-6 w-6 flex-shrink-0 text-red-600" />
                    <div>
                      <h3 className="mb-1 font-semibold">{dict.contact.email}</h3>
                      <a href={publicContact.emailHref} className="text-sm text-red-600 hover:text-red-700">
                        {publicContact.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="mr-3 mt-1 h-6 w-6 flex-shrink-0 text-red-600" />
                    <div>
                      <h3 className="mb-1 font-semibold">{dict.contact.hours}</h3>
                      <p className="text-sm text-gray-600">{dict.contact.weekdayHours}</p>
                      <p className="text-sm text-gray-600">{dict.contact.saturdayHours}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <ContactForm locale={locale} />
            </div>
          </div>
        </div>
      </section>

      <section className="h-96 bg-gray-200">
        <div className="flex h-full w-full items-center justify-center text-gray-500">
          <div className="text-center">
            <MapPin className="mx-auto mb-4 h-12 w-12" />
            <p>{dict.contact.mapTitle}</p>
            <p className="text-sm">{dict.contact.mapDescription}</p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-red-600 to-red-700 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold">{dict.contact.urgentTitle}</h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-red-100">{dict.contact.urgentDescription}</p>
          <a href={primaryPhone.href} className="inline-block rounded-lg bg-white px-8 py-4 text-lg font-bold text-red-600 transition-colors hover:bg-gray-100">
            📞 {dict.common.contactNow}: {primaryPhone.display}
          </a>
        </div>
      </section>
    </div>
  )
}
