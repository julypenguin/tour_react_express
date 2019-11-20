import React from 'react';
import WritePost from '../components/WritePost';
import { connect } from "react-redux";
import { Actions } from "../actions";

const WritePostContainer = (props) => <WritePost {...props}/>

const mapStateToProps = store => ({
  categoryList: store.post.categoryList,
  createPostResult: store.post.createPostResult,
});

const mapDispatchToProps = {
  // createCategory: Actions.CREATE_CATEGORY,
  createPost: Actions.CREATE_POST,
  getCategoryList: Actions.GET_CATEGORY_LIST,
  clearPostResult: Actions.CLEAR_POST_RESULT,
};

export default connect(mapStateToProps, mapDispatchToProps)(WritePostContainer);
