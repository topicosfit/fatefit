import { useParams } from "react-router-dom";
import { useProducts } from "../../app/context/products/products-context-hook";
import { Layout } from "../components/layout/layout";
import { ProductsList } from "../components/products-list/products-list";

export function CategoryPage() {
  const { category } = useParams();
  const { isProductsLoading, productsList } = useProducts();

  const filteredProducts = productsList.filter(product => product.st_category === category);

  return (
    <Layout>
      <ProductsList 
        loading={isProductsLoading} 
        products={filteredProducts} 
      />
    </Layout>
  )
}
