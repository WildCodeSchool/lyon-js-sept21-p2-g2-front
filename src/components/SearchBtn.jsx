import React, { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import qs from 'query-string';
import axios from 'axios';
import DisplayPostsContext from '../contexts/DisplayPostsContext';

const SearchBtn = ({ foundTags }) => {
  const { name } = useParams();
  const parameters = qs.stringify({ tags: foundTags });
  const { setPosts } = useContext(DisplayPostsContext);

  const searchTags = () => {
    axios
      .get(
        `${process.env.REACT_APP_API_BASE_URL}/destinations/${name}/blog-posts?${parameters}`
      )
      .then((res) => setPosts(res.data));
  };

  useEffect(() => {
    searchTags();
  }, []);

  return (
    <button type="button" id="tag-btn" onClick={searchTags}>
      SEARCH
    </button>
  );
};

export default SearchBtn;
