import { Product } from "../product/product";
import { products } from "../../../db/products";

export function ProductsList() {
    return (
        <div
            className={`
                flex
                flex-wrap
                gap-14
            `}
        >
            {products.map(product => (
                <Product product={product} />
            ))}
        </div>
    )
}
