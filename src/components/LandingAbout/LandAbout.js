import React from "react";
import classes from "./LandAbout.module.css";
import about from "../../Assets/Rectangle 9551 (2).png";

const LandAbout = () => {
  return (
    <div className={classes.container}>
      <div className={classes.aboutImage}>
        <img src={about} alt="abtimage" />
      </div>
      <div className={classes.aboutText}>
        <h5>About Us</h5>
        <h3>Welcome to MayFrame Group</h3>
        <p>
          At Mayframe, we are committed to providing a wide range of exceptional
          services to meet your diverse needs, Whether you're looking to enhance
          your driving skills, seeking expert consultancy services, exploring
          the world of farms and agriculture, or venturing into investment and
          property, we have you covered.
        </p>
        <button>Learn More</button>
      </div>
    </div>
  );
};

export default LandAbout;
