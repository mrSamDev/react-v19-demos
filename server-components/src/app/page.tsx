import { ProductCard } from "@/components/ProductCard";
import { getProducts } from "@/actions/products";
import AddProduct from "@/components/AddProduct";

// import Link from "next/link";

export default async function ProductsPage() {
  const result = await getProducts();
  const { data: products } = result;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">Trending Products</h1>

      {products?.length === 0 ? (
        <p className="text-center p-8 text-gray-500">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {products?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      <AddProduct />
    </div>
  );
}
// useE
