import React from 'react';
import flag from '../assets/Flag_of_Japan.png';
import '../css/destinationBloc.css';

export default function DestinationBloc() {
  return (
    <div id="destinationBloc" className="bg-dark-sienna text-white">
      <img id="flag" src={flag} alt="Flag" />

      <span id="destinationName" className="font-bold uppercase">
        Japan
      </span>

      <ul id="dataList">
        <li>capital: Tokyo</li>
        <li>region: Asia</li>
        <li>timezones: UTC+09:00</li>
      </ul>

      <ul id="dataList">
        <li>
          curency:{' '}
          <ul>
            <li>Japanese yen</li>
            <li>¥</li>
          </ul>
        </li>
        <li>languages: Japanese</li>
      </ul>
    </div>
  );
}
