import React, { useEffect } from 'react';
import moment from "moment";
import { withRouter } from 'react-router-dom';
import Page from './Page';
import PostCardImgJpg from '../img/HeaderImgBox_1.jpg'

const Posts = ({ history, getPostList, category, postLimit, setPostLimit }) => {

  useEffect(() => {
    getPostList()
  }, [getPostList])

  return (
    <div className="post-contents">
    
    { postLimit.map(({ id, title, createdAt }) => (

      <div 
        className="post-card"
        key={id}
        onClick={() =>history.push(`/posts/${id}`)}
      >
        <div className="post-card-img">
          <div className="post-card-img__fit">
            <img src={PostCardImgJpg} alt="post-card-img" />
          </div>
        </div>
        <div className="post-card-info">
          <div className="post-card-date">{moment(createdAt).format("LLLL")}</div>
          <div className="post-card-title">{ title }</div>
        </div>
      </div>

    ))}

      <Page category={category} setPostLimit={setPostLimit}/>
    </div>
  );
};

export default withRouter(Posts);