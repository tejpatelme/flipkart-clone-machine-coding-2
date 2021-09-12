import React from "react";
import { useNavigate } from "react-router";
import { useCart } from "../../contexts/cart-context";

export default function ProductCard({ product }) {
  const { cart, dispatch } = useCart();
  const productAlreadyInCart = cart.find((item) => item.id === product.id);
  const navigate = useNavigate();

  const onAddToCartClick = () => {
    if (productAlreadyInCart) {
      return navigate("/cart");
    }

    dispatch({ type: "ADD_TO_CART", payload: { product } });
  };

  return (
    <div className="w-56 p-5">
      <div className="pt-64 relative overflow-hidden">
        <img
          src={product.imageURL}
          alt=""
          className="w-full h-auto absolute inset-0"
        />
      </div>
      <span className="block font-medium text-sm">{product.brand}</span>
      <h4 className="h-12 w-44 overflow-hidden overflow-ellipsis">
        {product.name}
      </h4>
      <span className="block text-lg font-bold mb-2">₹{product.price}</span>
      <button
        onClick={onAddToCartClick}
        className="w-full leading-none px-4 py-3 text-center bg-blue-500 text-white font-medium rounded"
      >
        {productAlreadyInCart ? "Go To Cart" : "Add to Cart"}
      </button>
    </div>
  );
}
