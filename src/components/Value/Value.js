import React from "react";
import classes from "./Value.module.css";
import ValueProps from "../ValueProps/ValueProps";
import logo1 from "../../Assets/Group 142 (1).png";
import logo2 from '../../Assets/Group 142 (2).png'
import logo3 from '../../Assets/Group 142 (3).png'
import logo4 from '../../Assets/Group 142 (6).png'
import logo5 from '../../Assets/Group 142 (5).png'
import logo6 from '../../Assets/Group 142 (4).png'

const Value = () => {
  return (
    <div className={classes.container}>
      <ValueProps
        head="Our Core Values"
        logo1={logo1}
        topic1="Honesty"
        content1="For us as a company, it is very important that the information provided to our customer is honest and true.  This value is what makes us different and help us to make decisions based on firm and true facts."
        logo2={logo2}
        topic2="Teamwork"
        content2="We built a team that works result-oriented, unifying talent and give and take to respect and join different opinions, knowledge and abilities because teamwork and mutual support build the foundation of our relationship."
        logo3={logo3}
        topic3="Liberty"
        content3="Our team member must show loyalty, referring to faithfulness, commitment, and interest defense in any moment for and in the name of the company." 
        logo4={logo4}
        topic4="Communication"
        content4="Each one of us must interact transparently & appropriately, trying to strengthen our interpersonal relations and the image of the company." 
        logo5={logo5}
        topic5="Service Quality"
        content5="Service quality is one of our most important values which demands all our effort, determination and courage to be successful in what we are doing and the services we are providing." 
        logo6={logo6}
        topic6="Constructive Spirit"
        content6="Our constructive spirit refers to a positive attitude, optimism, increase of value chain, creativity and good faith that must be shown and live by those who work in our company." 
      />
    </div>
  );
};

export default Value;
