import { HomePage } from '../../views/pages/home-page';
import { CartPage } from '../../views/pages/cart-page';

export const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/product/:productId",
    element: <></>,
  },
  {
    path: "/cart",
    element: <CartPage />,
  },
  {
    path: "/checkout",
    element: <></>,
  },
];
