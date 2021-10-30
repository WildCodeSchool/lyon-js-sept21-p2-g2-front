import React, { useEffect } from 'react';
import axios from 'axios';
import homeImg from '../../assets/home-img.svg';
import TagList from '../TagList';
import '../../css/Home.css';

const Home = () => {
  const [search, setSearch] = React.useState('');
  const [countryList, setCountryList] = React.useState([]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    axios
      .get('https://countriesnow.space/api/v0.1/countries/flag/images')
      .then((res) => res.data.data)
      .then((data) => setCountryList(data));
    // return () => {
    //   cleanup
    // }
  }, []);

  return (
    <>
      <div className="home-container">
        <h1>Trip@WILDERS</h1>
        <h2>Share the world...</h2>
        <img src={homeImg} alt="home" />
        <label htmlFor="country">
          <input
            type="text"
            id="country-input"
            value={search}
            onChange={handleChange}
          />
          <button type="submit" id="search-btn">
            Search
          </button>
        </label>
      </div>
      <div className="dropdown">
        {countryList
          .filter((country) => country.includes(search))
          .map((elem) => (
            <div key={elem.name}>{elem.name}</div>
          ))}
      </div>
      <TagList />
    </>
  );
};

export default Home;
