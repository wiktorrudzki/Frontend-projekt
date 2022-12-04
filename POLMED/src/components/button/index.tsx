type Props = {
    content: string;
    btnType: "btn-primary" | "btn-secondary" | "btn-tertiary" | "btn-warning";
};

const Button = ({content, btnType}:Props) => {
    return <button className={`btn ${btnType}`}>{content}</button>;
};

export default Button;
