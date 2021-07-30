// NPM Packages
import React from "react";
import { Link } from "react-router-dom";

// Internal
import Logo from "../assets/parcel-logoo-name.jpg";
import SmallLogo from "../assets/parcel-logoo-nob.png";

export default function Header() {
  return (
    <nav classname="header">
      <Link to="/">
      <img className="logo" src={SmallLogo} alt="Blue parcel" />
      </Link>

      <div>
        <Link className="header-link" to="/">
          <h1>Home</h1>
        </Link>
      </div>
    </nav>
  );
}
