import { useCart } from '../../../app/context/cart/cart-context-hook';
import { formatPrice } from '../../utils/format-price';

export function CartProducts() {
    const { cart } = useCart();

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
                                <td className="py-2 px-4 text-center">{1}</td>
                                <td className="py-2 px-4 text-center text-yellow-600">{formatPrice(item.nm_price)}</td>
                                <td className="py-2 px-4 text-center text-yellow-600">{formatPrice(item.nm_price)}</td>
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