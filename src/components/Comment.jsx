import React from 'react';
import _ from 'lodash';

const Comment = ({ comment: { commentAuthor, content } }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const displayedContent = isOpen
    ? content
    : _.truncate(content, { length: 80 });

  return (
    <div
      id="postedComments"
      className="bg-apricot-pink shadow-inner rounded-lg inline-flex items-center p-1 m-2"
      style={{
        height: isOpen ? 'auto' : '64px',
        overflow: isOpen ? 'none' : 'hidden',
      }}
      onClick={toggleOpen}
    >
      <div id="userInfoComment">
        <span id="userNameComment">{commentAuthor}</span>
      </div>
      <p id="postText">{displayedContent}</p>
    </div>
  );
};

export default Comment;
