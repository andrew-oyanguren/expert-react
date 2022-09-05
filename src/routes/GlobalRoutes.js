import UnAuthRoutes from "./UnAuthRoutes";
import AuthRoutes from "./AuthRoutes";

const GlobalRoutes = () => {
  return UnAuthRoutes || AuthRoutes;
};

export default GlobalRoutes;
