import React from 'react';
import DatePicker from './DatePicker';
import TagList from './TagList';

import './NewPostForm.css';

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
      <h3>Date :</h3>
      <DatePicker />
      <h3>Decription of your post</h3>
      <textarea name="new-post" id="new-post-area" />

      <TagList />
    </form>
  );
};

export default NewPostForm;
