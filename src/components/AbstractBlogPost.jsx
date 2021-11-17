import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import dotenv from 'dotenv';
import '../css/AbstractBlogPost.css';

dotenv.config();

const AbstractBlogPost = () => {
  const { name } = useParams();
  const [posts, setPosts] = React.useState(null);

  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_API_BASE_URL}/destinations/${name}/blog-posts`
      )
      // .then((res) => console.log(res.data))
      .then((res) => setPosts(res.data));
    // return () => {
    //   cleanup
    // }
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
          >
            .
          </div>
          <div className="userinfo">
            <p>{post.username}</p>
            <p>{post.tripDate}</p>
          </div>
          <div className="userText">{post.postContent}</div>
          {/* <div className="userText">{`${post.message.slice(0, 200)}...`}</div> */}
        </div>
      </div>
    </Link>
  ));
};

export default AbstractBlogPost;
