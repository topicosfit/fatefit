import { useCart } from "../../../../app/context/cart/cart-context-hook";

export function CartNotification() {
  const { cart } = useCart();

  return (
      <div className="
        absolute 
        top-4 
        right-0.5 
        mt-1 
        mr-1 
        flex 
        items-center 
        justify-center 
        h-4 
        w-4 
        bg-red-500 
        text-white 
        rounded-full 
        text-xs 
        font-bold
      ">
        {cart.products.length}
      </div>
    ) 
};
