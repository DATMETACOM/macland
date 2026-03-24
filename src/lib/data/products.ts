import 'server-only'

import { Product, ProductData } from '@/types/product'
import {
  formatArea,
  formatPrice,
  formatProductType,
  getCleanProductImages,
  getDisplayProductImages,
  getImageUrl,
  getProductLocationLabel,
} from '@/lib/data/product-utils'

let cachedData: ProductData | null = null

function normalizeText(value?: string | null) {
  return (value || '').replace(/\s+/g, ' ').trim()
}

function normalizeComparableText(value?: string | null) {
  return normalizeText(value)
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toLowerCase()
}

async function loadProductDataFromFile(): Promise<ProductData> {
  const [{ readFile }, pathModule] = await Promise.all([
    import('fs/promises'),
    import('path'),
  ])

  const dataPath = pathModule.join(process.cwd(), 'public', 'data.json')
  const fileContents = await readFile(dataPath, 'utf8')
  return JSON.parse(fileContents) as ProductData
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
  if (process.env.NODE_ENV === 'development') {
    cachedData = null
  }

  if (cachedData) {
    return cachedData.products
  }

  try {
    const data = await loadProductDataFromFile()
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
  return products.find((product) => product.slug === slug) || null
}

export async function getProductsByType(type: string): Promise<Product[]> {
  const products = await getAllProducts()
  return products.filter((product) => product.type === type)
}

export async function getProductsPaginated(
  page = 1,
  limit = 20,
  type?: string
): Promise<{
  products: Product[]
  total: number
  page: number
  totalPages: number
}> {
  const products = type ? await getProductsByType(type) : await getAllProducts()
  const start = (page - 1) * limit
  const end = start + limit
  const paginatedProducts = products.slice(start, end)

  return {
    products: paginatedProducts,
    total: products.length,
    page,
    totalPages: Math.ceil(products.length / limit),
  }
}

export function getProductTypes(products: Product[]): string[] {
  const types = new Set(products.map((product) => product.type))
  return Array.from(types).sort()
}

export {
  formatArea,
  formatPrice,
  formatProductType,
  getCleanProductImages,
  getDisplayProductImages,
  getImageUrl,
  getProductLocationLabel,
}
