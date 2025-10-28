import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Componetns/Home";
import Phone from "../Componetns/Phone";
import PhoneDetails from "../Componetns/PhoneDetails";

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
        loader: () => fetch("http://localhost:3000/phones"),
      },
      {
        path: "/phone/:id",
        Component: PhoneDetails,
        loader: ({ params }) =>
          fetch(`http://localhost:3000/phones/${params.id}`),
      },
    ],
  },
]);
