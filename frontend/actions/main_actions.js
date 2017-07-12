import * as redditAPI from '../util/reddit_util';

export const RECEIVE_USERNAME = 'RECEIVE_USERNAME';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';
export const CLEAR_STATE = 'CLEAR_STATE';

export const receiveUsername = (username) => ({
  type: RECEIVE_USERNAME,
  username
});

export const receivePosts = (posts) => ({
  type: RECEIVE_POSTS,
  posts
});

export const receiveComments = (comments) => ({
  type: RECEIVE_COMMENTS,
  comments
});

export const clearState = () => ({
  type: CLEAR_STATE
});

export const fetchPosts = username => dispatch => (
  redditAPI.fetchPosts(username).then(
    posts => dispatch(receivePosts(posts))
  )
);

export const fetchComments = username => dispatch => (
  redditAPI.fetchComments(username).then(
    comments => dispatch(receiveComments(comments))
  )
);