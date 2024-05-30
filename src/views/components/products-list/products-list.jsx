import { ProductCard } from "../product-card/product-card";
import { Loading } from "../loading/loading";

export function ProductsList({ loading, products }) {
    return (
        <div
            className={`
                flex
                flex-wrap
                gap-14
            `}
        >
            {loading ? (
                <Loading height="24px" width="24px" />
            ) : (
                products.map(product => (
                    <ProductCard 
                        key={product.id_product} 
                        product={product} 
                    />
                ))
            )}
        </div>
    )
}
