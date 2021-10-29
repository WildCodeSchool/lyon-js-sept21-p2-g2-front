import React from 'react';
import DestinationBloc from '../DestinationBloc';
import Weather from '../Weather';
import AbstractBlogPost from '../AbstractBlogPost';

const Destination = () => {
  return (
    <>
      <DestinationBloc />
      <Weather />
      <AbstractBlogPost />
    </>
  );
};

export default Destination;
