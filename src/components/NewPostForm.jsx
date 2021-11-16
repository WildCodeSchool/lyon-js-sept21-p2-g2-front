import React, { useState } from 'react';
import { Widget } from '@uploadcare/react-widget';
import { useParams } from 'react-router-dom';
import axios from 'axios';

import '../css/NewPostForm.css';
import MySelectTag from './MySelectTag';

const NewPostForm = () => {
  const [newName, setNewName] = useState(null);
  const [newMessage, setNewMessage] = useState(null);
  const [newDate, setNewDate] = useState(null);
  const [picturesGroupUUID, setPicturesGroupUUID] = useState(null);
  const { destination } = useParams();

  const [selectedTags, setSelectedTags] = React.useState(null);
  console.log(selectedTags);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newName) {
      axios
        .post(
          `${process.env.REACT_APP_API_BASE_URL}/destinations/${destination}/blog-posts`,
          {
            name: newName,
            date: newDate,
            message: newMessage,
            tags: selectedTags,
            photos: picturesGroupUUID,
          }
        )
        .then((resp) => console.log(resp.data));
    }
    // revoir le .then avec les bon éléments de la database....
  };

  const handleNameChange = (e) => {
    setNewName(e.target.value);
    // console.log(newName);
  };

  const handleMessageChange = (e) => {
    setNewMessage(e.target.value);
    // console.log(newMessage);
  };
  const handleDateChange = (e) => {
    setNewDate(e.target.value);
    // console.log(newDate);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h2 id="post-title">Create a new post</h2>
      <h3>User Name :</h3>
      <input
        type="text"
        id="name"
        name="UserName"
        value={newName}
        onChange={handleNameChange}
        placeholder="User Name"
        autoComplete="off"
        required
      />
      <div>
        <h3>Date :</h3>

        <input
          type="date"
          id="dateArea"
          value={newDate}
          onChange={handleDateChange}
        />
      </div>

      <h3>Decription of your post</h3>
      <textarea
        name="new-post"
        id="new-post-area"
        value={newMessage}
        onChange={handleMessageChange}
        required
      />
      <MySelectTag setSelectedTags={setSelectedTags} />
      <h3>Upload your pictures</h3>

      <div id="picturesUpload">
        <p>
          <label htmlFor="file">Your file:</label>{' '}
          <Widget
            publicKey="383c2db2fc40ae1ac595"
            id="file"
            onChange={(info) => setPicturesGroupUUID(info.uuid)}
            multiple
            crop
          />
        </p>
      </div>

      <button type="submit" id="add-post-btn">
        POST
      </button>
    </form>
  );
};

export default NewPostForm;
