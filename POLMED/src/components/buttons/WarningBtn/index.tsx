type Props = {
    content: string;
};

const WarningBtn = ({content}:Props) => {
    return <button className="btn btn-warning">{content}</button>;
};

export default WarningBtn;
