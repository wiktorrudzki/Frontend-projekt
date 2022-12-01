import Doctor from "@/components/doctor";

const OurDoctors = () => {
  return (
    <>
      <div>OurDoctors page</div>
      <Doctor
        photo="../../doctors/doctor1.jpg"
        name="lek. med. Anna Kowalska"
        date="22 lis, 10:00"
        type="pediatra"
        price={50}
        reason="wizyta kontrolna"
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
    </>
  );
};

export default OurDoctors;
