import { HomePage } from '../../views/pages/home-page';
import { CartPage } from '../../views/pages/cart-page';
import { ProductPage } from '../../views/pages/product-page';
import { CategoryPage } from '../../views/pages/category-page';

export const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/product/:productId",
    element: <ProductPage />,
  },
  {
    path: "/:category",
    element: <CategoryPage />,
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
