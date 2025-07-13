import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Signup from "../components/Signup";
import Dashboard from "../pages/Dashboard";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Signup/>,
  },
  {
    path: "/dashboard",
    element: <Dashboard/>,
  },
]);