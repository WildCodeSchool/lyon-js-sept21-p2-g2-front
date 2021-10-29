// import React, { useState } from 'react';
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_sdc178r',
        'template_vwjtsm9',
        form.current,
        'user_mI3BrjbBLfMBBouSp6bHO'
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

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log('ok');
  //   sendEmail();
  // };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <h2>Contact Us</h2>
      <h3>Name : </h3>
      <label htmlFor="name"> </label>
      <input type="text" id="name" name="user_name" />
      <h3>Email :</h3>
      <label htmlFor="email">
        <input type="email" name="user_email" />
      </label>
      <h3>Message :</h3>
      <label htmlFor="message">
        <textarea name="message" />
      </label>
      <input type="submit" value="Send" />
    </form>
    // <form className="contact-form">
    //
    //   <div className="form-content">
    //     <h3>Name : </h3>
    //     <input
    //       type="text"
    //       id="name"
    //       name="user_name"
    //       // onChange={(e) => setName(e.target.value)}
    //       // value={name}
    //       autoComplete="off"
    //     />
    //     <h3>Company : (optional)</h3>
    //     <input
    //       type="text"
    //       id="company"
    //       name="company"
    //       // onChange={(e) => setCompany(e.target.value)}
    //       // value={company}
    //     />
    //     <h3>Phone : (optional)</h3>
    //     <input
    //       type="text"
    //       id="phone"
    //       name="phone"
    //       // onChange={(e) => setPhone(e.target.value)}
    //       // value={phone}
    //     />
    //     <h3>Email :</h3>
    //     <div className="email-content">
    //       <input
    //         type="mail"
    //         id="email"
    //         name="user_email"
    //         // onChange={(e) => setEmail(e.target.value)}
    //         // value={email}
    //         autoComplete="off"
    //       />
    //     </div>
    //     <h3>Your message :</h3>
    //     <textarea
    //       id="message"
    //       name="message"
    //       // onChange={(e) => setMessage(e.target.value)}
    //       // value={message}
    //     />
    //   </div>
    //   <input
    //     type="submit"
    //     value="Send"
    //     className="button"
    //     onClick={sendEmail}
    //   />
    // </form>
  );
};

export default ContactUs;
