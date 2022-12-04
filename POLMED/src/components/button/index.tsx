type Props = {
    content: string;
    className: "btn-primary" | "btn-secondary" | "btn-tertiary" | "btn-warning";
};

const Button = ({content, className}:Props) => {
    return <button className={`btn ${className}`}>{content}</button>;
};

export default Button;
