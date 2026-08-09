export type NewsArticle = {
  slug: string
  title: string
  description: string
  date: string
  readingTime: string
  keywords: string[]
  heroImage: string
  content: Array<{
    heading: string
    paragraphs: string[]
  }>
}

export const newsArticles: NewsArticle[] = [
  {
    slug: 'cho-thue-khu-cong-nghiep-tai-hai-phong',
    title: 'Cho thuê khu công nghiệp tại Hải Phòng: tiêu chí chọn vị trí phù hợp',
    description:
      'Các tiêu chí quan trọng khi thuê đất, nhà xưởng, kho trong khu công nghiệp tại Hải Phòng cho doanh nghiệp sản xuất và logistics.',
    date: '2026-08-09',
    readingTime: '6 phút đọc',
    keywords: ['cho thuê khu công nghiệp Hải Phòng', 'thuê nhà xưởng Hải Phòng', 'thuê kho Hải Phòng'],
    heroImage: '/images/hero/hai-phong-port-industrial-hero.png',
    content: [
      {
        heading: 'Vì sao Hải Phòng là điểm thuê KCN đáng chú ý?',
        paragraphs: [
          'Hải Phòng có lợi thế cảng biển, sân bay, cao tốc và hệ sinh thái công nghiệp phụ trợ đang mở rộng. Doanh nghiệp thuê khu công nghiệp tại Hải Phòng thường ưu tiên khả năng kết nối cảng, chi phí logistics và tốc độ triển khai vận hành.',
          'Các khu vực như Đình Vũ, Nam Đình Vũ, Tràng Duệ, VSIP Hải Phòng và DEEP C phù hợp nhiều nhóm ngành từ logistics, điện tử, cơ khí, kho vận đến sản xuất xuất nhập khẩu.',
        ],
      },
      {
        heading: 'Tiêu chí chọn mặt bằng thuê',
        paragraphs: [
          'Doanh nghiệp nên đánh giá diện tích thực dùng, tải trọng sàn, chiều cao thông thủy, PCCC, công suất điện, cấp thoát nước, thời hạn thuê và khả năng mở rộng. Với kho vận, khoảng cách đến cảng và trục container quan trọng hơn giá thuê đơn thuần.',
          'Ngoài thông số kỹ thuật, cần kiểm tra pháp lý dự án, ngành nghề được tiếp nhận, tiến độ bàn giao và chi phí vận hành phát sinh như phí quản lý, xử lý nước thải, an ninh, hạ tầng.',
        ],
      },
      {
        heading: 'Cách làm việc hiệu quả với đơn vị tư vấn',
        paragraphs: [
          'Một brief rõ ràng nên có ngành nghề, diện tích, thời điểm nhận bàn giao, ngân sách thuê, yêu cầu điện nước, nhu cầu văn phòng và tiêu chuẩn đặc thù. Dữ liệu càng rõ, việc lọc sản phẩm càng nhanh.',
          'Hpindustrialhub.vn hỗ trợ tổng hợp nguồn cung nhà xưởng, kho và khu công nghiệp tại Hải Phòng để doanh nghiệp có cơ sở so sánh trước khi đi khảo sát thực địa.',
        ],
      },
    ],
  },
  {
    slug: 'mua-ban-khu-cong-nghiep-tai-hai-phong',
    title: 'Mua bán khu công nghiệp tại Hải Phòng: quy trình, pháp lý và lưu ý đầu tư',
    description:
      'Những điểm cần kiểm tra khi mua bán, chuyển nhượng đất công nghiệp và tài sản nhà xưởng tại Hải Phòng.',
    date: '2026-08-09',
    readingTime: '7 phút đọc',
    keywords: ['mua bán khu công nghiệp Hải Phòng', 'chuyển nhượng đất công nghiệp Hải Phòng', 'mua nhà xưởng Hải Phòng'],
    heroImage: '/images/products/khu-cong-nghiep-trang-due-hai-phong/original_1_1-1-1.png',
    content: [
      {
        heading: 'Những dạng giao dịch phổ biến',
        paragraphs: [
          'Thị trường bất động sản công nghiệp Hải Phòng thường có các giao dịch thuê lại đất trả tiền một lần, chuyển nhượng tài sản gắn liền với đất, mua nhà xưởng độc lập hoặc nhận chuyển nhượng dự án đủ điều kiện.',
          'Mỗi dạng giao dịch có cơ chế pháp lý, nghĩa vụ tài chính và quy trình thẩm định khác nhau. Nhà đầu tư cần phân biệt rõ quyền sử dụng đất, quyền thuê lại đất và quyền sở hữu tài sản trên đất.',
        ],
      },
      {
        heading: 'Checklist pháp lý trước khi đặt cọc',
        paragraphs: [
          'Cần kiểm tra hồ sơ đất, thời hạn sử dụng, ngành nghề được phép hoạt động, quy hoạch, tình trạng thế chấp, PCCC, môi trường, giấy phép xây dựng, hoàn công và nghĩa vụ tài chính còn tồn tại.',
          'Với nhà xưởng đang vận hành, nên thẩm định thêm công suất điện, hồ sơ bảo trì, hợp đồng thuê hiện hữu, công nợ vận hành và khả năng chuyển giao nhân sự hoặc thiết bị nếu có.',
        ],
      },
      {
        heading: 'Chiến lược đàm phán',
        paragraphs: [
          'Giá mua không nên được nhìn tách khỏi chi phí cải tạo, thời gian xin chấp thuận, chi phí di dời và rủi ro pháp lý. Một sản phẩm rẻ nhưng mất nhiều tháng xử lý hồ sơ có thể làm tăng tổng chi phí đầu tư.',
          'Để giảm rủi ro, nhà đầu tư nên dùng dữ liệu so sánh theo khu vực, loại tài sản, thời hạn còn lại và mức độ sẵn sàng vận hành trước khi chốt điều khoản.',
        ],
      },
    ],
  },
  {
    slug: 'thi-truong-bat-dong-san-cong-nghiep-hai-phong',
    title: 'Thị trường bất động sản công nghiệp Hải Phòng: cơ hội cho nhà đầu tư FDI',
    description:
      'Tổng quan cơ hội thuê, mua và phát triển bất động sản công nghiệp Hải Phòng cho doanh nghiệp FDI.',
    date: '2026-08-09',
    readingTime: '6 phút đọc',
    keywords: ['bất động sản công nghiệp Hải Phòng', 'khu công nghiệp Hải Phòng', 'FDI Hải Phòng'],
    heroImage: '/images/products/khu-cong-nghiep-vsip-hai-phong/original_1_khu-cong-nghiep-vsip-hai-phong-macland-1.jpg',
    content: [
      {
        heading: 'Hạ tầng tạo lợi thế cạnh tranh',
        paragraphs: [
          'Hải Phòng là cửa ngõ logistics quan trọng của miền Bắc, kết nối với Hà Nội, Quảng Ninh, Hải Dương, Hưng Yên và các trung tâm sản xuất vệ tinh. Hệ thống cảng biển và cao tốc giúp doanh nghiệp kiểm soát tốt chuỗi cung ứng.',
          'Đây là nền tảng khiến nhu cầu nhà xưởng xây sẵn, kho xây sẵn và đất công nghiệp tại Hải Phòng tiếp tục được quan tâm bởi doanh nghiệp FDI.',
        ],
      },
      {
        heading: 'Nguồn cầu nổi bật',
        paragraphs: [
          'Các nhóm ngành thường tìm kiếm mặt bằng gồm điện tử, linh kiện, logistics, bao bì, cơ khí chính xác, phụ trợ ô tô và sản xuất xuất nhập khẩu. Nhu cầu không chỉ nằm ở giá thuê mà còn ở tốc độ bàn giao và tiêu chuẩn vận hành.',
          'Doanh nghiệp FDI thường ưu tiên khu công nghiệp có pháp lý rõ, hạ tầng hoàn chỉnh, khả năng tuyển dụng lao động và hệ sinh thái nhà cung cấp gần kề.',
        ],
      },
      {
        heading: 'Cơ hội cho nhà đầu tư',
        paragraphs: [
          'Nhà đầu tư có thể tiếp cận thị trường qua thuê nhà xưởng xây sẵn, thuê đất dài hạn, mua tài sản nhà xưởng hoặc hợp tác phát triển kho xưởng theo nhu cầu khách thuê.',
          'Hpindustrialhub.vn tập trung chuẩn hóa dữ liệu sản phẩm để nhà đầu tư có thể so sánh vị trí, diện tích, trạng thái, giá và pháp lý trước khi ra quyết định.',
        ],
      },
    ],
  },
]

export function getAllNewsArticles() {
  return newsArticles
}

export function getNewsArticleBySlug(slug: string) {
  return newsArticles.find((article) => article.slug === slug)
}
