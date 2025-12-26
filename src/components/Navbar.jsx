import { NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Navbar() {
  const location = useLocation();
  const [underlineStyle, setUnderlineStyle] = useState({});

  useEffect(() => {
    // Get the active link element
    const activeLink = document.querySelector(".nav .link.active");
    if (activeLink) {
      setUnderlineStyle({
        width: activeLink.offsetWidth + "px",
        left: activeLink.offsetLeft + "px",
      });
    }
  }, [location]);

  return (
    <nav className="nav">
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        Home
      </NavLink>

      <NavLink
        to="/stats"
        className={({ isActive }) => (isActive ? "link active" : "link")}
      >
        Stats
      </NavLink>

      <span className="underline" style={underlineStyle}></span>
    </nav>
  );
}
