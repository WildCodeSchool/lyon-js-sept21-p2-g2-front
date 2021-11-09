import React, { useState } from 'react';
import axios from 'axios';

import './UploadImgModule.css';

const UploadImgModule = () => {
  const [selectedFiles, setSelectedFiles] = useState('');

  const fileSelectHander = (e) => {
    setSelectedFiles(e.target.files[0]);
    console.log(e.target.files[0]);
  };

  const fileUploadHandler = () => {
    const fd = new FormData();
    fd.append('image', selectedFiles, selectedFiles.name);
    axios
      .post('http://localhost:5000/ VOIR LEA POUR POST LA PHOTO SUR API', fd, {
        // onUploadProgress: (progressEvent) => {
        //   console.log(
        //     'upload progress' +
        //       Math.round((progressEvent.loaded / progressEvent.total) * 100) +
        //       '%'
        //   );
        // },
      })
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div className="upload-module">
      <label htmlFor="input-file" className="custom-file-upload">
        <input id="input-file-area" type="file" onChange={fileSelectHander} />
      </label>
      <button type="button" id="pick-file-btn" onClick={fileUploadHandler}>
        {' '}
        Upload Pictures{' '}
      </button>
    </div>
  );
};

export default UploadImgModule;
