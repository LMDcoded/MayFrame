import React, {useState} from "react";
import classes from "./Header.module.css"
import logo from "../../Assets/agro/Agro LOGO.png";
import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";
import { CgClose } from "react-icons/cg";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const handleNavToggle = () => {
    setNavOpen(!navOpen);
  };
  const handleNavLinkClick = () => {
    setNavOpen(false);
  };
  return (
    <div className={classes.container}>
      <header>
        <div className={classes.logo}>
          <img src={logo} alt="logo" />
        </div>
        <nav  className={classes.navMenu}>
          <Link to="/" className={classes.navLink} onClick= {handleNavLinkClick}>
            <li>Home</li>
          </Link>
          <Link to="/Services" className={classes.navLink} onClick= {handleNavLinkClick}>
          <li>Services</li>
          </Link>
          <Link to="/AboutUs" className={classes.navLink} onClick= {handleNavLinkClick}>
          <li>About Us</li>
          </Link>
          <Link to="/Contact" className={classes.navLink} onClick= {handleNavLinkClick}>
            <li>Contact Us</li>
          </Link>
        </nav>
        <div className={classes.hamburger} onClick= {handleNavToggle}>
          {navOpen ? (<CgClose className="Icons"/>
          ):(
            <IoMdMenu className="Icons"/>
          )}
        </div>  
        <div className={navOpen ? classes.active: classes.mobileMenu}>
        <nav>
          <Link to="/" className={classes.navLink} onClick= {handleNavLinkClick}>
            <li>Home</li>
          </Link>
          <Link to="/Services" className={classes.navLink} onClick= {handleNavLinkClick}>
          <li>Services</li>
          </Link>
          <Link to="/AboutUs" className={classes.navLink} onClick= {handleNavLinkClick}>
          <li>About Us</li>
          </Link>
          <Link to="/Contact" className={classes.navLink} onClick= {handleNavLinkClick}>
            <li>Contact Us</li>
          </Link>
        </nav>
        </div>
      </header>
    </div>
  );
};

export default Header;
