import React from "react";
import classes from "./Footer.module.css";
import footLogo from "../../Assets/agro/Agro LOGO.png";
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa6";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";
import { IoLogoLinkedin } from "react-icons/io";

const Footer = () => {
  return (
    <div className={classes.container}>
      <footer>
        <div className={classes.logoSide}>
          <div className={classes.footerLogo}>
            <img src={footLogo} alt="footLogo"></img>
          </div>
          <div className={classes.foottext}>
            <p>Empowering Sustainable Agriculture and Agro-Allied Ventures.</p>
          </div>
          <div className={classes.footaddress}>
            <p>
              {" "}
              <CiLocationOn /> Ogun State, Nigeria
            </p>
            <p>
              {" "}
              <IoCallOutline /> 08079109515
            </p>
            <p>
              <FaWhatsapp /> 08079109515
            </p>
          </div>
        </div>
        <div className={classes.quicklinkscontainer}>
          <div className={classes.quicklinks}>
            <h4>Quicklinks</h4>
            <p>Home</p>
            <p> Services</p>
            <p>About us</p>
            <p> Contact us</p>
          </div>
          <div className={classes.followUs}>
            <h4>Follow us</h4>
            <div className={classes.Socials}>
              <div className={classes.twitter}>
                {" "}
                <AiFillTwitterCircle />
              </div>
              <div className={classes.instagram}>
                {" "}
                <TiSocialInstagram />
              </div>
              <div className={classes.linkedin}>
                {" "}
                <IoLogoLinkedin />
              </div>
              <div className={classes.facebook}>
                {" "}
                <FaFacebook />
              </div>
            </div>
          </div>
          <div className={classes.Email}>
            <h4>Email</h4>
            <a href="mailto:s.joshlam@gmail.com">s.joshlam@gmail.com</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
