import { getAllProducts } from '@/lib/data/products'

export default async function TestPage() {
  const products = await getAllProducts()

  return (
    <div className="min-h-screen bg-white p-8">
      <h1 className="text-3xl font-bold mb-4">Test Page</h1>
      <p className="text-xl mb-4">Total products: {products.length}</p>
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
