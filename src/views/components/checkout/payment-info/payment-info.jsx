import { useState } from "react";
import { Input } from "../../form/input";
import { useCart } from "../../../../app/context/cart/cart-context-hook";
import { formatPrice } from "../../../utils/format-price";
import { DateSelect } from "../../form/date";

export function PaymentInfo({ errors, register })  {
  const { cart } = useCart();
  const [selected, setSelected] = useState('');

  const generateParcelas = (total) => {
    const parcelas = [];

    for (let index = 1; index <= 12; index++) {
      parcelas.push(`${index}x de ${formatPrice(total / index)}`);      
    }

    return parcelas;
  }

  return (
    <div className=" 
      border
      border-black      
      flex
      flex-col
      w-full
    ">
      <div className="
        bg-black
        flex
        justify-between        
        p-2
        w-full
      ">
        <span className="text-white">
          Pagamento
        </span>
      </div>
      <div className="
        flex
        gap-2
        p-2
      ">
        <input type="radio" id="boleto" name="fav_language" value="boleto" onChange={() => setSelected('boleto')} />
        <label htmlFor="boleto">Boleto</label>
        <input type="radio" id="pix" name="fav_language" value="pix" onChange={() => setSelected('pix')} />
        <label htmlFor="pix">Pix</label>
        <input type="radio" id="card" name="fav_language" value="card" onChange={() => setSelected('card')} />
        <label htmlFor="card">Cartão de crédito</label>
        {Object.keys(errors).length > 0 && !selected && (
          <span style={{
            color: 'red'
          }}>Este campo é obrigatório</span>
        )}
      </div>
      {selected === 'card' && (
        <div>
          <div className="
            p-2
          ">
            <Input 
              errors={errors}
              label="Número do cartão" 
              name="card_number"
              placeholder="Insira o número do cartão" 
              register={register} 
            />
          </div>
          <div className="
            p-2
          ">
            <Input 
              errors={errors}
              label="Nome do titular do cartão" 
              name="owner"
              placeholder="Insira o nome do titular do cartão" 
              register={register} 
            />
          </div>
          <div className="
            p-2
          ">
            <Input 
              errors={errors}
              label="Cód. de segurança" 
              name="code"
              placeholder="Insira o código de segurança" 
              register={register} 
            />
          </div>
          <div className="
            p-2
            w-80
          ">
            <DateSelect />
          </div>
          <div className="
            flex
            flex-col
            gap-2
            p-2
            w-80
          ">
            <label>Parcelamento</label>
            <select name="parcelas" id="parcelas">
              {
                generateParcelas(cart.total).map(parcela => (
                <option value="parcela">
                  {parcela}
                </option>
                ))
              }
            </select>
          </div>
        </div>
      )}
    </div>
  )
}
