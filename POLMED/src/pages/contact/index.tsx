import ContactInfo from "./components/ContactInfo";
import ContactSocial from "./components/ContactSocial";

const Contact = () => {
  return (
    <>
      <div className="contact-page">
        <h3 className="contact-page-title">Kontakt:</h3>
        <section className="contact-page-content">
          <div className="contact-page-info">
            <ContactInfo iconClassName="contact-page-info--icon__location">
              <span>POLmed</span>
              <span>ul. Pawia 5</span>
              <span>31-154 Kraków</span>
            </ContactInfo>
            <ContactInfo iconClassName="contact-page-info--icon__clock">
              <span>Pn. - pt.</span>
              <span>7:00 - 18:00</span>
            </ContactInfo>
            <ContactInfo iconClassName="contact-page-info--icon__envelope">
              <span>biuro@polmed.pl</span>
            </ContactInfo>
            <ContactInfo iconClassName="contact-page-info--icon__phone">
              <span>+48 123 456 789</span>
              <span>+48 12 34 56 789</span>
            </ContactInfo>
          </div>
          <div className="contact-page-social">
            <ContactSocial iconClassName="contact-page-social--icon__facebook" />
            <ContactSocial iconClassName="contact-page-social--icon__instagram" />
            <ContactSocial iconClassName="contact-page-social--icon__whatsapp" />
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
