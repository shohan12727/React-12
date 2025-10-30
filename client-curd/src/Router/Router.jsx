import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Components/Home";
import Users from "../Components/Users";
import UserDetail from "../Components/UserDetail";
import UpdateUser from "../Components/UpdateUser";

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
    path: "/users",
    Component: Users,
  },
  {
    path: "/users/:id",
    loader: ({ params }) => fetch(`http://localhost:3000/users/${params.id}`),
    Component: UserDetail,
  },
  {
    path: "/update/:id",
    loader: ({ params }) => fetch(`http://localhost:3000/users/${params.id}`),
    Component: UpdateUser,
  },
]);
