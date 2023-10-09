import footerStyles from "./Footer.module.css";
import logo from "../assets/logo_light.png";

const Footer = () => {
  return (
    <div>
      <img className={footerStyles.logo} src={logo} alt="innoD Logo" />
      <div>
        <p className={footerStyles.text}>
          ©All rights reserved by Innovative Design at Berkeley
        </p>
      </div>
    </div>
  );
};

export default Footer;
