import { useParams } from "react-router-dom";
import { Layout } from "../components/layout/layout";
import { Product } from "../components/product/product";

export function ProductPage() {
  const params = useParams();

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