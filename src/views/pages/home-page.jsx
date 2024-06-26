import { useProducts } from "../../app/context/products/products-context-hook";
import { Layout } from "../components/layout/layout";
import { ProductsList } from "../components/products-list/products-list";

export function HomePage() {
  const { isProductsLoading, productsList } = useProducts();

  return (
    <Layout>
      <ProductsList 
        loading={isProductsLoading} 
        products={productsList}
      />
    </Layout>
  )
}
