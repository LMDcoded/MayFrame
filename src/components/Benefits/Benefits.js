import React from "react";
import classes from "./Benefits.module.css";

const Benefits = () => {
  return (
    <div className={classes.container}>
      <h3>Benefits Of Choosing Us</h3>
      <div className={classes.overallBft}>
        <div className={classes.bft}>
          <h4>01</h4>
          <h2>Comprehensive Expertise</h2>
          <p>
            Benefit from our extensive knowledge and experience in both farming
            and agro-allied ventures. We possess a deep understanding of various
            agricultural practices, from livestock rearing to crop cultivation.
            Our team of experts is equipped with the skills and insights to
            provide tailored solutions that address your unique farm and
            agro-allied needs.
          </p>
        </div>
        <div className={classes.bft}>
          <h4>02</h4>
          <h2>Sustainable Approach</h2>
          <p>
            We are committed to sustainable agriculture practices that
            prioritize the long-term health of the environment and promote
            ecological balance. Our methods emphasize resource efficiency,
            biodiversity conservation, and organic farming techniques. By
            partnering with us, you can contribute to a greener future while
            ensuring the profitability and resilience of your agricultural
            operations.
          </p>
        </div>
        <div className={classes.bft}>
          <h4>03</h4>
          <h2>Holistic Support</h2>
          <p>
            We We provide comprehensive support throughout your farming journey.
            From assisting with land preparation, crop selection, and livestock
            management to offering guidance on market trends and value-added
            agro-processing, we are dedicated to helping you achieve success at
            every stage.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Benefits;
