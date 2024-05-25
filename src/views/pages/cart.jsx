import { CartProducts } from "../components/cart/cart-products";
import { Layout } from "../components/layout/layout";

export function CartPage() {
    return (
        <Layout>
            <div>
                <CartProducts />
            </div>
        </Layout>
    )
}