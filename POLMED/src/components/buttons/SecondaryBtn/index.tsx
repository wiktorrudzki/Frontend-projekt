type Props = {
    content: string;
};

const SecondaryBtn = ({content}:Props) => {
    return <button className="btn btn-secondary">{content}</button>;
};

export default SecondaryBtn;
