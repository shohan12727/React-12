import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Header from "../Components/Header";
import Home from "../Pages/Home";
import CategoryNews from "../Pages/CategoryNews";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
        {
            index: true,
            Component: Home
        },
        {
            path: '/cateory/:id',
            Component: CategoryNews
        }
    ]
  },
  {
    path: '/auth',
    element: <h2>autehnticetion</h2>
  }
]);