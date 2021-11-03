import React from 'react';
import flag from '../assets/Flag_of_Japan.png';
import '../css/destinationBloc.css';

export default function DestinationBloc() {
  return (
    <div id="mainContainer">
      <div
        id="destinationBloc"
        className="countryBloc bg-dark-sienna text-white shadow-2xl"
      >
        <div className="flagBox">
          <img id="flag" src={flag} alt="Flag" />
        </div>
        <div id="destinationName" className="destinationName">
          <span
            id="destinationName"
            className="font-bold uppercase text-xl md:text-4xl"
          >
            Japan{' '}
          </span>
        </div>
        <div className="dataBox">
          <ul id="dataList">
            <li className="md:mx-40 md:my-1 md:text-xl">
              <span id="liCatTitle">capital: </span>{' '}
              <span id="liCatResult">Tokyo</span>
            </li>
            <li className="md:mx-40 md:my-1 md:text-xl">
              <span id="liCatTitle">region: </span>{' '}
              <span id="liCatResult">Asia</span>
            </li>
            <li className="md:mx-40 md:my-1 md:text-xl">
              <span id="liCatTitle">timezones: </span>{' '}
              <span id="liCatResult">UTC+09:00</span>
            </li>{' '}
          </ul>{' '}
          <ul id="dataList">
            {' '}
            <li className="md:mx-40 md:my-1 md:text-xl">
              <span id="liCatTitle">curency: </span>{' '}
              <span id="liCatResult"> Japanese yen ¥</span>
            </li>
            <li className="md:mx-40 md:my-1 md:text-xl">
              <span id="liCatTitle">languages: </span>{' '}
              <span id="liCatResult">Japanese</span>
            </li>{' '}
          </ul>
        </div>
      </div>
    </div>
  );
}
