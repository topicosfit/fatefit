import { Button } from "../button/button";

export function CartTotal()  {
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
          R$ 300,00
        </span>
      </div>
      <div className="border border-black p-2 flex justify-center">
        <Button background="#42AD60" text="FINALIZAR COMPRA" textColor="white" />
      </div>
    </div>
  )
}
