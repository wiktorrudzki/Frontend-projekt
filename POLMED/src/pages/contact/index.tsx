import facebookIcon from "@/img/icons/facebook.svg";
import instagramIcon from "@/img/icons/instagram.svg";
import whatsappIcon from "@/img/icons/whatsapp.svg";
import locationDotIcon from "@/img/icons/location-dot-solid.svg";
import envelopeIcon from "@/img/icons/envelope-solid.svg";
import clockIcon from "@/img/icons/clock-solid.svg";
import phoneIcon from "@/img/icons/phone-solid.svg";
import ContactInfo from "./components/ContactInfo";

const Contact = () => {
  return (
    <>
      <div className="contact-page">
        <h3 className="contact-page-title">Kontakt:</h3>
        <section className="contact-page-content">
          <div className="contact-page-info">
            <ContactInfo icon={locationDotIcon}>
              <span>POLmed</span>
              <span>ul. Pawia 5</span>
              <span>31-154 Kraków</span>
            </ContactInfo>
            <ContactInfo icon={clockIcon}>
              <span>Pn. - pt.</span>
              <span>10:00 - 18:00</span>
            </ContactInfo>
            <ContactInfo icon={envelopeIcon}>
              <span>biuro@polmed.pl</span>
            </ContactInfo>
            <ContactInfo icon={phoneIcon}>
              <span>+48 123 456 789</span>
              <span>+48 12 34 56 789</span>
            </ContactInfo>
          </div>
          <div className="contact-page-icons">
            <img src={facebookIcon} alt="facebook icon" />
            <img src={instagramIcon} alt="instagram icon" />
            <img src={whatsappIcon} alt="whatsapp icon" />
          </div>
        </section>
        <iframe
          className="contact-page-map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2561.04001761035!2d19.945423299999998!3d50.0668122!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47165b1a8b6d0777%3A0x1896614448c7c748!2sPawia%205%2C%2031-154%20Krak%C3%B3w!5e0!3m2!1spl!2spl!4v1670006761467!5m2!1spl!2spl"
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </>
  );
};

export default Contact;
