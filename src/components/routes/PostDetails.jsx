import React, { useEffect } from 'react';
import axios from 'axios';
import FullUserPost from '../FullUserPost';
import './PostDetails.css';

const PostDetails = () => {
  useEffect(() => {
    axios
      .get('http://localhost:5000/api')
      .then((res) => res.data)
      .then((data) => data.map((x) => console.log(x.name)));
    // return () => {
    //   cleanup
    // }
  }, []);

  return (
    <div id="postsPage">
      <FullUserPost />
    </div>
  );
};

export default PostDetails;
