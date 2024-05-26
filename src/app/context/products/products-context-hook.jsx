import { useContext } from "react";
import { ProductsContext } from "./products-context";

export function useProducts() {
  return useContext(ProductsContext);
}
