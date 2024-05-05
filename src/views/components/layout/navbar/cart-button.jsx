import { AiFillShopping } from "react-icons/ai";

export function CartButton() {
  return (
    <button
      className={`
        bg-transparent
      `}
    >
      <AiFillShopping 
        size={30}      
      />
    </button>
  )
}
