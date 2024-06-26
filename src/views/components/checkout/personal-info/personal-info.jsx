import { Input } from "../../form/input";

export function PersonalInfo({ errors, register })  {
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
          Informações pessoais
        </span>
      </div>
      <div className="
        p-2
      ">
        <Input 
          errors={errors}
          label="Nome Completo" 
          name="name"
          placeholder="Insira seu nome" 
          register={register} 
        />
      </div>
      <div className="
        p-2
      ">
        <Input 
          errors={errors}
          label="CPF" 
          name="cpf"
          placeholder="Insira seu CPF" 
          register={register} 
        />
      </div>
      <div className="
        p-2
      ">
        <Input 
          errors={errors}
          label="E-mail" 
          name="email"
          placeholder="Insira seu e-mail" 
          register={register} 
        />
      </div>
      <div className="
        p-2
      ">
        <Input 
          errors={errors}
          label="Celular" 
          name="phone"
          placeholder="Insira seu celular" 
          register={register} 
        />
      </div>
    </div>
  )
}
