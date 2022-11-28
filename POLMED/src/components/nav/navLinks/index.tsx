import { Link } from "react-router-dom";
import "./style.css";

type Props = {
  content: string;
  url: string;
};

const NavLink = ({ content, url }: Props) => {
  return (
    <li className="nav-item">
      <Link className="nav-link" to={url}>
        {content}
      </Link>
    </li>
  );
};

export default NavLink;
