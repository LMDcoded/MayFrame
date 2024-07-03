import React from "react";
import classes from "./ValueProps.module.css";

const ValueProps = (Props) => {
  return (
    <div className={classes.container}>
      <h3>{Props.head}</h3>
      <div className={classes.overallBft}>
        <div className={classes.bft}>
          <img src={Props.logo1} alt="valueimage" />
          <h2>{Props.topic1}</h2>
          <p>{Props.content1}</p>
        </div>
        <div className={classes.bft}>
          <img src={Props.logo2} alt="valueimage" />
          <h2>{Props.topic2}</h2>
          <p>{Props.content2}</p>
        </div>
        <div className={classes.bft}>
          <img src={Props.logo3} alt="valueimage" />
          <h2>{Props.topic3}</h2>
          <p>{Props.content3}</p>
        </div>
      </div>
      <div className={classes.overallBft2}>
        <div className={classes.bft}>
          <img src={Props.logo4} alt="valueimage" />
          <h2>{Props.topic4}</h2>
          <p>{Props.content4}</p>
        </div>
        <div className={classes.bft}>
          <img src={Props.logo5} alt="valueimage" />
          <h2>{Props.topic5}</h2>
          <p>{Props.content5}</p>
        </div>
        <div className={classes.bft}>
          <img src={Props.logo6} alt="valueimage" />
          <h2>{Props.topic6}</h2>
          <p>{Props.content6}</p>
        </div>
      </div>
    </div>
  );
};

export default ValueProps;
