import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <nav className="navigation">
        <ul>
          <li>
            <Link to="/contact-us">Contact Us </Link>{' '}
          </li>
          <li>
            <Link to="/about-us">About Us </Link>{' '}
          </li>
        </ul>
      </nav>
      <div className="copyright">
        © 2021 Copyright : WildCodeSchool/Trip@Wilders
      </div>
    </footer>
  );
};

export default Footer;
