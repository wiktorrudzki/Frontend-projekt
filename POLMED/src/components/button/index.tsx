type Props = {
  content: string;
  btnType: "btn-primary" | "btn-secondary" | "btn-tertiary" | "btn-warning";
  onClick?: () => void;
};

const Button = ({ content, btnType, onClick }: Props) => {
  return (
    <button onClick={onClick} className={`btn ${btnType}`}>
      {content}
    </button>
  );
};

export default Button;
