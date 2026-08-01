import { Locale } from '@/lib/i18n/config'

type Dictionary = {
  metadata: {
    title: string
    description: string
  }
  common: {
    companyTagline: string
    allRightsReserved: string
    builtWith: string
    notAvailable: string
    contactNow: string
    learnMore: string
    viewProducts: string
    backToList: string
    updateInProgress: string
    close: string
  }
  nav: {
    home: string
    products: string
    services: string
    about: string
    contact: string
    consultation: string
    menu: string
  }
  language: {
    label: string
    button: string
    modalTitle: string
    modalDescription: string
    recommended: string
    confirm: string
    helper: string
  }
  footer: {
    quickLinks: string
    categories: string
    contact: string
    industrialPark: string
    land: string
    warehouse: string
    factory: string
  }
  home: {
    heroTitle: string
    heroAccent: string
    heroDescription: string
    freeConsultation: string
    statsProducts: string
    statsExperience: string
    statsProjects: string
    statsClients: string
    featuredTitle: string
    featuredDescription: string
    viewAll: string
    whyTitle: string
    whyDescription: string
    serviceTitle: string
    serviceDescription: string
    serviceMore: string
    ctaTitle: string
    ctaDescription: string
    values: Array<{ title: string; description: string }>
    services: Array<{ title: string; description: string }>
  }
  services: {
    title: string
    description: string
    processTitle: string
    processDescription: string
    whyTitle: string
    whyDescription: string
    urgentTitle: string
    urgentDescription: string
    items: Array<{
      title: string
      description: string
      features: string[]
    }>
    process: Array<{
      step: string
      title: string
      description: string
    }>
    reasons: Array<{
      title: string
      description: string
    }>
  }
  about: {
    title: string
    description: string
    introTitle: string
    introParagraphs: string[]
    valuesTitle: string
    valuesDescription: string
    stats: Array<{ value: string; label: string }>
    ctaTitle: string
    ctaDescription: string
    values: Array<{ title: string; description: string }>
  }
  products: {
    title: string
    description: string
    filterTitle: string
    filterType: string
    all: string
    previous: string
    next: string
    empty: string
    detail: string
    detailsTitle: string
    keyInfo: string
    area: string
    location: string
    price: string
    status: string
    legal: string
    address: string
    viewLargeImage: string
    homeBreadcrumb: string
  }
  contact: {
    title: string
    description: string
    infoTitle: string
    address: string
    hotline: string
    email: string
    hours: string
    weekdayHours: string
    saturdayHours: string
    mapTitle: string
    mapDescription: string
    urgentTitle: string
    urgentDescription: string
  }
  form: {
    title: string
    submit: string
    sending: string
    success: string
    error: string
    name: string
    email: string
    phone: string
    subject: string
    message: string
    namePlaceholder: string
    phonePlaceholder: string
    emailPlaceholder: string
    messagePlaceholder: string
    chooseSubject: string
    subjects: {
      investment: string
      rentBuy: string
      legal: string
      other: string
    }
  }
  chatbot: {
    eyebrow: string
    title: string
    panelTitle: string
    formTitle: string
    submit: string
    teaser: string
    open: string
    close: string
  }
}

const dictionaries: Record<Locale, Dictionary> = {
  vi: {
    metadata: {
      title: 'Hai Phong Industrial Hub - Nền tảng dữ liệu nhà xưởng & KCN',
      description: 'Nền tảng dữ liệu nhà xưởng, kho và khu công nghiệp tại Hải Phòng',
    },
    common: {
      companyTagline: 'Nền tảng dữ liệu nhà xưởng, kho và khu công nghiệp tại Hải Phòng.',
      allRightsReserved: 'Tất cả bản quyền được bảo lưu.',
      builtWith: 'Built with',
      notAvailable: 'Liên hệ',
      contactNow: 'Gọi ngay',
      learnMore: 'Xem chi tiết',
      viewProducts: 'Xem dữ liệu',
      backToList: 'Quay lại danh sách',
      updateInProgress: 'Đang cập nhật',
      close: 'Đóng',
    },
    nav: {
      home: 'Trang chủ',
      products: 'Dữ liệu KCN',
      services: 'Dịch vụ',
      about: 'Về Hub',
      contact: 'Liên hệ',
      consultation: 'Đăng ký tư vấn',
      menu: 'Menu',
    },
    language: {
      label: 'Ngôn ngữ',
      button: 'Chọn ngôn ngữ',
      modalTitle: 'Chọn ngôn ngữ hiển thị',
      modalDescription: 'Chúng tôi đã gợi ý ngôn ngữ theo khu vực truy cập. Bạn có thể đổi ngay tại đây và hệ thống sẽ ghi nhớ cho những lần tiếp theo.',
      recommended: 'Đề xuất',
      confirm: 'Tiếp tục',
      helper: 'Bạn luôn có thể đổi lại trong menu đầu trang.',
    },
    footer: {
      quickLinks: 'Liên kết nhanh',
      categories: 'Danh mục',
      contact: 'Liên hệ',
      industrialPark: 'Khu công nghiệp',
      land: 'Đất nền',
      warehouse: 'Kho bãi',
      factory: 'Nhà xưởng',
    },
    home: {
      heroTitle: 'Nền tảng dữ liệu nhà xưởng & KCN',
      heroAccent: 'Tại Hải Phòng',
      heroDescription: 'Tra cứu, so sánh và kết nối nguồn cung nhà xưởng, kho và khu công nghiệp tại Hải Phòng cho doanh nghiệp sản xuất, logistics và nhà đầu tư.',
      freeConsultation: 'Nhận tư vấn miễn phí',
      statsProducts: 'Dữ liệu KCN',
      statsExperience: 'Năm KN',
      statsProjects: 'Dự án',
      statsClients: 'Khách hàng',
      featuredTitle: 'Dữ liệu KCN nổi bật',
      featuredDescription: 'Các nhà xưởng, kho và khu công nghiệp đáng chú ý tại Hải Phòng',
      viewAll: 'Xem tất cả',
      whyTitle: 'Tại sao chọn Hai Phong Industrial Hub?',
      whyDescription: 'Chúng tôi mang lại giá trị khác biệt cho nhà đầu tư',
      serviceTitle: 'Dịch vụ đầu tư',
      serviceDescription: 'Giải pháp toàn diện cho nhu cầu bất động sản công nghiệp',
      serviceMore: 'Xem tất cả dịch vụ',
      ctaTitle: 'Sẵn sàng đầu tư?',
      ctaDescription: 'Liên hệ với chúng tôi để được tư vấn miễn phí về các cơ hội đầu tư bất động sản công nghiệp',
      values: [
        { title: 'Uy tín & Chuyên nghiệp', description: '15+ năm kinh nghiệm, 1000+ khách hàng tin tưởng' },
        { title: 'Pháp lý đảm bảo', description: 'Hỗ trợ đầy đủ thủ tục, giấy tờ minh bạch' },
        { title: 'Hiệu quả cao', description: '500+ dự án thành công, tỷ suất sinh lời tốt' },
      ],
      services: [
        { title: 'Tư vấn đầu tư', description: 'Chiến lược tối ưu' },
        { title: 'Thủ tục pháp lý', description: 'Hỗ trợ trọn gói' },
        { title: 'Quản lý BĐS', description: 'Vận hành chuyên nghiệp' },
        { title: 'Môi giới', description: 'Kết nối buyer-seller' },
      ],
    },
    services: {
      title: 'Dịch vụ đầu tư',
      description: 'Giải pháp toàn diện cho nhu cầu bất động sản công nghiệp của bạn',
      processTitle: 'Quy trình làm việc',
      processDescription: 'Quy trình chuyên nghiệp đảm bảo kết quả tốt nhất cho khách hàng',
      whyTitle: 'Tại sao chọn Hai Phong Industrial Hub?',
      whyDescription: 'Chúng tôi mang lại những giá trị khác biệt',
      urgentTitle: 'Cần tư vấn?',
      urgentDescription: 'Liên hệ ngay để được tư vấn miễn phí về dịch vụ bất động sản công nghiệp',
      items: [
        { title: 'Tìm kiếm và Định giá', description: 'Phân tích thị trường và định giá bất động sản công nghiệp chính xác', features: ['Khảo sát thị trường toàn diện', 'Định giá theo tiêu chuẩn quốc tế', 'Báo cáo chi tiết và minh bạch', 'Tư vấn chiến lược đầu tư'] },
        { title: 'Thủ tục Pháp lý', description: 'Hỗ trợ đầy đủ các thủ tục pháp lý liên quan đến đầu tư và chuyển nhượng', features: ['Soạn thảo hợp đồng, văn bản', 'Giải quyết thủ tục hành chính', 'Tư vấn quy định pháp luật', 'Đại diện khách hàng trước cơ quan nhà nước'] },
        { title: 'Đầu tư và Phát triển', description: 'Tư vấn chiến lược đầu tư và phát triển bất động sản công nghiệp', features: ['Phân tích khả thi dự án', 'Lập kế hoạch đầu tư', 'Tìm kiếm đối tác', 'Giám sát thực hiện dự án'] },
        { title: 'Quản lý Bất động sản', description: 'Dịch vụ quản lý và vận hành bất động sản công nghiệp chuyên nghiệp', features: ['Quản lý cho thuê', 'Bảo trì và bảo dưỡng', 'Thuê và quản lý tenant', 'Báo cáo định kỳ'] },
        { title: 'Môi giới và Chuyển nhượng', description: 'Kết nối người mua và người bán, thực hiện giao dịch thành công', features: ['Tìm kiếm buyer/seller phù hợp', 'Đàm phán và thương lượng', 'Hỗ trợ giao dịch', 'Theo sát đến khi hoàn tất'] },
        { title: 'Tư vấn Chiến lược', description: 'Lập kế hoạch đầu tư dài hạn và tối ưu hóa portfolio', features: ['Phân tích rủi ro và lợi nhuận', 'Đa dạng hóa danh mục đầu tư', 'Tối ưu hóa dòng tiền', 'Chiến lược thoái vốn'] },
      ],
      process: [
        { step: '01', title: 'Tiếp nhận yêu cầu', description: 'Lắng nghe và hiểu nhu cầu của khách hàng' },
        { step: '02', title: 'Tư vấn sơ bộ', description: 'Đề xuất giải pháp và báo giá ước tính' },
        { step: '03', title: 'Thực hiện dịch vụ', description: 'Triển khai theo kế hoạch đã đề ra' },
        { step: '04', title: 'Báo cáo và Nghiệm thu', description: 'Bàn giao kết quả và đánh giá hài lòng' },
      ],
      reasons: [
        { title: 'Kinh nghiệm', description: '15+ năm trong lĩnh vực BĐS công nghiệp' },
        { title: 'Chuyên môn', description: 'Đội ngũ chuyên gia giàu kinh nghiệm' },
        { title: 'Uy tín', description: '1000+ khách hàng tin tưởng và hợp tác' },
        { title: 'Hiệu quả', description: '500+ dự án thành công' },
        { title: 'Toàn quốc', description: 'Mạng lưới hoạt động 50+ tỉnh thành' },
        { title: 'Minh bạch', description: 'Chi phí rõ ràng, không phát sinh' },
      ],
    },
    about: {
      title: 'Về Hai Phong Industrial Hub',
      description: 'Tư vấn và xúc tiến đầu tư bất động sản công nghiệp uy tín hàng đầu Việt Nam',
      introTitle: 'Lời ngỏ',
      introParagraphs: [
        'Hai Phong Industrial Hub là đơn vị uy tín trong lĩnh vực tư vấn và xúc tiến đầu tư bất động sản công nghiệp tại Việt Nam. Với hơn 15 năm kinh nghiệm, chúng tôi tự hào đã đồng hành cùng hàng nghìn nhà đầu tư trong và ngoài nước tìm kiếm cơ hội đầu tư thành công.',
        'Chúng tôi hiểu rằng mỗi quyết định đầu tư là một bước đi quan trọng. Do đó, Hai Phong Industrial Hub cam kết mang lại giải pháp toàn diện, từ tư vấn chiến lược, hỗ trợ pháp lý đến quản lý đầu tư, giúp khách hàng tối đa hóa hiệu quả và giảm thiểu rủi ro.',
        'Với mạng lưới đối tác rộng khắp và am hiểu sâu sắc về thị trường bất động sản công nghiệp Việt Nam, Hai Phong Industrial Hub sẵn sàng trở thành người bạn đồng hành tin cậy trên hành trình đầu tư của bạn.',
      ],
      valuesTitle: 'Giá trị cốt lõi',
      valuesDescription: 'Những giá trị định hình nên văn hóa và cách thức làm việc của Hai Phong Industrial Hub',
      stats: [
        { value: '15+', label: 'Năm kinh nghiệm' },
        { value: '500+', label: 'Dự án thành công' },
        { value: '1000+', label: 'Khách hàng tin tưởng' },
        { value: '50+', label: 'Tỉnh thành hoạt động' },
      ],
      ctaTitle: 'Sẵn sàng hợp tác?',
      ctaDescription: 'Liên hệ với chúng tôi để được tư vấn miễn phí về cơ hội đầu tư bất động sản công nghiệp',
      values: [
        { title: 'Tận tâm', description: 'Đặt lợi ích khách hàng lên hàng đầu, cam kết mang lại giá trị thực tế' },
        { title: 'Chuyên nghiệp', description: 'Đội ngũ chuyên gia giàu kinh nghiệm, quy trình làm việc chuẩn quốc tế' },
        { title: 'Minh bạch', description: 'Thông tin rõ ràng, chi phí minh bạch, không phát sinh' },
        { title: 'Hiệu quả', description: 'Tập trung vào kết quả, đảm bảo tỷ lệ thành công cao' },
      ],
    },
    products: {
      title: 'Dữ liệu KCN',
      description: 'Khám phá {count} cơ hội đầu tư bất động sản công nghiệp',
      filterTitle: 'Bộ lọc',
      filterType: 'Loại hình',
      all: 'Tất cả',
      previous: 'Trang trước',
      next: 'Trang tiếp',
      empty: 'Không tìm thấy dữ liệu nào',
      detail: 'Chi tiết',
      detailsTitle: 'Thông tin chi tiết',
      keyInfo: 'Thông tin chính',
      area: 'Diện tích',
      location: 'Vị trí',
      price: 'Giá',
      status: 'Giao dịch',
      legal: 'Pháp lý',
      address: 'Địa chỉ',
      viewLargeImage: 'Xem ảnh lớn',
      homeBreadcrumb: 'Trang chủ',
    },
    contact: {
      title: 'Liên hệ với chúng tôi',
      description: 'Chúng tôi sẵn sàng hỗ trợ bạn 24/7',
      infoTitle: 'Thông tin liên hệ',
      address: 'Địa chỉ',
      hotline: 'Hotline',
      email: 'Email',
      hours: 'Giờ làm việc',
      weekdayHours: 'Thứ 2 - Thứ 6: 8:00 - 18:00',
      saturdayHours: 'Thứ 7: 8:00 - 12:00',
      mapTitle: 'Bản đồ sẽ được hiển thị ở đây',
      mapDescription: 'Có thể tích hợp Google Maps hoặc OpenStreetMap',
      urgentTitle: 'Cần hỗ trợ gấp?',
      urgentDescription: 'Hotline của chúng tôi luôn sẵn sàng 24/7',
    },
    form: {
      title: 'Gửi tin nhắn cho chúng tôi',
      submit: 'Gửi tin nhắn',
      sending: 'Đang gửi...',
      success: 'Cảm ơn bạn đã liên hệ. Thông tin đã được ghi nhận, chúng tôi sẽ phản hồi sớm nhất.',
      error: 'Không thể gửi thông tin lúc này.',
      name: 'Họ tên',
      email: 'Email',
      phone: 'Số điện thoại',
      subject: 'Chủ đề',
      message: 'Nội dung',
      namePlaceholder: 'Nhập họ tên của bạn',
      phonePlaceholder: '09xx xxx xxx',
      emailPlaceholder: 'email@example.com',
      messagePlaceholder: 'Nhập nội dung tin nhắn...',
      chooseSubject: 'Chọn chủ đề',
      subjects: {
        investment: 'Tư vấn đầu tư',
        rentBuy: 'Thuê/Mua bất động sản',
        legal: 'Thủ tục pháp lý',
        other: 'Khác',
      },
    },
    chatbot: {
      eyebrow: 'Chatbot',
      title: 'Đăng ký tư vấn nhanh',
      panelTitle: 'Đăng ký tư vấn nhanh',
      formTitle: 'Để lại thông tin để HAI PHONG INDUSTRIAL HUB liên hệ lại',
      submit: 'Gửi thông tin',
      teaser: 'Chat với HAI PHONG INDUSTRIAL HUB để gửi thông tin tư vấn nhanh.',
      open: 'Mở form tư vấn',
      close: 'Đóng cửa sổ',
    },
  },
  en: {
    metadata: {
      title: 'Hai Phong Industrial Hub - Industrial Real Estate',
      description: 'Trusted industrial real estate advisory and investment facilitation in Vietnam',
    },
    common: {
      companyTagline: 'Trusted industrial real estate advisory and investment facilitation in Vietnam. 15+ years of experience.',
      allRightsReserved: 'All rights reserved.',
      builtWith: 'Built with',
      notAvailable: 'Contact us',
      contactNow: 'Call now',
      learnMore: 'View details',
      viewProducts: 'View products',
      backToList: 'Back to listing',
      updateInProgress: 'Updating',
      close: 'Close',
    },
    nav: {
      home: 'Home',
      products: 'Properties',
      services: 'Services',
      about: 'About us',
      contact: 'Contact',
      consultation: 'Request consultation',
      menu: 'Menu',
    },
    language: {
      label: 'Language',
      button: 'Select language',
      modalTitle: 'Choose your display language',
      modalDescription: 'We suggested a language based on your access region. You can change it now and we will remember your choice for future visits.',
      recommended: 'Recommended',
      confirm: 'Continue',
      helper: 'You can change it anytime from the header menu.',
    },
    footer: {
      quickLinks: 'Quick links',
      categories: 'Categories',
      contact: 'Contact',
      industrialPark: 'Industrial parks',
      land: 'Industrial land',
      warehouse: 'Warehouses',
      factory: 'Factories',
    },
    home: {
      heroTitle: 'Industrial Real Estate',
      heroAccent: 'Reliable & Efficient',
      heroDescription: 'Professional advisory and investment facilitation for industrial real estate in Vietnam. 15+ years of experience.',
      freeConsultation: 'Get free consultation',
      statsProducts: 'Listings',
      statsExperience: 'Years',
      statsProjects: 'Projects',
      statsClients: 'Clients',
      featuredTitle: 'Featured listings',
      featuredDescription: 'Selected industrial real estate opportunities with strong potential',
      viewAll: 'View all',
      whyTitle: 'Why Hai Phong Industrial Hub?',
      whyDescription: 'We create a clearer, faster path for investors entering Vietnam',
      serviceTitle: 'Our services',
      serviceDescription: 'End-to-end solutions for industrial real estate needs',
      serviceMore: 'View all services',
      ctaTitle: 'Ready to invest?',
      ctaDescription: 'Contact us for a free consultation on industrial real estate opportunities in Vietnam.',
      values: [
        { title: 'Reliable & professional', description: '15+ years of experience and 1,000+ trusted clients' },
        { title: 'Strong legal support', description: 'Transparent documents and full procedural support' },
        { title: 'High efficiency', description: '500+ successful projects with strong return potential' },
      ],
      services: [
        { title: 'Investment advisory', description: 'Strategy and market fit' },
        { title: 'Legal procedures', description: 'End-to-end support' },
        { title: 'Asset management', description: 'Professional operations' },
        { title: 'Brokerage', description: 'Connecting buyers and sellers' },
      ],
    },
    services: {
      title: 'Our services',
      description: 'Comprehensive solutions for your industrial real estate needs',
      processTitle: 'How we work',
      processDescription: 'A clear process designed to reduce risk and speed execution',
      whyTitle: 'Why choose Hai Phong Industrial Hub?',
      whyDescription: 'We deliver measurable value at each step of the investment process',
      urgentTitle: 'Need advice?',
      urgentDescription: 'Contact us now for a free consultation on industrial real estate services',
      items: [
        { title: 'Search and valuation', description: 'Market analysis and accurate industrial property valuation', features: ['Comprehensive market survey', 'Valuation aligned with international standards', 'Transparent detailed reporting', 'Investment strategy advisory'] },
        { title: 'Legal procedures', description: 'Full support for legal procedures related to investment and transfer', features: ['Contract and document drafting', 'Administrative procedure support', 'Regulatory advisory', 'Representation before state authorities'] },
        { title: 'Investment and development', description: 'Investment strategy and industrial property development consulting', features: ['Feasibility analysis', 'Investment planning', 'Partner sourcing', 'Execution supervision'] },
        { title: 'Property management', description: 'Professional industrial property management and operations', features: ['Leasing management', 'Maintenance and upkeep', 'Tenant management', 'Periodic reporting'] },
        { title: 'Brokerage and transfer', description: 'Connecting buyers and sellers to complete transactions effectively', features: ['Qualified buyer/seller sourcing', 'Negotiation support', 'Transaction assistance', 'Follow-through to completion'] },
        { title: 'Strategic advisory', description: 'Long-term investment planning and portfolio optimization', features: ['Risk-return analysis', 'Portfolio diversification', 'Cash-flow optimization', 'Exit planning'] },
      ],
      process: [
        { step: '01', title: 'Requirement intake', description: 'We listen carefully and map your real objectives' },
        { step: '02', title: 'Initial advisory', description: 'We propose options and an initial commercial scope' },
        { step: '03', title: 'Execution', description: 'We deliver according to the agreed plan and milestones' },
        { step: '04', title: 'Reporting and handover', description: 'We close with reporting, review and next-step alignment' },
      ],
      reasons: [
        { title: 'Experience', description: '15+ years in industrial real estate' },
        { title: 'Expertise', description: 'A team with deep market and transaction experience' },
        { title: 'Trust', description: '1,000+ clients have partnered with us' },
        { title: 'Efficiency', description: '500+ successful projects delivered' },
        { title: 'Nationwide reach', description: 'Coverage across 50+ provinces and cities' },
        { title: 'Transparency', description: 'Clear fees and predictable execution' },
      ],
    },
    about: {
      title: 'About Hai Phong Industrial Hub',
      description: 'A leading trusted advisor for industrial real estate investment in Vietnam',
      introTitle: 'Introduction',
      introParagraphs: [
        'Hai Phong Industrial Hub is a trusted advisory firm specializing in industrial real estate investment facilitation in Vietnam. With more than 15 years of experience, we have supported thousands of local and international investors in finding the right opportunities.',
        'We understand that every investment decision matters. Hai Phong Industrial Hub is committed to providing end-to-end solutions, from strategic advisory and legal support to investment execution, helping clients maximize efficiency and reduce risk.',
        'With a broad partner network and deep understanding of Vietnam’s industrial property market, Hai Phong Industrial Hub is ready to be a dependable partner throughout your investment journey.',
      ],
      valuesTitle: 'Core values',
      valuesDescription: 'The principles that shape how Hai Phong Industrial Hub works with investors and partners',
      stats: [
        { value: '15+', label: 'Years of experience' },
        { value: '500+', label: 'Successful projects' },
        { value: '1000+', label: 'Trusted clients' },
        { value: '50+', label: 'Active provinces/cities' },
      ],
      ctaTitle: 'Ready to work together?',
      ctaDescription: 'Contact us for a free consultation on industrial real estate investment opportunities.',
      values: [
        { title: 'Dedicated', description: 'We put client outcomes first and focus on practical value' },
        { title: 'Professional', description: 'Experienced specialists working with clear standards' },
        { title: 'Transparent', description: 'Clear information, transparent fees, no hidden surprises' },
        { title: 'Effective', description: 'Execution centered on results and high success rates' },
      ],
    },
    products: {
      title: 'Properties',
      description: 'Explore {count} industrial real estate opportunities',
      filterTitle: 'Filters',
      filterType: 'Property type',
      all: 'All',
      previous: 'Previous',
      next: 'Next',
      empty: 'No properties found',
      detail: 'Details',
      detailsTitle: 'Detailed information',
      keyInfo: 'Key information',
      area: 'Area',
      location: 'Location',
      price: 'Price',
      status: 'Transaction',
      legal: 'Legal status',
      address: 'Address',
      viewLargeImage: 'View large image',
      homeBreadcrumb: 'Home',
    },
    contact: {
      title: 'Contact us',
      description: 'Our team is ready to support you 24/7',
      infoTitle: 'Contact information',
      address: 'Address',
      hotline: 'Hotline',
      email: 'Email',
      hours: 'Working hours',
      weekdayHours: 'Mon - Fri: 8:00 - 18:00',
      saturdayHours: 'Sat: 8:00 - 12:00',
      mapTitle: 'Map will appear here',
      mapDescription: 'You can integrate Google Maps or OpenStreetMap here',
      urgentTitle: 'Need urgent support?',
      urgentDescription: 'Our hotline is available 24/7',
    },
    form: {
      title: 'Send us a message',
      submit: 'Send message',
      sending: 'Sending...',
      success: 'Thank you for contacting us. We received your information and will respond as soon as possible.',
      error: 'Unable to submit your request right now.',
      name: 'Full name',
      email: 'Email',
      phone: 'Phone number',
      subject: 'Subject',
      message: 'Message',
      namePlaceholder: 'Enter your full name',
      phonePlaceholder: 'Your phone number',
      emailPlaceholder: 'email@example.com',
      messagePlaceholder: 'Enter your message...',
      chooseSubject: 'Select a subject',
      subjects: {
        investment: 'Investment advisory',
        rentBuy: 'Lease / purchase property',
        legal: 'Legal procedures',
        other: 'Other',
      },
    },
    chatbot: {
      eyebrow: 'Chatbot',
      title: 'Quick consultation',
      panelTitle: 'Quick consultation',
      formTitle: 'Leave your details and HAI PHONG INDUSTRIAL HUB will contact you',
      submit: 'Submit information',
      teaser: 'Chat with HAI PHONG INDUSTRIAL HUB to send your consultation request quickly.',
      open: 'Open consultation form',
      close: 'Close panel',
    },
  },
  zh: {
    metadata: {
      title: 'Hai Phong Industrial Hub - 工业地产',
      description: '越南值得信赖的工业地产咨询与投资落地服务',
    },
    common: {
      companyTagline: '越南值得信赖的工业地产咨询与投资落地服务，拥有 15 年以上经验。',
      allRightsReserved: '保留所有权利。',
      builtWith: 'Built with',
      notAvailable: '请联系',
      contactNow: '立即致电',
      learnMore: '查看详情',
      viewProducts: '查看项目',
      backToList: '返回列表',
      updateInProgress: '更新中',
      close: '关闭',
    },
    nav: {
      home: '首页',
      products: '项目',
      services: '服务',
      about: '关于我们',
      contact: '联系',
      consultation: '预约咨询',
      menu: '菜单',
    },
    language: {
      label: '语言',
      button: '选择语言',
      modalTitle: '选择显示语言',
      modalDescription: '我们已根据您的访问地区推荐语言。您现在可以修改，系统会记住您后续访问的选择。',
      recommended: '推荐',
      confirm: '继续',
      helper: '之后也可以在顶部菜单中随时切换。',
    },
    footer: {
      quickLinks: '快捷链接',
      categories: '分类',
      contact: '联系',
      industrialPark: '工业园区',
      land: '工业用地',
      warehouse: '仓库',
      factory: '厂房',
    },
    home: {
      heroTitle: '工业地产',
      heroAccent: '可靠高效',
      heroDescription: '为进入越南市场的企业提供专业工业地产咨询与投资落地服务，15 年以上经验。',
      freeConsultation: '免费咨询',
      statsProducts: '项目',
      statsExperience: '经验年限',
      statsProjects: '项目数',
      statsClients: '客户数',
      featuredTitle: '精选项目',
      featuredDescription: '优选工业地产投资机会',
      viewAll: '查看全部',
      whyTitle: '为什么选择 Hai Phong Industrial Hub？',
      whyDescription: '帮助投资者更快、更稳地进入越南',
      serviceTitle: '我们的服务',
      serviceDescription: '覆盖工业地产需求的全流程解决方案',
      serviceMore: '查看全部服务',
      ctaTitle: '准备投资了吗？',
      ctaDescription: '欢迎联系我们，免费获取越南工业地产投资咨询。',
      values: [
        { title: '可靠专业', description: '15 年以上经验，服务 1000+ 客户' },
        { title: '法律支持', description: '文件透明，手续支持完整' },
        { title: '高效执行', description: '500+ 成功项目，重视投资回报' },
      ],
      services: [
        { title: '投资咨询', description: '策略与市场匹配' },
        { title: '法律手续', description: '全流程支持' },
        { title: '资产管理', description: '专业运营管理' },
        { title: '经纪服务', description: '连接买卖双方' },
      ],
    },
    services: {
      title: '我们的服务',
      description: '面向工业地产需求的综合解决方案',
      processTitle: '工作流程',
      processDescription: '清晰流程，降低风险，提高执行效率',
      whyTitle: '为什么选择 Hai Phong Industrial Hub？',
      whyDescription: '在投资各阶段提供可衡量的价值',
      urgentTitle: '需要咨询？',
      urgentDescription: '立即联系我们，免费获取工业地产服务咨询',
      items: [
        { title: '选址与估值', description: '市场分析与工业地产精准估值', features: ['全面市场调研', '符合国际标准的估值', '透明详细报告', '投资策略建议'] },
        { title: '法律手续', description: '协助投资与转让相关法律流程', features: ['合同与文件起草', '行政流程支持', '法规咨询', '对接政府部门'] },
        { title: '投资与开发', description: '工业地产投资策略与开发咨询', features: ['可行性分析', '投资计划制定', '合作方对接', '执行监督'] },
        { title: '物业管理', description: '专业工业地产运营与管理服务', features: ['租赁管理', '维护保养', '租户管理', '定期报告'] },
        { title: '经纪与转让', description: '高效连接买卖双方完成交易', features: ['匹配买家/卖家', '商务谈判支持', '交易协助', '全程跟进'] },
        { title: '战略咨询', description: '长期投资规划与组合优化', features: ['风险收益分析', '组合多元化', '现金流优化', '退出策略'] },
      ],
      process: [
        { step: '01', title: '需求确认', description: '明确投资目标与实际需求' },
        { step: '02', title: '初步建议', description: '提出方案方向与初步报价' },
        { step: '03', title: '执行落地', description: '按计划推进各项工作' },
        { step: '04', title: '报告交付', description: '提交结果并对齐下一步行动' },
      ],
      reasons: [
        { title: '经验', description: '15+ 年工业地产经验' },
        { title: '专业', description: '团队具备深度市场经验' },
        { title: '信任', description: '1000+ 客户选择与合作' },
        { title: '效率', description: '500+ 成功项目经验' },
        { title: '全国覆盖', description: '覆盖 50+ 省市' },
        { title: '透明', description: '费用清晰，执行可预期' },
      ],
    },
    about: {
      title: '关于 Hai Phong Industrial Hub',
      description: '越南领先且值得信赖的工业地产投资顾问',
      introTitle: '公司介绍',
      introParagraphs: [
        'Hai Phong Industrial Hub 专注于越南工业地产投资咨询与落地服务。凭借 15 年以上经验，我们已协助众多本地与国际投资者找到合适的进入机会。',
        '我们深知每一个投资决策都很关键，因此 Hai Phong Industrial Hub 提供从战略咨询、法律支持到投资执行的一体化服务，帮助客户提升效率并降低风险。',
        '依托广泛合作网络与对越南工业地产市场的深入理解，Hai Phong Industrial Hub 愿成为您长期可靠的合作伙伴。',
      ],
      valuesTitle: '核心价值',
      valuesDescription: '塑造 Hai Phong Industrial Hub 工作方式与服务标准的基本原则',
      stats: [
        { value: '15+', label: '年经验' },
        { value: '500+', label: '成功项目' },
        { value: '1000+', label: '合作客户' },
        { value: '50+', label: '覆盖省市' },
      ],
      ctaTitle: '准备合作了吗？',
      ctaDescription: '欢迎联系我们，免费获取越南工业地产投资咨询。',
      values: [
        { title: '专注投入', description: '以客户结果为中心，强调实际价值' },
        { title: '专业执行', description: '经验团队，标准化协作' },
        { title: '透明清晰', description: '信息明确，费用透明' },
        { title: '结果导向', description: '关注执行结果与成功率' },
      ],
    },
    products: {
      title: '项目',
      description: '探索 {count} 个工业地产机会',
      filterTitle: '筛选',
      filterType: '项目类型',
      all: '全部',
      previous: '上一页',
      next: '下一页',
      empty: '未找到相关项目',
      detail: '详情',
      detailsTitle: '详细信息',
      keyInfo: '核心信息',
      area: '面积',
      location: '位置',
      price: '价格',
      status: '交易状态',
      legal: '法律状态',
      address: '地址',
      viewLargeImage: '查看大图',
      homeBreadcrumb: '首页',
    },
    contact: {
      title: '联系我们',
      description: '我们的团队可为您提供 24/7 支持',
      infoTitle: '联系方式',
      address: '地址',
      hotline: '热线',
      email: '邮箱',
      hours: '工作时间',
      weekdayHours: '周一至周五: 8:00 - 18:00',
      saturdayHours: '周六: 8:00 - 12:00',
      mapTitle: '地图将在这里显示',
      mapDescription: '可接入 Google Maps 或 OpenStreetMap',
      urgentTitle: '需要紧急支持？',
      urgentDescription: '我们的热线全天候为您服务',
    },
    form: {
      title: '给我们留言',
      submit: '发送信息',
      sending: '发送中...',
      success: '感谢您的联系。我们已收到您的信息，并会尽快回复。',
      error: '当前无法提交您的信息。',
      name: '姓名',
      email: '邮箱',
      phone: '电话号码',
      subject: '主题',
      message: '内容',
      namePlaceholder: '请输入您的姓名',
      phonePlaceholder: '请输入电话号码',
      emailPlaceholder: 'email@example.com',
      messagePlaceholder: '请输入留言内容...',
      chooseSubject: '请选择主题',
      subjects: {
        investment: '投资咨询',
        rentBuy: '租赁 / 购买地产',
        legal: '法律手续',
        other: '其他',
      },
    },
    chatbot: {
      eyebrow: 'Chatbot',
      title: '快速咨询',
      panelTitle: '快速咨询',
      formTitle: '留下您的信息，HAI PHONG INDUSTRIAL HUB 将尽快联系您',
      submit: '提交信息',
      teaser: '与 HAI PHONG INDUSTRIAL HUB 聊天，快速发送咨询需求。',
      open: '打开咨询表单',
      close: '关闭窗口',
    },
  },
  ko: {
    metadata: {
      title: 'Hai Phong Industrial Hub - 산업용 부동산',
      description: '베트남 산업용 부동산 투자 자문 및 진출 지원',
    },
    common: {
      companyTagline: '베트남 산업용 부동산 투자 자문 및 진출 지원. 15년 이상의 경험.',
      allRightsReserved: '모든 권리 보유.',
      builtWith: 'Built with',
      notAvailable: '문의',
      contactNow: '지금 전화',
      learnMore: '상세 보기',
      viewProducts: '매물 보기',
      backToList: '목록으로',
      updateInProgress: '업데이트 중',
      close: '닫기',
    },
    nav: {
      home: '홈',
      products: '매물',
      services: '서비스',
      about: '회사 소개',
      contact: '문의',
      consultation: '상담 신청',
      menu: '메뉴',
    },
    language: {
      label: '언어',
      button: '언어 선택',
      modalTitle: '표시 언어를 선택하세요',
      modalDescription: '접속 지역을 기준으로 언어를 추천했습니다. 지금 변경하면 이후 방문에서도 해당 설정을 기억합니다.',
      recommended: '추천',
      confirm: '계속',
      helper: '상단 메뉴에서 언제든 다시 변경할 수 있습니다.',
    },
    footer: {
      quickLinks: '바로가기',
      categories: '카테고리',
      contact: '문의',
      industrialPark: '산업단지',
      land: '산업용 토지',
      warehouse: '창고',
      factory: '공장',
    },
    home: {
      heroTitle: '산업용 부동산',
      heroAccent: '신뢰와 효율',
      heroDescription: '베트남 산업용 부동산 투자와 진출을 위한 전문 자문 서비스. 15년 이상의 경험.',
      freeConsultation: '무료 상담 받기',
      statsProducts: '매물',
      statsExperience: '경력',
      statsProjects: '프로젝트',
      statsClients: '고객',
      featuredTitle: '추천 매물',
      featuredDescription: '엄선된 산업용 부동산 투자 기회',
      viewAll: '전체 보기',
      whyTitle: '왜 Hai Phong Industrial Hub인가요?',
      whyDescription: '투자자의 베트남 진출 과정을 더 빠르고 명확하게 만듭니다',
      serviceTitle: '서비스',
      serviceDescription: '산업용 부동산 수요 전반을 아우르는 솔루션',
      serviceMore: '전체 서비스 보기',
      ctaTitle: '투자를 시작할 준비가 되셨나요?',
      ctaDescription: '베트남 산업용 부동산 투자 기회에 대해 무료 상담을 받아보세요.',
      values: [
        { title: '신뢰와 전문성', description: '15년 이상의 경험과 1,000개 이상의 고객 신뢰' },
        { title: '강한 법률 지원', description: '투명한 문서와 전 절차 지원' },
        { title: '높은 실행력', description: '500개 이상의 성공 프로젝트 경험' },
      ],
      services: [
        { title: '투자 자문', description: '전략과 시장 적합성' },
        { title: '법률 절차', description: '전 과정 지원' },
        { title: '자산 관리', description: '전문 운영' },
        { title: '중개', description: '매수자와 매도자 연결' },
      ],
    },
    services: {
      title: '서비스',
      description: '산업용 부동산 수요를 위한 종합 솔루션',
      processTitle: '진행 프로세스',
      processDescription: '리스크를 줄이고 실행 속도를 높이는 명확한 프로세스',
      whyTitle: '왜 Hai Phong Industrial Hub인가요?',
      whyDescription: '투자 단계마다 측정 가능한 가치를 제공합니다',
      urgentTitle: '상담이 필요하신가요?',
      urgentDescription: '산업용 부동산 서비스에 대해 무료 상담을 받아보세요',
      items: [
        { title: '입지 탐색 및 가치평가', description: '시장 분석과 정확한 산업용 부동산 가치평가', features: ['종합 시장 조사', '국제 기준에 맞춘 가치평가', '투명한 상세 보고서', '투자 전략 자문'] },
        { title: '법률 절차', description: '투자 및 양도 관련 법률 절차 전반 지원', features: ['계약서 및 문서 작성', '행정 절차 지원', '규제 자문', '정부 기관 대응 지원'] },
        { title: '투자 및 개발', description: '산업용 부동산 투자 전략 및 개발 자문', features: ['타당성 분석', '투자 계획 수립', '파트너 발굴', '실행 관리'] },
        { title: '부동산 관리', description: '산업용 자산의 전문 운영 및 관리 서비스', features: ['임대 관리', '유지보수', '임차인 관리', '정기 보고'] },
        { title: '중개 및 양도', description: '매수자와 매도자를 연결해 효율적으로 거래 성사', features: ['적합한 매수/매도자 발굴', '협상 지원', '거래 지원', '완료까지 후속 관리'] },
        { title: '전략 자문', description: '장기 투자 계획 및 포트폴리오 최적화', features: ['위험-수익 분석', '포트폴리오 다각화', '현금흐름 최적화', '엑시트 전략'] },
      ],
      process: [
        { step: '01', title: '요구사항 파악', description: '목표와 실제 요구를 명확히 정리합니다' },
        { step: '02', title: '초기 자문', description: '대안과 초기 범위를 제안합니다' },
        { step: '03', title: '실행', description: '합의된 계획에 따라 실행합니다' },
        { step: '04', title: '보고 및 인수인계', description: '결과 보고와 다음 단계 정리를 진행합니다' },
      ],
      reasons: [
        { title: '경험', description: '산업용 부동산 분야 15년 이상' },
        { title: '전문성', description: '시장 경험이 깊은 전문 팀' },
        { title: '신뢰', description: '1,000개 이상의 고객과 협업' },
        { title: '효율성', description: '500개 이상의 성공 프로젝트' },
        { title: '전국 네트워크', description: '50개 이상 성/시 커버리지' },
        { title: '투명성', description: '명확한 비용과 예측 가능한 실행' },
      ],
    },
    about: {
      title: 'Hai Phong Industrial Hub 소개',
      description: '베트남 산업용 부동산 투자 분야의 신뢰할 수 있는 파트너',
      introTitle: '소개',
      introParagraphs: [
        'Hai Phong Industrial Hub는 베트남 산업용 부동산 투자 자문 및 진출 지원을 전문으로 하는 신뢰할 수 있는 기업입니다. 15년 이상의 경험을 바탕으로 국내외 투자자들의 적합한 진입 기회를 지원해 왔습니다.',
        '모든 투자 결정이 중요하다는 점을 잘 알고 있습니다. Hai Phong Industrial Hub는 전략 자문, 법률 지원, 투자 실행까지 일관된 솔루션을 제공하여 고객의 효율을 높이고 리스크를 줄입니다.',
        '폭넓은 파트너 네트워크와 베트남 산업용 부동산 시장에 대한 깊은 이해를 기반으로 Hai Phong Industrial Hub는 장기적인 파트너가 될 준비가 되어 있습니다.',
      ],
      valuesTitle: '핵심 가치',
      valuesDescription: 'Hai Phong Industrial Hub의 업무 방식과 서비스 기준을 만드는 원칙',
      stats: [
        { value: '15+', label: '경력 연수' },
        { value: '500+', label: '성공 프로젝트' },
        { value: '1000+', label: '신뢰 고객' },
        { value: '50+', label: '활동 지역' },
      ],
      ctaTitle: '함께할 준비가 되셨나요?',
      ctaDescription: '베트남 산업용 부동산 투자 기회에 대해 무료 상담을 받아보세요.',
      values: [
        { title: '헌신', description: '고객 결과를 최우선으로 두고 실질 가치를 추구' },
        { title: '전문성', description: '경험 있는 전문가 팀과 명확한 기준' },
        { title: '투명성', description: '명확한 정보와 투명한 비용' },
        { title: '효율성', description: '결과 중심 실행과 높은 성공률' },
      ],
    },
    products: {
      title: '매물',
      description: '{count}개의 산업용 부동산 기회를 확인하세요',
      filterTitle: '필터',
      filterType: '매물 유형',
      all: '전체',
      previous: '이전',
      next: '다음',
      empty: '검색 결과가 없습니다',
      detail: '상세',
      detailsTitle: '상세 정보',
      keyInfo: '핵심 정보',
      area: '면적',
      location: '위치',
      price: '가격',
      status: '거래 상태',
      legal: '법적 상태',
      address: '주소',
      viewLargeImage: '큰 이미지 보기',
      homeBreadcrumb: '홈',
    },
    contact: {
      title: '문의하기',
      description: '저희 팀은 24/7 지원할 준비가 되어 있습니다',
      infoTitle: '연락처 정보',
      address: '주소',
      hotline: '핫라인',
      email: '이메일',
      hours: '운영 시간',
      weekdayHours: '월 - 금: 8:00 - 18:00',
      saturdayHours: '토: 8:00 - 12:00',
      mapTitle: '여기에 지도가 표시됩니다',
      mapDescription: 'Google Maps 또는 OpenStreetMap 연동 가능',
      urgentTitle: '긴급 지원이 필요하신가요?',
      urgentDescription: '핫라인은 24시간 운영됩니다',
    },
    form: {
      title: '메시지를 보내주세요',
      submit: '메시지 보내기',
      sending: '전송 중...',
      success: '문의해 주셔서 감사합니다. 정보를 확인했으며 빠르게 연락드리겠습니다.',
      error: '지금은 요청을 제출할 수 없습니다.',
      name: '이름',
      email: '이메일',
      phone: '전화번호',
      subject: '주제',
      message: '내용',
      namePlaceholder: '이름을 입력하세요',
      phonePlaceholder: '전화번호를 입력하세요',
      emailPlaceholder: 'email@example.com',
      messagePlaceholder: '메시지를 입력하세요...',
      chooseSubject: '주제를 선택하세요',
      subjects: {
        investment: '투자 자문',
        rentBuy: '임대 / 매입',
        legal: '법률 절차',
        other: '기타',
      },
    },
    chatbot: {
      eyebrow: 'Chatbot',
      title: '빠른 상담',
      panelTitle: '빠른 상담',
      formTitle: '정보를 남겨주시면 HAI PHONG INDUSTRIAL HUB가 연락드리겠습니다',
      submit: '정보 제출',
      teaser: 'HAI PHONG INDUSTRIAL HUB와 채팅하여 빠르게 상담 요청을 보내세요.',
      open: '상담 폼 열기',
      close: '패널 닫기',
    },
  },
  ja: {
    metadata: {
      title: 'Hai Phong Industrial Hub - 工業不動産',
      description: 'ベトナムの工業不動産投資を支援する信頼できるアドバイザー',
    },
    common: {
      companyTagline: 'ベトナムの工業不動産投資を支援する信頼できるアドバイザー。15年以上の経験。',
      allRightsReserved: 'All rights reserved.',
      builtWith: 'Built with',
      notAvailable: 'お問い合わせ',
      contactNow: '今すぐ電話',
      learnMore: '詳細を見る',
      viewProducts: '物件を見る',
      backToList: '一覧へ戻る',
      updateInProgress: '更新中',
      close: '閉じる',
    },
    nav: {
      home: 'ホーム',
      products: '物件',
      services: 'サービス',
      about: '会社情報',
      contact: 'お問い合わせ',
      consultation: '相談を申込む',
      menu: 'メニュー',
    },
    language: {
      label: '言語',
      button: '言語を選択',
      modalTitle: '表示言語を選択してください',
      modalDescription: 'アクセス地域に基づいて言語を提案しています。ここで変更すると、次回以降も選択内容を記憶します。',
      recommended: 'おすすめ',
      confirm: '続行',
      helper: '後からでもヘッダーメニューで変更できます。',
    },
    footer: {
      quickLinks: 'クイックリンク',
      categories: 'カテゴリー',
      contact: 'お問い合わせ',
      industrialPark: '工業団地',
      land: '産業用地',
      warehouse: '倉庫',
      factory: '工場',
    },
    home: {
      heroTitle: '工業不動産',
      heroAccent: '信頼と効率',
      heroDescription: 'ベトナムにおける工業不動産投資・進出のための専門アドバイザリー。15年以上の実績。',
      freeConsultation: '無料相談を受ける',
      statsProducts: '物件',
      statsExperience: '年数',
      statsProjects: '案件',
      statsClients: '顧客',
      featuredTitle: '注目物件',
      featuredDescription: '厳選した工業不動産投資機会',
      viewAll: 'すべて見る',
      whyTitle: 'なぜ Hai Phong Industrial Hub なのか',
      whyDescription: '投資家のベトナム進出をより速く、より明確に進めます',
      serviceTitle: 'サービス',
      serviceDescription: '工業不動産ニーズに対応する包括的ソリューション',
      serviceMore: 'すべてのサービスを見る',
      ctaTitle: '投資の準備はできていますか？',
      ctaDescription: 'ベトナムの工業不動産投資機会について、無料でご相談ください。',
      values: [
        { title: '信頼と専門性', description: '15年以上の経験と 1,000 件以上の顧客実績' },
        { title: '法務サポート', description: '透明な書類管理と一貫した手続き支援' },
        { title: '高い実行力', description: '500 件以上の成功案件と成果重視の対応' },
      ],
      services: [
        { title: '投資アドバイザリー', description: '戦略と市場適合' },
        { title: '法務手続き', description: '一貫サポート' },
        { title: '資産管理', description: '専門的な運営' },
        { title: '仲介', description: '買い手と売り手をつなぐ' },
      ],
    },
    services: {
      title: 'サービス',
      description: '工業不動産ニーズに対応する総合ソリューション',
      processTitle: '進め方',
      processDescription: 'リスクを下げ、実行速度を高める明確なプロセス',
      whyTitle: 'なぜ Hai Phong Industrial Hub なのか',
      whyDescription: '投資の各段階で測定可能な価値を提供します',
      urgentTitle: 'ご相談が必要ですか？',
      urgentDescription: '工業不動産サービスについて無料でご相談ください',
      items: [
        { title: '選定と評価', description: '市場分析と正確な工業不動産評価', features: ['包括的な市場調査', '国際基準に沿った評価', '透明な詳細レポート', '投資戦略アドバイス'] },
        { title: '法務手続き', description: '投資・譲渡に関する法務手続きを一貫支援', features: ['契約書・書類作成', '行政手続き支援', '規制アドバイス', '行政機関対応'] },
        { title: '投資と開発', description: '工業不動産投資戦略と開発のコンサルティング', features: ['事業性評価', '投資計画策定', 'パートナー探索', '実行管理'] },
        { title: '不動産管理', description: '工業不動産の専門的な運営管理サービス', features: ['賃貸管理', '保守・メンテナンス', 'テナント管理', '定期レポート'] },
        { title: '仲介と譲渡', description: '買い手と売り手をつなぎ、取引を円滑に実現', features: ['適切な相手先の探索', '交渉支援', '取引サポート', '完了まで伴走'] },
        { title: '戦略アドバイザリー', description: '長期投資計画とポートフォリオ最適化', features: ['リスク・リターン分析', '分散投資', 'キャッシュフロー最適化', '出口戦略'] },
      ],
      process: [
        { step: '01', title: '要件確認', description: '投資目的と実際の要件を整理します' },
        { step: '02', title: '初期提案', description: '候補案と初期スコープを提示します' },
        { step: '03', title: '実行', description: '合意した計画に沿って進行します' },
        { step: '04', title: '報告と引き渡し', description: '結果報告と次のアクション整理を行います' },
      ],
      reasons: [
        { title: '経験', description: '工業不動産分野で 15 年以上' },
        { title: '専門性', description: '市場経験の深い専門チーム' },
        { title: '信頼', description: '1,000 件以上の顧客実績' },
        { title: '効率', description: '500 件以上の成功案件' },
        { title: '全国対応', description: '50 以上の省・市をカバー' },
        { title: '透明性', description: '明確な費用と予測可能な進行' },
      ],
    },
    about: {
      title: 'Hai Phong Industrial Hub について',
      description: 'ベトナム工業不動産投資の信頼できるパートナー',
      introTitle: 'ご挨拶',
      introParagraphs: [
        'Hai Phong Industrial Hub は、ベトナムにおける工業不動産投資支援を専門とする信頼性の高いアドバイザリーファームです。15年以上の経験をもとに、多くの国内外投資家の進出を支援してきました。',
        '私たちは、あらゆる投資判断が重要であることを理解しています。そのため、戦略策定、法務支援、実行支援までを一体で提供し、効率向上とリスク低減を支援します。',
        '幅広いパートナーネットワークとベトナム工業不動産市場への深い理解を活かし、Hai Phong Industrial Hub は長期的な信頼できるパートナーとして伴走します。',
      ],
      valuesTitle: 'コアバリュー',
      valuesDescription: 'Hai Phong Industrial Hub の仕事の進め方と品質基準を形づくる原則',
      stats: [
        { value: '15+', label: '経験年数' },
        { value: '500+', label: '成功案件' },
        { value: '1000+', label: '顧客実績' },
        { value: '50+', label: '対応地域' },
      ],
      ctaTitle: 'ご一緒に進めませんか？',
      ctaDescription: 'ベトナムの工業不動産投資機会について無料でご相談ください。',
      values: [
        { title: '献身', description: '顧客成果を最優先に、実務価値を重視' },
        { title: '専門性', description: '経験豊富な専門家チームと明確な基準' },
        { title: '透明性', description: '明確な情報と透明な費用' },
        { title: '実効性', description: '成果重視の実行と高い成功率' },
      ],
    },
    products: {
      title: '物件',
      description: '{count} 件の工業不動産機会をご覧ください',
      filterTitle: 'フィルター',
      filterType: '物件タイプ',
      all: 'すべて',
      previous: '前へ',
      next: '次へ',
      empty: '該当する物件が見つかりません',
      detail: '詳細',
      detailsTitle: '詳細情報',
      keyInfo: '主要情報',
      area: '面積',
      location: '所在地',
      price: '価格',
      status: '取引状況',
      legal: '法的状況',
      address: '住所',
      viewLargeImage: '大きな画像を見る',
      homeBreadcrumb: 'ホーム',
    },
    contact: {
      title: 'お問い合わせ',
      description: '24時間365日対応できる体制を整えています',
      infoTitle: '連絡先情報',
      address: '住所',
      hotline: 'ホットライン',
      email: 'メール',
      hours: '営業時間',
      weekdayHours: '月 - 金: 8:00 - 18:00',
      saturdayHours: '土: 8:00 - 12:00',
      mapTitle: 'ここに地図が表示されます',
      mapDescription: 'Google Maps または OpenStreetMap を統合できます',
      urgentTitle: 'お急ぎですか？',
      urgentDescription: 'ホットラインは 24/7 で対応しています',
    },
    form: {
      title: 'メッセージを送る',
      submit: '送信する',
      sending: '送信中...',
      success: 'お問い合わせありがとうございます。内容を受け取り次第、できるだけ早くご連絡します。',
      error: '現在リクエストを送信できません。',
      name: 'お名前',
      email: 'メール',
      phone: '電話番号',
      subject: '件名',
      message: '内容',
      namePlaceholder: 'お名前を入力してください',
      phonePlaceholder: '電話番号を入力してください',
      emailPlaceholder: 'email@example.com',
      messagePlaceholder: '内容を入力してください...',
      chooseSubject: '件名を選択',
      subjects: {
        investment: '投資相談',
        rentBuy: '賃貸 / 購入',
        legal: '法務手続き',
        other: 'その他',
      },
    },
    chatbot: {
      eyebrow: 'Chatbot',
      title: 'クイック相談',
      panelTitle: 'クイック相談',
      formTitle: '情報を残していただければ HAI PHONG INDUSTRIAL HUB からご連絡します',
      submit: '情報を送信',
      teaser: 'HAI PHONG INDUSTRIAL HUB とチャットして素早く相談内容を送信できます。',
      open: '相談フォームを開く',
      close: '閉じる',
    },
  },
}

export function getDictionary(locale: Locale) {
  return dictionaries[locale]
}

export type { Dictionary }
