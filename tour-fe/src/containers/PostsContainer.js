import React from 'react';
import Posts from '../components/Posts';
import { connect } from "react-redux";
import { Actions } from "../actions";

const PostsContainer = (props) => <Posts {...props}/>

const mapStateToProps = store => ({
  // postList: store.post.postList,
  // isLoadingGetPostList: store.post.isLoadingGetPostList,
  // getPostListError: store.post.getPostListError,
});

const mapDispatchToProps = {
  getPostList: Actions.GET_POST_LIST,
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsContainer);
