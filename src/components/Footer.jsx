import { Link } from "react-router-dom";

import SmallLogo from "../assets/parcel-logoo-nob.png";

export default function Footer() {
  return (
    <footer className="footer">
      
<br/>
      <div className="footer__link">
        <h2>
          <a href="mailto:lubov.novozhilova@gmail.com">Contact us</a>
        </h2>
      
      <Link to="/">
      <img className="logo" src={SmallLogo} alt="Small blue parcel" />
      </Link>
      </div>
    </footer>
  );
}
