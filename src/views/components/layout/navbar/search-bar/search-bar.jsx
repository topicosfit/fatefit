import { AiOutlineSearch } from "react-icons/ai";
import { useProducts } from "../../../../../app/context/products/products-context-hook";
import { useRef } from "react";

export function SearchBar() {
    const inputRef = useRef(null);
    const { handleSearchProduct } = useProducts();

    return (
        <div
            className="
                flex
                h-10
                w-4/12  
            "
        >
            <input 
                className="
                    bg-slate-200
                    outline-none
                    p-2
                    rounded-l-lg
                    w-full
                "
                ref={inputRef}
            />
            <div
                className="
                    bg-black 
                    cursor-pointer 
                    flex 
                    items-center 
                    p-2 
                    rounded-r-lg 
                "
                onClick={() => handleSearchProduct(inputRef.current.value)}
            >
                <AiOutlineSearch 
                    color="white"
                    size={20}                    
                />
            </div>
        </div>
    )
}