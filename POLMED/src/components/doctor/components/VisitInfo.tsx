type Props = {
  icon: string;
  content: string;
};

const VisitInfo = ({ icon, content }: Props) => {
  return (
    <div className="doctor-feature">
      <img src={icon} />
      <p>{content}</p>
    </div>
  );
};

export default VisitInfo;
