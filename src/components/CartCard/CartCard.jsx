import React from "react";
import { useCart } from "../../contexts/cart-context";

export default function CartCard({ product }) {
  const { dispatch } = useCart();
  return (
    <div className="flex mb-4">
      <img src={product.imageURL} alt="" className="w-32 h-auto mr-3" />
      <div>
        <p>{product.name}</p>
        <p className="font-medium">{product.brand}</p>
        <p className="font-bold text-lg mb-3">₹{product.price}</p>
        <div className="flex mb-3">
          <button
            onClick={() =>
              dispatch({
                type: "DECREASE_PRODUCT_QUANTITY",
                payload: { productId: product.id },
              })
            }
            disabled={product.qty === 1}
            className="leading-none p-2 rounded-full flex justify-center items-center bg-gray-300 text-gray-700 font-bold flex-shrink-0 h-6 w-6 disabled:cursor-not-allowed"
          >
            -
          </button>
          <span>{product.qty}</span>
          <button
            onClick={() =>
              dispatch({
                type: "INCREASE_PRODUCT_QUANTITY",
                payload: { productId: product.id },
              })
            }
            className="leading-none p-2 rounded-full flex justify-center items-center bg-gray-300 text-gray-700 font-bold flex-shrink-0 h-6 w-6"
          >
            +
          </button>
        </div>
        <div>
          <button
            onClick={() =>
              dispatch({
                type: "REMOVE_PRODUCT",
                payload: { productId: product.id },
              })
            }
            className="p-1 bg-gray-200 mr-3"
          >
            Remove
          </button>
          <button
            onClick={() =>
              dispatch({
                type: "ADD_TO_SAVE_LATER",
                payload: { product: product },
              })
            }
            className="p-1 bg-gray-200"
          >
            Save for later
          </button>
        </div>
      </div>
    </div>
  );
}
