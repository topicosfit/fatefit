export function Input({ errors, label, name, placeholder, register }) {
  return (
    <div className="
      flex
      flex-col
      gap-2
    ">
      <label>{label}</label>
      <div className="
        bg-white
        flex
        rounded-md
        p-1.5
        w-72
      ">
        <input
          className="
            p-0.5
          "
          placeholder={placeholder}
          {...register(name, { required: "Este campo é obrigatório" })}
          style={{
            all: 'unset', 
            width: '100%'
          }}
        />
      </div>
      {errors && errors[name] && (
        <span style={{
          color: 'red'
        }}>{errors[name].message}</span>
      )}
    </div>
  )
}
