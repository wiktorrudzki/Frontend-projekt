import { useContext } from "react";
import { LoginContext } from "./LoginProvider";

const useLogin = () => {
  const login = useContext(LoginContext);

  if (login === undefined) {
    throw new Error("useLogin must be used within provider");
  }

  return login;
};

export { useLogin };
