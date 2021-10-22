import React from 'react';
import homeImg from '../assets/home-img.svg';
import '../Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Trip@WILDERS</h1>
      <h2>Share the world...</h2>
      <img src={homeImg} alt="home" />
      <label htmlFor="country">
        <input type="text" id="country-input" />
        <button type="submit" id="search-btn">
          Search
        </button>
      </label>
    </div>
  );
};

export default Home;
