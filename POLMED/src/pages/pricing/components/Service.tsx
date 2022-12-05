type Props = {
  content: string;
};

const Service = ({ content }: Props) => {
  return (
    <li className="pricing-services-li">
      <i className="pricing-services-li-icon"></i>
      <p className="pricing-services-text">{content}</p>
    </li>
  );
};

export default Service;
