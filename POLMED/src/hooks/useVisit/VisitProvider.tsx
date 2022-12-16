import { visits } from "@/data/visits";
import { VisitType } from "@/types/VisitTypes";
import React, { useReducer, useState } from "react";
import { updateVisit } from "./reducer";
import { VisitContextType } from "./types";

type Props = {
  children: React.ReactNode;
};

export const VisitContext = React.createContext<undefined | VisitContextType>(undefined);

export const VisitProvider = ({ children }: Props) => {
  const [visit, dispatchVisit] = useReducer(updateVisit, {
    doctor: null,
    date: null,
    reason: "Wizyta kontrolna",
    price: 0
  });

  const [allVisits, setAllVisits] = useState<VisitType[]>(visits);

  return (
    <VisitContext.Provider value={{ visit, dispatchVisit, allVisits, setAllVisits }}>
      {children}
    </VisitContext.Provider>
  );
};
