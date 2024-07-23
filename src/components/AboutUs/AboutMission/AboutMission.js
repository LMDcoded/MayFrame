import React from "react";
import classes from "./AboutMission.module.css";

const AboutMission = () => {
  return (
    <div className={classes.container}>
      <div className={classes.welcome}>
        <h3>Welcome to MayFrame Group</h3>
        <p>
          At Mayframe, we are committed to providing a wide range of exceptional
          services to meet your diverse needs, Whether you're looking to enhance
          your driving skills, seeking expert consultancy services, exploring
          the world of farms and agriculture, or venturing into investment and
          property, we have you covered. With a commitment to excellence and a
          customer-centric approach, Mayframe group has established itself as a
          trusted name in the market.{" "}
        </p>
      </div>
      <div className={classes.vision}>
        <h3>Our Vision</h3>
        <p>
          At MayFrame group, we specialized in driving transformative growth and
          success that assist businesses in various domains.With a commitment to
          excellence and a customer-centric approach, Mayframe group has
          established itself as a trusted name in the market.
        </p>
      </div>
      <div className={classes.mission}>
        <h3>Our Mission</h3>
        <p>
          We are all about empowering growth and transforming industries.With a
          commitment to excellence and a customer-centric approach, Mayframe
          group has established itself as a trusted name in the market.
        </p>
      </div>
    </div>
  );
};

export default AboutMission;
