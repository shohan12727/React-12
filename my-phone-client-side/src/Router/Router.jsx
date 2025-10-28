import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Componetns/Home";
import Phone from "../Componetns/Phone";

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
        path: "/phones",
        Component: Phone,
      },
    ],
  },
]);
