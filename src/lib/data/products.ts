import { Product, ProductData } from '@/types/product'

// Cache data in memory for development
let cachedData: ProductData | null = null

const IMAGE_SIZE_MAP: Record<'thumbnail' | 'medium' | 'large', string[]> = {
  thumbnail: ['150x150', '300x300'],
  medium: ['300x300', '768x768'],
  large: ['1024x1024', '768x768', '300x300'],
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

function getBaseUrl() {
  if (process.env.NEXT_PUBLIC_BASE_URL) {
    return process.env.NEXT_PUBLIC_BASE_URL
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`
  }

  return `http://127.0.0.1:${process.env.PORT || '3000'}`
}

function toPublicImagePath(path?: string) {
  if (!path) return undefined

  if (path.includes('./macland-extract/images/')) {
    return path.replace('./macland-extract/images/', '/images/products/')
  }

  if (path.includes('./macland-extract/thumbnails/')) {
    return path.replace('./macland-extract/thumbnails/', '/images/products/')
  }

  return undefined
}

const CONTENT_FOOTER_MARKERS = [
  /(?:^|\n)Trên đây là bài viết.*$/giu,
  /(?:^|\n)VI\.\s*macland Group\b.*$/giu,
  /(?:^|\n)macland Group\b.*$/giu,
  /(?:^|\n)Để được tư vấn chi tiết.*$/giu,
  /(?:^|\n)hãy liên hệ ngay với macland.*$/giu,
  /(?:^|\n)Công ty Cổ phần Đầu tư macland\b/giu,
  /(?:^|\n)Địa chỉ công ty:\s*$/giu,
  /(?:^|\n)Trụ sở:\s*$/giu,
  /(?:^|\n)Hotline:\s*$/giu,
  /(?:^|\n)(?:E\.?mail|Email):\s*$/giu,
  /(?:^|\n)Website:\s*$/giu,
  /(?:^|\n)LinkedIn:\s*$/giu,
  /(?:^|\n)Fanpage:\s*$/giu,
  /(?:^|\n)Youtube:\s*$/giu,
  /(?:^|\n)macland\s*[–-]\s*Tư vấn và xúc tiến đầu tư.*$/giu,
]

const CONTENT_NOISE_LINE_PATTERNS = [
  /^\s*macland\s*$/iu,
  /^\s*macland\s*[–-]\s*(?:tư vấn|bất động sản)/iu,
  /^\s*(?:>>\s*)?tìm hiểu các sản phẩm khác của macland.*$/iu,
  /^\s*tham khảo thêm nhà xưởng tại đây\s*$/iu,
  /^\s*trân trọng cảm ơn quý khách hàng\.?\s*$/iu,
  /^\s*để được tư vấn chi tiết.*$/iu,
  /^\s*hãy liên hệ ngay với macland.*$/iu,
  /^\s*liên hệ ngay với chúng tôi.*$/iu,
  /^\s*việc lựa chọn đúng đơn vị tư vấn.*$/iu,
  /^\s*trên đây là bài viết.*$/iu,
  /^\s*bất động sản công nghiệp\s*$/iu,
  /^\s*[ivx]+\.\s*macland Group\b.*$/iu,
  /^\s*macland Group\b.*$/iu,
  /^\s*tại đây\s*$/iu,
  /^\s*&\s*$/iu,
  /^\s*[./—-]+\s*$/u,
  /^\s*(?:\+?84|0)[0-9 .-]{8,}\s*$/u,
  /^\s*(?:linkedin\.com|facebook\.com|youtube\.com|macland\.vn|maclandgroup\.vn)\S*\s*$/iu,
  /^\s*info@macland\.vn\s*$/iu,
  /^\s*(?:Charmvit Tower|Tầng 6 tòa nhà Zentower)\b.*$/iu,
]

function normalizeImageFingerprint(productImage: Product['media']['images'][number]) {
  return normalizeComparableText(productImage.filename)
}

function isCleanProductImage(productImage: Product['media']['images'][number]) {
  const fingerprint = normalizeImageFingerprint(productImage)
  return fingerprint.includes('macland')
}

function findContentCutIndex(content: string) {
  const minIndex = Math.floor(content.length * 0.35)
  let cutIndex = -1

  for (const pattern of CONTENT_FOOTER_MARKERS) {
    const matches = Array.from(content.matchAll(pattern))

    for (const match of matches) {
      const index = match.index ?? -1

      if (index >= minIndex && (cutIndex === -1 || index < cutIndex)) {
        cutIndex = index
      }
    }
  }

  return cutIndex
}

function sanitizeProductContent(content?: string | null) {
  if (!content) return ''

  let sanitized = content.replace(/\r\n?/g, '\n').trim()
  const cutIndex = findContentCutIndex(sanitized)

  if (cutIndex >= 0) {
    sanitized = sanitized.slice(0, cutIndex).trim()
  }

  sanitized = sanitized
    .replace(/(?:\+?84[\s().-]*)?(?:0)?\d(?:[\s().-]*\d){8,}/gu, '')
    .replace(/\binfo@macland\.vn\b/giu, '')
    .replace(/\b(?:linkedin\.com|facebook\.com|youtube\.com|macland\.vn|maclandgroup\.vn)\S*/giu, '')

  sanitized = sanitized
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => {
      if (!line) return false
      return !CONTENT_NOISE_LINE_PATTERNS.some((pattern) => pattern.test(line))
    })
    .join('\n')
    .replace(/\n{3,}/g, '\n\n')
    .trim()

  return sanitized
}

function sanitizeProduct(product: Product): Product {
  const cleanImages = (product.media.images || []).filter(isCleanProductImage)

  return {
    ...product,
    content: {
      ...product.content,
      description: sanitizeProductContent(product.content.description),
      full_content: sanitizeProductContent(product.content.full_content),
    },
    media: {
      ...product.media,
      images: cleanImages,
    },
  }
}

export async function getAllProducts(): Promise<Product[]> {
  // Disable cache in development
  if (process.env.NODE_ENV === 'development') {
    cachedData = null
  }

  if (cachedData) {
    return cachedData.products
  }

  try {
    const baseUrl = getBaseUrl()
    const response = await fetch(`${baseUrl}/api/products`, {
      next: { revalidate: 3600 }, // Revalidate every hour
      // Add cache control headers for dev mode
      headers: process.env.NODE_ENV === 'development' ? {
        'Cache-Control': 'no-store',
      } : {},
    })

    if (!response.ok) {
      throw new Error(`Failed to load products: ${response.status}`)
    }

    const data: ProductData = await response.json()
    cachedData = {
      ...data,
      products: data.products.map(sanitizeProduct),
    }
    return cachedData.products
  } catch (error) {
    console.error('Error loading products:', error)
    return []
  }
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const products = await getAllProducts()
  return products.find(p => p.slug === slug) || null
}

export async function getProductsByType(type: string): Promise<Product[]> {
  const products = await getAllProducts()
  return products.filter(p => p.type === type)
}

export async function getProductsPaginated(
  page: number = 1,
  limit: number = 20
): Promise<{
  products: Product[]
  total: number
  page: number
  totalPages: number
}> {
  const products = await getAllProducts()
  const start = (page - 1) * limit
  const end = start + limit
  const paginatedProducts = products.slice(start, end)

  return {
    products: paginatedProducts,
    total: products.length,
    page,
    totalPages: Math.ceil(products.length / limit)
  }
}

export function getProductTypes(products: Product[]): string[] {
  const types = new Set(products.map(p => p.type))
  return Array.from(types).sort()
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

export function getProductLocationLabel(product: Product): string {
  const preferredDistrict = normalizeText(product.location.district)
  if (isUsefulLocationValue(preferredDistrict)) {
    return preferredDistrict
  }

  return (
    inferLocationFromText(product.title) ||
    inferLocationFromText(product.location.address) ||
    (isUsefulLocationValue(product.location.province) ? normalizeText(product.location.province) : null) ||
    'Đang cập nhật'
  )
}

export function getCleanProductImages(product: Product) {
  return product.media.images || []
}

export function getImageUrl(product: Product, size: 'thumbnail' | 'medium' | 'large' = 'medium'): string {
  const images = getCleanProductImages(product)

  if (!images.length) {
    return '/images/placeholder.svg'
  }

  const image = images[0]
  const localOriginalPath = toPublicImagePath(image.downloaded_path)
  const preferredThumbnailSizes = IMAGE_SIZE_MAP[size]

  const matchingThumbnail = image.thumbnails?.find((thumbnail) =>
    preferredThumbnailSizes.includes(thumbnail.size)
  )

  // Local originals are the most reliable option because the current public assets
  // only contain `original_*` files and not the generated `thumb_*` variants.
  if (localOriginalPath) {
    return localOriginalPath
  }

  if (matchingThumbnail?.url) {
    return matchingThumbnail.url
  }

  return image.url || '/images/placeholder.svg'
}
