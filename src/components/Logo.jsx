import { Link } from "react-router-dom";

export default function Logo() {
  return (
    <Link to="/">
      <img src="src\assets\images\logo.jpg" alt="logo" className="logo" />
    </Link>
  );
}
