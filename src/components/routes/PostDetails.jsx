import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import dotenv from 'dotenv';
import '../../css/PostDetails.css';
import '../../css/FullUserPost.css';
import CommentForm from '../CommentForm';

dotenv.config();

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = React.useState(null);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/posts/${id}`)
      .then((res) => setPost(res.data[0]));
    // return () => {
    //   cleanup
    // }
  }, []);

  if (!post) {
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
  return (
    <div id="postsPage">
      <div id="mainContainer">
        <div id="fullUserPost" className="bg-melon-pink shadow-2xl">
          <div id="userPostInfo">
            <img src={post.avatar} alt="avatar" id="avatar" />
            <span id="userName" className="font-bold">
              {post.name}
            </span>
            <p id="date" className="font-semibold">
              {post.date.beginning} to {post.date.end}
            </p>
          </div>
          <div id="blocBody">
            {/* Post Text */}
            <p id="postText">{post.message}</p>
            {/* Carousel */}
            <div id="slider" className="m-2 md:w-4/5">
              <figure>
                {post.photos.map((photo) => (
                  <img src={photo} alt="" />
                ))}
              </figure>
            </div>

            {/* Posted Comments */}
            <div
              id="postedComments"
              className="bg-apricot-pink shadow-inner rounded-lg inline-flex items-center p-1 m-2"
            >
              <div id="userInfoComment">
                <span id="userNameComment">UserName</span>
              </div>

              <p id="postText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit...
              </p>
            </div>

            {/* Comment Form */}
            <CommentForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
