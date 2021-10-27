import React, { /* useState, */ useEffect } from 'react';
import axios from 'axios';
import swiss from '../assets/switzerland.png';
import japan from '../assets/japan.png';
import arrow from '../assets/right-arrow.png';
import '../css/Converter.css';

const Converter = () => {
  const [amount, setAmount] = React.useState('');
  const [result, setResult] = React.useState('');

  const from = 'EUR';
  const to = 'USD';
  const apiKey = 'b201704f8af9a3f10da3fae8fcf7d77b';

  const conversion = `${to}${from}`;

  useEffect(() => {
    const url = `http://apilayer.net/api/live?access_key=${apiKey}&currencies=${from}&source=${to}&format=1`;
    axios
      .get(url)
      .then((res) => res.data.quotes[conversion])
      .then((data) => setResult(data * amount))
      .catch((err) => console.error(err));
    // return () => {
    //   cleanup;
    // };
  }, [amount, result]);

  return (
    <div className="converter-container">
      <div className="devise-container">
        <div>
          <img src={swiss} alt="swiss flag" />
          <span>CHF</span>
        </div>
        <button type="button">
          <img src={arrow} alt="arrow" />
        </button>
        <div>
          <img src={japan} alt="japan flag" />
          <span>JPY</span>
        </div>
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <p id="convertion-result">{result}¥</p>
      </div>
    </div>
  );
};

export default Converter;

// API key: b201704f8af9a3f10da3fae8fcf7d77b
