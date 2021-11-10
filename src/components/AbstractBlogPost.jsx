import React from 'react';
import '../css/AbstractBlogPost.css';

const AbstractBlogPost = () => {
  return (
    <div className="reducedPost lg:w-full">
      <div className="miniatureBlogPost">
        <div className="avatarCell"> </div>
        <div className="userText">
          {' '}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          totam quis nam. Placeat modi error non eveniet eligendi expedita autem
          officia? Aperiam soluta, iste sequi, perferendis aliquam molestiae
          expedita nisi molestias asperiores quidem, omnis veritatis. Commodi
          cupiditate nulla quo ab quod accusamus ex? Aperiam fugiat dolores
          quaerat nam rem, a nihil ex? Pariatur in ullam delectus eius. Ad,
          illum neque.{' '}
        </div>
      </div>
    </div>
  );
};

export default AbstractBlogPost;
