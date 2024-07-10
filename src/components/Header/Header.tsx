import mainLogo from "src/assets/main-logo.png";
import linkedinLogo from "src/assets/linkedin-logo.png";
import instagramLogo from "src/assets/Instagram-logo.png";
import facebookLogo from "src/assets/facebook-logo.png";
import userIcon from "src/assets/user-icon.png";

import "./header.scss";

export function Header() {
  return (
    <div className="header-spacing">
      <header className="header">
        <figure className="socials">
          <img className="main-logo" src={mainLogo} alt="Main Logo" />
          <img
            className="socials-logo"
            src={linkedinLogo}
            alt="Linkedin Logo"
          />
          <img
            className="socials-logo"
            src={instagramLogo}
            alt="Instagram Logo"
          />
          <img
            className="socials-logo"
            src={facebookLogo}
            alt="Facebook Logo"
          />
        </figure>
        <ul>
          <li>მთავარი</li>
          <li>ჩვენს შესახებ</li>
          <li>კონტაქტი</li>
          <figure className="sign-in">
            <img src={userIcon} alt="User Icon" />
            <figcaption>შესვლა</figcaption>
          </figure>
        </ul>
      </header>
    </div>
  );
}

export default Header;
