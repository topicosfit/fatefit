import { AiFillShopping } from "react-icons/ai";
import { CartNotification } from "./cart-notification";
import { useNavigate } from "react-router-dom";

export function CartButton() {
  const navigate = useNavigate();

  return (
    <button
      className={`
        bg-transparent
        relative
      `}
      onClick={() => navigate('/cart')}
    >
      <AiFillShopping 
        size={30}      
      />
      <CartNotification />
    </button>
  )
}
