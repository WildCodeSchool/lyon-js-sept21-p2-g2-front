import React from 'react';
import DestinationBloc from '../DestinationBloc';
import Converter from '../Converter';
import AbstractBlogPost from '../AbstractBlogPost';

const Destination = () => {
  return (
    <>
      <DestinationBloc />
      <Converter />
      <AbstractBlogPost />
    </>
  );
};

export default Destination;
