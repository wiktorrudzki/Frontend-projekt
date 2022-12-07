import { useContext } from "react";
import { VisitContext } from "./VisitProvider";

const useVisit = () => {
  const visit = useContext(VisitContext);

  if (visit === undefined) {
    throw new Error("useVisit must be used within a VisitProvider");
  }

  return visit;
};

export { useVisit };
