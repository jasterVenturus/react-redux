import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/index';
import PostsList from './components/Layout/Posts/index';
import { GlobalStyle } from "./styles/global";
import SinglePostPage from './components/Layout/Posts/components/SinglePost';
import AddPost from './components/Layout/Posts/Forms/AddPost';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={ <Layout /> }>

          <Route index element={ <PostsList /> } />
          <Route path='post'>

            <Route index element={ <AddPost /> } />
            <Route path=':postId' element={ <SinglePostPage /> } />
          </Route>
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
}

export default App;
