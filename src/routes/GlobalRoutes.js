import { useContext } from "react";
import { useRoutes } from "react-router-dom";

import AuthContext from "../context/auth";
import UnAuthRoutes from "./UnAuthRoutes";
import AuthRoutes from "./AuthRoutes";

const GlobalRoutes = () => {
  const { userAuth } = useContext(AuthContext);

  let activeRoutes = userAuth ? AuthRoutes : UnAuthRoutes;

  return useRoutes(activeRoutes);
};

export default GlobalRoutes;
