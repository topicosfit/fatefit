export function Button({ background, icon, text, textColor }) {
  return (
    <button
      className={`
        flex
        items-center
        gap-2
        p-2.5
        rounded-md
      `}
      style={{
        backgroundColor: background,
      }}
    >
      <span
        style={{
          color: textColor,
        }}
      >
        {text}
      </span>
      {!!icon && icon}
    </button>
  )
}
