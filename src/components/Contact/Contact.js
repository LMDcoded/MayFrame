import React, { useRef, useState } from 'react';
import classes from './Contact.module.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [response, showResponse] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      'service_0popjpf', 
      'template_u2pqw8e', 
      form.current, 
      'JNWtspPrc8M3BcGTz'
    )
    .then(
      (result) => {
        console.log(result.text);
        console.log('Thank you! Your message has been sent successfully');
        showResponse(true);
        setTimeout(() => {
          showResponse(false);
        }, 5000);
      },
      (error) => {
        console.log(error.text);
        console.log('Message not sent');
      }
    );
    form.current.reset();
  };

  return (
    <div className={classes.container}>
      <div className={classes.contactFlex}>
        <div className={classes.contactText}>
          <h3>Get In Touch To See How We Can Help.</h3>
        </div>
        <div className={classes.contactInput}>
          <h3>Contact Us</h3>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="Name" placeholder="Full Name" />
            <br />
            <input type="email" name="Email" placeholder="Email Address" />
            <br />
            <input type="text" name="Phone" placeholder="Phone Number" />
            <div className={classes.contactInput2}>
              <input type='text' name="Message" placeholder="Message" />
            </div>
            <button type="submit">Send Message</button>
          </form>
          {response && <p>Thank you! Your message has been sent successfully</p>}
        </div>
      </div>
    </div>
  );
};

export default Contact;
