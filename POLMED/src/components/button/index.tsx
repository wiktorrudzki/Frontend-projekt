type Props = {
    content: string;
    className: string;
};

const Button = ({content, className}:Props) => {
    return <button className={className}>{content}</button>;
};

export default Button;
