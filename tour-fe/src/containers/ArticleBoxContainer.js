import React from 'react';
import ArticleBox from '../components/ArticleBox';
import { connect } from "react-redux";

const ArticleBoxContainer = (props) => <ArticleBox {...props}/>

const mapStateToProps = store => ({
  postList: store.post.postList,
});

export default connect(mapStateToProps, null)(ArticleBoxContainer);