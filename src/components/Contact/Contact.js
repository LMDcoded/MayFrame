import React from "react";
import classes from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={classes.container}>
      <div className={classes.contactFlex}>
        <div className={classes.contactText}>
          <h3>Get In Touch To See How We Can Help.</h3>
        </div>
        <div className={classes.contactInput}>
          <h3>Contact Us</h3>
          <input type="text" name="Name" placeholder="Full Name" />
          <br />
          <input type="text" name="Email" placeholder="Email Address" />
          <br />
          <input type="text" name="Phone" placeholder="Phone Number" />
          <div className={classes.contactInput2}>
            <input type="message" name="Message" placeholder="Message" />
          </div>
          <button>Send Message</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
