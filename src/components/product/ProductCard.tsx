'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { MapPin, Ruler, DollarSign } from 'lucide-react'
import { Product } from '@/types/product'
import {
  formatArea,
  formatPrice,
  formatProductType,
  getImageUrl,
  getProductLocationLabel,
} from '@/lib/data/products'
import ProductImage from './ProductImage'

interface ProductCardProps {
  product: Product
  index?: number
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const imageUrl = getImageUrl(product, 'medium')
  const locationLabel = getProductLocationLabel(product)

  return (
    <motion.div
      initial={false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -6 }}
      className="group h-full"
    >
      <Link href={`/san-pham/${product.slug}`} className="block h-full">
        <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 h-full flex flex-col border border-gray-100">
          {/* Image */}
          <div className="relative aspect-[4/3] w-full overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
            <ProductImage
              src={imageUrl}
              alt={product.title}
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />

            {/* Type Badge */}
            <div className="absolute top-3 left-3">
              <span className="inline-block bg-red-600/95 backdrop-blur-sm text-white px-3 py-1.5 rounded-lg text-xs font-semibold shadow-md">
                {formatProductType(product.type)}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="p-5 flex-1 flex flex-col">
            {/* Title */}
            <h3 className="text-base font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-red-600 transition-colors leading-snug">
              {product.title}
            </h3>

            {/* Location */}
            <div className="flex items-center text-gray-600 text-sm mb-3">
              <MapPin className="w-3.5 h-3.5 mr-1.5 flex-shrink-0 text-red-500" />
              <span className="line-clamp-1 text-xs">{locationLabel}</span>
            </div>

            {/* Details */}
            <div className="flex items-center gap-4 text-xs text-gray-700 mb-4">
              <div className="flex items-center gap-1.5 bg-gray-50 px-2.5 py-1.5 rounded-lg">
                <Ruler className="w-3.5 h-3.5 text-red-600" />
                <span className="font-medium">{formatArea(product)}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-gray-50 px-2.5 py-1.5 rounded-lg">
                <DollarSign className="w-3.5 h-3.5 text-red-600" />
                <span className="font-medium">{formatPrice(product)}</span>
              </div>
            </div>

            {/* Footer */}
            <div className="mt-auto pt-3 border-t border-gray-100">
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-500">
                  {product.details.occupancy_rate && `${product.details.occupancy_rate}`}
                </span>
                <span className="text-red-600 font-semibold group-hover:translate-x-1 transition-transform inline-flex items-center">
                  Chi tiết
                  <span className="ml-1">→</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  )
}
