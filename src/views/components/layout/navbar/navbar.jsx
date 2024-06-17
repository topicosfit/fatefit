import { Menu } from "../../menu/menu";
import { CartButton } from "./cart-button";
import { SearchBar } from "./search-bar/search-bar";
import logo from '../../../../assets/logo.png'
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../../../app/context/products/products-context-hook";

export function Navbar() {
  const { handleSearchProduct } = useProducts();
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
          onClick={() => {
            navigate('/');
            handleSearchProduct('');
          }}
        >
          <img src={logo} height={200} width={200} />
        </div>
        <SearchBar />
        <CartButton />
      </div>
      <Menu />
    </nav>
  )
}
