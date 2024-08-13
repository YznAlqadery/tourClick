import { Link } from "react-router-dom";
import logo from "../../public/images/logo.jpg";
export default function Logo() {
  return (
    <Link to="/">
      <img src={logo} alt="logo" className="logo" />
    </Link>
  );
}
