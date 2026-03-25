import { Product } from '@/types/product'

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
  const match = normalizeText(title).match(/^\[(CHUYỂN NHƯỢNG|SẮP MỞ BÁN)\]/iu)

  if (!match) return null

  const normalizedPrefix = normalizeComparableText(match[1])
  if (normalizedPrefix === 'chuyen nhuong') return 'Chuyển nhượng'
  if (normalizedPrefix === 'sap mo ban') return 'Sắp mở bán'

  return null
}

export function formatProductType(type: string): string {
  const normalized = normalizeComparableText(type)

  const typeLabels: Record<string, string> = {
    'khu-cong-nghiep': 'Khu công nghiệp',
    'cum-cong-nghiep': 'Cụm công nghiệp',
    'nha-xuong': 'Nhà xưởng',
  }

  return typeLabels[normalized] || normalizeText(type).replace(/-/g, ' ')
}

export function getDisplayProductTitle(product: Product): string {
  const baseTitle = stripTransactionPrefix(product.title)

  if (/^mặt bằng nhà xưởng tại\s+/iu.test(baseTitle)) {
    return baseTitle.replace(/^mặt bằng nhà xưởng tại\s+/iu, 'Cho thuê nhà xưởng tại ')
  }

  return baseTitle
}

export function formatPrice(product: Product): string {
  if (product.pricing.price) {
    if (valueAlreadyContainsUnit(product.pricing.price, product.pricing.price_unit)) {
      return insertSpaceBeforeUnit(normalizeText(product.pricing.price))
    }

    const price = normalizeText(product.pricing.price)
    const unit = normalizeText(product.pricing.price_unit)
    return [price, unit].filter(Boolean).join(' ')
  }

  if (product.pricing.type === 'thoa-thuan') {
    return 'Giá thỏa thuận'
  }

  return 'Liên hệ'
}

export function formatArea(product: Product): string {
  const area = normalizeText(product.details.area)
  const unit = normalizeText(product.details.area_unit)

  if (!area || normalizeUnit(area) === normalizeUnit(unit)) {
    return 'Đang cập nhật'
  }

  if (valueAlreadyContainsUnit(area, unit)) {
    return area
  }

  return [area, unit].filter(Boolean).join(' ')
}

export function getProductTransactionStatus(product: Product): string | null {
  const transactionStatus = getTransactionPrefix(product.title)
  const isIndustrialSite = ['khu-cong-nghiep', 'cum-cong-nghiep'].includes(normalizeComparableText(product.type))

  if (!transactionStatus || !isIndustrialSite) {
    return null
  }

  return formatArea(product) === 'Đang cập nhật' ? transactionStatus : null
}

export function getProductLocationLabel(product: Product): string {
  const preferredDistrict = normalizeText(product.location.district)
  if (isUsefulLocationValue(preferredDistrict)) {
    return preferredDistrict
  }

  return (
    inferLocationFromText(getDisplayProductTitle(product)) ||
    inferLocationFromText(product.location.address) ||
    (isUsefulLocationValue(product.location.province) ? normalizeText(product.location.province) : null) ||
    'Đang cập nhật'
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
