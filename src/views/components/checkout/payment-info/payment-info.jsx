import { useState } from "react";
import { Input } from "../../form/input";

export function PaymentInfo({ errors, register })  {
  const [selected, setSelected] = useState('');

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
        </div>
      )}
    </div>
  )
}
