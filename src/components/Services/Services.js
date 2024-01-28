import React from "react";
import classes from "./Services.module.css";
import mngt from "../../Assets/agro/SERVICES.png";
import pdct from "../../Assets/agro/PRODUCTS.png";
import arbl from "../../Assets/agro/PRODUCTS 2.png";
import enmt from "../../Assets/agro/MANAGEMENT.png"

const Services = () => {
  return (
    <div className={classes.container}>
      <h2>What Services We’re Offering</h2>
      <div className={classes.serviceFlex}>
        <div className={classes.serviceText}>
          <h3>Farm Management Consultancy</h3>
          <p>
            We provides specialized advisory services to farmers and
            agribusinesses, helping them optimize their operations and achieve
            sustainable success by offering expertise in strategic planning,
            financial analysis, risk management, and operational efficiency. We
            are also focus on providing tailored solutions and guidance to
            enhance farm performance, maximize resource utilization, and ensure
            long-term viability.
          </p>
        </div>
        <div className={classes.serviceImage}>
          <img src={mngt} alt="management" />
        </div>
      </div>
      <div className={classes.serviceFlex}>
        <div className={classes.serviceImage2}>
          <img src={pdct} alt="product" />
        </div>
        <div className={classes.serviceText2}>
          <h3>Live Stock Farm Products</h3>
          <p>
            Our customers can access livestock products without the need for
            direct ownership or management of animals. Additionally, we allow
            businesses to manage the production and distribution process more
            efficiently, ensuring consistent quality and availability of
            livestock products.
          </p>
        </div>
      </div>
      <div className={classes.serviceFlex}>
        <div className={classes.serviceText3}>
          <h3>Arable Farm Products</h3>
          <p>
            We help our customers to enjoy the benefits of locally grown,
            sustainable, and high-quality produce while relieving them of the
            complexities and time commitment associated with farming. We offer
            convenience and flexibility to customers, as they can enjoy the
            benefits of farm-fresh products without the responsibility of
            farming operations.
          </p>
        </div>
        <div className={classes.serviceImage3}>
          <img src={arbl} alt="arable" />
        </div>
      </div>
      <div className={classes.serviceFlex}>
        <div className={classes.serviceImage4}>
          <img src={enmt} alt="enumeration" />
        </div>
        <div className={classes.serviceText4}>
          <h3>Agribusiness Enumeration Management</h3>
          <p>
            We assist agribusinesses in efficiently organizing, recording, and
            managing their agricultural assets, such as crops, livestock,
            machinery, and inventory. Businesses can benefit from improved data
            accuracy, reduced paperwork, and enhanced operational efficiency.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
