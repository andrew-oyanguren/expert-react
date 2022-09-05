import { Navigate } from "react-router-dom";
import { Home, Settings, NotFound } from "../pages";

const AuthRoutes = [
  {
    path: "/",
    element: <Navigate replace to="/home" />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/settings",
    element: <Settings />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export default AuthRoutes;
