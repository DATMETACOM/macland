import Link from 'next/link'
import { ArrowRight, Building2, CheckCircle, Shield, TrendingUp, Users } from 'lucide-react'

import ProductCard from '@/components/product/ProductCard'
import { primaryPhone } from '@/lib/config/contact'
import { getAllProducts } from '@/lib/data/products'
import { getRequestDictionary } from '@/lib/i18n/server'

export default async function HomePage() {
  const { locale, dict } = await getRequestDictionary()
  const products = await getAllProducts(locale)

  const featuredProducts = products.slice(0, 8)

  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20 text-white lg:py-32">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        <div className="container relative z-10 mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              {dict.home.heroTitle}
              <span className="mt-2 block text-red-500">{dict.home.heroAccent}</span>
            </h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg leading-relaxed text-gray-300 md:text-xl lg:text-2xl">
              {dict.home.heroDescription}
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link href="/san-pham">
                <button className="w-full rounded-xl bg-red-600 px-8 py-4 font-semibold text-white shadow-lg transition-all hover:scale-105 hover:bg-red-700 sm:w-auto">
                  {dict.common.viewProducts}
                  <ArrowRight className="ml-2 inline h-5 w-5" />
                </button>
              </Link>
              <Link href="/lien-he">
                <button className="w-full rounded-xl border-2 border-white px-8 py-4 font-semibold text-white transition-all hover:bg-white hover:text-gray-900 sm:w-auto">
                  {dict.home.freeConsultation}
                </button>
              </Link>
            </div>
          </div>

          <div className="mx-auto mt-16 grid max-w-4xl grid-cols-2 gap-6 lg:mt-20 lg:grid-cols-4 lg:gap-8">
            {[
              { icon: Building2, value: products.length.toString(), label: dict.home.statsProducts },
              { icon: TrendingUp, value: '15+', label: dict.home.statsExperience },
              { icon: Shield, value: '500+', label: dict.home.statsProjects },
              { icon: Users, value: '1000+', label: dict.home.statsClients },
            ].map((stat, index) => (
              <div key={index} className="rounded-xl bg-white/5 p-4 text-center backdrop-blur-sm lg:p-6">
                <stat.icon className="mx-auto mb-3 h-8 w-8 text-red-500 lg:h-10 lg:w-10" />
                <div className="mb-1 text-3xl font-bold lg:text-4xl">{stat.value}</div>
                <div className="text-xs text-gray-400 lg:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex flex-col md:mb-12 md:flex-row md:items-center md:justify-between lg:mb-12">
            <div className="mb-4 md:mb-0">
              <h2 className="mb-2 text-3xl font-bold text-gray-900 lg:text-4xl">{dict.home.featuredTitle}</h2>
              <p className="text-base text-gray-600">{dict.home.featuredDescription}</p>
            </div>
            <Link href="/san-pham">
              <button className="group flex items-center font-semibold text-red-600 transition-all hover:text-red-700">
                {dict.home.viewAll}
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {featuredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} locale={locale} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-gray-100 to-gray-50 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center lg:mb-16">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">{dict.home.whyTitle}</h2>
            <p className="mx-auto max-w-2xl text-lg font-medium text-red-600">{dict.home.whyDescription}</p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              { icon: CheckCircle, color: 'text-green-600', bgColor: 'bg-green-50', ...dict.home.values[0] },
              { icon: Shield, color: 'text-blue-600', bgColor: 'bg-blue-50', ...dict.home.values[1] },
              { icon: TrendingUp, color: 'text-red-600', bgColor: 'bg-red-50', ...dict.home.values[2] },
            ].map((item, index) => (
              <div key={index} className="rounded-2xl bg-white p-8 shadow-md transition-all duration-300 hover:shadow-xl">
                <div className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${item.bgColor}`}>
                  <item.icon className={`h-8 w-8 ${item.color}`} />
                </div>
                <h3 className="mb-3 text-xl font-bold">{item.title}</h3>
                <p className="leading-relaxed text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center lg:mb-16">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 lg:text-4xl">{dict.home.serviceTitle}</h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">{dict.home.serviceDescription}</p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {dict.home.services.map((service, index) => (
              <div key={index} className="group cursor-pointer rounded-2xl bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg lg:p-8">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 transition-colors group-hover:bg-red-600">
                  <div className="h-6 w-6 rounded-full bg-red-600 transition-colors group-hover:bg-white" />
                </div>
                <h3 className="mb-2 text-lg font-bold">{service.title}</h3>
                <p className="text-sm text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/dich-vu">
              <button className="rounded-xl border-2 border-red-600 px-8 py-3 font-semibold text-red-600 transition-all hover:bg-red-50">
                {dict.home.serviceMore}
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-red-600 to-red-700 py-16 text-white lg:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 text-3xl font-bold lg:text-4xl">{dict.home.ctaTitle}</h2>
          <p className="mx-auto mb-8 max-w-3xl text-xl leading-relaxed text-red-100">{dict.home.ctaDescription}</p>
          <div className="mx-auto flex max-w-2xl flex-col justify-center gap-4 sm:flex-row">
            <a href={primaryPhone.href} className="inline-flex items-center justify-center rounded-xl bg-white px-8 py-4 font-bold text-red-600 shadow-lg transition-all hover:bg-gray-100">
              📞 {dict.common.contactNow}: {primaryPhone.display}
            </a>
            <Link href="/san-pham">
              <button className="rounded-xl border-2 border-white px-8 py-4 font-bold text-white transition-all hover:bg-white hover:text-red-600">
                {dict.common.viewProducts}
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
