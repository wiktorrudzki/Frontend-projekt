import React, { useState } from "react";
import { LoginContextType } from "./types";

export const LoginContext = React.createContext<undefined | LoginContextType>(undefined);

type Props = {
  children: React.ReactNode;
};

const LoginProvider = ({ children }: Props) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);

  return (
    <LoginContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>{children}</LoginContext.Provider>
  );
};

export default LoginProvider;
