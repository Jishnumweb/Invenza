import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import UserLayout from "../layout/UserLayout";
import Homepage from "../pages/Homepage";
import Signin from "../pages/Signin";
import Signup from "../pages/Signup";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <UserLayout/>,
    children:[{
      path:"/login",
      element:<Signin/>
    },{
      path:"/sign-up",
      element:<Signup/>
    },{
      path:"",
      element:<Homepage/>
    }]
  },

]);