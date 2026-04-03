/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs')
const path = require('path')
const crypto = require('crypto')

const dataPath = path.join(__dirname, '..', 'public', 'data.json')

function hashId(slug) {
  return crypto.createHash('md5').update(slug).digest('hex').slice(0, 12)
}

function buildProduct(item) {
  return {
    id: hashId(item.slug),
    slug: item.slug,
    url: `https://macland.vn/san-pham/${item.slug}`,
    title: item.title,
    type: item.type,
    date: '2026-04-03',
    location: item.location,
    details: {
      area: item.area,
      area_unit: item.areaUnit,
      occupancy_rate: item.assetStatus,
      operating_period: item.operatingPeriod,
      investment_sectors: item.sectors,
    },
    pricing: {
      type: item.pricingType,
      price: item.price,
      price_min: null,
      price_unit: item.priceUnit,
    },
    legal: {
      status: item.legalStatus,
      land_use_period: item.landUsePeriod || '',
    },
    content: {
      description: item.description,
      full_content: item.fullContent.trim(),
      highlights: item.highlights,
    },
    media: {
      images: [],
    },
  }
}

const products = [
  {
    title: '[CHUYỂN NHƯỢNG] Nhà xưởng 1,8 ha gần KCN Nomura Hải Phòng',
    slug: 'chuyen-nhuong-1-8ha-gan-kcn-nomura-hai-phong',
    type: 'nha-xuong',
    location: {
      province: 'Hải Phòng',
      district: 'Gần KCN Nomura',
      address: 'Gần KCN Nomura Hải Phòng, ngoài khu công nghiệp; tài sản có sẵn nhà xưởng, văn phòng và trạm điện.',
      old_address: '',
    },
    area: '1,8 ha',
    areaUnit: 'ha',
    assetStatus: 'Sẵn sàng vận hành',
    operatingPeriod: 'Có thể vào hoạt động ngay',
    pricingType: 'co-dinh',
    price: '2,3 triệu USD',
    priceUnit: null,
    legalStatus: 'Pháp lý rõ ràng',
    sectors: [
      'Sản xuất công nghiệp',
      'Kho vận',
      'Gia công cơ khí',
      'Kho nguyên vật liệu',
      'Doanh nghiệp cần nhà xưởng hoạt động ngay',
    ],
    description: 'Tài sản 1,8 ha gần KCN Nomura Hải Phòng, ngoài khu công nghiệp, đã có sẵn 3.000m2 nhà xưởng vận hành ngay, 250m2 văn phòng, trạm điện và pháp lý rõ ràng.',
    highlights: [
      '3.000m2 nhà xưởng hoạt động ngay',
      '250m2 nhà văn phòng và trạm điện sẵn có',
      'Giá chuyển nhượng 2,3 triệu USD',
    ],
    fullContent: `
I. Tổng quan
Mã sản phẩm: CN01.
Tài sản chuyển nhượng quy mô 1,8 ha nằm gần KCN Nomura Hải Phòng, ngoài khu công nghiệp, phù hợp doanh nghiệp cần vừa quỹ đất vừa nhà xưởng sẵn vận hành.

II. Quy mô tài sản
- Tổng diện tích khuôn viên: 1,8 ha.
- Nhà xưởng hiện hữu: 3.000m2, có thể vào hoạt động ngay.
- Nhà văn phòng: 250m2.
- Đầy đủ trạm điện phục vụ vận hành.

III. Lợi thế khai thác
- Hạ tầng kết nối giao thông tốt, thuận tiện vận chuyển hàng hóa.
- Pháp lý rõ ràng, phù hợp triển khai giao dịch nhanh.
- Phù hợp doanh nghiệp sản xuất, kho vận hoặc nhà đầu tư cần tài sản có sẵn hạ tầng.

IV. Giá chuyển nhượng
- Giá chào: 2,3 triệu USD.
`,
  },
  {
    title: '[CHUYỂN NHƯỢNG] Dự án nhà xưởng 2,1 ha tại An Lão, Hải Phòng',
    slug: 'chuyen-nhuong-du-an-2-1ha-an-lao-hai-phong',
    type: 'nha-xuong',
    location: {
      province: 'Hải Phòng',
      district: 'An Lão',
      address: 'Tại An Lão, Hải Phòng; vị trí thuận lợi tuyển dụng lao động, kết nối giao thông tốt và đang có dòng tiền khai thác.',
      old_address: '',
    },
    area: '2,1 ha',
    areaUnit: 'ha',
    assetStatus: 'Đang khai thác 11.000m2',
    operatingPeriod: 'Doanh thu khoảng 700 triệu/tháng',
    pricingType: 'co-dinh',
    price: '140 tỷ',
    priceUnit: null,
    legalStatus: 'Pháp lý đầy đủ, PCCC tự động',
    sectors: [
      'Nhà đầu tư mua tài sản đang vận hành',
      'Sản xuất công nghiệp',
      'Kho xưởng',
      'Doanh nghiệp cần dòng tiền sẵn có',
      'Gia công xuất khẩu',
    ],
    description: 'Dự án chuyển nhượng 2,1 ha tại An Lão, Hải Phòng đang khai thác 11.000m2 nhà xưởng với doanh thu khoảng 700 triệu/tháng, phù hợp nhà đầu tư mua tài sản đang vận hành.',
    highlights: [
      '11.000m2 nhà xưởng đang khai thác',
      'Doanh thu khoảng 700 triệu/tháng',
      'Giá chuyển nhượng 140 tỷ',
    ],
    fullContent: `
I. Tổng quan
Mã sản phẩm: CN02.
Dự án chuyển nhượng tại An Lão có quy mô 2,1 ha, phù hợp nhà đầu tư hoặc doanh nghiệp muốn tiếp nhận tài sản đang vận hành và có dòng tiền sẵn có.

II. Quy mô tài sản
- Diện tích khu đất: 2,1 ha.
- Diện tích nhà xưởng đang khai thác: 11.000m2.
- Doanh thu hiện tại khoảng 700 triệu/tháng.
- Có đầy đủ nhà văn phòng và trạm điện phục vụ vận hành.

III. Lợi thế khai thác
- Vị trí thuận lợi cho tuyển dụng lao động.
- Kết nối giao thông thuận tiện cho vận chuyển hàng hóa.
- Pháp lý đầy đủ, hệ thống PCCC tự động.

IV. Giá chuyển nhượng
- Giá chào: 140 tỷ.
`,
  },
  {
    title: '[CHUYỂN NHƯỢNG] Lô đất công nghiệp 5,1 ha tại KCN DEEP C3 Hải Phòng',
    slug: 'chuyen-nhuong-5-1ha-kcn-deep-c3-hai-phong',
    type: 'nha-xuong',
    location: {
      province: 'Hải Phòng',
      district: 'KCN DEEP C3',
      address: 'Tại KCN DEEP C3, Hải Phòng; nằm trong khu TMTD và cách cảng nước sâu Lạch Huyện khoảng 2 km.',
      old_address: '',
    },
    area: '5,1 ha',
    areaUnit: 'ha',
    assetStatus: 'Bàn giao ngay',
    operatingPeriod: 'Mặt bằng đã sẵn sàng',
    pricingType: 'tu-usd-m2',
    price: '140 USD/m2',
    priceUnit: 'USD/m²',
    legalStatus: 'Sẵn sàng bàn giao',
    sectors: [
      'Công nghiệp gắn logistics cảng biển',
      'Kho vận',
      'Sản xuất xuất nhập khẩu',
      'Dự án cần quỹ đất lớn',
      'Doanh nghiệp FDI',
    ],
    description: 'Lô đất công nghiệp 5,1 ha tại KCN DEEP C3 đã có sẵn mặt bằng sạch, bàn giao ngay, nằm trong khu TMTD và cách cảng nước sâu Lạch Huyện khoảng 2 km.',
    highlights: [
      'Quỹ đất 5,1 ha đã có sẵn mặt bằng',
      'Cách cảng nước sâu Lạch Huyện khoảng 2 km',
      'Giá chuyển nhượng 140 USD/m2',
    ],
    fullContent: `
I. Tổng quan
Mã sản phẩm: CN03.
Lô đất công nghiệp 5,1 ha tại KCN DEEP C3 phù hợp doanh nghiệp cần quỹ đất lớn trong khu công nghiệp, ưu tiên triển khai nhanh và bám sát hệ sinh thái cảng biển Hải Phòng.

II. Hiện trạng tài sản
- Diện tích chuyển nhượng: 5,1 ha.
- Đã có sẵn mặt bằng, có thể bàn giao ngay.
- Phù hợp lập dự án sản xuất, logistics hoặc kho bãi quy mô lớn.

III. Vị trí và kết nối
- Nằm trong khu TMTD của KCN DEEP C3.
- Cách cảng nước sâu Lạch Huyện khoảng 2 km.
- Vị trí phù hợp cho doanh nghiệp cần lợi thế logistics cảng biển.

IV. Giá chuyển nhượng
- Giá chào: 140 USD/m2.
`,
  },
  {
    title: 'Cho thuê 5.000m2 nhà xưởng tại KCN Đình Vũ, Hải Phòng',
    slug: 'cho-thue-5000m2-nha-xuong-kcn-dinh-vu-hai-phong',
    type: 'nha-xuong',
    location: {
      province: 'Hải Phòng',
      district: 'Đình Vũ',
      address: 'Tại KCN Đình Vũ, Hải Phòng; phù hợp sản xuất hoặc làm kho chứa hàng hóa, có thêm sân bãi trống đi kèm.',
      old_address: '',
    },
    area: '5.000 m2',
    areaUnit: 'm2',
    assetStatus: 'Vào sản xuất ngay',
    operatingPeriod: 'Có thể làm kho hoặc nhà xưởng',
    pricingType: 'tu-usd-m2',
    price: '5 USD/m2',
    priceUnit: 'USD/m²',
    legalStatus: 'Pháp lý rõ ràng',
    sectors: [
      'Sản xuất công nghiệp',
      'Kho chứa hàng hóa',
      'Logistics',
      'Tập kết nguyên vật liệu',
      'Kho phụ trợ cảng biển',
    ],
    description: 'Nhà xưởng cho thuê 5.000m2 tại KCN Đình Vũ có thể vào sản xuất hoặc làm kho ngay, kèm thêm 4.000m2 sân bãi trống để tập kết nguyên vật liệu.',
    highlights: [
      '5.000m2 nhà xưởng sử dụng ngay',
      'Có thêm 4.000m2 sân bãi trống',
      'Giá thuê 5 USD/m2',
    ],
    fullContent: `
I. Tổng quan
Mã sản phẩm: CT01.
Nhà xưởng cho thuê tại KCN Đình Vũ phù hợp doanh nghiệp cần diện tích vận hành ngay hoặc khai thác làm kho chứa hàng hóa tại khu vực cảng biển Hải Phòng.

II. Quy mô khai thác
- Diện tích nhà xưởng: 5.000m2.
- Có thể vào sản xuất ngay.
- Có thể sử dụng làm kho chứa hàng hóa.
- Có thêm khoảng 4.000m2 diện tích đất trống để tập kết nguyên vật liệu.

III. Hạ tầng và pháp lý
- Đầy đủ công trình phụ trợ phục vụ vận hành.
- Pháp lý rõ ràng.
- Phù hợp mô hình vừa sản xuất vừa lưu kho.

IV. Giá thuê
- Đơn giá thuê chào: 5 USD/m2.
`,
  },
  {
    title: 'Cho thuê 5.000m2 nhà xưởng tại An Lão, Hải Phòng',
    slug: 'cho-thue-5000m2-nha-xuong-an-lao-hai-phong',
    type: 'nha-xuong',
    location: {
      province: 'Hải Phòng',
      district: 'An Lão',
      address: 'Tại An Lão, Hải Phòng; nhà xưởng tiêu chuẩn mới, dự kiến bàn giao vào tháng 6/2026.',
      old_address: '',
    },
    area: '5.000 m2',
    areaUnit: 'm2',
    assetStatus: 'Bàn giao 06/2026',
    operatingPeriod: 'Xưởng tiêu chuẩn mới',
    pricingType: 'tu-usd-m2',
    price: '4,8 USD/m2',
    priceUnit: 'USD/m²',
    legalStatus: 'PCCC và pháp lý đầy đủ',
    sectors: [
      'Sản xuất công nghiệp',
      'Kho xưởng tiêu chuẩn mới',
      'Công nghiệp phụ trợ',
      'Doanh nghiệp cần bàn giao năm 2026',
      'Gia công xuất khẩu',
    ],
    description: 'Nhà xưởng mới 5.000m2 tại An Lão sẽ bàn giao vào tháng 6/2026, đạt tiêu chuẩn mới, đầy đủ PCCC và pháp lý.',
    highlights: [
      '5.000m2 nhà xưởng tiêu chuẩn mới',
      'Dự kiến bàn giao tháng 6/2026',
      'Giá thuê 4,8 USD/m2',
    ],
    fullContent: `
I. Tổng quan
Mã sản phẩm: CT02.
Nhà xưởng cho thuê tại An Lão phù hợp doanh nghiệp đang lên kế hoạch mở rộng công suất trong năm 2026 và cần một xưởng mới, đầy đủ tiêu chuẩn vận hành.

II. Thông số tài sản
- Diện tích nhà xưởng: 5.000m2.
- Xưởng được xây dựng theo tiêu chuẩn mới.
- Đầy đủ hệ thống PCCC và pháp lý.
- Thời gian bàn giao dự kiến: tháng 6/2026.

III. Lợi thế khai thác
- Phù hợp doanh nghiệp cần chuẩn bị kế hoạch mở rộng trước thời điểm bàn giao.
- Vị trí An Lão thuận tiện kết nối giao thông và tuyển dụng lao động khu vực Hải Phòng.
- Có thể khai thác cho sản xuất hoặc lưu trữ tùy ngành nghề phù hợp.

IV. Giá thuê
- Đơn giá thuê chào: 4,8 USD/m2.
`,
  },
]

const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'))
const existingSlugs = new Set(data.products.map((product) => product.slug))
const newProducts = products.map(buildProduct).filter((product) => !existingSlugs.has(product.slug))

if (newProducts.length === 0) {
  console.log('No new products to add.')
  process.exit(0)
}

data.products = [...newProducts, ...data.products]

if (data.metadata && typeof data.metadata.total_products === 'number') {
  data.metadata.total_products = data.products.length
}

fs.writeFileSync(dataPath, `${JSON.stringify(data, null, 2)}\n`, 'utf8')
console.log(`Added ${newProducts.length} new products. Total products: ${data.products.length}`)
