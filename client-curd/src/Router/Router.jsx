import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Components/Home";
import Users from "../Components/Users";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
  {
    path: '/users',
    Component: Users
  }
]);
