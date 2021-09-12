import React, { createContext, useContext, useReducer } from "react";

const CartContext = createContext();

const initialState = {
  cart: [],
  saveForLater: [],
};

const cartReducer = (prevState, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      return {
        ...prevState,
        saveForLater: prevState.saveForLater.filter(
          (product) => product.id !== action.payload.product.id
        ),
        cart: [...prevState.cart, { ...action.payload.product, qty: 1 }],
      };
    }

    case "INCREASE_PRODUCT_QUANTITY": {
      return {
        ...prevState,
        cart: prevState.cart.map((product) => {
          return product.id === action.payload.productId
            ? {
                ...product,
                qty: product.qty + 1,
              }
            : product;
        }),
      };
    }

    case "DECREASE_PRODUCT_QUANTITY": {
      return {
        ...prevState,
        cart: prevState.cart.map((product) => {
          return product.id === action.payload.productId
            ? {
                ...product,
                qty: product.qty - 1,
              }
            : product;
        }),
      };
    }

    case "REMOVE_PRODUCT": {
      return {
        ...prevState,
        cart: prevState.cart.filter(
          (product) => product.id !== action.payload.productId
        ),
      };
    }

    case "ADD_TO_SAVE_LATER": {
      return {
        ...prevState,
        cart: prevState.cart.filter(
          (product) => product.id !== action.payload.product.id
        ),
        saveForLater: prevState.saveForLater.concat(action.payload.product),
      };
    }

    default: {
      return prevState;
    }
  }
};

export default function CartProvider({ children }) {
  const [{ cart, saveForLater }, dispatch] = useReducer(
    cartReducer,
    initialState
  );

  return (
    <CartContext.Provider value={{ cart, saveForLater, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
