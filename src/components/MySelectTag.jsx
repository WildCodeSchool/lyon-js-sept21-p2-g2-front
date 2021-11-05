import React from 'react';
import Select from 'react-select';
import './MySelectTag.css';

const tags = [
  { value: '#Gastronomy', label: '#Gastronomy' },
  { value: '#Music', label: '#Music' },
  { value: '#Architecture', label: '#Architecture' },
  { value: '#Trills', label: '#Trills' },
  { value: '#Arts', label: '#Arts' },
  { value: '#Religion', label: '#Religion' },
  { value: '#Hiking', label: '#Hiking' },
  { value: '#Culture', label: '#Culture' },
  { value: '#History', label: '#History' },
  { value: '#Nature', label: '#Nature' },
  { value: '#Sport', label: '#Sport' },
];

const MySelectTag = () => (
  <div className="select-tag">
    <Select
      isMulti
      name="tags"
      onChange={console.log}
      options={tags}
      className="basic-multi-select"
      classNamePrefix="select"
    />
    <button type="submit" id="tag-btn">
      Add #
    </button>
  </div>
);

export default MySelectTag;
