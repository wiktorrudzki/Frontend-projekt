import React from "react";

const LoginContext = React.createContext<null | boolean>(null);

const LoginProvider = () => {
  return <div>LoginProvider</div>;
};

export default LoginProvider;
