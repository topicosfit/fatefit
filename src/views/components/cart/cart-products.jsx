import { products } from '../../../db/products';
import { formatPrice } from '../../utils/format-price';

export function CartProducts() {
    return (
        <div>
            <div
                className="
                    w-4/6
                "
            >
                <table className="min-w-full bg-white">
                    <thead>
                        <tr className="
                            bg-black
                            text-white                        
                        ">
                            <th className="py-2 px-4 border-b border-gray-300 text-left">Descrição</th>
                            <th className="py-2 px-4 border-b border-gray-300">Quantidade</th>
                            <th className="py-2 px-4 border-b border-gray-300">Preço</th>
                            <th className="py-2 px-4 border-b border-gray-300">Total</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((item, index) => (
                            <tr key={index} className="border-b border-gray-200">
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
                                <td className="py-2 px-4 text-center">{formatPrice(item.nm_price)}</td>
                                <td className="py-2 px-4 text-center">{formatPrice(item.nm_price)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}