import React from "react";
import { useLocation } from "react-router-dom";

export const PathContext = React.createContext<undefined | string>(undefined);

type Props = {
  children: React.ReactNode;
};

export const PathProvider = ({ children }: Props) => {
  const location = useLocation();
  const currentPath = location.pathname;

  return <PathContext.Provider value={currentPath}>{children}</PathContext.Provider>;
};
