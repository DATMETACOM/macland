export interface Product {
  id: string
  slug: string
  url: string
  title: string
  type: string
  date: string | null
  location: {
    province: string
    district: string
    address: string
    old_address: string
  }
  details: {
    area: string
    area_unit: string
    occupancy_rate: string
    operating_period: string
    investment_sectors: string[]
  }
  pricing: {
    type: string
    price: string | null
    price_min: string | null
    price_unit: string | null
  }
  legal: {
    status: string
    land_use_period: string
  }
  content: {
    description: string
    full_content: string
    highlights: string[]
  }
  media: {
    images: Array<{
      url: string
      filename: string
      type: string
      downloaded_path: string
      thumbnails: Array<{
        size: string
        path: string
        url: string
      }>
    }>
  }
}

export interface ProductData {
  metadata: {
    source_url: string
    extracted_at: string
    total_products: number
    date_filter: {
      from: string
      to: string
    }
    completed_at: string
  }
  products: Product[]
}
