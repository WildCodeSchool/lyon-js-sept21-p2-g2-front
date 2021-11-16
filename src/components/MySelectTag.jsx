import React from 'react';
import Select from 'react-select';
import '../css/MySelectTag.css';

const tags = [
  { value: '#Gastronomy', label: '#Gastronomy' },
  { value: '#Music', label: '#Music' },
  { value: '#Architecture', label: '#Architecture' },
  { value: '#Thrills', label: '#Thrills' },
  { value: '#Arts', label: '#Arts' },
  { value: '#Religion', label: '#Religion' },
  { value: '#Hiking', label: '#Hiking' },
  { value: '#Culture', label: '#Culture' },
  { value: '#History', label: '#History' },
  { value: '#Nature', label: '#Nature' },
  { value: '#Sport', label: '#Sport' },
];

const MySelectTag = ({ setSelectedTags }) => {
  return (
    <div className="select-tag shadow-2xl">
      <Select
        isMulti
        name="tags"
        options={tags}
        onChange={(e) =>
          setSelectedTags(e.map((tag) => tag.value.slice(1, tag.length)))
        }
        className="basic-multi-select"
        classNamePrefix="select"
      />
      <button type="submit" id="tag-btn">
        ADD
      </button>
    </div>
  );
};

export default MySelectTag;
