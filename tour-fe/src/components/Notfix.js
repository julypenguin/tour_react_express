import React from 'react';
import { withRouter, Route } from 'react-router-dom';
import Search from './Search';

const Notfix = ({ setCategory, postList }) => {

  const onChange = (e) => {
    setCategory(
      postList.filter(({ title, content }) => {
        return content.includes(e.target.value) || title.includes(e.target.value)
      })
    )
  }

  return (
    <div className="notfix">
      <Route exact path="/" component={Search} onChange={onChange}/>

      <div className="your-profile">
        <div className="profile-image">
          <div className="profile-avatar"></div>
        </div>
        <div className="profile-name">Julypenguin</div>
        <div className="profile-content">這是一個規劃旅遊的 blog</div>

      </div>
    </div>
  );
};

export default Notfix;
