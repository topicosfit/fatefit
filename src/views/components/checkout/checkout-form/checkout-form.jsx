import { useForm } from "react-hook-form";
import { Button } from "../../button/button";
import { AddressInfo } from "../address-info/address-info";
import { PaymentInfo } from "../payment-info/payment-info";
import { PersonalInfo } from "../personal-info/personal-info";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../../../app/context/cart/cart-context-hook";

export function CheckoutForm() {
  const navigate = useNavigate();
  const { clearCart } = useCart();

  const {
    handleSubmit, 
    register, 
    reset, 
  } = useForm({
    mode: "onBlur",
  });

  const handleOnSubmit = async (data) => {
    const { name, cpf, email, phone, address, number, neighborhood, city, state} = data;

    clearCart();
    reset();
    navigate('/');
  };

  return (
    <form className="
        flex
        flex-col
        gap-8
    "
      onSubmit={handleSubmit(handleOnSubmit)}
    >
        <div className="
          flex
          gap-8
        ">
          <PersonalInfo register={register} />
          <AddressInfo register={register} />
        </div>
        <div className="
          flex
          flex-col
          gap-8
        ">
          <PaymentInfo />
          <div className="flex justify-center">
            <Button 
              background="#42AD60" 
              text="FINALIZAR" 
              textColor="white" 
              type="submit" 
            />
          </div>
        </div>          
    </form>
  )
}
