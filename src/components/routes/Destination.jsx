import React from 'react';
import DestinationBloc from '../DestinationBloc';
import Converter from '../Converter';
import AbstractBlogPost from '../AbstractBlogPost';
import CreatePostBtn from '../CreatePostBtn';

const Destination = () => {
  return (
    <>
      <DestinationBloc />
      <Converter />
      <AbstractBlogPost />
      <CreatePostBtn />
    </>
  );
};

export default Destination;
