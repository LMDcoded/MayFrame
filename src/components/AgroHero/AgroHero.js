import React from "react";
import "./AgroHero.css";

const AgroHero = () => {
  return (
    <div className="heroContainer">
      <div className="agroHero">
        <div className="Text">
          <h1>Empowering Agro Farms For Success</h1>
          <p>Empowering Sustainable Agriculture and Agro-Allied Ventures.</p>
          <button>Make Enquiry</button>
        </div>
      </div>
      <div className="performance">
        <div className="farmers">
          <h2>100k</h2>
          <p>Farmers Joined with Us </p>
        </div>
        <hr />
        <div className="products">
          <h2>1000+</h2>
          <p>Products Sold</p>
        </div>
        <hr />
        <div className="construction">
          <h2>124+</h2>
          <p>Total Constructions</p>
        </div>
      </div>
    </div>
  );
};

export default AgroHero;
