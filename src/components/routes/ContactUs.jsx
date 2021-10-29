import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import { useToasts } from 'react-toast-notifications';
import './ContactUs.css';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const form = useRef();
  const { addToast } = useToasts();

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
          setName('');
          setMessage('');
          setPhone('');
          setEmail('');
          addToast('Thanks', {
            appearance: 'success',
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <h2>Contact Us</h2>
      <div className="contact-us-form">
        <h3>Name : </h3>
        <label htmlFor="name"> </label>
        <input
          type="text"
          id="name"
          name="user_name"
          autoComplete="off"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <h3>Email :</h3>
        <label htmlFor="email">
          <input
            type="email"
            name="user_email"
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </label>
        <h3>Phone (optional) :</h3>
        <label htmlFor="phone">
          <input
            type="text"
            id="phone"
            name="phone"
            autoComplete="off"
            onChange={(e) => setPhone(e.target.value)}
            value={phone}
          />
        </label>
        <h3>Message :</h3>
        <label htmlFor="message">
          <textarea
            name="message"
            autoComplete="off"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
        </label>
        <input type="submit" value="Send" />
      </div>
    </form>
  );
};

export default ContactUs;
