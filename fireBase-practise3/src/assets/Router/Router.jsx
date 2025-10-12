import { createBrowserRouter } from "react-router";
import Root from "../../Root/Root";
import Login from "../../Components/Login";
import Home from "../../Components/Home";

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
        path: "/login",
        Component: Login,
      },
    ],
  },
]);
