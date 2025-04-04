"use client";
import type { Product } from "@/lib/db";

interface ProductCardProps {
  product: Product;
}

const expanded = true;

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="border rounded-lg p-4 mb-4 shadow-sm hover:shadow-md transition">
      <h2 className="text-xl font-bold">{product.title}</h2>

      {expanded ? <p className="my-2">{product.description}</p> : <p className="my-2">{product.description.substring(0, 50)}...</p>}

      <div className="flex justify-between items-center mt-2">
        <span className="font-bold text-lg">${product.price.toFixed(2)}</span>
        <span className={`px-2 py-1 rounded text-sm ${product.inStock ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>{product.inStock ? "In Stock" : "Out of Stock"}</span>
      </div>
    </article>
  );
}
