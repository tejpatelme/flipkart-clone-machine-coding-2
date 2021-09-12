import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import ProductsProvider from "./contexts/products-context";
import { BrowserRouter as Router } from "react-router-dom";
import CartProvider from "./contexts/cart-context";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ProductsProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </ProductsProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
