import "../blocks/Header.css";
import instagram from "../images/instagram-logo.svg";
import linkedin from "../images/linkedin-logo.svg";
import github from "../images/github-logo.svg";
import gmail from "../images/gmail-logo.svg";
import aplogo from "../images/ap-logo.svg";
const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img className="header__logo-image" src={aplogo} alt="AP" />
      </div>

      <ul className="header__nav">
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="">Projects</a>
        </li>
        <li>
          <a href="">Languages</a>
        </li>
        <li>
          <a href="">Contact</a>
        </li>
      </ul>

      <div className="header__social">
        <img className="linkedin__logo" alt="LinkedIn" src={linkedin} />
        <img className="github__logo" alt="GitHub" src={github} />
        <img className="gmail__logo" alt="Gmail" src={gmail} />
        <img className="instagram__logo" alt="Instagram" src={instagram} />
      </div>
    </header>
  );
};

export default Header;
