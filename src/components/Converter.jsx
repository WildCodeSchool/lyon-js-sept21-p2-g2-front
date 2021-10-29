import React, { /* useState, */ useEffect } from 'react';
import axios from 'axios';
import usa from '../assets/united-states.png';
import arrow from '../assets/right-arrow.png';
import choice from '../assets/choice.png';
import '../css/Converter.css';

const Converter = () => {
  const [amount, setAmount] = React.useState('');
  const [result, setResult] = React.useState('');
  const [firstCurrency, setFirstCurrency] = React.useState('CHOOSE CURRENCY:');
  const [countries, setCountries] = React.useState([]);
  const [flag, setFlag] = React.useState(choice);
  const [currencies, setCurrencies] = React.useState([]);

  const from = firstCurrency;
  const to = 'USD';

  const handleFlagChange = (e) => {
    const currentCountry = countries.find(
      (elem) => elem.name === e.target.value
    );
    setFlag(currentCountry.flag);

    const currentCurrency = currencies.find(
      (elem) => elem.name === e.target.value
    );
    setFirstCurrency(currentCurrency.currency);
  };

  /* ***** EXCHANGE RATE API **** */
  useEffect(() => {
    const url = `https://api.exchangerate.host/convert?from=${from}&to=${to}`;
    axios
      .get(url)
      .then((res) => res.data.info.rate)
      .then((data) => setResult((data * amount).toFixed(2)))
      .catch((err) => console.error(err));
    // return () => {
    //   cleanup;
    // };
  }, [amount, result]);

  /* ***** GET COUNTRIES NAMES LIST AND FLAGS ***** */
  useEffect(() => {
    axios
      .get('https://countriesnow.space/api/v0.1/countries/flag/images')
      .then((res) => res.data.data)
      .then((data) => setCountries(data));
    // return () => {
    //   cleanup
    // }
  }, []);

  useEffect(() => {
    axios
      .get('https://countriesnow.space/api/v0.1/countries/currency')
      .then((res) => res.data.data)
      .then((data) => {
        console.log(data);
        setCurrencies(data);
      });
    // return () => {
    //   cleanup
    // }
  }, []);

  return (
    <div className="converter-container">
      <div className="devise-container">
        <div>
          <img src={flag} alt="flag" />
          <p className="currencies">{from}</p>
          <select name="" id="" onChange={handleFlagChange}>
            <option value="">--Select currency--</option>
            {countries.map((country) => (
              <option key={country.name} value={country.name}>
                {country.name}
              </option>
            ))}
          </select>
        </div>
        <button type="button">
          <img src={arrow} alt="arrow" />
        </button>
        <div>
          <img src={usa} alt="usa flag" />
          <p className="currencies">USD</p>
        </div>
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <p id="convertion-result">{result}$</p>
      </div>
    </div>
  );
};

export default Converter;
