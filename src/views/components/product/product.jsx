import { useLocation } from "react-router-dom";
import { formatPrice } from "../../utils/format-price";
import { Button } from "../button/button";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useCart } from "../../../app/context/cart/cart-context-hook";

export function Product() {
  const { state: product } = useLocation();
  const { addProductToCart, isCartLoading } = useCart();

  return (
    <div className="
      border
      border-black
      flex
      gap-5
      rounded-md
    ">
      <div>
        <img 
          src={product.st_image_url} 
          style={{
            maxHeight: 300, 
            maxWidth: 300, 
          }}
        />
      </div>
      <div className="
        flex
        flex-col
        justify-between
        py-4
        pr-2
      ">
        <div className="
          flex
          flex-col
          gap-5
        ">
          <h2 className="
            font-bold
            text-xl
          ">
            {product.st_name}
          </h2>
          <p
            className="
              text-lg
            "
          >
            {product.st_description}
            Descrição
          </p>
        </div>
        <div className="
          items-center
          flex
          gap-5
        ">
          <span className="
            text-lg
            text-yellow-600
          ">
            {formatPrice(product.nm_price)}
          </span>
          <div className="
            flex 
            justify-center 
            w-full
          ">
          <Button 
            background="#42AD60"
            disabled={false}
            icon={
              <AiOutlineShoppingCart 
                color="white" 
              />
            }
            loading={isCartLoading}
            onClick={() => addProductToCart(product)}
            text="Adicionar ao carrinho"
            textColor="white"
          />
          </div>
        </div>
      </div>
    </div>
  )
}
