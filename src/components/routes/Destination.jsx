import React from 'react';
import DestinationBloc from '../DestinationBloc';
import Weather from '../Weather';
import Converter from '../Converter';

import AbstractBlogPost from '../AbstractBlogPost';
import CreatePostBtn from '../CreatePostBtn';

const Destination = () => {
  return (
    <>
      <DestinationBloc />
      <Weather />
      <Converter />
      <AbstractBlogPost />
      <CreatePostBtn />
    </>
  );
};

export default Destination;
