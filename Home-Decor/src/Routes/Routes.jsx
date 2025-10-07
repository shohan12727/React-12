import { createBrowserRouter } from "react-router";
import App from "../App";
import Home from "../Pages/Home/Home";
import Products from "../Pages/Products/Products";
import Root from "../Layouts/Root";
import WishList from "../Pages/WishList/WishList";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/products",
        Component: Products,
      },
      {
        path: '/wishlist',
        Component: WishList,
      },
      {
         path: '/productdetails',
         Component: ProductDetails,
      }
    ],
  },
]);

export default router;
