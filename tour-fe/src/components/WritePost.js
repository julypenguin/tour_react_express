import React, { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

const WritePost = ({ 
  history,
  // createCategory,
  createPost,
  getCategoryList,
  clearPostResult,
  categoryList,
  createPostResult,
}) => {
  const [post, setPost] = useState({
    title: '',
    content: '',
    categoryId: '2',
  })

  const { title, content, categoryId } = post

  const onChange = (key, value) => {
    setPost({
      ...post,
      [key]: value,
    })
  }

  const postSubmit = (e) => {
    e.preventDefault();
    createPost(post)
  }

  useEffect(() => {
    getCategoryList()
    if (createPostResult === 'success') {
      clearPostResult()
      history.push('/')      
    }
  }, [getCategoryList, createPostResult, history, clearPostResult])

  return (
    <div>

  { !Cookies.get('nickname')
    ?  <div className="must-login">請先登入會員</div>
    :  <form className="writeComment__form" onSubmit={postSubmit}>

        <label className="writeComment__label" htmlFor="author">文章分類：</label>
        <select 
          id="category" 
          value={categoryId}
          onChange={(e) => onChange('categoryId', e.target.value)}
        >

          {categoryList.map(({ id, category }) => (
            <option key={id} value={id}>{category}</option>
          ))}
          
        </select>

        <label className="writeComment__label" htmlFor="title">文章標題：</label>
        <input 
          className="writeComment__input"
          value={title}
          onChange={(e) => onChange('title', e.target.value)}
          id="title"
        />

        <label className="writeComment__label" htmlFor="article-body">內文：</label>
        <textarea
          className="writeComment__textarea"
          value={content}
          onChange={(e) => onChange('content', e.target.value)}
          id="article-body"
          rows="15"
        />

        <div className="flex-end">
          <button className="writeComment__submit" type="submit">發文囉</button>
        </div>
      </form>
  }
    </div>
  );
};

export default WritePost;