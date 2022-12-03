import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';
import { fetchUsers } from './features/Users/usersSlice'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { fetchPosts } from './features/Posts/postsSlice';

const container = document.getElementById('root');
const root = createRoot(container);

store.dispatch(fetchPosts());
store.dispatch(fetchUsers());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path='/*' element={ <App /> } />
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>
);
