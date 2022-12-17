type Props = {
  iconClassName: string;
  content: string;
};

const VisitInfo = ({ iconClassName, content }: Props) => {
  return (
    <div className="visit-feature">
      <i className={`visit-feature--icon ${iconClassName}`}></i>
      <p>{content.slice(0, -3)}</p>
    </div>
  );
};

export default VisitInfo;
