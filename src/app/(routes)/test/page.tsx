import { getAllProducts } from '@/lib/data/products'
import { getRequestDictionary } from '@/lib/i18n/server'

export default async function TestPage() {
  const [{ dict }, products] = await Promise.all([getRequestDictionary(), getAllProducts()])

  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-3xl font-bold mb-4">Test Page</h1>
      <p className="text-xl mb-4">Total products: {products.length}</p>
      <p className="mb-4 text-sm text-gray-500">Locale: {dict.nav.home}</p>
      <div className="grid grid-cols-3 gap-4">
        {products.slice(0, 6).map((product) => (
          <div key={product.id} className="border p-4 rounded">
            <h3 className="font-bold">{product.title}</h3>
            <p className="text-sm">{product.type}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
