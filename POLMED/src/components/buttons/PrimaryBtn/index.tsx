type Props = {
    content: string;
};

const PrimaryBtn = ({content}:Props) => {
    return <button className="btn btn-primary">{content}</button>;
};

export default PrimaryBtn;
