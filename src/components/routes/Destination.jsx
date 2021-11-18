import React from 'react';
import DestinationBloc from '../DestinationBloc';
import Weather from '../Weather';
import Converter from '../Converter';
import MySelectTag from '../MySelectTag';
import AbstractBlogPost from '../AbstractBlogPost';
import CreatePostBtn from '../CreatePostBtn';
import Divider from '../Divider';
import SearchBtn from '../SearchBtn';
import '../../css/Destination.css';

const Destination = () => {
  const [selectedTags, setSelectedTags] = React.useState(null);

  return (
    <div id="destinationPage">
      <DestinationBloc />
      <Weather />
      <Converter />
      <div id="feedback">
        <Divider />
        <MySelectTag setSelectedTags={setSelectedTags} />
        <SearchBtn foundTags={selectedTags} />
        <AbstractBlogPost />
        <CreatePostBtn />
      </div>
    </div>
  );
};

export default Destination;
