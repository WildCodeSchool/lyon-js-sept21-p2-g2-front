import React, { useState } from 'react';
import { Widget } from '@uploadcare/react-widget';
import { useParams, useHistory } from 'react-router-dom';
import axios from 'axios';

import '../css/NewPostForm.css';
import MySelectTag from './MySelectTag';

const NewPostForm = () => {
  const [newName, setNewName] = useState(null);
  const [newMessage, setNewMessage] = useState(null);
  const [newDate, setNewDate] = useState(null);
  const [newAvatar, setNewAvatar] = useState(null);
  const [picturesGroupUUID, setPicturesGroupUUID] = useState(null);
  const { destination } = useParams();

  const [selectedTags, setSelectedTags] = React.useState(null);

  const history = useHistory();
  const routeChange = (id) => {
    const path = `/posts/${id}`;
    history.push(path);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newName) {
      axios
        .post(
          `${process.env.REACT_APP_API_BASE_URL}/destinations/${destination}/blog-posts`,
          {
            name: newName,
            avatar: newAvatar,
            date: newDate,
            message: newMessage,
            tags: selectedTags.join(),
            photos: picturesGroupUUID,
          }
        )
        .then((resp) => {
          routeChange(resp.data.id);
        });
    }
  };

  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleAvatarChange = (e) => {
    setNewAvatar(e.target.value);
  };

  const handleMessageChange = (e) => {
    setNewMessage(e.target.value);
  };
  const handleDateChange = (e) => {
    setNewDate(e.target.value);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h2 id="post-title">Create a new post</h2>
      <div id="name-and-date-container">
        <div id="name-container">
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
        </div>

        <div id="date-container">
          <h3>Date :</h3>
          <input
            type="date"
            id="dateArea"
            value={newDate}
            onChange={handleDateChange}
          />
        </div>
      </div>
      <h3>Avatar's URL :</h3>
      <input
        type="url"
        id="avatarInput"
        name="avatar"
        // required
        autoComplete="off"
        onChange={handleAvatarChange}
        value={newAvatar}
      />

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

      {/* PICTURES UPLOAD */}
      <div id="picturesUpload">
        <p>
          <Widget
            publicKey="383c2db2fc40ae1ac595"
            id="file"
            onChange={(info) => setPicturesGroupUUID(info.uuid)}
            multiple
            crop
          />
        </p>
      </div>

      {/* POST BUTTON */}
      <button type="submit" id="add-post-btn">
        POST
      </button>
    </form>
  );
};

export default NewPostForm;
