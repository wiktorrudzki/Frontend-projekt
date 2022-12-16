import { useVisit } from "@/hooks/useVisit/useVisit";
import VisitWrapper from "./components/VisitWrapper";

const MyAccount = () => {
  const { allVisits } = useVisit();

  return (
    <div className="visit-page">
      {allVisits.length > 0 && (
        <>
          <h2>Moje wizyty:</h2>
          {allVisits.map((visit) => {
            return (
              <VisitWrapper
                key={visit.doctor?.name}
                doctor={visit.doctor}
                date={new Date(visit.date).toLocaleString()}
                price={50}
                reason="wizyta kontrolna"
              />
            );
          })}
        </>
      )}
    </div>
  );
};

export default MyAccount;
