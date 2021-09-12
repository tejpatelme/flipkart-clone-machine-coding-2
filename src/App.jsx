import React from "react";
import { Route, Routes } from "react-router";
import Nav from "./components/Nav/Nav";
import Cart from "./pages/Cart/Cart";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
