import React from 'react';
import DatePicker from './DatePicker';
import TagList from './TagList';

import './NewPostForm.css';

const NewPostForm = () => {
  return (
    <form className="contact-form">
      <h2 id="post-title">Create a new post</h2>
      <div className="form-content">
        <h3>User Name :</h3>
        <input
          type="text"
          id="name"
          name="UserName"
          // onChange={(e) => setName(e.target.value)}
          placeholder="User Name"
          autoComplete="off"
        />
        <div id="date-picker">
          <h3>Date :</h3> <DatePicker />
        </div>
        <div id="text-add">
          <h3>Decription of your post</h3>
          <textarea name="new-post" id="new-post-area" cols="30" rows="10" />
        </div>
        <div id="tagList-import">
          <TagList />
        </div>
      </div>
    </form>
  );
};

export default NewPostForm;
