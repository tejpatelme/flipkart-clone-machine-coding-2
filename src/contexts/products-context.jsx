import React,{createContext, useContext} from "react";
import products from "../data/products.json";

const ProductsContext = createContext();

export default function ProductsProvider({children}) {
  return <ProductsContext.Provider value={{products}} >{children}</ProductsContext.Provider>;
}

export const useProducts = () => useContext(ProductsContext);