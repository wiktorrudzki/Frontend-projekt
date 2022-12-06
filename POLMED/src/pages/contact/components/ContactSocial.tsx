import { Link } from "react-router-dom";

type Props = {
  iconClassName: string;
};

const ContactSocials = function ({ iconClassName }: Props) {
  return (
    <Link to="">
      <i className={`contact-page-social--icon ${iconClassName}`}></i>
    </Link>
  );
};

export default ContactSocials;
