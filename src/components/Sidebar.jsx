import { NavLink, Outlet } from "react-router-dom";
import Logo from "./Logo";
import Footer from "./Footer";
export default function Sidebar() {
  return (
    <div className="cites__container">
      <Logo />
      <div className="buttons__nav">
        <NavLink to="cities" className="btn__nav">
          Cities
        </NavLink>
        <NavLink to="countries" className="btn__nav">
          Countries
        </NavLink>
      </div>
      <Outlet />
      <Footer />
    </div>
  );
}
