import React, { useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import homeImg from '../../assets/home-img.svg';
import MvdList from '../MvdList';
import '../../css/Home.css';

const Home = () => {
  const [search, setSearch] = React.useState('');
  const [countryList, setCountryList] = React.useState([]);
  const [displaySearchFilter, setDisplaySearchFilter] = React.useState(false);

  const handleChange = (e) => {
    const currentSearch = e.target.value;
    if (currentSearch.length > 1) {
      const firstLetter = currentSearch[0].toUpperCase();
      const capitalized = currentSearch.replace(currentSearch[0], firstLetter);
      setSearch(capitalized);
      setDisplaySearchFilter(true);
    } else if (currentSearch.length === 1) {
      const firstLetter = currentSearch[0].toUpperCase();
      setSearch(firstLetter);
      setDisplaySearchFilter(true);
    } else {
      setSearch('');
      setDisplaySearchFilter(false);
    }
  };

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v2/all?fields=flags,name,currencies`)
      .then((res) => setCountryList(res.data));
  }, []);

  return (
    <div id="homeContainer">
      <div id="titleHome">
        <h1 id="mainTitle">Trip@WILDERS</h1>
      </div>
      <h2>Share the world...</h2>
      <img src={homeImg} alt="" className="home-image" />
      <label htmlFor="country">
        <input
          type="text"
          id="country-input"
          autoComplete="off"
          value={search}
          onChange={handleChange}
        />
        <Link to={`/destination/${search.toLowerCase()}`}>
          <button type="submit" id="search-btn">
            Search
          </button>
        </Link>
      </label>
      <div
        className="dropdown"
        style={{ display: displaySearchFilter ? 'block' : 'none' }}
      >
        {countryList
          .filter((country) => country.name.includes(search))
          .map((elem) => (
            <Link to={`/destination/${elem.name.toLowerCase()}`}>
              <div className="flex items-center space-x-4 filter-container">
                <div>
                  <img
                    className="h-5 w-5 rounded-full"
                    src={elem.flags.png}
                    alt="flag"
                  />
                </div>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-dark-sienna">
                    {elem.name}
                  </p>
                </div>
              </div>
            </Link>
          ))}
      </div>
      <MvdList />
    </div>
  );
};

export default Home;
