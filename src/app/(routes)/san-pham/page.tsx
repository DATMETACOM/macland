import { formatProductType, getProductsPaginated, getProductTypes, getAllProducts } from '@/lib/data/products'
import ProductCard from '@/components/product/ProductCard'
import Button from '@/components/ui/Button'
import { ArrowRight, ArrowLeft, SlidersHorizontal } from 'lucide-react'
import Link from 'next/link'

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; type?: string }>
}) {
  const params = await searchParams
  const page = parseInt(params.page || '1')
  const limit = 20

  const { products, total, totalPages } = await getProductsPaginated(page, limit, params.type)
  const allProducts = await getAllProducts()
  const types = getProductTypes(allProducts)

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="bg-white border-b">
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Sản phẩm</h1>
          <p className="text-gray-600 text-lg">
            Khám phá {total} cơ hội đầu tư bất động sản công nghiệp
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar - Filters */}
          <aside className="lg:w-64 flex-shrink-0">
            <div className="bg-white rounded-xl p-6 shadow-md sticky top-24">
              <div className="flex items-center gap-2 mb-6">
                <SlidersHorizontal className="w-5 h-5 text-red-600" />
                <h3 className="font-semibold">Bộ lọc</h3>
              </div>

              {/* Type Filter */}
              <div className="mb-6">
                <h4 className="text-sm font-medium text-gray-700 mb-3">Loại hình</h4>
                <div className="space-y-2">
                  <Link
                    href="/san-pham"
                    className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                      !params.type
                        ? 'bg-red-600 text-white'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    Tất cả
                  </Link>
                  {types.slice(0, 10).map((type) => (
                    <Link
                      key={type}
                      href={`/san-pham?type=${type}`}
                      className={`block px-3 py-2 rounded-lg text-sm transition-colors ${
                        params.type === type
                          ? 'bg-red-600 text-white'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {formatProductType(type)}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            {products.length > 0 ? (
              <>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                  {products.map((product, index) => (
                    <ProductCard key={product.id} product={product} index={index} />
                  ))}
                </div>

                {/* Pagination */}
                {totalPages > 1 && (
                  <div className="flex items-center justify-center gap-2 mt-12">
                    {page > 1 && (
                      <Link href={`/san-pham?page=${page - 1}${params.type ? `&type=${params.type}` : ''}`}>
                        <Button variant="outline" size="sm">
                          <ArrowLeft className="w-4 h-4 mr-1" />
                          Trang trước
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
                            className={`w-10 h-10 rounded-lg flex items-center justify-center text-sm font-medium transition-colors ${
                              pageNum === page
                                ? 'bg-red-600 text-white'
                                : 'bg-white text-gray-700 hover:bg-gray-100'
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
                          Trang tiếp
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </Button>
                      </Link>
                    )}
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">Không tìm thấy sản phẩm nào</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
