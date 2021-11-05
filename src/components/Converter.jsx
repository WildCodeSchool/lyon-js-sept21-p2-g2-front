import React, { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import usa from '../assets/united-states.png';
import arrow from '../assets/right-arrow.png';
import choice from '../assets/choice.png';
import '../css/Converter.css';

const Converter = () => {
  const { name } = useParams();
  const [amount, setAmount] = React.useState(1);
  const [result, setResult] = React.useState('');
  const [firstCurrency, setFirstCurrency] = React.useState('CHOOSE CURRENCY:');
  const [countries, setCountries] = React.useState([]);
  const [flag, setFlag] = React.useState(choice);
  const [currencies, setCurrencies] = React.useState([]);
  const [displayInput, setDisplayInput] = React.useState(false);
  const [displayToCurrency, setDisplayToCurrency] = React.useState(false);

  const firstLetter = name[0].toUpperCase();
  const restOfWord = name.slice(1, name.length);
  const capitalized = `${firstLetter}${restOfWord}`;
  const findToCurrency = currencies.filter(
    (country) => country.name === capitalized
  );
  const toCurrency = findToCurrency[0].currency;

  const from = firstCurrency;
  const to = toCurrency;

  const handleFlagChange = (e) => {
    const currentCountry = countries.find(
      (elem) => elem.name === e.target.value
    );
    setFlag(currentCountry.flag);

    const currentCurrency = currencies.find(
      (elem) => elem.name === e.target.value
    );
    setFirstCurrency(currentCurrency.currency);

    setDisplayInput(true);
    setDisplayToCurrency(true);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
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
  }, [amount, result, from]);

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

  /* ***** GET CURRENCIES ****** */
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
          <p
            className="currencies"
            style={{ fontSize: displayInput ? '16px' : '12px' }}
          >
            {from}
          </p>
        </div>
        <select name="" id="" onChange={handleFlagChange}>
          <option value="">--Select currency--</option>
          {countries.map((country) => (
            <option key={country.name} value={country.name}>
              {country.name}
            </option>
          ))}
        </select>
        <button type="button">
          <img src={arrow} alt="arrow" />
        </button>
        <div className="toCurrency">
          <img src={usa} alt="usa flag" />
          <p className="currencies">USD</p>
        </div>
        <input
          type="text"
          value={amount}
          style={{ display: displayInput ? 'block' : 'none' }}
          onChange={handleAmountChange}
        />
        <p
          id="convertion-result"
          style={{ display: displayToCurrency ? 'block' : 'none' }}
        >
          {result}$
        </p>
      </div>
    </div>
  );
};

export default Converter;
