import { notFound } from 'next/navigation'
import {
  formatArea,
  formatPrice,
  formatProductType,
  getAllProducts,
  getDisplayProductImages,
  getImageUrl,
  getProductBySlug,
  getProductLocationLabel,
} from '@/lib/data/products'
import { MapPin, Ruler, DollarSign, FileText, ArrowLeft, Share2, Heart } from 'lucide-react'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import ProductImage from '@/components/product/ProductImage'
import { primaryPhone } from '@/lib/config/contact'

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

  return {
    title: `${product.title} - Macland`,
    description: product.content.description || product.content.full_content?.slice(0, 160) || product.title,
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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-red-600">Trang chủ</Link>
            <span>/</span>
            <Link href="/san-pham" className="hover:text-red-600">Sản phẩm</Link>
            <span>/</span>
            <span className="text-gray-900">{product.title}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Back Button */}
            <Link href="/san-pham" className="inline-flex items-center text-red-600 hover:text-red-700 mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Quay lại danh sách
            </Link>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {product.title}
            </h1>

            {/* Type Badge */}
            <div className="mb-6">
              <span className="inline-block bg-red-600 text-white px-4 py-2 rounded-lg text-sm font-medium">
                {formatProductType(product.type)}
              </span>
            </div>

            {/* Image Gallery */}
            {images.length > 0 && (
              <div className="grid grid-cols-2 gap-4 mb-8">
                {images.slice(0, 4).map((image, index) => {
                  const imageUrl = getImageUrl({ ...product, media: { images: [image] } }, 'large')
                  return (
                    <div
                      key={index}
                      className={`aspect-[4/3] rounded-xl overflow-hidden bg-gray-100 group ${
                        index === 0 ? 'col-span-2' : ''
                      }`}
                    >
                      <ProductImage
                        src={imageUrl}
                        alt={`${product.title} - ${index + 1}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        priority={index === 0}
                      />
                    </div>
                  )
                })}
              </div>
            )}

            {/* Content */}
            <div className="bg-white rounded-xl p-6 shadow-md mb-8">
              <h2 className="text-2xl font-bold mb-4 flex items-center">
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

            {/* Infrastructure */}
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h2 className="text-2xl font-bold mb-4">Cơ sở hạ tầng</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.details.investment_sectors.filter(Boolean).map((sector, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-red-600 rounded-full mt-2 mr-3 flex-shrink-0" />
                    <p className="text-gray-700">{sector}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="bg-white rounded-xl p-6 shadow-md sticky top-24">
              <h3 className="text-xl font-bold mb-6">Thông tin chính</h3>

              {/* Key Details */}
              <div className="space-y-4 mb-6">
                <div className="flex items-center justify-between py-3 border-b">
                  <div className="flex items-center text-gray-600">
                    <Ruler className="w-5 h-5 mr-2" />
                    <span>Diện tích</span>
                  </div>
                  <span className="font-semibold text-gray-900">
                    {formatArea(product)}
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
                <h4 className="font-semibold mb-2">Địa chỉ</h4>
                <p className="text-gray-600 text-sm">{product.location.address}</p>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-3">
                <Link href="/lien-he">
                  <Button variant="primary" className="w-full" size="lg">
                    Đăng ký tư vấn
                  </Button>
                </Link>
                <Button variant="outline" className="w-full">
                  <Share2 className="w-4 h-4 mr-2" />
                  Chia sẻ
                </Button>
                <Button variant="ghost" className="w-full">
                  <Heart className="w-4 h-4 mr-2" />
                  Lưu tin
                </Button>
              </div>

              {/* Contact Info */}
              <div className="mt-6 pt-6 border-t">
                <p className="text-sm text-gray-600 mb-2">Liên hệ ngay:</p>
                <a href={primaryPhone.href} className="text-lg font-bold text-red-600 hover:text-red-700">
                  {primaryPhone.display}
                </a>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
