import Link from 'next/link'
import { ArrowLeft, ArrowRight, SlidersHorizontal } from 'lucide-react'

import ProductCard from '@/components/product/ProductCard'
import Button from '@/components/ui/Button'
import { formatProductType, getAllProducts, getProductTypes, getProductsPaginated } from '@/lib/data/products'
import { getRequestDictionary } from '@/lib/i18n/server'

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; type?: string }>
}) {
  const [{ locale, dict }, params] = await Promise.all([
    getRequestDictionary(),
    searchParams,
  ])

  const page = parseInt(params.page || '1')
  const limit = 20

  const { products, total, totalPages } = await getProductsPaginated(page, limit, params.type, locale)
  const allProducts = await getAllProducts(locale)
  const types = getProductTypes(allProducts)

  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-white">
        <div className="container mx-auto px-4 py-10 sm:py-12 lg:py-14">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">{dict.products.title}</h1>
          <p className="text-lg text-gray-600">{dict.products.description.replace('{count}', String(total))}</p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8 sm:py-10 lg:py-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-10">
          <aside className="flex-shrink-0 lg:w-64">
            <div className="sticky top-24 rounded-2xl bg-white p-6 shadow-md lg:p-7">
              <div className="mb-6 flex items-center gap-2">
                <SlidersHorizontal className="h-5 w-5 text-orange-600" />
                <h3 className="font-semibold">{dict.products.filterTitle}</h3>
              </div>

              <div className="mb-6">
                <h4 className="mb-3 text-sm font-medium text-gray-700">{dict.products.filterType}</h4>
                <div className="space-y-2">
                  <Link
                    href="/san-pham"
                    className={`block rounded-lg px-3 py-2 text-sm transition-colors ${
                      !params.type ? 'bg-orange-600 text-white' : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {dict.products.all}
                  </Link>
                  {types.slice(0, 10).map((type) => (
                    <Link
                      key={type}
                      href={`/san-pham?type=${type}`}
                      className={`block rounded-lg px-3 py-2 text-sm transition-colors ${
                        params.type === type ? 'bg-orange-600 text-white' : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {formatProductType(type, locale)}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          <div className="flex-1">
            {products.length > 0 ? (
              <>
                <div className="mb-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-8 xl:grid-cols-3">
                  {products.map((product, index) => (
                    <ProductCard key={product.id} product={product} index={index} locale={locale} />
                  ))}
                </div>

                {totalPages > 1 && (
                  <div className="mt-12 flex items-center justify-center gap-2 sm:mt-14">
                    {page > 1 && (
                      <Link href={`/san-pham?page=${page - 1}${params.type ? `&type=${params.type}` : ''}`}>
                        <Button variant="outline" size="sm">
                          <ArrowLeft className="mr-1 h-4 w-4" />
                          {dict.products.previous}
                        </Button>
                      </Link>
                    )}

                    <div className="flex items-center gap-2">
                      {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                        let pageNum = i + 1
                        if (totalPages > 5 && page > 3) pageNum = page - 3 + i
                        if (pageNum > totalPages) return null

                        return (
                          <Link
                            key={pageNum}
                            href={`/san-pham?page=${pageNum}${params.type ? `&type=${params.type}` : ''}`}
                            className={`flex h-10 w-10 items-center justify-center rounded-lg text-sm font-medium transition-colors ${
                              pageNum === page ? 'bg-orange-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-100'
                            }`}
                          >
                            {pageNum}
                          </Link>
                        )
                      })}
                    </div>

                    {page < totalPages && (
                      <Link href={`/san-pham?page=${page + 1}${params.type ? `&type=${params.type}` : ''}`}>
                        <Button variant="outline" size="sm">
                          {dict.products.next}
                          <ArrowRight className="ml-1 h-4 w-4" />
                        </Button>
                      </Link>
                    )}
                  </div>
                )}
              </>
            ) : (
              <div className="rounded-2xl bg-white py-14 text-center shadow-sm">
                <p className="text-lg text-gray-500">{dict.products.empty}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
