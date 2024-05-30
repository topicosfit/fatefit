import { CartProducts } from "../components/cart/cart-products";
import { CartTotal } from "../components/cart/cart-total";
import { Layout } from "../components/layout/layout";

export function CartPage() {
    return (
        <Layout>
            <div className="
                flex
                gap-8
            ">
                <CartProducts />
                <CartTotal />
            </div>
        </Layout>
    )
}
