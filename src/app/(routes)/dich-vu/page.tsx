import { Search, FileText, TrendingUp, Building, Users, Shield } from 'lucide-react'
import { primaryPhone } from '@/lib/config/contact'

export default function ServicesPage() {
  const services = [
    {
      icon: Search,
      title: 'Tìm kiếm và Định giá',
      description: 'Phân tích thị trường và định giá bất động sản công nghiệp chính xác',
      features: [
        'Khảo sát thị trường toàn diện',
        'Định giá theo tiêu chuẩn quốc tế',
        'Báo cáo chi tiết và minh bạch',
        'Tư vấn chiến lược đầu tư'
      ]
    },
    {
      icon: FileText,
      title: 'Thủ tục Pháp lý',
      description: 'Hỗ trợ đầy đủ các thủ tục pháp lý liên quan đến đầu tư và chuyển nhượng',
      features: [
        'Soạn thảo hợp đồng, văn bản',
        'Giải quyết thủ tục hành chính',
        'Tư vấn quy định pháp luật',
        'Đại diện khách hàng trước cơ quan nhà nước'
      ]
    },
    {
      icon: TrendingUp,
      title: 'Đầu tư và Phát triển',
      description: 'Tư vấn chiến lược đầu tư và phát triển bất động sản công nghiệp',
      features: [
        'Phân tích khả thi dự án',
        'Lập kế hoạch đầu tư',
        'Tìm kiếm đối tác',
        'Giám sát thực hiện dự án'
      ]
    },
    {
      icon: Building,
      title: 'Quản lý Bất động sản',
      description: 'Dịch vụ quản lý và vận hành bất động sản công nghiệp chuyên nghiệp',
      features: [
        'Quản lý cho thuê',
        'Bảo trì và bảo dưỡng',
        'Thuê và quản lý tenant',
        'Báo cáo định kỳ'
      ]
    },
    {
      icon: Users,
      title: 'Môi giới và Chuyển nhượng',
      description: 'Kết nối người mua và người bán, thực hiện giao dịch thành công',
      features: [
        'Tìm kiếm buyer/seller phù hợp',
        'Đàm phán và thương lượng',
        'Hỗ trợ giao dịch',
        'Theo sát đến khi hoàn tất'
      ]
    },
    {
      icon: Shield,
      title: 'Tư vấn Chiến lược',
      description: 'Lập kế hoạch đầu tư dài hạn và tối ưu hóa portfolio',
      features: [
        'Phân tích rủi ro và lợi nhuận',
        'Đa dạng hóa danh mục đầu tư',
        'Tối ưu hóa dòng tiền',
        'Chiến lược thoái vốn'
      ]
    }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Dịch vụ của chúng tôi</h1>
            <p className="text-xl text-gray-300">
              Giải pháp toàn diện cho nhu cầu bất động sản công nghiệp của bạn
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="p-6">
                  <div className="w-14 h-14 bg-red-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-red-600 transition-colors">
                    <service.icon className="w-7 h-7 text-red-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 bg-red-600 rounded-full mt-1.5 mr-2 flex-shrink-0" />
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

      {/* Process */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Quy trình làm việc</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Quy trình chuyên nghiệp đảm bảo kết quả tốt nhất cho khách hàng
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {[
              { step: '01', title: 'Tiếp nhận yêu cầu', desc: 'Lắng nghe và hiểu nhu cầu của khách hàng' },
              { step: '02', title: 'Tư vấn sơ bộ', desc: 'Đề xuất giải pháp và báo giá ước tính' },
              { step: '03', title: 'Thực hiện dịch vụ', desc: 'Triển khai theo kế hoạch đã đề ra' },
              { step: '04', title: 'Báo cáo và Nghiệm thu', desc: 'Bàn giao kết quả và đánh giá hài lòng' }
            ].map((item, index) => (
              <div key={index} className="flex gap-6 mb-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-red-600 text-white rounded-full flex items-center justify-center text-xl font-bold">
                    {item.step}
                  </div>
                </div>
                <div className="flex-1 pb-8 border-b border-gray-200 last:border-0">
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Tại sao chọn Macland?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Chúng tôi mang lại những giá trị khác biệt
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { title: 'Kinh nghiệm', desc: '15+ năm trong lĩnh vực BĐS công nghiệp' },
              { title: 'Chuyên môn', desc: 'Đội ngũ chuyên gia giàu kinh nghiệm' },
              { title: 'Uy tín', desc: '1000+ khách hàng tin tưởng và hợp tác' },
              { title: 'Hiệu quả', desc: '500+ dự án thành công' },
              { title: 'Toàn quốc', desc: 'Mạng lưới hoạt động 50+ tỉnh thành' },
              { title: 'Minh bạch', desc: 'Chi phí rõ ràng, không phát sinh' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <div className="w-3 h-3 bg-red-600 rounded-full" />
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Cần tư vấn?</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Liên hệ ngay để được tư vấn miễn phí về dịch vụ bất động sản công nghiệp
          </p>
          <a
            href={primaryPhone.href}
            className="inline-block bg-white text-red-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors"
          >
            Gọi ngay: {primaryPhone.display}
          </a>
        </div>
      </section>
    </div>
  )
}
