import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Header from "../Components/Header";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    // children: [
    //     {
    //         // index: true,
    //         Component: Header
    //     }
    // ]
  },
]);