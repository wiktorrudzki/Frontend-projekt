type Props = {
  children: React.ReactNode;
  icon: string;
};

const ContactInfo = ({ children, icon }: Props) => {
  return (
    <div className="contact-page-info-text-wrapper">
      <img className="contact-page-info-icon" src={icon} />
      <div>{children}</div>
    </div>
  );
};

export default ContactInfo;
