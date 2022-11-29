import { Link } from "react-router-dom";
import "./style.css";

type Props = {
  content: string;
  url: string;
};

const NavItem = ({ content, url }: Props) => {
  return (
    <li className="nav-item">
      <Link className="nav-link" to={url}>
        {content}
      </Link>
    </li>
  );
};

export default NavItem;
