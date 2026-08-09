import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CalendarDays } from 'lucide-react'

import { getAllNewsArticles } from '@/lib/data/news'

export const metadata: Metadata = {
  title: 'Tin tức bất động sản công nghiệp Hải Phòng - Hpindustrialhub.vn',
  description: 'Bài viết SEO về thuê, mua bán và đầu tư khu công nghiệp tại Hải Phòng.',
  keywords: ['tin tức khu công nghiệp Hải Phòng', 'cho thuê khu công nghiệp Hải Phòng', 'mua bán khu công nghiệp Hải Phòng'],
}

export default function NewsPage() {
  const articles = getAllNewsArticles()

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-white">
        <div className="container mx-auto px-4 py-12 sm:py-14 lg:py-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-orange-600">Tin tức</p>
          <h1 className="max-w-4xl text-4xl font-bold text-gray-900 md:text-5xl">
            SEO khu công nghiệp, nhà xưởng và kho vận tại Hải Phòng
          </h1>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-gray-600">
            Cập nhật góc nhìn thị trường, kinh nghiệm thuê, mua bán và thẩm định bất động sản công nghiệp Hải Phòng.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-7 md:grid-cols-3">
          {articles.map((article) => (
            <article key={article.slug} className="overflow-hidden rounded-2xl bg-white shadow-md transition-shadow hover:shadow-xl">
              <Link href={`/tin-tuc/${article.slug}`} className="block">
                <div className="relative aspect-[16/10] bg-gray-200">
                  <Image
                    src={article.heroImage}
                    alt={article.title}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="mb-3 flex items-center gap-2 text-xs font-medium text-gray-500">
                    <CalendarDays className="h-4 w-4 text-orange-600" />
                    <time dateTime={article.date}>{article.date}</time>
                    <span>•</span>
                    <span>{article.readingTime}</span>
                  </div>
                  <h2 className="mb-3 line-clamp-3 text-xl font-bold leading-snug text-gray-900">
                    {article.title}
                  </h2>
                  <p className="mb-5 line-clamp-3 text-sm leading-relaxed text-gray-600">{article.description}</p>
                  <span className="inline-flex items-center text-sm font-semibold text-orange-600">
                    Đọc bài viết
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
