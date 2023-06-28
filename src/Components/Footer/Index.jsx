import Social from "../Social";
import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="Footer__Container">
        <p className="Footer__CopyRight">
          Copyright © 2023 Todos los derechos reservados por Andres Cerero
        </p>
        <Social />
      </div>
    </footer>
  );
};

export default Footer;
