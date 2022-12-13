import Button from "@/components/button";
import { useVisit } from "@/hooks/useVisit/useVisit";
import VisitWrapper from "./components/VisitWrapper";

const MyAccount = () => {
  const { allVisits } = useVisit();

  return (
    <div className="visit-page">
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
      <Button content="dsdsds" btnType="btn-primary" />
      <Button content="dsdsds" btnType="btn-secondary" />
      <Button content="dsdsds" btnType="btn-tertiary" />
      <Button content="dsdsds" btnType="btn-warning" />
    </div>
  );
};

export default MyAccount;
