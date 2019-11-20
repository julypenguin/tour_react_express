import React, { useState, useEffect } from 'react';
import Notfix from './Notfix';
import Tabs from '../containers/TabsContainer';
import Posts from '../containers/PostsContainer';
// import { Route } from 'react-router-dom';

const ArticleBox = ({ postList }) => {
  const [category, setCategory] = useState([]);
  const [postLimit, setPostLimit] = useState([]);

  useEffect(() => {
    setCategory(postList)
  }, [postList])

  return (
    <div className="article-box">
      <div className="content">
        <Tabs setCategory={setCategory}/>
        <Posts category={category} postLimit={postLimit} setPostLimit={setPostLimit}/>
      </div>

      <Notfix setCategory={setCategory} postList={postList}/>
    </div>
  );
};

export default ArticleBox;