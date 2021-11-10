import React from 'react';
import { Widget } from '@uploadcare/react-widget';
import DatePicker from './DatePicker';
import TagList from './TagList';

import '../css/NewPostForm.css';

const NewPostForm = () => {
  // const [userName, setUserName] = React.useState();
  // const [Date, setDate] = React.useState();
  // const [postText, setPostText] = React.useState();
  // const [picture, setPicture] = React.useState();

  return (
    <div id="formContainer">
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
        <h3>Pictures :</h3>

        <div id="picturesUpload">
          <p>
            <label htmlFor="file">Your file:</label>{' '}
            <Widget
              publicKey="383c2db2fc40ae1ac595"
              id="file"
              onChange={(info) => console.log('Upload completed:', info)}
              multiple
              crop
            />
          </p>
        </div>
      </form>
    </div>
  );
};

export default NewPostForm;
