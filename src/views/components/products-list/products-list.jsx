import { ProductCard } from "../product-card/product-card";
import { useProducts } from "../../../app/context/products/products-context-hook";
import { Loading } from "../loading/loading";

export function ProductsList() {
    const { isProductsLoading, productsList } = useProducts();

    return (
        <div
            className={`
                flex
                flex-wrap
                gap-14
            `}
        >
            {isProductsLoading ? (
                <Loading height="24px" width="24px" />
            ) : (
                productsList.map(product => (
                    <ProductCard 
                        key={product.id_product} 
                        product={product} 
                    />
                ))
            )}
        </div>
    )
}
