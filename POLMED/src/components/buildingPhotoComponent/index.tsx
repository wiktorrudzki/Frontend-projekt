import building from "@/img/building.jpg";

type Props = {
  children: React.ReactNode;
};

const BuildingPhotoComponent = ({ children }: Props) => {
  return (
    <section className="building-photo-section">
      <div className="building-photo-section-info">{children}</div>
      <img className="building-photo-section-building" src={building} alt="building" />
    </section>
  );
};

export default BuildingPhotoComponent;
