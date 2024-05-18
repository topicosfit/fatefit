import { Product } from "../product/product";
import products from "../../../db/products.json";

export function ProductsList() {
    return (
        <div
            className={`
                flex
                flex-wrap
                gap-14
                p-10
            `}
        >
            {products.map(product => (
                <Product product={product} />
            ))}
        </div>
    )
}
