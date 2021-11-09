import React, { useState } from 'react';
import axios from 'axios';
import DatePicker from './DatePicker';
import '../css/NewPostForm.css';
// import UploadImgModule from './UploadImgModule';
import MySelectTag from './MySelectTag';

const NewPostForm = () => {
  const [newName, setNewName] = useState('');
  const [newMessage, setNewMessage] = useState('');
  const [newDate, setNewDate] = useState('');
  const [newImage, setNewImage] = useState('');
  const [newCountry, setNewCountry] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('/destinations/:destination/blog-posts', {
        name: newName,
        message: newMessage,
        date: newDate,
        country: newCountry,
        image: newImage,
      })
      .then((resp) => console.log(resp.data));
    // revoir le .then avec les bon éléments de la database....
  };

  const handleNameChange = (e) => {
    setNewName(e.target.value);
    console.log(newName);
  };

  const handleMessageChange = (e) => {
    setNewMessage(e.target.value);
    console.log(newMessage);
  };
  const handleDateChange = (e) => {
    setNewDate(e.target.value);
    console.log(newDate);
  };
  const handleImageChange = (e) => {
    setNewImage(e.target.value);
    console.log(newImage);
  };
  const handleCountryChange = (e) => {
    setNewCountry(e.target.value);
    console.log(newCountry);
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
      <div id="dateArea">
        <h3>Date :</h3>
        {/* <input type="date" value={newDate} onChange={handleDateChange} /> */}
        <DatePicker value={newDate} onChange={handleDateChange} />
      </div>
      <div id="countryArea">
        <h3>Country :</h3>
        <input type="text" value={newCountry} onChange={handleCountryChange} />
      </div>

      <h3>Decription of your post</h3>
      <textarea
        name="new-post"
        id="new-post-area"
        value={newMessage}
        onChange={handleMessageChange}
        required
      />
      <MySelectTag />
      <h3>Upload your pictures</h3>

      {/* ZONE DE TELECHARGEMENT IMAGE TEMPORAIRE */}

      <label htmlFor="url-image" data-translatable>
        <h3>Insertion of the URL </h3>

        <input
          type="text"
          id="input-img-temp"
          value={newImage}
          onChange={handleImageChange}
        />
      </label>
      {/* FIN DE ZONE DE TELECHARGEMENT IMAGE TEMPORAIRE */}
      {/* <div id="downloadPict">
        {' '}
        <UploadImgModule />{' '}
      </div> */}
      <button type="submit" id="add-post-btn">
        POST
      </button>
    </form>
  );
};

export default NewPostForm;
