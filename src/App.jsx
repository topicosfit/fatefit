import { CartProvider } from "./app/context/cart/cart-context"
import { ProductsProvider } from "./app/context/products/products-context"
import { AppRouter } from "./app/router/router"

function App() {
  return (
    <CartProvider>
      <ProductsProvider>
        <AppRouter />
      </ProductsProvider>
    </CartProvider>
  )
}

export default App
