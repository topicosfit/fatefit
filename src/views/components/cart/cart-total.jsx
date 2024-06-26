import { useNavigate } from "react-router-dom";
import { useCart } from "../../../app/context/cart/cart-context-hook";
import { formatPrice } from "../../utils/format-price";
import { Button } from "../button/button";

export function CartTotal()  {
  const { cart } = useCart();
  const navigate = useNavigate();

  return (
    <div className="      
      flex
      flex-col
      w-1/6
    ">
      <div className="
        bg-black    
        p-2
        w-full
      ">
        <div className="
          flex
          justify-between
        ">
          <span className="text-white">
            Total
          </span>
          <span className="text-yellow-600">
            {formatPrice(cart.total)}
          </span>
        </div>
        <div className="
          flex
          justify-between
        ">
          <span className="text-white">
            Entrega
          </span>
          <span className="text-yellow-600">
            {cart.products.length > 0 ? formatPrice(2000) : formatPrice(0)}
          </span>
        </div>
      </div>
      <div className="border border-black p-2 flex justify-center">
        <Button background="#42AD60" disabled={cart.products.length <= 0} onClick={() => navigate('/checkout')} text="FINALIZAR COMPRA" textColor="white" />
      </div>
    </div>
  )
}
