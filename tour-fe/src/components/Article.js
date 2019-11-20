import React from 'react';
import ArticleBox from '../containers/ArticleBoxContainer';
import { Route } from 'react-router-dom';
import WritePost from '../containers/WritePostContainer';
import Post from '../containers/PostContainer';


const Article = () => {
  return (
    <article className="App-article">
      <Route exact path="/" component={ArticleBox} />
      <Route path="/posts/:id" component={Post} />
      <Route path="/write-post" component={WritePost} />
    </article>
  );
};

export default Article;
