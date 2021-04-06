// NPM Packages
import React from "react";
import { Link } from "react-router-dom";

// Internal
import Logo from "../assets/parcel-logoo-name2.jpg";

export default function Header() {
  return (
    <nav>
      <img className="logo" src={Logo} alt="Blue parcel" />

      <div>
      <Link className="header-link" to="/">
          <h2>Home</h2>
        </Link>
        </div>
    </nav>
  );
}
