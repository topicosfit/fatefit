import { createContext, useState } from "react"

export const CartContext = createContext({
  cart: {
    products: [],
    total: 0,
  },
  addProductToCart: () => {}
});

export function CartProvider({ children }) {
  const [cart, setCart] = useState({
    products: [],
    total: 0,
  });

  const [isCartLoading, setIsCartLoading] = useState(false);

  const handleIsCartLoading = () => setIsCartLoading(prev => !prev);

  function addProductToCart(product) {
    handleIsCartLoading();

    const updatedCart = [...cart.products];

    const cartProductIndex = cart.products.findIndex(cartProduct => cartProduct.id_product === product.id_product);

    if (cartProductIndex !== -1) {
      updatedCart[cartProductIndex].quantity +=1;
    } else {
      updatedCart.push({
        ...product, 
        quantity: 1, 
      });
    }

    const updatedTotal = updatedCart.reduce((prev, current) => prev + (current.nm_price * current.quantity), 0);

    setCart({
      products: updatedCart, 
      total: updatedTotal, 
    });    

    handleIsCartLoading();
  };

  function removeProductFromCart(id) {
    handleIsCartLoading();
    const updatedCart = [...cart.products].filter(product => product.id_product != id);

    const updatedTotal = updatedCart.reduce((prev, current) => prev + (current.nm_price * current.quantity), 0);

    setCart({
      products: updatedCart, 
      total: updatedTotal, 
    });
    handleIsCartLoading();
  }  

  function clearCart() {
    setCart({
      products: [], 
      total: 0, 
    })
  }

  return (
    <CartContext.Provider value={{
      cart, 
      clearCart, 
      addProductToCart, 
      isCartLoading, 
      removeProductFromCart, 
    }}>
      {children}
    </CartContext.Provider>
  )
}
