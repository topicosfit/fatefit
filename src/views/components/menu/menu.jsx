import { useNavigate } from 'react-router-dom';
import { categories } from '../../../db/categories';

export function Menu() {
    const navigate = useNavigate();

    function handleCategoryClick(category) {
        navigate(`/${category}`)
    }

    return (
        <ul
            className={`
                bg-gray-300
                border-t
                border-black
                flex
                justify-between
                px-10
                py-6
                w-full
            `}
        >
            {categories.map(category => (
                <li 
                    className={`
                        cursor-pointer
                        font-bold
                    `}
                    key={category.id_category}
                    onClick={() => handleCategoryClick(category.st_name)}
                >
                    {category.st_name.toUpperCase()}
                </li>
            ))}
        </ul>
    )
}