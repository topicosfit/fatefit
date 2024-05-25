import { categories } from '../../../db/categories';

export function Menu() {

    function handleCategoryClick() {}

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
                    `}
                    key={category.id_category}
                >
                    {category.st_name}
                </li>
            ))}
        </ul>
    )
}