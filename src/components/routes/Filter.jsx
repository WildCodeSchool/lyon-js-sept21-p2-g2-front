import React from 'react';
import filter from '../../assets/filter.png';
import './Filter.css';

const Filter = () => {
  return (
    <div>
      <button type="button">
        <img src={filter} alt="" /> Filter
      </button>
    </div>
  );
};

export default Filter;
