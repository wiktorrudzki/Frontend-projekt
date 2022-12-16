import Doctor from "@/pages/ourDoctors/components/Doctor";
import { DoctorType } from "@/types/DoctorType";

type Props = {
  doctor: DoctorType;
  onClick?: () => void;
};

const DoctorWrapper = ({ doctor, onClick }: Props) => {
  return (
    <div className="doctor-wrapper" key={doctor.name}>
      <Doctor
        key={doctor.name}
        photo={doctor.photo}
        date={doctor.date}
        type={doctor.type}
        name={doctor.name}
      />

    </div>
  );
};

export default DoctorWrapper;
