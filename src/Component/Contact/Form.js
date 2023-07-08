import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import "./contact.css"

const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_ry1gg3u',
        'template_tay64hb',
        form.current,
        'opgMUkytqspLCBMXr'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="form">
      <form ref={form} onSubmit={sendEmail}>
        <label>Your Name</label>
         <input type="text" /> 
        <label>Email Address</label>
        <input type="email" name="user-email" />
        <label>Subject</label>
        <input type="text" name="email-subject" />
        <label>Message</label>
        <textarea rows="6" name="email-message" placeholder="Type Your Message Here" />
        <button type="submit" className="btn"  >Submit</button>
      </form>
    </div>
  );
};

export default Form;
