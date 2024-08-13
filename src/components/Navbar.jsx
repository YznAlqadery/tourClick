import { NavLink } from "react-router-dom";
import Logo from "./Logo";
export default function Navbar() {
  return (
    <header className="app__header">
      <nav className="navbar">
        <div className="nav__container">
          <NavLink to="/" className="nav__logo">
            <Logo />
          </NavLink>
          <ul className="nav__list">
            <li className="nav__link">
              <NavLink to="/product">Product</NavLink>
            </li>
            <li className="nav__link">
              <NavLink to="/pricing">Pricing</NavLink>
            </li>
            <li className="nav__link">
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
