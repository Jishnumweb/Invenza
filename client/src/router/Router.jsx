import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Signup from "../components/Signup";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Signup/>,
  },
]);