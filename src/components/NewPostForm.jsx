import React from 'react';
import DatePicker from './DatePicker';
import TagList from './TagList';

import '../css/NewPostForm.css';
import UploadImgModule from './UploadImgModule';

const NewPostForm = () => {
  return (
    <form className="contact-form">
      <h2 id="post-title">Create a new post</h2>
      <h3>User Name :</h3>
      <input
        type="text"
        id="name"
        name="UserName"
        // onChange={(e) => setName(e.target.value)}
        placeholder="User Name"
        autoComplete="off"
      />
      <div id="dateArea">
        <h3>Date :</h3>
        <DatePicker />
      </div>
      <h3>Decription of your post</h3>
      <textarea name="new-post" id="new-post-area" />
      <TagList />
      <h3>Uploar your pictures</h3>
      <div id="downloadPict">
        {' '}
        <UploadImgModule />{' '}
      </div>
      <button type="submit" id="add-post-btn">
        POST
      </button>
    </form>
  );
};

export default NewPostForm;
