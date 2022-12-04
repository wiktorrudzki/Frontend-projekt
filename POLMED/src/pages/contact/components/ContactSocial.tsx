type Props = {
  href: string;
  iconClassName: string;
};

const ContactSocials = function ({ href, iconClassName }: Props) {
  return (
    <a href={href}>
      <i className={`contact-page-social--icon ${iconClassName}`}></i>
    </a>
  );
};

export default ContactSocials;
