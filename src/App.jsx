import { Bounce, ToastContainer } from "react-toastify"
import { CartProvider } from "./app/context/cart/cart-context"
import { ProductsProvider } from "./app/context/products/products-context"
import { AppRouter } from "./app/router/router"
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <CartProvider>
      <ProductsProvider>
        <AppRouter />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
        />
      </ProductsProvider>
    </CartProvider>
  )
}

export default App
