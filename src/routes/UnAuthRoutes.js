import { Navigate } from "react-router-dom";
import { Login, Signup, NotFound } from "../pages";

const UnAuthRoutes = [
  {
    path: "/",
    element: <Navigate replace to="/login" />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default UnAuthRoutes;
