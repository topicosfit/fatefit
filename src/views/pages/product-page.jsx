import { Layout } from "../components/layout/layout";
import { Product } from "../components/product/product";

export function ProductPage() {
  return (
      <Layout>
        <div className="
          flex
          justify-center
        ">
          <Product />
        </div>
      </Layout>
  )
}