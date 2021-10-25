import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer>
      <nav>
        <Link to="/contact-us">Contact Us </Link>{' '}
        <Link to="/about-us">About Us </Link>{' '}
      </nav>
    </footer>
  );
};

export default Footer;
