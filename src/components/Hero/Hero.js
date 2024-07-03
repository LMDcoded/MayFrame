import React from "react";
import classes from "./Hero.module.css";

const hero = () => {
  return (
    <div className={classes.container}>
      <div className={classes.heroText}>
        <h1>Build and Grow your Business with Expert Guidance</h1>
        <p>
          At Mayframe group, we specialize in driving transformative growth and
          success that assist businesses in various domains
        </p>
        <button>Explore More</button>
      </div>
      
    </div>
  );
};

export default hero;
