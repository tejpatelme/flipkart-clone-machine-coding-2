import React from "react";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useProducts } from "../../contexts/products-context";

export default function Home() {
  const { products } = useProducts();
  return (
    <div className="flex flex-wrap p-4 m-auto">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
