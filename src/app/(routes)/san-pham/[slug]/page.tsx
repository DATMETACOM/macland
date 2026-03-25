import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, DollarSign, FileText, MapPin, Ruler } from 'lucide-react'

import Button from '@/components/ui/Button'
import ProductImage from '@/components/product/ProductImage'
import {
  formatArea,
  formatPrice,
  formatProductType,
  getAllProducts,
  getDisplayProductImages,
  getDisplayProductTitle,
  getImageUrl,
  getProductBySlug,
  getProductLocationLabel,
  getProductTransactionStatus,
} from '@/lib/data/products'
import { getRequestDictionary } from '@/lib/i18n/server'

export async function generateStaticParams() {
  const products = await getAllProducts('vi')

  return products.map((product) => ({
    slug: product.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const [{ locale, dict }, { slug }] = await Promise.all([getRequestDictionary(), params])
  const product = await getProductBySlug(slug, locale)

  if (!product) {
    return {
      title: dict.products.empty,
    }
  }

  const displayTitle = getDisplayProductTitle(product)

  return {
    title: `${displayTitle} - Macland`,
    description: product.content.description || product.content.full_content?.slice(0, 160) || displayTitle,
  }
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const [{ locale, dict }, { slug }] = await Promise.all([getRequestDictionary(), params])
  const product = await getProductBySlug(slug, locale)

  if (!product) {
    notFound()
  }

  const images = getDisplayProductImages(product)
  const locationLabel = getProductLocationLabel(product, locale)
  const displayTitle = getDisplayProductTitle(product)
  const transactionStatus = getProductTransactionStatus(product, locale)
  const areaLabel = formatArea(product, locale)
  const visibleImages = images.slice(0, 4)
  const galleryItemWidth = `${100 / Math.max(visibleImages.length, 1)}%`
  const contactHref = {
    pathname: '/lien-he',
    query: {
      sourcePage: 'product-detail',
      productTitle: displayTitle,
      productSlug: product.slug,
      productUrl: `/san-pham/${product.slug}`,
    },
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white">
        <div className="mx-auto w-full max-w-[1400px] px-4 py-5 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-red-600">{dict.products.homeBreadcrumb}</Link>
            <span>/</span>
            <Link href="/san-pham" className="hover:text-red-600">{dict.nav.products}</Link>
            <span>/</span>
            <span className="text-gray-900">{displayTitle}</span>
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-[1400px] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-start lg:gap-10">
          <div className="min-w-0 lg:col-span-2">
            <Link href="/san-pham" className="mb-6 inline-flex items-center text-red-600 hover:text-red-700">
              <ArrowLeft className="mr-2 h-4 w-4" />
              {dict.common.backToList}
            </Link>

            <h1 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">{displayTitle}</h1>

            <div className="mb-6 flex flex-wrap items-center gap-3">
              <span className="inline-block rounded-lg bg-red-600 px-4 py-2 text-sm font-medium text-white">
                {formatProductType(product.type, locale)}
              </span>
              {transactionStatus && (
                <span className="inline-flex items-center rounded-lg border border-red-200 bg-red-50 px-4 py-2 text-sm font-semibold text-red-700">
                  {transactionStatus}
                </span>
              )}
            </div>

            {visibleImages.length > 0 && (
              <div className="mb-8 rounded-3xl bg-white p-4 shadow-md sm:p-5 lg:p-6">
                <div className="flex h-[240px] flex-col gap-3 sm:h-[300px] lg:h-[400px] lg:flex-row">
                  {visibleImages.map((image, index) => {
                    const imageUrl = getImageUrl({ ...product, media: { images: [image] } }, 'large')

                    return (
                      <a
                        key={index}
                        href={imageUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="group relative block min-h-0 min-w-0 flex-1 overflow-hidden rounded-2xl bg-gray-100"
                        style={visibleImages.length === 1 ? undefined : { flexBasis: galleryItemWidth }}
                      >
                        <ProductImage
                          src={imageUrl}
                          alt={`${displayTitle} - ${index + 1}`}
                          className="object-cover"
                          priority={index === 0}
                        />
                        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent px-4 py-3 text-sm font-medium text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                          {dict.products.viewLargeImage}
                        </div>
                      </a>
                    )
                  })}
                </div>
              </div>
            )}

            <div className="mb-8 rounded-2xl bg-white p-6 shadow-md sm:p-7 lg:p-8">
              <h2 className="mb-5 flex items-center text-2xl font-bold">
                <FileText className="mr-2 h-6 w-6 text-red-600" />
                {dict.products.detailsTitle}
              </h2>
              <div className="prose prose-lg max-w-none">
                {product.content.full_content.split('\n').map((paragraph, index) => {
                  if (!paragraph.trim()) return null

                  return (
                    <p key={index} className="mb-4 leading-relaxed text-gray-700">
                      {paragraph}
                    </p>
                  )
                })}
              </div>
            </div>
          </div>

          <aside className="min-w-0 lg:col-span-1">
            <div className="space-y-8 lg:sticky lg:top-24">
              <div className="rounded-2xl bg-white p-6 shadow-md sm:p-7">
                <h3 className="mb-6 text-xl font-bold">{dict.products.keyInfo}</h3>

                <div className="mb-6 space-y-4">
                  <div className="flex items-center justify-between border-b py-3">
                    <div className="flex items-center text-gray-600">
                      <Ruler className="mr-2 h-5 w-5" />
                      <span>{dict.products.area}</span>
                    </div>
                    <span className="text-right font-semibold text-gray-900">{areaLabel}</span>
                  </div>

                  {transactionStatus && (
                    <div className="flex items-center justify-between border-b py-3">
                      <div className="flex items-center text-gray-600">
                        <FileText className="mr-2 h-5 w-5" />
                        <span>{dict.products.status}</span>
                      </div>
                      <span className="text-right font-semibold text-red-700">{transactionStatus}</span>
                    </div>
                  )}

                  <div className="flex items-center justify-between border-b py-3">
                    <div className="flex items-center text-gray-600">
                      <MapPin className="mr-2 h-5 w-5" />
                      <span>{dict.products.location}</span>
                    </div>
                    <span className="text-right text-sm font-semibold text-gray-900">{locationLabel}</span>
                  </div>

                  <div className="flex items-center justify-between border-b py-3">
                    <div className="flex items-center text-gray-600">
                      <DollarSign className="mr-2 h-5 w-5" />
                      <span>{dict.products.price}</span>
                    </div>
                    <span className="font-semibold text-red-600">{formatPrice(product, locale)}</span>
                  </div>

                  {product.details.occupancy_rate && (
                    <div className="flex items-center justify-between border-b py-3">
                      <span className="text-gray-600">
                        {locale === 'vi' ? 'Tỷ lệ lấp đầy' : locale === 'zh' ? '入驻率' : locale === 'ko' ? '점유율' : locale === 'ja' ? '入居率' : 'Occupancy'}
                      </span>
                      <span className="font-semibold text-gray-900">{product.details.occupancy_rate}</span>
                    </div>
                  )}

                  <div className="flex items-center justify-between border-b py-3">
                    <span className="text-gray-600">{dict.products.legal}</span>
                    <span className="font-semibold text-green-600">{product.legal.status}</span>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="mb-2 font-semibold">{dict.products.address}</h4>
                  <p className="text-sm text-gray-600">{product.location.address}</p>
                </div>

                <div className="mt-6 flex flex-col gap-3">
                  <Link href={contactHref}>
                    <Button variant="primary" className="w-full">
                      {dict.nav.consultation}
                    </Button>
                  </Link>
                  <a href="tel:0912949393">
                    <Button variant="outline" className="w-full">
                      {dict.common.contactNow}
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
