import { useVisit } from "@/hooks/useVisit/useVisit";
import VisitWrapper from "./components/VisitWrapper";

const MyAccount = () => {
  const { allVisits } = useVisit();

  return (
    <div className="visit-page">
      {allVisits.length > 0 && (
        <>
          <h2>Moje wizyty:</h2>
          {allVisits.map((visit, index) => {
            return (
              <VisitWrapper
                key={index}
                doctor={visit.doctor}
                date={new Date(visit.date).toLocaleString()}
                reason={visit.reason}
                price={visit.price}
              />
            );
          })}
        </>
      )}
    </div>
  );
};

export default MyAccount;
