import { Building, FileText, Search, Shield, TrendingUp, Users } from 'lucide-react'

import { primaryPhone } from '@/lib/config/contact'
import { getRequestDictionary } from '@/lib/i18n/server'

export default async function ServicesPage() {
  const { dict } = await getRequestDictionary()
  const services = [
    { icon: Search, ...dict.services.items[0] },
    { icon: FileText, ...dict.services.items[1] },
    { icon: TrendingUp, ...dict.services.items[2] },
    { icon: Building, ...dict.services.items[3] },
    { icon: Users, ...dict.services.items[4] },
    { icon: Shield, ...dict.services.items[5] },
  ]

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">{dict.services.title}</h1>
            <p className="text-xl text-gray-300">{dict.services.description}</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div key={index} className="group overflow-hidden rounded-xl bg-white shadow-md transition-all duration-300 hover:shadow-xl">
                <div className="p-6">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-lg bg-red-100 transition-colors group-hover:bg-red-600">
                    <service.icon className="h-7 w-7 text-red-600 transition-colors group-hover:text-white" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold">{service.title}</h3>
                  <p className="mb-4 text-gray-600">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-700">
                        <div className="mr-2 mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red-600" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">{dict.services.processTitle}</h2>
            <p className="mx-auto max-w-2xl text-gray-600">{dict.services.processDescription}</p>
          </div>

          <div className="mx-auto max-w-4xl">
            {dict.services.process.map((item, index) => (
              <div key={index} className="mb-8 flex gap-6">
                <div className="flex-shrink-0">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-red-600 text-xl font-bold text-white">
                    {item.step}
                  </div>
                </div>
                <div className="flex-1 border-b border-gray-200 pb-8 last:border-0">
                  <h3 className="mb-2 text-xl font-bold">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">{dict.services.whyTitle}</h2>
            <p className="mx-auto max-w-2xl text-gray-600">{dict.services.whyDescription}</p>
          </div>

          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
            {dict.services.reasons.map((item, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-red-100">
                  <div className="h-3 w-3 rounded-full bg-red-600" />
                </div>
                <h3 className="mb-2 font-semibold">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-red-600 to-red-700 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold">{dict.services.urgentTitle}</h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-red-100">{dict.services.urgentDescription}</p>
          <a href={primaryPhone.href} className="inline-block rounded-lg bg-white px-8 py-3 font-bold text-red-600 transition-colors hover:bg-gray-100">
            {dict.common.contactNow}: {primaryPhone.display}
          </a>
        </div>
      </section>
    </div>
  )
}
