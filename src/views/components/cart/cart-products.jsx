import { useCart } from '../../../app/context/cart/cart-context-hook';
import { formatPrice } from '../../utils/format-price';
import { AiFillDelete } from "react-icons/ai";

export function CartProducts() {
    const { cart, removeProductFromCart, updateQuantity } = useCart();

    return (
        <div className="w-5/6">
            <table className="min-w-full bg-white">
                <thead>
                    <tr className="
                        bg-black
                        text-white                        
                    ">
                        <th className="py-2 px-4 text-left">Descrição</th>
                        <th className="py-2 px-4">Quantidade</th>
                        <th className="py-2 px-4">Preço</th>
                        <th className="py-2 px-4">Total</th>
                        <th className="py-2 px-4"></th>
                    </tr>
                </thead>
                <tbody>
                    {cart.products.length > 0 ? (
                        cart.products.map((item, index) => (
                            <tr key={index} className="bg-slate-300 border border-black">
                                <td className="flex gap-5 items-center py-2 px-4">
                                    <img 
                                        className="
                                            h-16
                                            w-16
                                        "
                                        src={item.st_image_url}
                                    />
                                    <span>
                                        {item.st_name}
                                    </span>
                                </td>
                                <td className="
                                    py-2 
                                    px-4 
                                    text-center
                                ">
                                    <div className="
                                        flex
                                        gap-2
                                        justify-center
                                    ">
                                        <button 
                                            className="
                                                bg-white
                                                rounded-md
                                                w-4
                                            "
                                            onClick={() => updateQuantity(item.id_product, '-')}
                                        >
                                            -
                                        </button>
                                        <span>
                                            {item.quantity}
                                        </span>
                                        <button
                                            className="
                                                bg-white
                                                rounded-md
                                                w-4
                                            "
                                            onClick={() => updateQuantity(item.id_product, '+')}
                                        >
                                            +
                                        </button>
                                    </div>
                                </td>
                                <td className="
                                    py-2 
                                    px-4 
                                    text-center 
                                    text-yellow-600
                                ">
                                    {formatPrice(item.nm_price)}
                                </td>
                                <td className="
                                    py-2 
                                    px-4 
                                    text-center 
                                    text-yellow-600
                                ">
                                    {formatPrice(item.nm_price * item.quantity)}
                                </td>
                                <td className="
                                        cursor-pointer 
                                        py-2 
                                        px-4 
                                        text-center
                                    "
                                    onClick={() => removeProductFromCart(item.id_product)}
                                >
                                    <AiFillDelete size={24} />
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td className="p-10 text-center" colSpan={6}>
                                Não há produtos no carrinho
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}