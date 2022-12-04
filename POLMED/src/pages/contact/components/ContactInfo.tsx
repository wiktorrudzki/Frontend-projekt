type Props = {
  children: React.ReactNode;
  iconClassName: string;
};

const ContactInfo = ({ children, iconClassName }: Props) => {
  return (
    <div className="contact-page-info-text-wrapper">
      <i className={`contact-page-info--icon ${iconClassName}`}></i>
      <div>{children}</div>
    </div>
  );
};

export default ContactInfo;
