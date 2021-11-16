import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../css/destinationBloc.css';

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
        `https://restcountries.com/v3.1/name/${name}?fields=flags,name,capital,currencies,region,population,curency,languages,maps`
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
        className="countryBloc bg-dark-sienna text-white drop-shadow-md"
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
            <li id="liDestination" className="md:my-1 md:text-xl">
              <span id="liCatTitle">capital: </span>{' '}
              <span id="liCatResult">{destination.capital}</span>
            </li>
            <li id="liDestination" className="md:my-1 md:text-xl">
              <span id="liCatTitle">region: </span>{' '}
              <span id="liCatResult">{destination.region}</span>
            </li>
            <li id="liDestination" className="md:my-1 md:text-xl">
              <span id="liCatTitle">population: </span>{' '}
              <span id="liCatResult">
                {numberWithSpace(destination.population)}
              </span>
            </li>{' '}
          </ul>{' '}
          <ul id="dataList">
            {' '}
            <li id="liDestination" className="md:my-1 md:text-xl">
              <span id="liCatTitle">currency: </span>{' '}
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
            <li id="liDestination" className="md:my-1 md:text-xl">
              <span id="liCatTitle">languages: </span>{' '}
              <span id="liCatResult" className="language">
                {Object.values(destination.languages).map((language) => (
                  <span>{language} </span>
                ))}
              </span>
            </li>{' '}
          </ul>
          <a
            href={destination.maps.openStreetMaps}
            id="mapLink"
            target="_blank"
            rel="noreferrer"
            className="transform hover:scale-110 motion-reduce:transform-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
              />
            </svg>
            <span>MAP</span>
          </a>
        </div>
      </div>
    </div>
  );
}
