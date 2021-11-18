import React, { createContext } from 'react';

const DisplayPostsContext = createContext();

export const DisplayPostsProvider = ({ children }) => {
  const [posts, setPosts] = React.useState(null);

  return (
    <DisplayPostsContext.Provider value={{ posts, setPosts }}>
      {children}
    </DisplayPostsContext.Provider>
  );
};

export default DisplayPostsContext;
