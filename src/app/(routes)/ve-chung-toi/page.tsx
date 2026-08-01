import { Award, Building2, Target, Users } from 'lucide-react'

import { primaryPhone } from '@/lib/config/contact'
import { getRequestDictionary } from '@/lib/i18n/server'

export default async function AboutPage() {
  const { dict } = await getRequestDictionary()

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold md:text-5xl">{dict.about.title}</h1>
            <p className="text-xl text-gray-300">{dict.about.description}</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-6 text-3xl font-bold text-gray-900">{dict.about.introTitle}</h2>
            <div className="prose prose-lg max-w-none">
              {dict.about.introParagraphs.map((paragraph, index) => (
                <p key={index} className="mb-6 leading-relaxed text-gray-700">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900">{dict.about.valuesTitle}</h2>
            <p className="mx-auto max-w-2xl text-gray-600">{dict.about.valuesDescription}</p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Target, ...dict.about.values[0] },
              { icon: Building2, ...dict.about.values[1] },
              { icon: Users, ...dict.about.values[2] },
              { icon: Award, ...dict.about.values[3] },
            ].map((value, index) => (
              <div key={index} className="rounded-xl bg-white p-6 shadow-md transition-shadow hover:shadow-lg">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-orange-100">
                  <value.icon className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{value.title}</h3>
                <p className="text-sm text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {dict.about.stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="mb-2 text-4xl font-bold text-orange-600">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-orange-600 to-orange-700 py-16 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold">{dict.about.ctaTitle}</h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-orange-100">{dict.about.ctaDescription}</p>
          <a href={primaryPhone.href} className="inline-block rounded-lg bg-white px-8 py-3 font-bold text-orange-600 transition-colors hover:bg-gray-100">
            {dict.common.contactNow}: {primaryPhone.display}
          </a>
        </div>
      </section>
    </div>
  )
}
