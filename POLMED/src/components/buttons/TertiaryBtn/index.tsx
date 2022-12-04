type Props = {
    content: string;
};

const TertiaryBtn = ({content}:Props) => {
    return <button className="btn btn-tertiary">{content}</button>;
};

export default TertiaryBtn;
