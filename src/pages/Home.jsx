// NPM Packages
import React from "react";
import { Link } from "react-router-dom";

// Internal
import TaxPic from "../assets/tax_package.jpg";
import Logo from "../assets/parcel-logoo-name.jpg";

export default function Home() {
  return (
    <div className="home">
      <h1> Welcome to Parcel Tracer </h1>

      <h2>Trace your parcels and never miss a thing</h2>

      <div>
        <Link to="/AccountView">
          <button className="home-button">GO TO ACCOUNT</button>
        </Link>
      </div>

      {/* <img className="logo" src={Logo} alt="Blue parcel" />        */}

      <img
        className="taxa"
        src={TaxPic}
        alt="A dachshund sitting in a cartoon box"
      />
    </div>
  );
}
