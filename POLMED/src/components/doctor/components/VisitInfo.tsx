type Props = {
  iconClassName: string;
  content: string;
};

const VisitInfo = ({ iconClassName, content }: Props) => {
  return (
    <div className="doctor-feature">
      <i className={`doctor-feature--icon ${iconClassName}`}></i>
      <p>{content}</p>
    </div>
  );
};

export default VisitInfo;
