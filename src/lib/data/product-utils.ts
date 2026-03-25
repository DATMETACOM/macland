import { Product } from '@/types/product'
import { Locale } from '@/lib/i18n/config'

const IMAGE_SIZE_MAP: Record<'thumbnail' | 'medium' | 'large', string[]> = {
  thumbnail: ['150x150', '300x300'],
  medium: ['300x300', '768x768'],
  large: ['1024x1024', '768x768', '300x300'],
}

const DEFAULT_PRODUCT_IMAGES: Record<string, string> = {
  'khu-cong-nghiep': '/images/default-products/khu-cong-nghiep-macland.png',
  'cum-cong-nghiep': '/images/default-products/cum-cong-nghiep-macland.png',
  'nha-xuong': '/images/default-products/mat-bang-macland-1.png',
  'mat-bang': '/images/default-products/mat-bang-macland-1.png',
}

const VIETNAM_LOCATIONS = [
  'An Giang', 'Bà Rịa - Vũng Tàu', 'Bac Giang', 'Bắc Giang', 'Bac Kan', 'Bắc Kạn',
  'Bac Lieu', 'Bạc Liêu', 'Bac Ninh', 'Bắc Ninh', 'Ben Tre', 'Bến Tre', 'Binh Dinh',
  'Bình Định', 'Binh Duong', 'Bình Dương', 'Binh Phuoc', 'Bình Phước', 'Binh Thuan',
  'Bình Thuận', 'Ca Mau', 'Cà Mau', 'Can Tho', 'Cần Thơ', 'Cao Bang', 'Cao Bằng',
  'Da Nang', 'Đà Nẵng', 'Dak Lak', 'Đắk Lắk', 'Dak Nong', 'Đắk Nông', 'Dien Bien',
  'Điện Biên', 'Dong Nai', 'Đồng Nai', 'Dong Thap', 'Đồng Tháp', 'Gia Lai', 'Ha Giang',
  'Hà Giang', 'Ha Nam', 'Hà Nam', 'Ha Noi', 'Hà Nội', 'Ha Tinh', 'Hà Tĩnh', 'Hai Duong',
  'Hải Dương', 'Hai Phong', 'Hải Phòng', 'Hau Giang', 'Hậu Giang', 'Hoa Binh', 'Hòa Bình',
  'Hung Yen', 'Hưng Yên', 'Khanh Hoa', 'Khánh Hòa', 'Kien Giang', 'Kiên Giang', 'Kon Tum',
  'Lai Chau', 'Lai Châu', 'Lam Dong', 'Lâm Đồng', 'Lang Son', 'Lạng Sơn', 'Lao Cai',
  'Lào Cai', 'Long An', 'Nam Dinh', 'Nam Định', 'Nghe An', 'Nghệ An', 'Ninh Binh',
  'Ninh Bình', 'Ninh Thuan', 'Ninh Thuận', 'Phu Tho', 'Phú Thọ', 'Phu Yen', 'Phú Yên',
  'Quang Binh', 'Quảng Bình', 'Quang Nam', 'Quảng Nam', 'Quang Ngai', 'Quảng Ngãi',
  'Quang Ninh', 'Quảng Ninh', 'Quang Tri', 'Quảng Trị', 'Soc Trang', 'Sóc Trăng',
  'Son La', 'Sơn La', 'Tay Ninh', 'Tây Ninh', 'Thai Binh', 'Thái Bình', 'Thai Nguyen',
  'Thái Nguyên', 'Thanh Hoa', 'Thanh Hóa', 'Thua Thien Hue', 'Thừa Thiên Huế', 'Tien Giang',
  'Tiền Giang', 'TP Ho Chi Minh', 'TP Hồ Chí Minh', 'Ho Chi Minh', 'Hồ Chí Minh',
  'Tra Vinh', 'Trà Vinh', 'Tuyen Quang', 'Tuyên Quang', 'Vinh Long', 'Vĩnh Long',
  'Vinh Phuc', 'Vĩnh Phúc', 'Yen Bai', 'Yên Bái',
]

function normalizeText(value?: string | null) {
  return (value || '').replace(/\s+/g, ' ').trim()
}

function normalizeComparableText(value?: string | null) {
  return normalizeText(value)
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toLowerCase()
}

function isUsefulLocationValue(value?: string | null) {
  const text = normalizeText(value)

  if (!text) return false
  if (text.length > 60) return false
  if (/\d{2,}/.test(text)) return false
  if ((text.match(/[,.:;]/g) || []).length > 2) return false

  return true
}

function normalizeUnit(value?: string | null) {
  return normalizeComparableText(value)
    .replace(/m²/g, 'm2')
    .replace(/㎡/g, 'm2')
    .replace(/\s+/g, '')
}

function valueAlreadyContainsUnit(value?: string | null, unit?: string | null) {
  const normalizedValue = normalizeUnit(value)
  const normalizedUnit = normalizeUnit(unit)

  return Boolean(normalizedValue && normalizedUnit && normalizedValue.includes(normalizedUnit))
}

function insertSpaceBeforeUnit(value: string) {
  return value
    .replace(/(\d)(USD|VND|VNĐ|đ|\/m²|\/m2|\/tháng|\/nam)/gi, '$1 $2')
    .replace(/\s+/g, ' ')
    .trim()
}

function inferLocationFromText(text?: string | null) {
  const source = normalizeText(text)
  const comparable = normalizeComparableText(text)

  if (!source) return null

  const districtMatch = source.match(/(?:huyện|quận|thị xã|thành phố|tp\.?)\s+([A-ZÀ-ỹ][A-ZÀ-ỹ\s.-]+)/iu)
  if (districtMatch?.[1]) {
    return normalizeText(districtMatch[1].replace(/\b(tỉnh|thành phố)\b.*$/iu, ''))
  }

  const provinceMatch = source.match(/tỉnh\s+([A-ZÀ-ỹ][A-ZÀ-ỹ\s.-]+)/iu)
  if (provinceMatch?.[1]) {
    return normalizeText(provinceMatch[1])
  }

  const commaParts = source.split(',').map((part) => normalizeText(part)).filter(Boolean)
  if (commaParts.length >= 2) {
    const lastPart = commaParts.at(-1)
    const previousPart = commaParts.at(-2)
    const lastIsProvince = VIETNAM_LOCATIONS.some(
      (location) => normalizeComparableText(location) === normalizeComparableText(lastPart)
    )

    if (lastIsProvince && isUsefulLocationValue(previousPart)) {
      return previousPart || null
    }
  }

  const trailingPart = commaParts.at(-1)
  if (isUsefulLocationValue(trailingPart)) {
    return trailingPart || null
  }

  const directSuffixMatch = source.match(/(?:kcn|ccn|khu công nghiệp|cụm công nghiệp)\s+([A-ZÀ-ỹ0-9][A-ZÀ-ỹ0-9\s.-]+)$/iu)
  if (directSuffixMatch?.[1]) {
    return normalizeText(directSuffixMatch[1])
  }

  const matchedProvince = VIETNAM_LOCATIONS
    .sort((a, b) => b.length - a.length)
    .find((location) => comparable.includes(normalizeComparableText(location)))

  return matchedProvince || null
}

function toPublicImagePath(imagePath?: string) {
  if (!imagePath) return undefined

  if (imagePath.includes('./macland-extract/images/')) {
    return imagePath.replace('./macland-extract/images/', '/images/products/')
  }

  if (imagePath.includes('./macland-extract/thumbnails/')) {
    return imagePath.replace('./macland-extract/thumbnails/', '/images/products/')
  }

  return undefined
}

function stripTransactionPrefix(title?: string | null) {
  return normalizeText(title).replace(/^\[(CHUYỂN NHƯỢNG|SẮP MỞ BÁN)\]\s*/iu, '')
}

function getTransactionPrefix(title?: string | null) {
  const normalizedTitle = normalizeText(title)
  const bracketMatch = normalizedTitle.match(/^\[(CHUYỂN NHƯỢNG|SẮP MỞ BÁN)\]/iu)
  const directRentalMatch = normalizedTitle.match(/^cho thuê\b/iu)
  const rawPrefix = bracketMatch?.[1] || directRentalMatch?.[0]

  if (!rawPrefix) return null

  const normalizedPrefix = normalizeComparableText(rawPrefix)
  if (normalizedPrefix === 'cho thue') return 'Cho thuê'
  if (normalizedPrefix === 'chuyen nhuong') return 'Chuyển nhượng'
  if (normalizedPrefix === 'sap mo ban') return 'Sắp mở bán'

  return null
}

export function formatProductType(type: string, locale: Locale = 'vi'): string {
  const normalized = normalizeComparableText(type)

  const typeLabels: Record<Locale, Record<string, string>> = {
    vi: {
      'khu-cong-nghiep': 'Khu công nghiệp',
      'cum-cong-nghiep': 'Cụm công nghiệp',
      'nha-xuong': 'Nhà xưởng',
    },
    en: {
      'khu-cong-nghiep': 'Industrial park',
      'cum-cong-nghiep': 'Industrial cluster',
      'nha-xuong': 'Factory',
    },
    zh: {
      'khu-cong-nghiep': '工业园区',
      'cum-cong-nghiep': '工业集群',
      'nha-xuong': '厂房',
    },
    ko: {
      'khu-cong-nghiep': '산업단지',
      'cum-cong-nghiep': '산업클러스터',
      'nha-xuong': '공장',
    },
    ja: {
      'khu-cong-nghiep': '工業団地',
      'cum-cong-nghiep': '工業クラスター',
      'nha-xuong': '工場',
    },
  }

  return typeLabels[locale][normalized] || normalizeText(type).replace(/-/g, ' ')
}

export function getDisplayProductTitle(product: Product): string {
  return stripTransactionPrefix(product.title)
}

export function formatPrice(product: Product, locale: Locale = 'vi'): string {
  if (product.pricing.price) {
    if (valueAlreadyContainsUnit(product.pricing.price, product.pricing.price_unit)) {
      return insertSpaceBeforeUnit(normalizeText(product.pricing.price))
    }

    const price = normalizeText(product.pricing.price)
    const unit = normalizeText(product.pricing.price_unit)
    return [price, unit].filter(Boolean).join(' ')
  }

  if (product.pricing.type === 'thoa-thuan') {
    return locale === 'vi' ? 'Giá thỏa thuận'
      : locale === 'zh' ? '价格面议'
      : locale === 'ko' ? '협의 가능'
      : locale === 'ja' ? '価格応相談'
      : 'Negotiable'
  }

  return locale === 'vi' ? 'Liên hệ'
    : locale === 'zh' ? '请联系'
    : locale === 'ko' ? '문의'
    : locale === 'ja' ? 'お問い合わせ'
    : 'Contact us'
}

export function formatArea(product: Product, locale: Locale = 'vi'): string {
  const area = normalizeText(product.details.area)
  const unit = normalizeText(product.details.area_unit)

  if (!area || normalizeUnit(area) === normalizeUnit(unit)) {
    return locale === 'vi' ? 'Đang cập nhật'
      : locale === 'zh' ? '更新中'
      : locale === 'ko' ? '업데이트 중'
      : locale === 'ja' ? '更新中'
      : 'Updating'
  }

  if (valueAlreadyContainsUnit(area, unit)) {
    return area
  }

  return [area, unit].filter(Boolean).join(' ')
}

export function getProductTransactionStatus(product: Product, locale: Locale = 'vi'): string | null {
  const transactionStatus = getTransactionPrefix(product.title)
  if (!transactionStatus) {
    return null
  }

  if (transactionStatus === 'Cho thuê') {
    return locale === 'vi' ? 'Cho thuê'
      : locale === 'zh' ? '出租'
      : locale === 'ko' ? '임대'
      : locale === 'ja' ? '賃貸'
      : 'For Lease'
  }

  if (transactionStatus === 'Chuyển nhượng') {
    return locale === 'vi' ? 'Chuyển nhượng'
      : locale === 'zh' ? '转让'
      : locale === 'ko' ? '양도'
      : locale === 'ja' ? '譲渡'
      : 'Transfer'
  }

  if (transactionStatus === 'Sắp mở bán') {
    return locale === 'vi' ? 'Sắp mở bán'
      : locale === 'zh' ? '即将推出'
      : locale === 'ko' ? '출시 예정'
      : locale === 'ja' ? '近日公開'
      : 'Coming soon'
  }

  return transactionStatus
}

export function getProductLocationLabel(product: Product, locale: Locale = 'vi'): string {
  const preferredDistrict = normalizeText(product.location.district)
  if (isUsefulLocationValue(preferredDistrict)) {
    return preferredDistrict
  }

  return (
    inferLocationFromText(getDisplayProductTitle(product)) ||
    inferLocationFromText(product.location.address) ||
    (isUsefulLocationValue(product.location.province) ? normalizeText(product.location.province) : null) ||
    (locale === 'vi' ? 'Đang cập nhật'
      : locale === 'zh' ? '更新中'
      : locale === 'ko' ? '업데이트 중'
      : locale === 'ja' ? '更新中'
      : 'Updating')
  )
}

export function getCleanProductImages(product: Product) {
  return product.media.images || []
}

export function getDefaultProductImageUrl(product: Product): string {
  const normalizedType = normalizeComparableText(product.type)
  const normalizedTitle = normalizeComparableText(product.title)

  if (normalizedType === 'khu-cong-nghiep') {
    return DEFAULT_PRODUCT_IMAGES['khu-cong-nghiep']
  }

  if (normalizedType === 'cum-cong-nghiep') {
    return DEFAULT_PRODUCT_IMAGES['cum-cong-nghiep']
  }

  const isStandaloneMatBang = normalizedTitle.includes('mat bang')
    && !normalizedTitle.includes('nha xuong')
    && !normalizedTitle.includes('khu cong nghiep')
    && !normalizedTitle.includes('cum cong nghiep')

  if (isStandaloneMatBang) {
    return DEFAULT_PRODUCT_IMAGES['mat-bang']
  }

  return DEFAULT_PRODUCT_IMAGES[normalizedType] || DEFAULT_PRODUCT_IMAGES['nha-xuong']
}

export function getDisplayProductImages(product: Product): Product['media']['images'] {
  const images = getCleanProductImages(product)

  if (images.length > 0) {
    return images
  }

  return [{
    url: getDefaultProductImageUrl(product),
    filename: `${normalizeComparableText(product.type) || 'default'}-macland-default.png`,
    type: 'image/png',
    downloaded_path: '',
    thumbnails: [],
  }]
}

export function getImageUrl(product: Product, size: 'thumbnail' | 'medium' | 'large' = 'medium'): string {
  const images = getDisplayProductImages(product)

  if (!images.length) {
    return '/images/placeholder.svg'
  }

  const image = images[0]
  const localOriginalPath = toPublicImagePath(image.downloaded_path)
  const preferredThumbnailSizes = IMAGE_SIZE_MAP[size]

  const matchingThumbnail = image.thumbnails?.find((thumbnail) =>
    preferredThumbnailSizes.includes(thumbnail.size)
  )

  if (localOriginalPath) {
    return localOriginalPath
  }

  if (matchingThumbnail?.url) {
    return matchingThumbnail.url
  }

  return image.url || getDefaultProductImageUrl(product)
}
