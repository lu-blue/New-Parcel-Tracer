import SmallLogo from "../assets/parcel-logoo-nob.png";

export default function Footer() {
  return (
    <footer className="footer">
      <br />

      <div className="footer__link">
        <h3>
          <a href="mailto:lubov.novozhilova@gmail.com">Contact us</a>
        </h3>
      </div>

      <img className="logo" src={SmallLogo} alt="Small blue parcel" />
    </footer>
  );
}
