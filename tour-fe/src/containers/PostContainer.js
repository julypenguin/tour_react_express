import React from 'react';
import Post from '../components/Post';
import { connect } from "react-redux";
import { Actions } from "../actions";

const PostContainer = (props) => <Post {...props} />

const mapStateToProps = store => ({
  post: store.post.post,
  isRequestAgain: store.post.isRequestAgain,
  updatePostError: store.post.updatePostError,
  deletePostError: store.post.deletePostError,
  linkTo: store.post.linkTo,
});

const mapDispatchToProps = {
  getPost: Actions.GET_POST,
  updatePost: Actions.UPDATE_POST,
  deletePost: Actions.DELETE_POST,
  clearDeleteErr: Actions.CLEAR_DELETE_ERROR,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostContainer);
