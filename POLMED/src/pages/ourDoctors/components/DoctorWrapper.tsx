import Button from "@/components/button";
import Doctor from "@/components/doctor";
import { DoctorType } from "@/types/doctor";

type Props = {
  doctor: DoctorType;
};

function DoctorWrapper({ doctor }: Props) {
  return (
    <div className="ourDoctors-doctor-wrapper" key={doctor.name}>
      <Doctor
        key={doctor.name}
        photo={doctor.photo}
        date={doctor.date}
        type={doctor.type}
        name={doctor.name}
      />
      <Button btnType="btn-secondary" content="Umów się" />
    </div>
  );
}

export default DoctorWrapper;
