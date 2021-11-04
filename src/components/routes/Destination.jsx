import React from 'react';
import DestinationBloc from '../DestinationBloc';
import Weather from '../Weather';
import Converter from '../Converter';

import AbstractBlogPost from '../AbstractBlogPost';

const Destination = () => {
  return (
    <>
      <DestinationBloc />
      <Weather />
      <Converter />
      <AbstractBlogPost />
    </>
  );
};

export default Destination;
