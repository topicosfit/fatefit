import { AiOutlineSearch } from "react-icons/ai";

export function SearchBar() {
    return (
        <div
            className={`
                flex
                h-10
                w-4/12  
            `}
        >
            <input 
                className={`
                    bg-slate-200
                    outline-none
                    p-2
                    rounded-l-lg
                    w-full
                `}
            />
            <div
                className={`
                    bg-black
                    flex
                    items-center
                    p-2
                    rounded-r-lg
                `}
            >
                <AiOutlineSearch 
                    color="yellow"
                    size={20}                    
                />
            </div>
        </div>
    )
}