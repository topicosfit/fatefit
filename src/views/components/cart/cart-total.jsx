import { useCart } from "../../../app/context/cart/cart-context-hook";
import { formatPrice } from "../../utils/format-price";
import { Button } from "../button/button";

export function CartTotal()  {
  const { cart } = useCart();

  return (
    <div className="      
      flex
      flex-col
      w-1/6
    ">
      <div className="
        bg-black
        flex
        justify-between        
        p-2
        w-full
      ">
        <span className="text-white">
          Total
        </span>
        <span className="text-yellow-600">
          {formatPrice(cart.total)}
        </span>
      </div>
      <div className="border border-black p-2 flex justify-center">
        <Button background="#42AD60" text="FINALIZAR COMPRA" textColor="white" />
      </div>
    </div>
  )
}
