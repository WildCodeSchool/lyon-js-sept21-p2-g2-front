import React from 'react';
import DestinationBloc from '../DestinationBloc';
import Weather from '../Weather';
import Converter from '../Converter';
import MySelectTag from '../MySelectTag';
import AbstractBlogPost from '../AbstractBlogPost';
import CreatePostBtn from '../CreatePostBtn';
import Divider from '../Divider';
import './Destination.css';

const Destination = () => {
  return (
    <div id="destinationPage">
      <DestinationBloc />
      <Weather />
      <Converter />
      <Divider />
      <MySelectTag />
      <AbstractBlogPost />
      <CreatePostBtn />
    </div>
  );
};

export default Destination;
