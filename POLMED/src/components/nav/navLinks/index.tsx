import "./style.css";

type Props = {
  content: string;
};

const NavLink = ({ content }: Props) => {
  return <li className="nav-link">{content}</li>;
};

export default NavLink;
