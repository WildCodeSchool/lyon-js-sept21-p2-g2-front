import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import Paper from '@material-ui/core/Paper';
import { Button, TextField } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';
import '../css/weather.css';
import { useParams } from 'react-router-dom';
import dotenv from 'dotenv';

dotenv.config();

// Define API const
// toUpperCase = checkout PascalCase
const Weather = () => {
  const { name } = useParams();
  const firstLetter = name[0].toUpperCase();
  const rest = name.slice(1, name.length);
  const destination = `${firstLetter}${rest}`;

  const [value, setValue] = useState('');
  const [temp, setTemp] = useState('');
  const [typecity, setTypeCity] = useState('');
  const [city, setCity] = useState('');
  const [img, setimg] = useState('');
  const [disc, setdisc] = useState('');

  const citySelect = (e) => {
    e.preventDefault();
    setCity(typecity);
  };

  // Call API
  useEffect(() => {
    axios(`https://countriesnow.space/api/v0.1/countries/capital`)
      .then((resolve) => resolve.data.data)
      .then((data) =>
        data.filter(
          (country) => country.name.toLowerCase() === destination.toLowerCase()
        )
      )
      .then((country) => setCity(country[0].capital));
    console.log(destination);
  }, []);

  useEffect(() => {
    axios(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
    )
      .then((resolve) => {
        setValue(resolve.data);
        setTemp(resolve.data.main);
        setimg(
          `https://openweathermap.org/img/wn/${resolve.data.weather[0].icon}.png`
        );
        setdisc(resolve.data.weather[0].description);
      })
      .catch((reject) => {
        // eslint-disable-next-line
        console.log(reject);
        setValue('City not found');
      });
  }, [city]);

  return (
    <div id="paperContainer">
      <div className="paper">
        <form onSubmit={citySelect}>
          <TextField
            className="elementcenter"
            placeholder="Enter city name"
            value={typecity}
            onChange={(e) => setTypeCity(e.target.value)}
          />
          <Button type="submit" name="btn">
            <SendIcon className="sendBtn" style={{ outline: 'none' }} />
          </Button>
        </form>
        <br />
        <h6 className="fontcss">{value.name}</h6>

        <img src={img} alt="weather icon" className="imgcss" />
        <h6 className="fontcss">{disc}</h6>

        <div className="elementcenter">
          <p>
            Min
            <br />
            {`${Math.floor(temp.temp_min - 273.15)}° C`}
          </p>
          <h6 className="fontcss">{`${Math.floor(temp.temp - 273.15)}° C`}</h6>
          <p>
            Max
            <br />
            {`${Math.floor(temp.temp_max - 273.15)}° C`}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Weather;
