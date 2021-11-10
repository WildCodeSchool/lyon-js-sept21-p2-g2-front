import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
// import FullUserPost from '../FullUserPost';
import './PostDetails.css';
import '../../css/FullUserPost.css';
import emptyAvatar from '../../assets/emptyAvatar.png';

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = React.useState(null);
  console.log(post);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/posts/${id}`)
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
                <img src={emptyAvatar} alt="avatar" id="postAvatar" />
                <span id="userNameComment">UserName</span>
              </div>

              <p id="postText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit...
              </p>
            </div>

            {/* Comment Form */}
            <div id="commentForm">
              <form action="/html/tags/html_form_tag_action.cfm" method="post">
                <div id="textArea">
                  <textarea
                    name="comments"
                    id="comments"
                    placeholder="Write something here"
                    className="md:w-4/5 lg:4/5 rounded-lg p-2 bg-apricot-pink"
                  />
                </div>
              </form>
            </div>
            {/* Comment Button */}
            <input
              id="postBtn"
              type="button"
              value="Comment"
              className="px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-white bg-dark-sienna hover:bg-english-red focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-english-red"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetails;
