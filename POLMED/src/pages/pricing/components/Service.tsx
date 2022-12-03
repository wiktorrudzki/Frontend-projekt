import circleRightIcon from "@/img/icons/circle-right-regular.svg";

type Props = {
  content: string;
};

const Service = ({ content }: Props) => {
  return (
    <li className="pricing-services-li">
      <img className="pricing-services-li-icon" src={circleRightIcon} />
      <p className="pricing-services-text">{content}</p>
    </li>
  );
};

export default Service;
