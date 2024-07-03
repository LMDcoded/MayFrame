import React from "react";
import classes from "./Competence.module.css";
import star from '../../Assets/Star 1.png'

const Competence = () => {
  return (
    <div className={classes.container}>
      <div className={classes.starImg}>
        <img src={star} alt="star" />
      </div>
      <div className={classes.compFlex}>
        <div className={classes.compText}>
            <p>Our competence is confirmed by a decade of experience</p>
        </div>
        <div className={classes.compHr}><hr/></div>
        <div className={classes.compNum}>
            <h2>125k</h2>
            <p>We have several customers across the country and deliver to their satisfaction</p>
            <hr/>
            <h2>20%</h2>
            <p>We offer huge discount on services</p>
        </div>
      </div>
    </div>
  );
};

export default Competence;
