import React from 'react';
import '../css/FullUserPost.css';
import pic1 from '../assets/Japan1.png';
import pic2 from '../assets/Japan2.jpg';
import pic3 from '../assets/japan3.jpeg';
import pic4 from '../assets/Japan4.png';
import emptyAvatar from '../assets/emptyAvatar.png';

function fullUserPost() {
  return (
    <div id="mainContainer">
      <div id="fullUserPost" className="bg-melon-pink shadow-2xl">
        <div id="userPostInfo">
          <img src={emptyAvatar} alt="avatar" id="avatar" />
          <span id="userName" className="font-bold">
            UserName
          </span>
          <span id="date" className="font-semibold">
            26/08/2021
          </span>
        </div>
        <div id="blocBody">
          {/* Post Text */}
          <p id="postText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
            <br /> Ut enim ad minim veniam, quis nostrud exercitation ullamco
            laboris nisi ut aliquip ex ea commodo consequat.
            <br /> Duis aute irure dolor in reprehenderit in voluptate velit
            esse cillum dolore eu fugiat nulla pariatur.{' '}
          </p>
          {/* Carousel */}
          <div id="slider" className="m-2 md:w-4/5">
            <figure>
              <img src={pic1} alt="" />
              <img src={pic2} alt="" />
              <img src={pic3} alt="" />
              <img src={pic4} alt="" />
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
              <div>
                <textarea
                  name="comments"
                  id="comments"
                  placeholder="Write something here"
                  className="md:w-4/5 rounded-lg p-2 bg-apricot-pink"
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
  );
}

export default fullUserPost;
