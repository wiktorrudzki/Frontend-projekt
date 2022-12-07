import { useContext } from "react";
import { PathContext } from "./PathProvider";

const usePath = () => {
  const currentPath = useContext(PathContext);

  if (currentPath === undefined) {
    throw new Error("usePath must be used within a PathProvider");
  }

  return currentPath;
};

export { usePath };
