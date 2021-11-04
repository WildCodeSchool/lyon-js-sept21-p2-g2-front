import React, { createContext, useState } from 'react';

const PostsContext = createContext();

export const PostsContextProvider = ({ children }) => {
  const [name, setName] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');

  return (
    <PostsContext.Provider
      value={{
        name,
        setName,
        avatarUrl,
        setAvatarUrl,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};

export default PostsContext;
