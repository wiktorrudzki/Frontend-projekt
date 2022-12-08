import React, { useReducer } from "react";
import { updateVisit } from "./reducer";
import { VisitContextType } from "./types";

type Props = {
  children: React.ReactNode;
};

export const VisitContext = React.createContext<undefined | VisitContextType>(undefined);

export const VisitProvider = ({ children }: Props) => {
  const [visit, dispatchVisit] = useReducer(updateVisit, {
    doctor: {
      photo: "",
      name: "",
      date: "",
      type: "Pediatra",
      dates: []
    },
    date: null
  });

  return <VisitContext.Provider value={[ visit, dispatchVisit ]}>{children}</VisitContext.Provider>;
};
