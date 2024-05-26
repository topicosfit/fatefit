import { Product } from "../product/product";
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
                    <Product 
                        key={product.id_product} 
                        product={product} 
                    />
                ))
            )}
        </div>
    )
}
