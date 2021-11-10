import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../css/NewPostForm.css';
import MySelectTag from './MySelectTag';

const NewPostForm = () => {
  const [newName, setNewName] = useState(null);
  const [newMessage, setNewMessage] = useState(null);
  const [newDate, setNewDate] = useState(null);
  const [newPhotos, setNewPhotos] = useState(null);
  const { destination } = useParams();

  const [selectedTags, setSelectedTags] = React.useState(null);
  console.log(selectedTags);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newName) {
      axios
        .post(`http://localhost:5000/destinations/${destination}/blog-posts`, {
          name: newName,
          date: newDate,
          message: newMessage,
          tags: selectedTags,
          photos: newPhotos,
        })
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
  const handlePhotosChange = (e) => {
    setNewPhotos(e.target.value);
    // console.log(newPhotos);
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

      {/* ZONE DE TELECHARGEMENT IMAGE TEMPORAIRE */}

      <label htmlFor="url-image" data-translatable>
        <h3>Insertion of the URL </h3>

        <input
          type="text"
          id="input-img-temp"
          value={newPhotos}
          onChange={handlePhotosChange}
        />
      </label>
      {/* FIN DE ZONE DE TELECHARGEMENT IMAGE TEMPORAIRE */}

      <button type="submit" id="add-post-btn">
        POST
      </button>
    </form>
  );
};

export default NewPostForm;
