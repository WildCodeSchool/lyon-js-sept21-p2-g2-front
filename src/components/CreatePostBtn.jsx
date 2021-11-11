import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './createPostBtn.css';

const CreatePostBtn = () => {
  const { name } = useParams();
  console.log(useParams());

  return (
    <div className="lg:w-full">
      <Link to={`/add-post/${name}`}>
        <button type="button" className="createPostBtn">
          Create new post
        </button>
      </Link>{' '}
    </div>
  );
};

export default CreatePostBtn;
