import Link from 'next/link'
import { getAllProducts } from '@/lib/data/products'
import ProductCard from '@/components/product/ProductCard'
import { Building2, TrendingUp, Shield, Users, CheckCircle, ArrowRight } from 'lucide-react'
import { primaryPhone } from '@/lib/config/contact'

export default async function HomePage() {
  const products = await getAllProducts()
  const featuredProducts = products.slice(0, 8)

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 lg:py-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
            backgroundSize: '40px 40px'
          }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Bất Động Sản Công Nghiệp
              <span className="text-red-500 block mt-2">Uy Tín & Hiệu Quả</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Tư vấn và xúc tiến đầu tư bất động sản công nghiệp chuyên nghiệp tại Việt Nam. 15+ năm kinh nghiệm.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/san-pham">
                <button className="w-full sm:w-auto bg-red-600 text-white px-8 py-4 rounded-xl font-semibold hover:bg-red-700 transition-all hover:scale-105 shadow-lg">
                  Xem sản phẩm
                  <ArrowRight className="inline ml-2 w-5 h-5" />
                </button>
              </Link>
              <Link href="/lien-he">
                <button className="w-full sm:w-auto border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-gray-900 transition-all">
                  Nhận tư vấn miễn phí
                </button>
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-4xl mx-auto mt-16 lg:mt-20">
            {[
              { icon: Building2, value: products.length.toString(), label: 'Sản phẩm' },
              { icon: TrendingUp, value: '15+', label: 'Năm KN' },
              { icon: Shield, value: '500+', label: 'Dự án' },
              { icon: Users, value: '1000+', label: 'Khách hàng' }
            ].map((stat, index) => (
              <div key={index} className="text-center p-4 lg:p-6 bg-white/5 backdrop-blur-sm rounded-xl">
                <stat.icon className="w-8 h-8 lg:w-10 lg:h-10 mx-auto mb-3 text-red-500" />
                <div className="text-3xl lg:text-4xl font-bold mb-1">{stat.value}</div>
                <div className="text-xs lg:text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 lg:mb-12">
            <div className="mb-4 md:mb-0">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2">Sản phẩm nổi bật</h2>
              <p className="text-gray-600 text-base">Các cơ hội đầu tư bất động sản công nghiệp hấp dẫn nhất</p>
            </div>
            <Link href="/san-pham">
              <button className="text-red-600 font-semibold hover:text-red-700 flex items-center group transition-all">
                Xem tất cả
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {featuredProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-gradient-to-b from-gray-100 to-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Tại sao chọn Macland?</h2>
            <p className="text-red-600 text-lg max-w-2xl mx-auto font-medium">
              Chúng tôi mang lại giá trị khác biệt cho nhà đầu tư
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: CheckCircle,
                title: 'Uy tín & Chuyên nghiệp',
                description: '15+ năm kinh nghiệm, 1000+ khách hàng tin tưởng',
                color: 'text-green-600',
                bgColor: 'bg-green-50'
              },
              {
                icon: Shield,
                title: 'Pháp lý đảm bảo',
                description: 'Hỗ trợ đầy đủ thủ tục, giấy tờ minh bạch',
                color: 'text-blue-600',
                bgColor: 'bg-blue-50'
              },
              {
                icon: TrendingUp,
                title: 'Hiệu quả cao',
                description: '500+ dự án thành công, tỷ suất sinh lời tốt',
                color: 'text-red-600',
                bgColor: 'bg-red-50'
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300">
                <div className={`w-16 h-16 ${item.bgColor} rounded-2xl flex items-center justify-center mb-6`}>
                  <item.icon className={`w-8 h-8 ${item.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 lg:mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Dịch vụ của chúng tôi</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Giải pháp toàn diện cho nhu cầu bất động sản công nghiệp
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Tư vấn đầu tư', desc: 'Chiến lược tối ưu' },
              { title: 'Thủ tục pháp lý', desc: 'Hỗ trợ trọn gói' },
              { title: 'Quản lý BĐS', desc: 'Vận hành chuyên nghiệp' },
              { title: 'Môi giới', desc: 'Kết nối buyer-seller' }
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 lg:p-8 rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 group cursor-pointer">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-red-600 transition-colors">
                  <div className="w-6 h-6 bg-red-600 rounded-full group-hover:bg-white transition-colors" />
                </div>
                <h3 className="font-bold text-lg mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/dich-vu">
              <button className="border-2 border-red-600 text-red-600 px-8 py-3 rounded-xl font-semibold hover:bg-red-50 transition-all">
                Xem tất cả dịch vụ
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-6">Sẵn sàng đầu tư?</h2>
          <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto leading-relaxed">
            Liên hệ với chúng tôi để được tư vấn miễn phí về các cơ hội đầu tư bất động sản công nghiệp
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
            <a href={primaryPhone.href} className="inline-flex items-center justify-center bg-white text-red-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all shadow-lg">
              📞 Gọi ngay: {primaryPhone.display}
            </a>
            <Link href="/san-pham">
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold hover:bg-white hover:text-red-600 transition-all">
                Xem sản phẩm
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
