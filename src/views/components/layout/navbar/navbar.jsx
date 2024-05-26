import { Menu } from "../../menu/menu";
import { CartButton } from "./cart-button";
import { SearchBar } from "./search-bar/search-bar";
import react from '../../../../assets/react.svg'
import { useNavigate } from "react-router-dom";

export function Navbar() {
  const navigate = useNavigate();

  return (
    <nav
      className={`
        border-b
        border-black
        bg-slate-300
        flex
        flex-col
        items-center
        w-full
      `}
    >
      <div
        className={`
          flex
          items-center
          justify-between
          px-10
          py-6
          w-full
        `}
      >
        <div 
          className="cursor-pointer"
          onClick={() => navigate('/')}
        >
          <img src={react} height={71} width={71} />
        </div>
        <SearchBar />
        <CartButton />
      </div>
      <Menu />
    </nav>
  )
}
