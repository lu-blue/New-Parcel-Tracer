// NPM Packages
import React from "react";
import { Link } from "react-router-dom";

// Internal
import MapPic from "../assets/pin-adventure-map.jpg";
import Logo from "../assets/parcel-logoo-name.jpg";

export default function Home() {
  return (
    <div>
      <h1> Welcome to Parcel Tracer </h1>

      <h2>Trace your parcels and never miss a thing</h2>

      <div>
        <Link className="home-link" to="/AccountView">
          <button className="home-button">Go to Your Account</button>
        </Link>
      </div>
     

      <img className="logo" src={Logo} alt="Blue parcel" />       

      {/* <img className="biglogo" src={MapPic} alt="A real map with pins" /> */}
    </div>
  );
}
