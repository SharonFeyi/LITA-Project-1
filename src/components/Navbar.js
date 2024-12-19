import React, { useState } from "react";
import menuIcon from "./images/icon-menu.svg";
import closeIcon from "./images/icon-close-menu.svg";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setMenuOpen(!menuOpen)}>
        <img src={menuOpen ? closeIcon : menuIcon} alt="Menu Icon" />
      </button>
      {menuOpen && (
        <nav className="mobile-menu">
          <ul>
            <li>Features</li>
            <li>Company</li>
            <li>Careers</li>
            <li>About</li>
          </ul>
        </nav>
      )}
    </div>
  );
}

export default Navbar;
