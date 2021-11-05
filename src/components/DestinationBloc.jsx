import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './destinationBloc.css';

export default function DestinationBloc() {
  const [destination, setDestination] = React.useState();

  const { name } = useParams();

  console.log(destination);

  function numberWithSpace(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }

  useEffect(() => {
    axios
      .get(
        `https://restcountries.com/v3.1/name/${name}?fields=flags,name,capital,currencies,region,population,curency,languages`
      )
      .then((res) => res.data[0])
      .then((data) => setDestination(data));
  }, []);

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
  return (
    <div id="mainContainer">
      <div
        id="destinationBloc"
        className="countryBloc bg-dark-sienna text-white shadow-md"
      >
        <div className="flagBox">
          <img id="flag" src={destination.flags.png} alt="Flag" />
        </div>
        <div id="destinationName" className="destinationName">
          <span
            id="destinationName"
            className="font-bold uppercase text-xl md:text-4xl"
          >
            {name}{' '}
          </span>
        </div>
        <div className="dataBox">
          <ul id="dataList">
            <li className="md:mx-40 md:my-1 md:text-xl">
              <span id="liCatTitle">capital: </span>{' '}
              <span id="liCatResult">{destination.capital}</span>
            </li>
            <li className="md:mx-40 md:my-1 md:text-xl">
              <span id="liCatTitle">region: </span>{' '}
              <span id="liCatResult">{destination.region}</span>
            </li>
            <li className="md:mx-40 md:my-1 md:text-xl">
              <span id="liCatTitle">population: </span>{' '}
              <span id="liCatResult">
                {numberWithSpace(destination.population)}
              </span>
            </li>{' '}
          </ul>{' '}
          <ul id="dataList">
            {' '}
            <li className="md:mx-40 md:my-1 md:text-xl">
              <span id="liCatTitle">curency: </span>{' '}
              <span id="liCatResult">
                {
                  destination.currencies[Object.keys(destination.currencies)[0]]
                    .name
                }{' '}
                {
                  destination.currencies[Object.keys(destination.currencies)[0]]
                    .symbol
                }
              </span>
            </li>
            <li className="md:mx-40 md:my-1 md:text-xl">
              <span id="liCatTitle">languages: </span>{' '}
              <span id="liCatResult" className="language">
                {Object.values(destination.languages).map((language) => (
                  <span>{language} </span>
                ))}
              </span>
            </li>{' '}
          </ul>
        </div>
      </div>
    </div>
  );
}
