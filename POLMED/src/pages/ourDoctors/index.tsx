import Doctor from "@/components/doctor";
import OtherPageFooter from "@/components/footers/other";

const OurDoctors = () => {
  return (
    <>
      <Doctor
        photo="../../doctors/doctor1.jpg"
        name="lek. med. Anna Kowalska"
        date="22 lis, 10:00"
        type="pediatra"
        price={50}
        reason="Wizyta kontrolna"
        isBooked={true}
      />
      <Doctor photo="../../doctors/doctor1.jpg" name="lek. med. Anna Kowalska" type="pediatra" />
      <Doctor
        photo="../../doctors/doctor1.jpg"
        name="lek. med. Anna Kowalska"
        date="22 lis, 10:00"
        type="pediatra"
      />
      <Doctor
        photo="../../doctors/doctor1.jpg"
        name="lek. med. Anna Kowalska"
        date="22 lis, 10:00"
        type="pediatra"
        isBooked={true}
      />
      <OtherPageFooter />
    </>
  );
};

export default OurDoctors;
