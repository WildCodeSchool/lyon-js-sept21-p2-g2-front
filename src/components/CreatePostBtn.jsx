import React from 'react';
import { Link } from 'react-router-dom';
import './createPostBtn.css';

const CreatePostBtn = () => {
  return (
    <div>
      <Link to="/add-post">
        <button type="button" className="createPostBtn">
          Create new post
        </button>
      </Link>{' '}
    </div>
  );
};

export default CreatePostBtn;
