import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import '../css/AbstractBlogPost.css';

const AbstractBlogPost = () => {
  const { name } = useParams();
  const [posts, setPosts] = React.useState(null);
  // console.log(posts.map((post) => post.message));

  useEffect(() => {
    axios
      .get(`http://localhost:5000/destinations/${name}/blog-posts`)
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
          <p>{post.name}</p>
          <img src={post.avatar} alt="" />
          <div className="userText">{`${post.message.slice(0, 160)}...`}</div>
        </div>
      </div>
    </Link>
  ));
};

export default AbstractBlogPost;
