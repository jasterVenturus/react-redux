import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/index';
import PostsList from './components/Layout/Posts/index';
import { GlobalStyle } from "./styles/global";
import SinglePostPage from './components/Layout/Posts/components/SinglePost';
import AddPost from './components/Layout/Posts/Forms/AddPost';
import EditPost from './components/Layout/Posts/Forms/EditPost';
import Users from './components/Layout/Users';
import UserPage from './components/Layout/Users/components/UserPage';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={ <Layout /> }>

          <Route index element={ <PostsList /> } />
          <Route path='post'>

            <Route index element={ <AddPost /> } />
            <Route path=':postId' element={ <SinglePostPage /> } />
            <Route path='edit/:postId' element={ <EditPost/> } />
          </Route>
          <Route path='user'>

            <Route index element={ <Users /> } />
            <Route path=':userId'element={ <UserPage /> } />
          </Route>
          {/* Catch all - replace with 404 component if you want */}
          <Route path='*' element={ <Navigate to='/' replace /> } />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
}

export default App;
