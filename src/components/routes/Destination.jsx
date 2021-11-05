import React from 'react';
import DestinationBloc from '../DestinationBloc';
import Weather from '../Weather';
import Converter from '../Converter';

import AbstractBlogPost from '../AbstractBlogPost';
<<<<<<< HEAD
import MySelectTag from '../MySelectTag';
=======
import CreatePostBtn from '../CreatePostBtn';
>>>>>>> dev

const Destination = () => {
  return (
    <>
      <DestinationBloc />
      <Weather />
      <Converter />
      <MySelectTag />
      <AbstractBlogPost />
      <CreatePostBtn />
    </>
  );
};

export default Destination;
