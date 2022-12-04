import BuildingPhotoComponent from "@/components/buildingPhotoComponent";
import OtherPageFooter from "@/components/footers/other";
import Service from "./components/Service";
import triangleExclamationIcon from "@/img/icons/triangle-exclamation-solid.svg";

const Pricing = () => {
  return (
    <>
      <BuildingPhotoComponent>
        <div className="pricing-wrapper">
          <section className="pricing-services">
            <h2 className="pricing-title">Cennik:</h2>
            <ul className="pricing-services-ul">
              <Service content="wizyta kontrolna (50zł)" />
              <Service content="konsultacja (40zł)" />
              <Service content="choroba (50zł)" />
              <Service content="wypisanie recepty (40zł)" />
              <Service content="szczepienie (100zł)" />
            </ul>
          </section>
          <section className="pricing-warning">
            <img
              className="pricing-warning-exlamation-mark"
              src={triangleExclamationIcon}
              alt="exclamation mark"
            />
            <p className="pricing-warning-text">
              Płatności za wykonane usługi realizowane są jedynie w placówce (możliwa płatność kartą
              lub gotówką)
            </p>
          </section>
        </div>
      </BuildingPhotoComponent>
      <OtherPageFooter />
    </>
  );
};

export default Pricing;
