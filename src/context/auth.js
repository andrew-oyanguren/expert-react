import { createContext, useState, useEffect } from "react";

const authInit = {
  userAuth: false,
  onLogin: () => {}, // important for VSC auto-completion
  onLogout: (email, password) => {},
};

const AuthContext = createContext(authInit);

export function AuthContextProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);

  // checks if the user has been authenticated in previous session
  useEffect(() => {
    const storedAuth = localStorage.getItem("isAuth");

    if (storedAuth) {
      setIsAuth(true);
    }
  }, []);

  const loginHandler = () => {
    localStorage.setItem("isAuth", 1);
    setIsAuth(true);
  };

  const logoutHandler = () => {
    localStorage.removeItem("isAuth", 1);
    setIsAuth(false);
  };

  return (
    <AuthContext.Provider
      value={{ isAuth, onLogin: loginHandler, onLogout: logoutHandler }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
