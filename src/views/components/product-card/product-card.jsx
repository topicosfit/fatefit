import { AiOutlineShoppingCart } from "react-icons/ai";
import { Button } from "../button/button";
import { formatPrice } from "../../utils/format-price";
import { useCart } from "../../../app/context/cart/cart-context-hook";
import { useNavigate } from "react-router-dom";

export function ProductCard({
  product
}) {
  const {
    id_product, 
    nm_price, 
    st_name, 
    st_image_url
  } = product;

  const { addProductToCart, isCartLoading } = useCart();
  const navigate = useNavigate();

  return (
    <div
      className="
        bg-white 
        border
        border-black
        flex
        flex-col
        items-center
        justify-between
        h-96
        p-4
        rounded-lg
        w-48
      "
    >
      <div className="
          cursor-pointer
        " 
        onClick={() => navigate(`/product/${id_product}`, {
          state: product
        })}
      >
        <img src={st_image_url} />
      </div>
      <div>
        <span>
          {st_name}
        </span>
      </div>
      <div>
        <span className="
          text-yellow-600
        ">
          {formatPrice(nm_price)}
        </span>
      </div>
      <div className="
        flex 
        justify-center 
        w-full
      ">
        <Button 
          background="#42AD60"
          disabled={isCartLoading}
          icon={
            <AiOutlineShoppingCart 
              color="white" 
            />
          }
          loading={isCartLoading}
          onClick={() => addProductToCart(product)}
          text="Comprar"
          textColor="white"
        />
      </div>
    </div>
  )
}
