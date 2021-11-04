import React from 'react';
import DestinationBloc from '../DestinationBloc';
import Converter from '../Converter';
import AbstractBlogPost from '../AbstractBlogPost';
import MySelectTag from '../MySelectTag';

const Destination = () => {
  return (
    <>
      <DestinationBloc />
      <Converter />
      <MySelectTag />
      <AbstractBlogPost />
    </>
  );
};

export default Destination;
