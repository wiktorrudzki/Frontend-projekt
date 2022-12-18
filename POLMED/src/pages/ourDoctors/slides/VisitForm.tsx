import Input from "@/components/form/_input";
import { useLogin } from "@/hooks/useLogin/useLogin";
import { ActionTypes } from "@/hooks/useVisit/types";
import { useVisit } from "@/hooks/useVisit/useVisit";
import Doctor from "../components/Doctor";
import SlideWrapper from "../components/SlideWrapper";

type Props = {
  sliderRef: React.MutableRefObject<HTMLDivElement | null>;
};

const VisitForm = ({ sliderRef }: Props) => {
  const { visit, dispatchVisit } = useVisit();
  const { isLoggedIn } = useLogin();

  const handleNextSlide = () => {
    if (
      sliderRef.current &&
      visit.date &&
      !new Date(visit.date).toString().includes("00:00:00") &&
      visit.name.length >= 3 &&
      visit.surrname.length >= 3 &&
      visit.id.length === 11 &&
      visit.email.includes("@") &&
      visit.email.includes(".")
    ) {
      sliderRef.current.style.setProperty("transform", "translate(-400vw)");
    }
  };

  return (
    <>
      {!isLoggedIn && visit.doctor && visit.date && visit.price && visit.reason && (
        <div className="visit-form-page slide">
          <SlideWrapper
            sliderRef={sliderRef}
            handleNextSlide={handleNextSlide}
            titleRight="Podaj dane osobowe:"
            titleLeft="Podsumowanie:"
            btnPrevContent="wróć"
            btnNextContent="umów się"
            prevElement={document.querySelector(".time-choose-page") as HTMLElement}
            clearWhenBack={false}
            translateTo="-200"
            currentDoctor={
              <Doctor
                photo={visit.doctor.photo}
                name={visit.doctor.name}
                type={visit.doctor.type}
                price={visit.price}
                isBooked={true}
                reason={visit.reason}
                date={new Date(visit.date).toLocaleString()}
              />
            }
            rightContent={
              <form className="visit-form-form">
                <Input
                  label="Imię"
                  name="name"
                  errorEmptyMsg="podaj swoje imię"
                  errorWrongMsg="nieprawidłowe imię"
                  inputPattern="^[a-zA-Z]{3,}$"
                  required
                  onChange={(e) =>
                    dispatchVisit({ type: ActionTypes.name, payload: e.target.value })
                  }
                />
                <Input
                  label="Nazwisko"
                  name="surrname"
                  errorEmptyMsg="podaj swoje nazwisko"
                  errorWrongMsg="nieprawidłowe nazwisko"
                  inputPattern="^[a-zA-Z]{3,}$"
                  type="surrname"
                  required
                  onChange={(e) =>
                    dispatchVisit({ type: ActionTypes.surrname, payload: e.target.value })
                  }
                />
                <Input
                  label="Pesel"
                  name="id"
                  errorEmptyMsg="podaj swój numer pesel"
                  errorWrongMsg="nieprawidłowy numer pesel"
                  inputPattern="^[0-9]{11}$"
                  type="number"
                  required
                  onChange={(e) => dispatchVisit({ type: ActionTypes.id, payload: e.target.value })}
                />
                <Input
                  label="E-mail"
                  name="email"
                  errorEmptyMsg="podaj swój adres e-mail"
                  errorWrongMsg="nieprawidłowe adres e-mail"
                  inputPattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
                  type="email"
                  required
                  onChange={(e) =>
                    dispatchVisit({ type: ActionTypes.email, payload: e.target.value })
                  }
                />
                <p>
                  <span>*</span> - pola obowiązakowe
                </p>
              </form>
            }
          />
        </div>
      )}
    </>
  );
};

export default VisitForm;
