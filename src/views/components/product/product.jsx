import { AiOutlineShoppingCart } from "react-icons/ai";
import { Button } from "../button/button";
import { formatPrice } from "../../utils/format-price";

export function Product({
  product
}) {
  const {
    id_product, 
    nm_price, 
    st_name, 
    st_image_url
  } = product;

  return (
    <div
      className={`
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
      `}
    >
      <div>
        <img src={st_image_url} />
      </div>
      <div>
        <span>
          {st_name}
        </span>
      </div>
      <div>
        <span className={`
          text-yellow-600
        `}>
          {formatPrice(nm_price)}
        </span>
      </div>
      <div>
        <Button 
          background="#42AD60"
          icon={
            <AiOutlineShoppingCart 
              color="white" 
            />
          }
          text="Comprar"
          textColor="white"
        />
      </div>
    </div>
  )
}
