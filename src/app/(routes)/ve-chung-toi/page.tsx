import { Building2, Target, Users, Award } from 'lucide-react'
import { primaryPhone } from '@/lib/config/contact'

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Về Macland</h1>
            <p className="text-xl text-gray-300">
              Tư vấn và xúc tiến đầu tư bất động sản công nghiệp uy tín hàng đầu Việt Nam
            </p>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Lời ngỏ</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 leading-relaxed mb-6">
                Macland là đơn vị uy tín trong lĩnh vực tư vấn và xúc tiến đầu tư bất động sản công nghiệp tại Việt Nam.
                Với hơn 15 năm kinh nghiệm, chúng tôi tự hào đã đồng hành cùng hàng nghìn nhà đầu tư trong và ngoài nước
                tìm kiếm cơ hội đầu tư thành công.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Chúng tôi hiểu rằng mỗi quyết định đầu tư là một bước đi quan trọng. Do đó, Macland cam kết mang lại
                giải pháp toàn diện, từ tư vấn chiến lược, hỗ trợ pháp lý đến quản lý đầu tư, giúp khách hàng tối đa hóa
                hiệu quả và giảm thiểu rủi ro.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Với mạng lưới đối tác rộng khắp và am hiểu sâu sắc về thị trường bất động sản công nghiệp Việt Nam,
                Macland sẵn sàng trở thành người bạn đồng hành tin cậy trên hành trình đầu tư của bạn.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Giá trị cốt lõi</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Những giá trị định hình nên văn hóa và cách thức làm việc của Macland
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Target,
                title: 'Tận tâm',
                description: 'Đặt lợi ích khách hàng lên hàng đầu, cam kết mang lại giá trị thực tế'
              },
              {
                icon: Building2,
                title: 'Chuyên nghiệp',
                description: 'Đội ngũ chuyên gia giàu kinh nghiệm, quy trình làm việc chuẩn quốc tế'
              },
              {
                icon: Users,
                title: 'Minh bạch',
                description: 'Thông tin rõ ràng, chi phí minh bạch, không phát sinh'
              },
              {
                icon: Award,
                title: 'Hiệu quả',
                description: 'Tập trung vào kết quả, đảm bảo tỷ lệ thành công cao'
              }
            ].map((value, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '15+', label: 'Năm kinh nghiệm' },
              { value: '500+', label: 'Dự án thành công' },
              { value: '1000+', label: 'Khách hàng tin tưởng' },
              { value: '50+', label: 'Tỉnh thành hoạt động' }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-red-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Sẵn sàng hợp tác?</h2>
          <p className="text-xl text-red-100 mb-8 max-w-2xl mx-auto">
            Liên hệ với chúng tôi để được tư vấn miễn phí về cơ hội đầu tư bất động sản công nghiệp
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
