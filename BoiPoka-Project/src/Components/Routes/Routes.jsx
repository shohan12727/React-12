import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import ErrorPage from "../Pages/Error/ErrorPage";
import Home from "../Home/Home";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        loader: () => fetch('/booksData.json'), 
        path: "/",
        Component: Home,
      },
    ],
  },
]);
