import Button from "@/components/button";
import Doctor from "@/pages/ourDoctors/components/Doctor";
import { DoctorType } from "@/types/DoctorType";

type Props = {
  doctor: DoctorType;
  onClick?: () => void;
  doctorsSlide?: boolean;
};

const DoctorWrapper = ({ doctor, onClick, doctorsSlide }: Props) => {
  return (
    <div className="doctor-wrapper" key={doctor.name}>
      <Doctor
        key={doctor.name}
        photo={doctor.photo}
        date={doctor.date}
        type={doctor.type}
        name={doctor.name}
        doctorsSlide={doctorsSlide}
        onClick={onClick}
      />
      {!doctorsSlide && <Button onClick={onClick} btnType="btn-secondary" content="Umów się" />}
    </div>
  );
};

export default DoctorWrapper;
