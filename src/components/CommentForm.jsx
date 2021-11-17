import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CommentForm = () => {
  const [author, setAuthor] = useState('');
  const [comment, setComment] = useState(null);
  const { id } = useParams();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (comment !== null) {
      axios
        .post(
          `${process.env.REACT_APP_API_BASE_URL}/blog-posts/${id}/comments`,
          {
            commentAuthor: author,
            content: comment,
          }
        )
        .then((resp) => console.log(resp.data));
    }
    setAuthor('');
    setComment('');
  };

  const handleAuthorChange = (e) => {
    setAuthor(e.target.value);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  return (
    <div id="commentForm" className="w-4/5 ">
      <form
        action="/html/tags/html_form_tag_action.cfm"
        method="post"
        onSubmit={handleSubmit}
        className="flex-col flex content-center"
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
          className="w-full rounded-lg p-2 bg-apricot-pink"
        />
        <div id="textArea">
          <textarea
            name="comments"
            id="comments"
            value={comment}
            onChange={handleCommentChange}
            placeholder="Write something here"
            className="rounded-lg p-2 bg-apricot-pink"
          />
        </div>
        <input
          id="postBtn"
          type="submit"
          value="Send your comment"
          className="w-3/5 mx-auto px-3 py-1.5 border border-transparent
           text-sm font-medium rounded-full shadow-sm text-white
            bg-dark-sienna hover:bg-english-red focus:outline-none focus:ring-2 
            focus:ring-offset-2 focus:ring-english-red"
        />
      </form>
    </div>
  );
};

export default CommentForm;
