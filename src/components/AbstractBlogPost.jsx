import React, { useEffect, useContext } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import dotenv from 'dotenv';
import '../css/AbstractBlogPost.css';
import DisplayPostsContext from '../contexts/DisplayPostsContext';

dotenv.config();

const AbstractBlogPost = () => {
  const { name } = useParams();
  const { posts, setPosts } = useContext(DisplayPostsContext);

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_API_BASE_URL}/destinations/${name}/blog-posts`
      )
      .then((res) => setPosts(res.data));
  }, []);

  if (!posts) {
    return (
      <div className="flex justify-center items-center flex-col my-4">
        <div
          className="
        animate-spin
        rounded-full
        h-20
        w-20
        border-t-2 border-b-2 border-dark-sienna my-3
      "
        />
        <span className="text-dark-sienna">LOADING</span>
      </div>
    );
  }
  return posts.map((post) => (
    <Link to={`/posts/${post.id}`}>
      <div className="reducedPost lg:w-full">
        <div className="miniatureBlogPost">
          <div
            className="avatar"
            style={{ backgroundImage: `url(${post.avatar})` }}
          />
          <div className="userinfo">
            <p>{post.username}</p>
            <p id="tripDate">{post.tripDate.slice(0, 10)}</p>
          </div>
          <div className="userText">{post.postContent.slice(0, 120)}...</div>
        </div>
      </div>
    </Link>
  ));
};

export default AbstractBlogPost;
