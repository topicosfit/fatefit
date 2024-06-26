import { Input } from "../../form/input";

export function AddressInfo({ errors, register })  {
  return (
    <div className="
      border
      border-black 
      flex
      flex-col
      w-1/2
    ">
      <div className="
        bg-black
        flex
        justify-between        
        p-2
        w-full
      ">
        <span className="text-white">
          Endereço de entrega
        </span>
      </div>
      <div className="
        p-2
      ">
        <Input 
          errors={errors}
          label="Logradouro" 
          name="address"
          placeholder="Insira seu logradouro" 
          register={register} 
        />
      </div>
      <div className="
        p-2
      ">
        <Input 
          errors={errors}
          label="Número" 
          name="number"
          placeholder="Insira seu número" 
          register={register} 
        />
      </div>
      <div className="
        p-2
      ">
        <Input 
          errors={errors}
          label="Bairro" 
          name="neighborhood"
          placeholder="Insira seu bairro" 
          register={register} 
        />
      </div>
      <div className="
        p-2
      ">
        <Input 
          errors={errors}
          label="Cidade" 
          name="city"
          placeholder="Insira sua cidade" 
          register={register} 
        />
      </div>
      <div className="
        p-2
      ">
        <Input 
          errors={errors}
          label="Estado" 
          name="state"
          placeholder="Insira seu estado" 
          register={register} 
        />
      </div>
    </div>
  )
}
