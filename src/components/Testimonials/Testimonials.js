import React from "react";
import classes from './Testimonials.module.css'
import test from '../../Assets/agro/testimonial.png'


const Testimonials = () => {
  return (
    <div className={classes.container}>
      <h5>Testimonials</h5>
      <h3>What Our Customers Says About Us</h3>
      <div className={classes.allCards}>
        <div className={classes.card}>
          <img src={test} alt="testimonials" />
          <h4>Tolu Oyeh</h4>
          <h6>Business woman</h6>
          <p>
            {" "}
            Their professionalism, reliability, and unwavering support make them
            the ideal partner for anyone in the agro-allied industry. I highly
            recommend Mayframe farms & Agro-Allied for their outstanding
            contributions to the agricultural sector.
          </p>
        </div>
        <div className={classes.card}>
          <img src={test} alt="testimonials" />
          <h4>Tolu Oyeh</h4>
          <h6>Business woman</h6>
          <p>
            {" "}
            Their professionalism, reliability, and unwavering support make them
            the ideal partner for anyone in the agro-allied industry. I highly
            recommend Mayframe farms & Agro-Allied for their outstanding
            contributions to the agricultural sector.
          </p>
        </div>
        <div className={classes.card}>
          <img src={test} alt="testimonials" />
          <h4>Tolu Oyeh</h4>
          <h6>Business woman</h6>
          <p>
            {" "}
            Their professionalism, reliability, and unwavering support make them
            the ideal partner for anyone in the agro-allied industry. I highly
            recommend Mayframe farms & Agro-Allied for their outstanding
            contributions to the agricultural sector.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
