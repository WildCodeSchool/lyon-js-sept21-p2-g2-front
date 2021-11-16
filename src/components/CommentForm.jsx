import React, { useState } from 'react';
import axios from 'axios';

const CommentForm = () => {
  const [author, setAuthor] = useState('');
  const [comment, setComment] = useState('');

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (comment) {
      axios
        .post(`${process.env.REACT_APP_API_BASE_URL}/blog-posts/:id/comments`, {
          commentAuthor: author,
          content: comment,
        })
        .then((resp) => console.log(resp.data));
    }
  };

  return (
    <div id="commentForm">
      <form
        action="/html/tags/html_form_tag_action.cfm"
        method="post"
        onSubmit={handleSubmit}
      >
        <h3>Send a comment:</h3>
        <input
          type="text"
          id="author"
          name="commentAuthor"
          value={author}
          onChange={handleAuthorChange}
          placeholder="your name please"
          autoComplete="off"
          maxLength="50"
          required
          className="md:w-4/5 lg:4/5 rounded-lg p-2 bg-apricot-pink"
        />
        <div id="textArea">
          <textarea
            name="comments"
            id="comments"
            value={comment}
            onChange={handleCommentChange}
            placeholder="Write something here"
            className="md:w-4/5 lg:4/5 rounded-lg p-2 bg-apricot-pink"
          />
        </div>
        <input
          id="postBtn"
          type="button"
          value="Send your comment"
          className="px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-white bg-dark-sienna hover:bg-english-red focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-english-red"
        />
      </form>
    </div>
  );
};

export default CommentForm;
