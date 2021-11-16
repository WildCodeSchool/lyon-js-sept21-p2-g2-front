import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import { useToasts } from 'react-toast-notifications';
import '../../css/ContactUs.css';

const ContactUs = () => {
  const [processing, setProcessing] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const form = useRef();
  const { addToast } = useToasts();

  const sendEmail = (e) => {
    e.preventDefault();
    setProcessing(true);

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICEID,
        process.env.REACT_APP_EMAILJS_TEMPLATEID,
        form.current,
        process.env.REACT_APP_EMAILJS_KEYID
      )
      .then((result) => {
        console.log(result.text);
        setName('');
        setMessage('');
        setPhone('');
        setEmail('');
        addToast('Thanks, we will come back to you!', {
          appearance: 'success',
        });
      })
      .catch((error) => {
        console.log(error.text);
        addToast('Sorry, something wrong happened, please, try again later!', {
          appearance: 'error',
        });
      })
      .finally(() => setProcessing(false));
  };

  return (
    <div id="contactFormContainer">
      <form ref={form} onSubmit={sendEmail}>
        <div className="contact-us-form bg-melon-pink">
          <h2 id="title-contact-us">Contact Us</h2>
          <div className="grid-form">
            <h3>Name</h3>
            <label htmlFor="name">
              <input
                type="text"
                id="name-contact"
                name="user_name"
                autoComplete="off"
                onChange={(e) => setName(e.target.value)}
                value={name}
                disabled={processing}
                required
              />
            </label>
            <h3>Email</h3>
            <label htmlFor="email">
              <input
                type="email"
                name="user_email"
                autoComplete="off"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                disabled={processing}
                required
              />
            </label>
            <h3>
              Phone <span id="italic"> (optional) </span>{' '}
            </h3>
            <label htmlFor="phone">
              <input
                type="text"
                id="phone"
                name="phone"
                autoComplete="off"
                onChange={(e) => setPhone(e.target.value)}
                disabled={processing}
                value={phone}
              />
            </label>
          </div>
          <h3>Message</h3>
          <label htmlFor="message">
            <textarea
              name="message"
              autoComplete="off"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              disabled={processing}
              required
            />
          </label>
          <input
            type="submit"
            id="submit-btn"
            value="SEND"
            disabled={processing}
          />
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
