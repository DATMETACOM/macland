import Image from 'next/image'
import { Phone } from 'lucide-react'

import { primaryConsultant, primaryPhone } from '@/lib/config/contact'
import { cn } from '@/lib/utils/cn'

type ConsultantContactCardProps = {
  compact?: boolean
  className?: string
}

export default function ConsultantContactCard({ compact = false, className }: ConsultantContactCardProps) {
  return (
    <div
      className={cn(
        'overflow-hidden rounded-xl border border-orange-100 bg-white shadow-sm',
        compact ? 'p-3' : 'p-4',
        className
      )}
    >
      <div className="flex items-center gap-3">
        <div className={cn('relative flex-shrink-0 overflow-hidden rounded-lg bg-gray-100', compact ? 'h-12 w-12' : 'h-16 w-16')}>
          <Image
            src={primaryConsultant.image}
            alt={primaryConsultant.name}
            fill
            sizes={compact ? '48px' : '64px'}
            className="object-cover object-center"
          />
        </div>
        <div className="min-w-0 flex-1">
          <p className={cn('font-bold leading-tight text-gray-900', compact ? 'text-sm' : 'text-base')}>
            {primaryConsultant.name}
          </p>
          <p className={cn('mt-1 text-gray-600', compact ? 'text-xs' : 'text-sm')}>
            {primaryConsultant.role}
          </p>
          <a
            href={primaryPhone.href}
            className="mt-2 inline-flex items-center gap-1.5 text-sm font-semibold text-orange-600 hover:text-orange-700"
          >
            <Phone className="h-3.5 w-3.5" />
            {primaryPhone.display}
          </a>
        </div>
      </div>
    </div>
  )
}
