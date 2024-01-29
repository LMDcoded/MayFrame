import React from "react";
import classes from "./About.module.css";
import Big from "../../Assets/agro/Rectangle 9.png";
import Small from "../../Assets/agro/Rectangle 10.png";

const About = () => {
  return (
    <div className={classes.container}>
      <div className={classes.aboutText}>
        <h5>About Us</h5>
        <h2>Mayframe Farms & Agro-Allied</h2>
        <p>
          The company owns and manages a portfolio of farms that cultivate a
          variety of crops and engage in livestock rearing. By Implementing
          modern farming techniques, sustainable practices, and leveraging
          technology, Mayframe group ensures high-quality produce and promotes
          environmentally friendly agricultural practices. The farms also serve
          as a platform for reserach and development to enhance productivity and
          introduce innovation in the agro-sector.
        </p>
      </div>
      <div className={classes.aboutImage}>
        <div className={classes.bigImage} >
        <img src={Big} alt="big" />
        </div>
        <div className={classes.smallImage}>
        <img src={Small}  alt="small" />
        </div>
      </div>
    </div>
  );
};

export default About;
