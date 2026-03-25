import { notFound } from 'next/navigation'
import {
  getDisplayProductTitle,
  formatArea,
  formatPrice,
  formatProductType,
  getAllProducts,
  getDisplayProductImages,
  getImageUrl,
  getProductBySlug,
  getProductLocationLabel,
  getProductTransactionStatus,
} from '@/lib/data/products'
import { MapPin, Ruler, DollarSign, FileText, ArrowLeft, Share2, Heart } from 'lucide-react'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import ProductImage from '@/components/product/ProductImage'

export async function generateStaticParams() {
  const products = await getAllProducts()
  // Generate static params for all products
  return products.map((product) => ({
    slug: product.slug,
  }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = await getProductBySlug(slug)

  if (!product) {
    return {
      title: 'Sản phẩm không tìm thấy',
    }
  }

  const displayTitle = getDisplayProductTitle(product)

  return {
    title: `${displayTitle} - Macland`,
    description: product.content.description || product.content.full_content?.slice(0, 160) || displayTitle,
  }
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const product = await getProductBySlug(slug)

  if (!product) {
    notFound()
  }

  const images = getDisplayProductImages(product)
  const locationLabel = getProductLocationLabel(product)
  const displayTitle = getDisplayProductTitle(product)
  const transactionStatus = getProductTransactionStatus(product)
  const areaLabel = formatArea(product)
  const areaMetaLabel = transactionStatus || areaLabel
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
      {/* Breadcrumb */}
      <div className="bg-white">
        <div className="mx-auto w-full max-w-[1400px] px-4 py-5 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-red-600">Trang chủ</Link>
            <span>/</span>
            <Link href="/san-pham" className="hover:text-red-600">Sản phẩm</Link>
            <span>/</span>
            <span className="text-gray-900">{displayTitle}</span>
          </div>
        </div>
      </div>

      <div className="mx-auto w-full max-w-[1400px] px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-start lg:gap-10">
          {/* Main Content */}
          <div className="lg:col-span-2 min-w-0">
            {/* Back Button */}
            <Link href="/san-pham" className="mb-6 inline-flex items-center text-red-600 hover:text-red-700">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Quay lại danh sách
            </Link>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {displayTitle}
            </h1>

            {/* Type Badge */}
            <div className="mb-6">
              <span className="inline-block bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
                {formatProductType(product.type)}
              </span>
            </div>

            {/* Image Gallery */}
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
                          Xem ảnh lớn
                        </div>
                      </a>
                    )
                  })}
                </div>
              </div>
            )}

            {/* Content */}
            <div className="mb-8 rounded-2xl bg-white p-6 shadow-md sm:p-7 lg:p-8">
              <h2 className="mb-5 flex items-center text-2xl font-bold">
                <FileText className="w-6 h-6 mr-2 text-red-600" />
                Thông tin chi tiết
              </h2>
              <div className="prose prose-lg max-w-none">
                {product.content.full_content.split('\n').map((paragraph, index) => {
                  if (paragraph.trim()) {
                    return (
                      <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                        {paragraph}
                      </p>
                    )
                  }
                  return null
                })}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1 min-w-0">
            <div className="space-y-8 lg:sticky lg:top-24">
              <div className="rounded-2xl bg-white p-6 shadow-md sm:p-7">
              <h3 className="mb-6 text-xl font-bold">Thông tin chính</h3>

              {/* Key Details */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between py-3 border-b">
                  <div className="flex items-center text-gray-600">
                    <Ruler className="w-5 h-5 mr-2" />
                    <span>Diện tích</span>
                  </div>
                  <span className="font-semibold text-gray-900 text-right">
                    {areaMetaLabel}
                  </span>
                </div>

                <div className="flex items-center justify-between py-3 border-b">
                  <div className="flex items-center text-gray-600">
                    <MapPin className="w-5 h-5 mr-2" />
                    <span>Vị trí</span>
                  </div>
                  <span className="font-semibold text-gray-900 text-right text-sm">
                    {locationLabel}
                  </span>
                </div>

                <div className="flex items-center justify-between py-3 border-b">
                  <div className="flex items-center text-gray-600">
                    <DollarSign className="w-5 h-5 mr-2" />
                    <span>Giá</span>
                  </div>
                  <span className="font-semibold text-red-600">
                    {formatPrice(product)}
                  </span>
                </div>

                {product.details.occupancy_rate && (
                  <div className="flex items-center justify-between py-3 border-b">
                    <span className="text-gray-600">Tỷ lệ lấp đầy</span>
                    <span className="font-semibold text-gray-900">{product.details.occupancy_rate}</span>
                  </div>
                )}

                <div className="flex items-center justify-between py-3 border-b">
                  <span className="text-gray-600">Pháp lý</span>
                  <span className="font-semibold text-green-600">{product.legal.status}</span>
                </div>
              </div>

              {/* Location */}
              <div className="mb-6">
                <h4 className="mb-2 font-semibold">Địa chỉ</h4>
                <p className="text-gray-600 text-sm">{product.location.address}</p>
              </div>

              {/* CTA Buttons */}
              <div className="mt-6 flex flex-col gap-3">
                <Link
                  href={{
                    ...contactHref,
                    query: {
                      ...contactHref.query,
                      actionLabel: 'dang-ky-tu-van',
                    },
                  }}
                  className="block"
                >
                  <Button variant="primary" className="w-full" size="lg">
                    Đăng ký tư vấn
                  </Button>
                </Link>
                <Link
                  href={{
                    ...contactHref,
                    query: {
                      ...contactHref.query,
                      actionLabel: 'chia-se',
                    },
                  }}
                  className="block"
                >
                  <Button variant="outline" className="w-full">
                    <Share2 className="w-4 h-4 mr-2" />
                    Chia sẻ
                  </Button>
                </Link>
                <Link
                  href={{
                    ...contactHref,
                    query: {
                      ...contactHref.query,
                      actionLabel: 'luu-tin',
                    },
                  }}
                  className="block"
                >
                  <Button variant="ghost" className="w-full">
                    <Heart className="w-4 h-4 mr-2" />
                    Lưu tin
                  </Button>
                </Link>
              </div>
            </div>
              <div className="rounded-2xl bg-white p-6 shadow-md sm:p-7">
                <h2 className="mb-4 text-2xl font-bold">Cơ sở hạ tầng</h2>
                <div className="grid grid-cols-1 gap-4">
                  {product.details.investment_sectors.filter(Boolean).map((sector, index) => (
                    <div key={index} className="flex items-start">
                      <div className="mt-2 mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-red-600" />
                      <p className="text-gray-700">{sector}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>

        <div className="mt-8 rounded-3xl bg-white px-4 py-5 shadow-md sm:mt-10 sm:px-6 sm:py-6 lg:px-7">
          <div className="flex flex-col items-center justify-center gap-3 text-center sm:gap-4">
            <p className="max-w-3xl text-base leading-7 text-gray-700">
              Quý nhà đầu tư và đối tác có nhu cầu được tư vấn, vui lòng liên hệ Hotline hoặc để lại thông tin qua:
            </p>
            <Link
              href={{
                ...contactHref,
                query: {
                  ...contactHref.query,
                  actionLabel: 'nhan-tu-van-mien-phi',
                },
              }}
              className="block"
            >
              <Button variant="primary" size="lg" className="min-w-[200px] w-full sm:w-auto">
                Nhận tư vấn miễn phí
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
