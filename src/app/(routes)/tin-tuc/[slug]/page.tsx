import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, CalendarDays } from 'lucide-react'

import ConsultantContactCard from '@/components/contact/ConsultantContactCard'
import { getAllNewsArticles, getNewsArticleBySlug } from '@/lib/data/news'

type NewsArticlePageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return getAllNewsArticles().map((article) => ({
    slug: article.slug,
  }))
}

export async function generateMetadata({ params }: NewsArticlePageProps): Promise<Metadata> {
  const { slug } = await params
  const article = getNewsArticleBySlug(slug)

  if (!article) {
    return {
      title: 'Không tìm thấy bài viết - Hpindustrialhub.vn',
    }
  }

  return {
    title: `${article.title} - Hpindustrialhub.vn`,
    description: article.description,
    keywords: article.keywords,
  }
}

export default async function NewsArticlePage({ params }: NewsArticlePageProps) {
  const { slug } = await params
  const article = getNewsArticleBySlug(slug)

  if (!article) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <article>
        <section className="bg-white">
          <div className="container mx-auto px-4 py-8 lg:py-10">
            <Link href="/tin-tuc" className="mb-6 inline-flex items-center text-sm font-semibold text-orange-600 hover:text-orange-700">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Quay lại tin tức
            </Link>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:items-center">
              <div className="lg:col-span-3">
                <div className="mb-4 flex items-center gap-2 text-sm font-medium text-gray-500">
                  <CalendarDays className="h-4 w-4 text-orange-600" />
                  <time dateTime={article.date}>{article.date}</time>
                  <span>•</span>
                  <span>{article.readingTime}</span>
                </div>
                <h1 className="text-4xl font-bold leading-tight text-gray-900 md:text-5xl">{article.title}</h1>
                <p className="mt-5 text-lg leading-relaxed text-gray-600">{article.description}</p>
              </div>
              <div className="lg:col-span-2">
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-gray-200 shadow-md">
                  <Image
                    src={article.heroImage}
                    alt={article.title}
                    fill
                    priority
                    sizes="(min-width: 1024px) 40vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="container mx-auto grid grid-cols-1 gap-8 px-4 py-12 lg:grid-cols-3 lg:py-16">
          <div className="lg:col-span-2">
            <div className="rounded-2xl bg-white p-6 shadow-sm sm:p-8 lg:p-10">
              {article.content.map((section) => (
                <section key={section.heading} className="mb-9 last:mb-0">
                  <h2 className="mb-4 text-2xl font-bold text-gray-900">{section.heading}</h2>
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph} className="mb-4 text-base leading-8 text-gray-700 last:mb-0">
                      {paragraph}
                    </p>
                  ))}
                </section>
              ))}
            </div>
          </div>
          <aside className="lg:col-span-1">
            <div className="sticky top-24 space-y-5">
              <ConsultantContactCard />
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <h3 className="mb-3 text-lg font-bold text-gray-900">Từ khóa SEO</h3>
                <div className="flex flex-wrap gap-2">
                  {article.keywords.map((keyword) => (
                    <span key={keyword} className="rounded-full bg-orange-50 px-3 py-1 text-xs font-semibold text-orange-700">
                      {keyword}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </section>
      </article>
    </div>
  )
}
