//! Header component (Child component)
import React from "react";

function Header() {
  return (
    <header>
      <nav className="nav">
        <img src="./react-logo.png" alt="react-logo" className="nav-logo" />
        <ul className="nav-items">
          <li>About</li>
          <li>Pricing</li>
          <li>Menu</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
