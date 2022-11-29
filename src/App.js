import React from 'react';
import AddPostForm from './features/Posts/AddPostForm/AddPostForm';
import PostsList from './features/Posts/PostsList/PostsList';
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <main className="app">
      {/* <Counter/> */}
      <AddPostForm />
      <PostsList />
      <GlobalStyle />
    </main>
  );
}

export default App;
