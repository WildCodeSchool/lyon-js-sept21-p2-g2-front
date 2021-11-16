import React, { useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import arrow from '../assets/right-arrow.png';
import choice from '../assets/choice.png';
import '../css/Converter.css';

const Converter = () => {
  const { name } = useParams();
  const [amount, setAmount] = React.useState(1);
  const [result, setResult] = React.useState('');
  const [firstCurrency, setFirstCurrency] = React.useState('CHOOSE CURRENCY:');
  const [flag, setFlag] = React.useState(choice);
  const [displayInput, setDisplayInput] = React.useState(false);
  const [displayToCurrency, setDisplayToCurrency] = React.useState(false);
  const [destination, setDestination] = React.useState(null);
  const [countryList, setCountryList] = React.useState([]);

  const handleSelectCurrency = (e) => {
    const currentCountry = countryList.find(
      (elem) => elem.name === e.target.value
    );
    setFlag(currentCountry.flags.png);
    setFirstCurrency(currentCountry.currencies[0].code);

    setDisplayInput(true);
    setDisplayToCurrency(true);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  /* ***** COUNTRIES API FOR URL DESTINATION **** */
  useEffect(() => {
    axios
      .get(
        `https://restcountries.com/v3.1/name/${name}?fields=flags,name,currencies`
      )
      .then((res) => res.data[0])
      .then((data) => {
        setDestination(data);
      });
  }, []);

  /* ***** COUNTRIES API FOR COUNTRIES LIST **** */
  useEffect(() => {
    axios
      .get(`https://restcountries.com/v2/all?fields=flags,name,currencies`)
      .then((res) => setCountryList(res.data));
  }, []);

  /* ***** EXCHANGE RATE API **** */
  useEffect(() => {
    if (destination && firstCurrency !== 'CHOOSE CURRENCY:') {
      const from = firstCurrency;
      const to = Object.keys(destination.currencies)[0];
      const url = `https://api.exchangerate.host/convert?from=${from}&to=${to}`;
      axios
        .get(url)
        .then((res) => res.data.info.rate)
        .then((data) => setResult((data * amount).toFixed(2)));
      // .catch((err) => console.error(err));
    }
  }, [amount, destination, firstCurrency]);

  if (!destination) {
    return (
      <div className="flex justify-center items-center flex-col my-4">
        <div
          className="
        animate-spin
        rounded-full
        h-20
        w-20
        border-t-2 border-b-2 border-dark-sienna my-3
      "
        />
        <span className="text-dark-sienna">LOADING</span>
      </div>
    );
  }
  const [currencyCode] = Object.keys(destination.currencies);

  return (
    <div id="primeContainer">
      <div className="converter-container">
        <div className="devise-container">
          <div>
            <img src={flag} alt="flag" />
            <p className="currencies">{firstCurrency}</p>
          </div>
          <select name="" id="" onChange={handleSelectCurrency}>
            <option value="">--Select currency--</option>
            {countryList.map((country) => (
              <option key={country.name} value={country.name}>
                {country.name}
              </option>
            ))}
          </select>
          <button type="button">
            <img src={arrow} alt="arrow" />
          </button>
          <div className="toCurrency">
            <img src={destination.flags.png} alt="usa flag" />
            <p className="currencies">{currencyCode}</p>
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
            {result}
            {destination.currencies[currencyCode].symbol}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Converter;
