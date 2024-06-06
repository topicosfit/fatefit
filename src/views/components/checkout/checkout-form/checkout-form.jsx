import { useForm } from "react-hook-form";
import { Button } from "../../button/button";
import { AddressInfo } from "../address-info/address-info";
import { PaymentInfo } from "../payment-info/payment-info";
import { PersonalInfo } from "../personal-info/personal-info";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../../../app/context/cart/cart-context-hook";
import { Bounce, toast } from "react-toastify";

export function CheckoutForm() {
  const navigate = useNavigate();
  const { clearCart } = useCart();

  const {
    formState: { errors }, 
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

    toast.success('Pedido realizado com sucesso, confira seu e-mail', {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
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
          <PersonalInfo errors={errors} register={register} />
          <AddressInfo errors={errors} register={register} />
        </div>
        <div className="
          flex
          flex-col
          gap-8
        ">
          <PaymentInfo errors={errors} register={register} />
          <div className="flex justify-center w-52">
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
