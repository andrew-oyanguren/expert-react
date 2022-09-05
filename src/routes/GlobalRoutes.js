import { useRoutes } from "react-router-dom";

import UnAuthRoutes from "./UnAuthRoutes";
import AuthRoutes from "./AuthRoutes";

const DUMMY_USER_LOGGED_IN = false;

const GlobalRoutes = () => {
  let activeRoutes = DUMMY_USER_LOGGED_IN ? AuthRoutes : UnAuthRoutes;

  return useRoutes(activeRoutes);
};

export default GlobalRoutes;
