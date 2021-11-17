import React from 'react';
import DestinationBloc from '../DestinationBloc';
import Weather from '../Weather';
import Converter from '../Converter';
import MySelectTag from '../MySelectTag';
import AbstractBlogPost from '../AbstractBlogPost';
import CreatePostBtn from '../CreatePostBtn';
import Divider from '../Divider';
import '../../css/Destination.css';

const Destination = () => {
  return (
    <div id="destinationPage">
      <DestinationBloc />
      <Weather />
      <Converter />
      <div id="feedback">
        <Divider />
        <MySelectTag />
        <AbstractBlogPost />
        <CreatePostBtn />
      </div>
    </div>
  );
};

export default Destination;
