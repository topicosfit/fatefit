import { AiFillShopping } from "react-icons/ai";
import { CartNotification } from "./cart-notification";

export function CartButton() {
  return (
    <button
      className={`
        bg-transparent
        relative
      `}
    >
      <AiFillShopping 
        size={30}      
      />
      <CartNotification />
    </button>
  )
}
