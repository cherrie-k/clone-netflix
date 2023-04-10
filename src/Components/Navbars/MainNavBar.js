import DetailSearch from "./DetailSearch";
import NavGlobe from "./NavGlobe";
import NavLogin from "./NavLogin";
import "./NavBarStyle.css";

export default function MainNavBar() {
  return (
    <nav className="nav" style={{ display: "flex" }}>
      <button to="/" className="site-title">
        ALogo
      </button>
      <DetailSearch />
      <a href="/host/homes">당신의 공간을 에어비앤비하세요</a>
      <NavGlobe />
      <NavLogin />
    </nav>
  );
}
