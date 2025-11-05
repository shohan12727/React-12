import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Components/Home";
import AllProducts from "../Components/AllProducts";
import Register from "../Components/Register";
import MyProducts from "../Components/MyProducts";
import MyBids from "../Components/MyBids";
import ProductsDetails from "../Components/ProductsDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/allproducts",
        Component: AllProducts,
      },
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/myproducts",
        Component: MyProducts,
      },
      {
        path: "/mybids",
        Component: MyBids,
      },
      {
        path: "/products-details/:id",
        loader: ({params}) => fetch(`http://localhost:3000/products/${params.id}`),
        // loader: () => fetch(`http://localhost:3000/products/:id`),
        Component: ProductsDetails,
      },
    ],
  },
]);
