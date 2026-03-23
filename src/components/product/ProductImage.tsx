'use client'

import { useState } from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils/cn'

interface ProductImageProps {
  src: string
  alt: string
  className?: string
  priority?: boolean
  fallbackSrc?: string
}

export default function ProductImage({
  src,
  alt,
  className,
  priority = false,
  fallbackSrc = '/images/placeholder.svg',
}: ProductImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src)

  return (
    <Image
      src={currentSrc}
      alt={alt}
      fill
      unoptimized
      sizes="(max-width: 768px) 100vw, 50vw"
      className={cn('block h-full w-full', className)}
      priority={priority}
      onError={() => {
        if (currentSrc !== fallbackSrc) {
          setCurrentSrc(fallbackSrc)
        }
      }}
    />
  )
}
