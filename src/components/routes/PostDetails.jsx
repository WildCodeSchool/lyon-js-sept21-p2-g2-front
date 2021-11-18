import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import dotenv from 'dotenv';
import '../../css/PostDetails.css';
import '../../css/FullUserPost.css';
import CommentForm from '../CommentForm';
import Comment from '../Comment';

dotenv.config();

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = React.useState(null);
  const [comments, setComments] = React.useState(null);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/posts/${id}`)
      .then((res) => setPost(res.data[0]));
  }, []);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/posts/${id}/comments`)
      .then((res) => setComments(res.data));
  }, []);

  if (!post || !comments) {
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
              {post.username}
            </span>
            <p id="date" className="font-semibold">
              {post.tripDate.slice(0, 10)}
            </p>
          </div>
          <div id="blocBody">
            {/* Post Text */}
            <p id="postText">{post.postContent}</p>
            {/* Carousel */}
            <div id="slider" className="m-2 md:w-4/5">
              <figure>
                {post.pictures.split(',').map((photo) => (
                  <img src={photo} alt="" key={photo} />
                ))}
              </figure>
            </div>
            {/* Comments */}
            {comments.map((comment) => (
              <Comment key={comment.id} comment={comment} />
            ))}
            {/* Comment Form */}
            <CommentForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
