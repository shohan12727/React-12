import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Components/Home";
import AllProducts from "../Components/AllProducts";

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
    ],
  },
]);
