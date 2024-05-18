import { AiOutlineShoppingCart } from "react-icons/ai";
import { Button } from "../button/button";

export function Product({
  product
}) {
  const {
    id_product, 
    st_name, 
    st_image_url
  } = product;

  return (
    <div
      className={`
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
        {st_name}
      </div>
      <div>
        PREÇO
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
