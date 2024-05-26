import { Loading } from "../loading/loading";

export function Button({ 
  background, 
  disabled = false, 
  icon, 
  loading = false, 
  onClick, 
  text, 
  textColor 
}) {
  return (
    <button
      className="
        flex
        items-center
        gap-2
        justify-center
        p-2.5
        rounded-md
        w-full
      "
      disabled={disabled}
      onClick={onClick}
      style={{
        backgroundColor: background,
      }}
    >
      {loading ? (
        <Loading height="24px" width="24px" />
      ) : (
        <>
          <span
            style={{
              color: textColor,
            }}
          >
            {text}
          </span>
          {!!icon && icon}        
        </>
      )}
    </button>
  )
}
