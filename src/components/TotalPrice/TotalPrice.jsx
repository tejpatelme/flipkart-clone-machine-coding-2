import React, { useEffect, useState } from "react";
import { useCart } from "../../contexts/cart-context";

export default function TotalPrice() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [discount, setDiscount] = useState(0);
  const { cart } = useCart();

  useEffect(() => {
    let discount = cart.reduce((discount, product) => {
      discount += product.price * ((product.discount / 100) * product.qty);
      return discount;
    }, 0);

    let total = cart.reduce((total, product) => {
      total += product.price * product.qty;
      return total;
    }, 0);

    setTotalPrice(total);
    setDiscount(discount);
  }, [cart]);

  return (
    <div className="p-4 max-w-xs flex-grow rounded border border-gray-300 self-start">
      <span className="block text-sm font-medium text-gray-400">
        PRICE DETAILS
      </span>
      <div className="flex justify-between py-2">
        <span>Price({cart.length} items)</span>
        <span>₹{totalPrice}</span>
      </div>

      <div className="flex justify-between py-2">
        <span>Discount</span>
        <span>₹{discount.toFixed(2)}</span>
      </div>

      <div className="flex justify-between py-2">
        <span>Total Amount</span>
        <span>₹{totalPrice - discount}</span>
      </div>
    </div>
  );
}
