import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="sticky z-10 top-0 w-full h-12 bg-blue-500 flex justify-between items-center px-4">
      <Link to="/">
        <span className="leading-none text-white font-bold">Flipkart</span>
      </Link>

      <div>
        <Link to="/cart">
          <span className="material-icons-round text-white px-2">
            shopping_cart
          </span>
        </Link>
      </div>
    </nav>
  );
}
