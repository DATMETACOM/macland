/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs')
const path = require('path')
const crypto = require('crypto')

const dataPath = path.join(process.cwd(), 'public', 'data.json')
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'))

function idFromSlug(slug) {
  return crypto.createHash('sha1').update(slug).digest('hex').slice(0, 12)
}

function product({
  slug,
  url,
  title,
  type,
  district,
  address,
  area,
  areaUnit,
  occupancyRate,
  operatingPeriod,
  investmentSectors,
  legalStatus,
  landUsePeriod = '',
  description,
  fullContent,
  highlights,
}) {
  return {
    id: idFromSlug(slug),
    slug,
    url,
    title,
    type,
    date: '2026-08-01',
    location: {
      province: 'Hải Phòng',
      district,
      address,
      old_address: '',
    },
    details: {
      area,
      area_unit: areaUnit,
      occupancy_rate: occupancyRate,
      operating_period: operatingPeriod,
      investment_sectors: investmentSectors,
    },
    pricing: {
      type: 'thoa-thuan',
      price: null,
      price_min: null,
      price_unit: null,
    },
    legal: {
      status: legalStatus,
      land_use_period: landUsePeriod,
    },
    content: {
      description,
      full_content: fullContent,
      highlights,
    },
    media: {
      images: [],
    },
  }
}

const products = [
  product({
    slug: 'cho-thue-nha-xuong-eha-hai-phong-nam-dinh-vu',
    url: 'https://ehaindustrial.com/projects/eha-hai-phong',
    title: 'Cho thuê nhà xưởng xây sẵn EHA Hải Phòng tại KCN Nam Đình Vũ',
    type: 'nha-xuong',
    district: 'Hải An',
    address: 'KCN Nam Đình Vũ, Hải An, Hải Phòng.',
    area: '90.000 m2',
    areaUnit: 'm2',
    occupancyRate: 'Sẵn sàng bàn giao tháng 8/2026',
    operatingPeriod: 'Dự án đang triển khai',
    investmentSectors: [
      'Nhà xưởng xây sẵn',
      'Kho vận',
      'Văn phòng trong khu công nghiệp',
      'Sản xuất xanh',
      'Doanh nghiệp cần lợi thế cảng biển',
    ],
    legalStatus: 'Dự án đang triển khai',
    description:
      'EHA Hải Phòng là dự án nhà xưởng xanh và thông minh quy mô 9 ha tại KCN Nam Đình Vũ, phù hợp doanh nghiệp cần RBF, RBH và văn phòng tiêu chuẩn quốc tế gắn với cảng biển nội bộ.',
    fullContent:
      'I. Tổng quan\nEHA Hải Phòng là dự án khu công nghiệp xanh và thông minh tại KCN Nam Đình Vũ, Hải An, Hải Phòng. Dự án có tổng diện tích 90.000m2, cung cấp nhà xưởng xây sẵn, nhà xưởng - kho vận kết hợp và văn phòng cho doanh nghiệp sản xuất, logistics và xuất nhập khẩu.\n\nII. Vị trí và kết nối\nDự án nằm trong KCN Nam Đình Vũ, khu vực có cảng biển nội bộ, kết nối trực tiếp hệ sinh thái Đình Vũ - Cát Hải. Vị trí cách sân bay quốc tế Cát Bi khoảng 8 km và cách trung tâm Hải Phòng khoảng 10 km.\n\nIII. Hạ tầng vận hành\nHạ tầng nổi bật gồm đường nội bộ 23m, 34m và 46m; trạm biến áp 110/22KV công suất 4 x 63 MVA; cấp nước 30.000m3/ngày; xử lý nước thải tập trung 10.000m3/ngày; cảng nội bộ tiếp nhận tàu đến 40.000 DWT.\n\nIV. Nhóm doanh nghiệp phù hợp\nPhù hợp doanh nghiệp cần nhà xưởng xây sẵn, kho vận kết hợp, hoạt động xuất nhập khẩu, sản xuất xanh và vận hành gần cảng.',
    highlights: [
      'Quy mô 90.000m2 tại KCN Nam Đình Vũ',
      'Cảng nội bộ tiếp nhận tàu đến 40.000 DWT',
      'Dự kiến bàn giao tháng 8/2026',
    ],
  }),
  product({
    slug: 'kcn-vietnam-phuc-dien-hai-phong-rbf-rbh',
    url: 'https://kcnvietnam.com/vi/projects/#northern-region',
    title: 'KCN Phúc Điền Hải Phòng - nhà xưởng RBF, RBH cho thuê',
    type: 'khu-cong-nghiep',
    district: 'Kẻ Sặt',
    address: 'Lô A8, Khu Công Nghiệp Phúc Điền Mở Rộng, Xã Kẻ Sặt, TP. Hải Phòng.',
    area: '18,7 ha',
    areaUnit: 'ha',
    occupancyRate: 'Chưa khởi công',
    operatingPeriod: 'Theo tiến độ triển khai dự án',
    investmentSectors: [
      'Nhà xưởng xây sẵn',
      'Nhà xưởng - kho vận kết hợp',
      'Sản xuất công nghiệp',
      'Công nghiệp phụ trợ',
      'Doanh nghiệp cần nguồn cung mới',
    ],
    legalStatus: 'Chưa khởi công',
    description:
      'KCN Phúc Điền Hải Phòng là dự án quy mô 18,7 ha của KCN Vietnam, định hướng cung cấp sản phẩm RBF và RBH cho doanh nghiệp cần nguồn cung nhà xưởng mới tại Hải Phòng.',
    fullContent:
      'I. Tổng quan\nKCN Phúc Điền Hải Phòng thuộc danh mục miền Bắc của KCN Vietnam, có tổng diện tích 18,7 ha và định hướng sản phẩm RBF, RBH. Dự án phù hợp doanh nghiệp đang chuẩn bị kế hoạch mở rộng sản xuất tại Hải Phòng và cần theo dõi nguồn cung mới.\n\nII. Vị trí\nDự án nằm tại Lô A8, Khu Công Nghiệp Phúc Điền Mở Rộng, Xã Kẻ Sặt, TP. Hải Phòng. Theo thông tin công bố, dự án cách trung tâm Hà Nội khoảng 43 km, thành phố Hải Phòng khoảng 62 km và cảng Hải Phòng khoảng 68 km.\n\nIII. Sản phẩm và khai thác\nSản phẩm chính gồm RBF và RBH, phù hợp nhà sản xuất, doanh nghiệp phụ trợ và đơn vị cần mô hình nhà xưởng - kho vận kết hợp.\n\nIV. Trạng thái\nDự án đang ở trạng thái chưa khởi công, phù hợp khách hàng cần khảo sát sớm và lên kế hoạch thuê theo tiến độ.',
    highlights: [
      'Tổng diện tích 18,7 ha',
      'Sản phẩm RBF và RBH',
      'Nguồn cung mới tại Hải Phòng',
    ],
  }),
  product({
    slug: 'kcn-vietnam-an-phat-hai-phong-rbf-rbh',
    url: 'https://kcnvietnam.com/vi/projects/#northern-region',
    title: 'KCN An Phát Hải Phòng - nhà xưởng RBF, RBH cho thuê',
    type: 'khu-cong-nghiep',
    district: 'Việt Hòa',
    address: 'Khu Công Nghiệp Kỹ Thuật Cao An Phát, Km47, Quốc Lộ 5, Xã Việt Hòa, TP. Hải Phòng, Việt Nam.',
    area: '8,92 ha',
    areaUnit: 'ha',
    occupancyRate: 'Chưa khởi công',
    operatingPeriod: 'Theo tiến độ triển khai dự án',
    investmentSectors: [
      'Nhà xưởng xây sẵn',
      'Nhà xưởng - kho vận kết hợp',
      'Công nghiệp kỹ thuật cao',
      'Sản xuất công nghiệp',
      'Công nghiệp phụ trợ',
    ],
    legalStatus: 'Chưa khởi công',
    description:
      'KCN An Phát Hải Phòng là dự án 8,92 ha trong KCN Kỹ Thuật Cao An Phát, định hướng sản phẩm RBF và RBH cho doanh nghiệp sản xuất tại phía Tây Hải Phòng.',
    fullContent:
      'I. Tổng quan\nKCN An Phát Hải Phòng thuộc danh mục dự án miền Bắc của KCN Vietnam, có tổng diện tích 8,92 ha và cung cấp nhóm sản phẩm RBF, RBH. Dự án phù hợp doanh nghiệp cần nhà xưởng xây sẵn hoặc nhà xưởng - kho vận kết hợp trong khu công nghiệp kỹ thuật cao.\n\nII. Vị trí\nDự án nằm tại Khu Công Nghiệp Kỹ Thuật Cao An Phát, Km47, Quốc Lộ 5, Xã Việt Hòa, TP. Hải Phòng. Vị trí nằm phía Tây thành phố Hải Phòng, kết nối với Hà Nội, sân bay Nội Bài và cảng Hải Phòng.\n\nIII. Sản phẩm và khai thác\nSản phẩm RBF và RBH phù hợp các ngành sản xuất, công nghiệp phụ trợ và doanh nghiệp cần mặt bằng tiêu chuẩn trong khu công nghiệp có định vị kỹ thuật cao.\n\nIV. Trạng thái\nDự án đang ở trạng thái chưa khởi công, nên phù hợp nhóm khách hàng muốn cập nhật sớm tiến độ và nguồn cung tương lai.',
    highlights: [
      'Tổng diện tích 8,92 ha',
      'Nằm tại KCN Kỹ Thuật Cao An Phát',
      'Sản phẩm RBF và RBH',
    ],
  }),
  product({
    slug: 'kcn-vietnam-deep-c-hai-phong-rbf-rbw-rbh',
    url: 'https://kcnvietnam.com/vi/projects/#northern-region',
    title: 'KCN DEEP C Hải Phòng - nhà xưởng, kho RBF, RBW, RBH',
    type: 'khu-cong-nghiep',
    district: 'Hải An',
    address: 'Khu công nghiệp Deep C - 2B, Khu Kinh Tế Đình Vũ - Cát Hải, Phường Đông Hải, TP. Hải Phòng, Việt Nam.',
    area: '23,2 ha',
    areaUnit: 'ha',
    occupancyRate: 'Đã bàn giao từ Q3/2023',
    operatingPeriod: 'Giai đoạn 1: 10,6 ha; giai đoạn 2: 12,6 ha',
    investmentSectors: [
      'Nhà xưởng xây sẵn',
      'Kho xây sẵn',
      'Nhà xưởng - kho vận kết hợp',
      'Logistics',
      'Sản xuất gắn cảng biển',
    ],
    legalStatus: 'Đã bàn giao',
    description:
      'KCN DEEP C Hải Phòng của KCN Vietnam có quy mô 23,2 ha tại Deep C 2B, cung cấp RBF, RBW và RBH cho doanh nghiệp cần vị trí logistics gần cảng và sân bay Cát Bi.',
    fullContent:
      'I. Tổng quan\nKCN DEEP C Hải Phòng là dự án của KCN Vietnam tại Deep C 2B, Khu Kinh Tế Đình Vũ - Cát Hải. Dự án có tổng diện tích 23,2 ha, gồm giai đoạn 1 khoảng 10,6 ha và giai đoạn 2 khoảng 12,6 ha.\n\nII. Vị trí và kết nối\nDự án nằm tại Phường Đông Hải, Hải Phòng, cách trung tâm thành phố Hải Phòng khoảng 15 km, sân bay quốc tế Cát Bi khoảng 13 km, cảng quốc tế Hải Phòng khoảng 9 km và cảng quốc tế Lạch Huyện khoảng 16 km.\n\nIII. Sản phẩm\nDanh mục sản phẩm gồm RBF, RBW và RBH, phù hợp doanh nghiệp cần nhà xưởng, kho xây sẵn hoặc mô hình nhà xưởng - kho vận kết hợp trong khu vực cảng biển.\n\nIV. Nhóm doanh nghiệp phù hợp\nPhù hợp nhà sản xuất xuất nhập khẩu, logistics, kho vận, công nghiệp phụ trợ và doanh nghiệp cần vận hành gần cảng.',
    highlights: [
      'Quy mô 23,2 ha tại Deep C 2B',
      'Sản phẩm RBF, RBW và RBH',
      'Cách cảng quốc tế Hải Phòng khoảng 9 km',
    ],
  }),
  product({
    slug: 'cbre-hp-l-02-nha-xuong-nam-dinh-vu-hai-phong',
    url: 'https://www.cbrevietnam.com/properties/industrial-and-logistics-for-lease/factory-for-lease/northern/hai-phong/hp-l-02',
    title: 'Cho thuê nhà xưởng xây sẵn HP-L-02 tại KCN Nam Đình Vũ Hải Phòng',
    type: 'nha-xuong',
    district: 'Hải An',
    address: 'Nam Dinh Vu Industrial Park, Hai An District, Hai Phong.',
    area: 'Trên 34.500 m2 GFA',
    areaUnit: 'm2',
    occupancyRate: 'Available now',
    operatingPeriod: 'Đang cho thuê',
    investmentSectors: [
      'Nhà xưởng xây sẵn',
      'Sản xuất công nghiệp',
      'Kho vận',
      'Xuất nhập khẩu',
      'Doanh nghiệp cần gần cảng Đình Vũ',
    ],
    legalStatus: 'Đang sẵn sàng cho thuê',
    description:
      'HP-L-02 là nhà xưởng xây sẵn tại KCN Nam Đình Vũ, Hải An, Hải Phòng, tổng GFA trên 34.500m2, sẵn sàng cho thuê và có lợi thế sát cảng Đình Vũ.',
    fullContent:
      'I. Tổng quan\nHP-L-02 là sản phẩm nhà xưởng xây sẵn cho thuê tại KCN Nam Đình Vũ, Hải An, Hải Phòng. Tổng diện tích sàn cho thuê trên 34.500m2, phù hợp doanh nghiệp cần mặt bằng sản xuất hoặc kho vận sẵn sàng vận hành.\n\nII. Vị trí và kết nối\nVị trí cách Hà Nội CBD khoảng 105 km, cách sân bay quốc tế Cát Bi khoảng 8 km và cách cảng Đình Vũ 0 km. Đây là lợi thế lớn cho doanh nghiệp xuất nhập khẩu và logistics.\n\nIII. Thông số kỹ thuật\nChiều cao thông thủy 8 - 12,3m, tải trọng sàn 2 tấn/m2, có loading bay, hệ thống PCCC gồm báo cháy, hộp vòi chữa cháy và bình chữa cháy. Nguồn điện công bố 3.000KVA cho 3 nhà xưởng.\n\nIV. Giá thuê\nGiá thuê theo thỏa thuận, cần xác nhận theo thời điểm khảo sát.',
    highlights: [
      'Tổng GFA trên 34.500m2',
      'Cách cảng Đình Vũ 0 km',
      'Sẵn sàng cho thuê',
    ],
  }),
  product({
    slug: 'cbre-hp-l-05-nha-xuong-vsip-hai-phong',
    url: 'https://www.cbrevietnam.com/properties/industrial-and-logistics-for-lease/factory-for-lease/northern/hai-phong/hp-l-05',
    title: 'Cho thuê nhà xưởng xây sẵn HP-L-05 tại VSIP Hải Phòng',
    type: 'nha-xuong',
    district: 'Thủy Nguyên',
    address: 'Plot IN3-11*A, IN3-11*B, VSIP Hai Phong Township, Industrial and Service Park, Thuy Nguyen District, Dinh Vu - Cat Hai Economic Zone, Hai Phong City.',
    area: 'Trên 1,9 ha',
    areaUnit: 'ha',
    occupancyRate: 'Available now',
    operatingPeriod: 'Đang cho thuê',
    investmentSectors: [
      'Nhà xưởng xây sẵn',
      'Sản xuất công nghiệp',
      'Công nghiệp sạch',
      'Công nghiệp phụ trợ',
      'Doanh nghiệp FDI',
    ],
    legalStatus: 'Đang sẵn sàng cho thuê',
    description:
      'HP-L-05 là nhà xưởng xây sẵn tại VSIP Hải Phòng, diện tích trên 1,9 ha, phù hợp doanh nghiệp FDI cần hạ tầng đồng bộ và vị trí kết nối cảng, sân bay.',
    fullContent:
      'I. Tổng quan\nHP-L-05 là sản phẩm nhà xưởng xây sẵn cho thuê tại VSIP Hải Phòng, thuộc Khu kinh tế Đình Vũ - Cát Hải. Diện tích cho thuê trên 1,9 ha, phù hợp nhà sản xuất cần môi trường vận hành tiêu chuẩn trong khu công nghiệp VSIP.\n\nII. Vị trí và kết nối\nVị trí cách cảng Hải Phòng khoảng 8 km, trung tâm Hải Phòng khoảng 8 km, sân bay Cát Bi khoảng 15 km và Hà Nội khoảng 144 km.\n\nIII. Thông số kỹ thuật\nChiều cao khu sản xuất 7,5m, khu văn phòng 3,0m; tải trọng sàn 2 tấn/m2; loading bay dạng rolling door và canopy. Hệ thống PCCC gồm beam detector, smoke exhaust, emergency lamp, fire hose box, fire extinguisher và sprinkler.\n\nIV. Giá thuê\nGiá thuê theo thỏa thuận, cần xác nhận theo thời điểm khảo sát.',
    highlights: [
      'Diện tích trên 1,9 ha',
      'Trong VSIP Hải Phòng',
      'Sẵn sàng cho thuê',
    ],
  }),
  product({
    slug: 'cbre-deep-c-hai-phong-2-ready-built-factory',
    url: 'https://www.cbrevietnam.com/properties/industrial-and-logistics-for-lease/factory-for-lease/northern/hai-phong/ready-built-factory-for-lease-in-deep-c-hai-phong-2-industrial-park',
    title: 'Cho thuê nhà xưởng xây sẵn tại DEEP C Hải Phòng 2',
    type: 'nha-xuong',
    district: 'Hải An',
    address: 'Dinh Vu Industrial Park, Dinh Vu - Cat Hai Economic Zone, Dong Hai 2 Ward, Hai An District, Hai Phong City, Vietnam.',
    area: '3.174 - 25.509 m2/unit',
    areaUnit: 'm2',
    occupancyRate: 'Q2/2023',
    operatingPeriod: 'Tổng 89.280m2, 4 block, 22 unit',
    investmentSectors: [
      'Nhà xưởng xây sẵn',
      'Sản xuất xuất nhập khẩu',
      'Logistics',
      'Kho vận',
      'Công nghiệp phụ trợ',
    ],
    legalStatus: 'Đã bàn giao',
    description:
      'Nhà xưởng xây sẵn tại DEEP C Hải Phòng 2 có quy mô unit từ 3.174m2 đến 25.509m2, tổng 89.280m2, phù hợp doanh nghiệp cần mặt bằng gần cảng Đình Vũ và Lạch Huyện.',
    fullContent:
      'I. Tổng quan\nSản phẩm nhà xưởng xây sẵn tại DEEP C Hải Phòng 2 nằm trong Khu kinh tế Đình Vũ - Cát Hải, Hải An, Hải Phòng. Dự án gồm 4 block với 22 unit nhà xưởng liền kề, tổng diện tích khoảng 89.280m2.\n\nII. Vị trí và kết nối\nVị trí cách Hà Nội CBD khoảng 125 km, cách cảng nước sâu Đình Vũ và Lạch Huyện khoảng 5 km, cách sân bay quốc tế Cát Bi khoảng 12 km.\n\nIII. Thông số kỹ thuật\nDiện tích unit từ 3.174m2 đến 25.509m2, chiều cao thông thủy 9m, tải trọng sàn 2 tấn/m2, hệ thống PCCC tuân thủ TCVN gồm sprinkler tự động và hút khói. Mỗi unit có canopy sâu 5m, 2 cửa sectional và điện 300 - 400kVA.\n\nIV. Giá thuê\nGiá thuê theo thỏa thuận, cần xác nhận theo thời điểm khảo sát.',
    highlights: [
      'Unit từ 3.174m2 đến 25.509m2',
      'Tổng 89.280m2, 4 block, 22 unit',
      'Cách cảng Đình Vũ và Lạch Huyện khoảng 5 km',
    ],
  }),
  product({
    slug: 'cbre-hp-l-07-hai-thanh-workshop-hai-phong',
    url: 'https://www.cbrevietnam.com/properties/industrial-and-logistics-for-lease/factory-for-lease/northern/hai-phong/hp-l-07',
    title: 'Cho thuê nhà xưởng HP-L-07 khu Hai Thành Hải Phòng',
    type: 'nha-xuong',
    district: 'Dương Kinh',
    address: 'Duong Kinh District, Hai Phong City, Vietnam.',
    area: '12 ha',
    areaUnit: 'ha',
    occupancyRate: 'Completed',
    operatingPeriod: 'Đã hoàn thành',
    investmentSectors: [
      'Nhà xưởng cho thuê',
      'Sản xuất công nghiệp',
      'Kho vận',
      'Doanh nghiệp cần diện tích linh hoạt',
      'Nhà đầu tư trong nước và FDI',
    ],
    legalStatus: 'Đã hoàn thành',
    description:
      'HP-L-07 là khu nhà xưởng cho thuê tại quận Dương Kinh, Hải Phòng, tổng diện tích cho thuê 12 ha, phù hợp doanh nghiệp cần diện tích linh hoạt gần sân bay Cát Bi và cảng Hải Phòng.',
    fullContent:
      'I. Tổng quan\nHP-L-07 là sản phẩm nhà xưởng cho thuê tại khu Hai Thành, quận Dương Kinh, Hải Phòng. Dự án có tổng diện tích cho thuê 12 ha, phù hợp doanh nghiệp sản xuất và kho vận cần diện tích linh hoạt.\n\nII. Vị trí và kết nối\nVị trí tại Dương Kinh, Hải Phòng, cách sân bay quốc tế Cát Bi khoảng 8 km và cách cảng Hải Phòng khoảng 9 km.\n\nIII. Thông số kỹ thuật\nChiều cao tầng 1 khoảng 3,9m, tầng 2 khoảng 3,6m. Hạ tầng gồm nguồn điện đến tường bao quanh nhà xưởng và hệ thống PCCC với bơm áp lực, bể nước lớn, thiết bị PCCC tiêu chuẩn ngoài nhà xưởng.\n\nIV. Giá thuê\nGiá thuê và diện tích khả dụng cần xác nhận tại thời điểm khảo sát.',
    highlights: [
      'Tổng diện tích cho thuê 12 ha',
      'Cách sân bay Cát Bi khoảng 8 km',
      'Cách cảng Hải Phòng khoảng 9 km',
    ],
  }),
  product({
    slug: 'cbre-hp-l-08-nha-xuong-hai-an-hai-phong',
    url: 'https://www.cbrevietnam.com/properties/industrial-and-logistics-for-lease/factory-for-lease/northern/hai-phong/hp-l-08',
    title: 'Cho thuê nhà xưởng HP-L-08 tại Hải An Hải Phòng',
    type: 'nha-xuong',
    district: 'Hải An',
    address: 'Hai An District, Hai Phong City, Vietnam.',
    area: 'Từ 10.000 m2',
    areaUnit: 'm2',
    occupancyRate: 'Completed',
    operatingPeriod: 'Tổng diện tích cho thuê 541 ha',
    investmentSectors: [
      'Nhà xưởng cho thuê',
      'Kho vận',
      'Logistics',
      'Sản xuất gần cảng',
      'Doanh nghiệp cần quy mô lớn',
    ],
    legalStatus: 'Đã hoàn thành',
    description:
      'HP-L-08 là sản phẩm nhà xưởng cho thuê tại Hải An, Hải Phòng, quy mô linh hoạt từ 10.000m2, nằm ở cửa ngõ Khu kinh tế Đình Vũ - Cát Hải.',
    fullContent:
      'I. Tổng quan\nHP-L-08 là sản phẩm nhà xưởng cho thuê tại Hải An, Hải Phòng. Dự án có diện tích unit linh hoạt từ 10.000m2 và tổng diện tích cho thuê được công bố 541 ha.\n\nII. Vị trí và kết nối\nVị trí nằm tại cửa ngõ Khu kinh tế Đình Vũ - Cát Hải, tại giao điểm các tuyến cao tốc Hà Nội - Hải Phòng và Hạ Long - Hải Phòng. Khu vực cách trung tâm Hải Phòng khoảng 13 km và sân bay Cát Bi khoảng 13 km.\n\nIII. Hạ tầng vận hành\nHạ tầng có nguồn điện đi ngầm, sử dụng năng lượng tái tạo như điện mặt trời mái nhà và điện gió. Dự án có thể cung cấp nước khử khoáng, hơi nước, nước sinh hoạt theo nhu cầu; hệ thống thoát nước mở với cửa phai, hồ điều hòa và trạm bơm.\n\nIV. Giá thuê\nGiá thuê và diện tích khả dụng cần xác nhận tại thời điểm khảo sát.',
    highlights: [
      'Diện tích linh hoạt từ 10.000m2',
      'Tại cửa ngõ Khu kinh tế Đình Vũ - Cát Hải',
      'Có hạ tầng năng lượng tái tạo',
    ],
  }),
  product({
    slug: 'cbre-hp-l-09-rbf-deep-c-2b-hai-phong',
    url: 'https://www.cbrevietnam.com/properties/industrial-and-logistics-for-lease/factory-for-lease/northern/hai-phong/hp-l-09',
    title: 'Cho thuê nhà xưởng xây sẵn HP-L-09 tại DEEP C 2B Hải Phòng',
    type: 'nha-xuong',
    district: 'Hải An',
    address: 'Deep C - 2B Industrial Park, Dinh Vu - Cat Hai Economic Zone, Dong Hai 2 Ward, Hai An District, Hai Phong, Vietnam.',
    area: '70.999 m2',
    areaUnit: 'm2',
    occupancyRate: 'Available now',
    operatingPeriod: 'Đang cho thuê',
    investmentSectors: [
      'Nhà xưởng xây sẵn',
      'Sản xuất xuất nhập khẩu',
      'Kho vận',
      'Logistics cảng biển',
      'Công nghiệp phụ trợ',
    ],
    legalStatus: 'Đang sẵn sàng cho thuê',
    description:
      'HP-L-09 là nhà xưởng xây sẵn cho thuê tại DEEP C 2B, Hải An, Hải Phòng, tổng diện tích 70.999m2, sẵn sàng cho thuê và kết nối nhanh tới Tân Vũ, Hải Phòng, Nam Đình Vũ.',
    fullContent:
      'I. Tổng quan\nHP-L-09 là sản phẩm nhà xưởng xây sẵn cho thuê tại Deep C 2B Industrial Park, trong Khu kinh tế Đình Vũ - Cát Hải, Hải An, Hải Phòng. Tổng diện tích cho thuê khoảng 70.999m2, trong đó khu văn phòng 2 tầng khoảng 310,25m2.\n\nII. Vị trí và kết nối\nVị trí cách Hà Nội CBD khoảng 115 km, trung tâm Hải Phòng khoảng 15 km, sân bay Cát Bi khoảng 13 km, cảng Tân Vũ khoảng 9 km, cảng Hải Phòng và Nam Đình Vũ khoảng 14 km.\n\nIII. Thông số kỹ thuật\nChiều cao thông thủy 7m, tải trọng sàn 2 tấn/m2, PCCC tiêu chuẩn, loading bay có dock levelers và canopy, nguồn điện 100KVA/1.000m2.\n\nIV. Giá thuê\nGiá thuê theo thỏa thuận, cần xác nhận theo thời điểm khảo sát.',
    highlights: [
      'Tổng diện tích 70.999m2',
      'Sẵn sàng cho thuê',
      'Cách cảng Tân Vũ khoảng 9 km',
    ],
  }),
  product({
    slug: 'cbre-kho-xay-san-deep-c1-hai-phong',
    url: 'https://www.cbrevietnam.com/properties/industrial-and-logistics-for-lease/factory-for-lease/northern/hai-phong/ready-built-warehouse-for-lease-in-deep-c1-industrial-zones',
    title: 'Cho thuê kho xây sẵn tại DEEP C1 Hải Phòng',
    type: 'nha-xuong',
    district: 'Hải An',
    address: 'Dinh Vu - Cat Hai Economic Zone, Dong Hai 2 Ward, Hai An District, Hai Phong City, Vietnam.',
    area: '35.232 m2',
    areaUnit: 'm2',
    occupancyRate: 'Hoàn thành 01/03/2022',
    operatingPeriod: 'Tổng diện tích đất 67.318m2',
    investmentSectors: [
      'Kho xây sẵn',
      'Logistics',
      'Kho vận cảng biển',
      'Phân phối hàng hóa',
      'Doanh nghiệp xuất nhập khẩu',
    ],
    legalStatus: 'Đã hoàn thành',
    description:
      'Kho xây sẵn DEEP C1 tại Hải An, Hải Phòng có tổng diện tích cho thuê 35.232m2 trên khu đất 67.318m2, phù hợp logistics và kho vận gần Đình Vũ, Lạch Huyện.',
    fullContent:
      'I. Tổng quan\nSản phẩm kho xây sẵn tại DEEP C1 nằm trong Khu kinh tế Đình Vũ - Cát Hải, phường Đông Hải 2, Hải An, Hải Phòng. Tổng diện tích cho thuê khoảng 35.232m2 trên khu đất 67.318m2.\n\nII. Vị trí và kết nối\nVị trí cách Hà Nội CBD khoảng 122 km, cách sân bay Cát Bi khoảng 12 km, cảng Lạch Huyện khoảng 17 km và cảng Đình Vũ khoảng 5 km.\n\nIII. Thông số kỹ thuật\nKho có chiều cao thông thủy khoảng 10,5m, hoàn thành ngày 01/03/2022, có bãi đỗ ô tô và xe máy, hệ thống PCCC gồm emergency switch, fire hose box và fire extinguisher.\n\nIV. Giá thuê\nGiá thuê và diện tích trống cần xác nhận tại thời điểm khảo sát.',
    highlights: [
      'Tổng diện tích cho thuê 35.232m2',
      'Cách cảng Đình Vũ khoảng 5 km',
      'Chiều cao kho khoảng 10,5m',
    ],
  }),
  product({
    slug: 'cbre-kho-xay-san-deep-c2-hai-phong',
    url: 'https://www.cbrevietnam.com/properties/industrial-and-logistics-for-lease/factory-for-lease/northern/hai-phong/ready-built-warehouse-for-lease-in-deep-c2-industrial-zones',
    title: 'Cho thuê kho xây sẵn tại DEEP C2 Hải Phòng',
    type: 'nha-xuong',
    district: 'Hải An',
    address: 'Lot CN5.6D, Dinh Vu Industrial Park, Dinh Vu - Cat Hai Economic Zone, Dong Hai 2 Ward, Hai An District, Hai Phong City, Vietnam.',
    area: '54.801 m2',
    areaUnit: 'm2',
    occupancyRate: 'Hoàn thành 01/03/2022',
    operatingPeriod: 'Tổng diện tích đất 96.137m2',
    investmentSectors: [
      'Kho xây sẵn',
      'Logistics',
      'Kho vận cảng biển',
      'Phân phối hàng hóa',
      'Doanh nghiệp xuất nhập khẩu',
    ],
    legalStatus: 'Đã hoàn thành',
    description:
      'Kho xây sẵn DEEP C2 tại lô CN5.6D, Đình Vũ, Hải Phòng có tổng diện tích cho thuê 54.801m2 trên khu đất 96.137m2, phù hợp doanh nghiệp logistics gần cảng.',
    fullContent:
      'I. Tổng quan\nSản phẩm kho xây sẵn tại DEEP C2 nằm tại lô CN5.6D, KCN Đình Vũ, Khu kinh tế Đình Vũ - Cát Hải, Hải An, Hải Phòng. Tổng diện tích cho thuê khoảng 54.801m2 trên khu đất 96.137m2.\n\nII. Vị trí và kết nối\nVị trí cách Hà Nội CBD khoảng 122 km, sân bay Cát Bi khoảng 12 km, cảng Lạch Huyện khoảng 17 km và cảng Đình Vũ khoảng 5 km.\n\nIII. Thông số kỹ thuật\nKho có chiều cao thông thủy khoảng 10,5m, hoàn thành ngày 01/03/2022, có bãi đỗ ô tô và xe máy, hệ thống PCCC gồm emergency switch, fire hose box và fire extinguisher.\n\nIV. Giá thuê\nGiá thuê và diện tích trống cần xác nhận tại thời điểm khảo sát.',
    highlights: [
      'Tổng diện tích cho thuê 54.801m2',
      'Khu đất 96.137m2',
      'Cách cảng Đình Vũ khoảng 5 km',
    ],
  }),
  product({
    slug: 'cbre-hp-l-18-rbf-vsip-hai-phong',
    url: 'https://www.cbrevietnam.com/properties/industrial-and-logistics-for-lease/factory-for-lease/northern/hai-phong/hp-l-18-rbf',
    title: 'Cho thuê nhà xưởng và kho xây sẵn HP-L-18-RBF tại VSIP Hải Phòng',
    type: 'nha-xuong',
    district: 'Thủy Nguyên',
    address: 'VSIP Hai Phong Township, Dinh Vu - Cat Hai Economic Zone, Thuy Nguyen District, Hai Phong City.',
    area: '19.000 m2',
    areaUnit: 'm2',
    occupancyRate: 'Dự kiến Q3/2025',
    operatingPeriod: 'Minimum unit size 3.500m2',
    investmentSectors: [
      'Nhà xưởng xây sẵn',
      'Kho xây sẵn',
      'Sản xuất công nghiệp',
      'Công nghiệp sạch',
      'Doanh nghiệp FDI',
    ],
    legalStatus: 'Dự kiến bàn giao Q3/2025',
    description:
      'HP-L-18-RBF là sản phẩm nhà xưởng và kho xây sẵn tại VSIP Hải Phòng, tổng diện tích cho thuê 19.000m2, diện tích tối thiểu 3.500m2/unit, dự kiến sẵn sàng Q3/2025.',
    fullContent:
      'I. Tổng quan\nHP-L-18-RBF là sản phẩm nhà xưởng và kho xây sẵn tại VSIP Hải Phòng Township, thuộc Khu kinh tế Đình Vũ - Cát Hải, Thủy Nguyên, Hải Phòng. Tổng diện tích cho thuê khoảng 19.000m2, diện tích tối thiểu 3.500m2/unit.\n\nII. Vị trí và kết nối\nVị trí cách Hà Nội CBD khoảng 115 km, trung tâm Hải Phòng khoảng 9 km, sân bay quốc tế Cát Bi khoảng 15 km và cảng Hải Phòng khoảng 7 km.\n\nIII. Thông số kỹ thuật\nChiều cao thông thủy 9m, tải trọng sàn tầng 1 là 3 tấn/m2 và tầng 2 là 2,5 tấn/m2. Hệ thống PCCC gồm báo cháy, đầu dò khói, sprinkler và hệ thống hút khói. Nguồn điện 300kVA/unit.\n\nIV. Giá thuê\nGiá thuê theo thỏa thuận, cần xác nhận theo thời điểm khảo sát.',
    highlights: [
      'Tổng diện tích cho thuê 19.000m2',
      'Diện tích tối thiểu 3.500m2/unit',
      'Trong VSIP Hải Phòng',
    ],
  }),
]

const bySlug = new Map(data.products.map((item, index) => [item.slug, index]))

for (const item of products) {
  const existingIndex = bySlug.get(item.slug)
  if (existingIndex === undefined) {
    data.products.unshift(item)
  } else {
    data.products[existingIndex] = item
  }
}

data.metadata.total_products = data.products.length
data.metadata.completed_at = new Date().toISOString()

fs.writeFileSync(dataPath, `${JSON.stringify(data, null, 2)}\n`, 'utf8')
console.log(`Upserted ${products.length} Hai Phong crawled products. Total: ${data.products.length}`)
