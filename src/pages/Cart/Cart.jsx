import React from "react";
import CartCard from "../../components/CartCard/CartCard";
import TotalPrice from "../../components/TotalPrice/TotalPrice";
import ProductCard from "../../components/ProductCard/ProductCard";
import { useCart } from "../../contexts/cart-context";

export default function Cart() {
  const { cart, saveForLater } = useCart();

  return (
    <div className="max-w-6xl m-auto p-4">
      <h3 className="font-bold text-xl py-3">Cart {cart.length}</h3>
      <div className="flex">
        <div className="max-w-3xl flex-grow">
          <div className="mr-4">
            {cart.map((product) => (
              <CartCard key={product.id} product={product} />
            ))}
          </div>
          <span className="text-sm font-medium">SAVED FOR LATER</span>
          <div className="mr-4 flex">
            {saveForLater.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        <TotalPrice />
      </div>
    </div>
  );
}
