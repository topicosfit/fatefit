import { CartButton } from "./cart-button";

export function Navbar() {
  return (
    <navbar className={`
      bg-zinc-400
      flex
      h-32
      items-center
      justify-between
      p-10
      w-full
    `}>
      <div>
        LOGO
      </div>
      <div>
        Barra de pesquisa
      </div>
      <CartButton />
    </navbar>
  )
}
