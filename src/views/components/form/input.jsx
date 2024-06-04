export function Input({ label, name, placeholder, register }) {
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
        w-52
      ">
        <input
          className="
            p-0.5
          "
          placeholder={placeholder}
          {...register(name)}
          style={{
            all: 'unset'
          }}
        />
      </div>
    </div>
  )
}
