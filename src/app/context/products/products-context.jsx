import { createContext, useState } from "react"
import { products } from "../../../db/products";

export const ProductsContext = createContext({
  handleSearchProduct: () => {}, 
  isProductsLoading: false, 
  productsList: [], 
});

export function ProductsProvider({ children }) {
  const [productsList, setProductsList] = useState(products);
  const [isProductsLoading, setIsProductsLoading] = useState(false);

  const handleIsProductsLoading = () => setIsProductsLoading(prev => !prev);

  const handleSearchProduct = (searchText) => {
    handleIsProductsLoading();

    const foundProducts = [...products].filter(contextProduct => 
      contextProduct.st_name
      .toLowerCase()
      .includes(searchText.toLowerCase())
    );

    setProductsList(foundProducts);

    handleIsProductsLoading();
  }

  return (
    <ProductsContext.Provider value={{
      isProductsLoading, 
      handleSearchProduct, 
      productsList, 
    }}>
      {children}
    </ProductsContext.Provider>
  )
}
