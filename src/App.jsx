import { CartProvider } from "./app/context/cart/cart-context"
import { AppRouter } from "./app/router/router"

function App() {
  return (
    <CartProvider>
      <AppRouter />
    </CartProvider>
  )
}

export default App
