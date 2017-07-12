// frontend/reducers/main_reducer.js

import { RECEIVE_USERNAME,
         RECEIVE_POSTS,
         RECEIVE_COMMENTS,
         CLEAR_STATE } from '../actions/main_actions';
import { merge } from 'lodash';

const _defaultState = {
  username: '',
  type: 'NONE',
  content: []
};

const mainReducer = (state = _defaultState, action) => {
  Object.freeze(state);
  let nextState;

  switch(action.type) {
    case RECEIVE_USERNAME:
      nextState = merge({}, state, {
        username: action.username
      });

      return nextState;
    case RECEIVE_POSTS:
      nextState = merge({}, state, {
        type: 'POSTS',
        content: action.posts
      });

      return nextState;
    case RECEIVE_COMMENTS:
      nextState = merge({}, state, {
        type: 'COMMENTS',
        content: action.comments
      });

      return nextState;
    case CLEAR_STATE:
      return _defaultState;
    default:
      return state;
  }
}

export default mainReducer;