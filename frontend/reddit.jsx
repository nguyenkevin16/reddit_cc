import React from 'react';
import ReactDOM from 'react-dom';

import App from './app';
import configureStore from './store/store';
import {
  fetchPosts,
  fetchComments } from './actions/main_actions';

document.addEventListener('DOMContentLoaded', () => {
  const store = configureStore();
  const root = document.getElementById('root');
  ReactDOM.render(<App/>, root);

  // Testing Start
  window.getState = store.getState;
  window.fetchPosts = store.dispatch(fetchPosts);
  window.fetchComments = store.dispatch(fetchComments);
  // Testing End
});