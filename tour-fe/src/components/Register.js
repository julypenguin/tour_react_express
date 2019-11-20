import React, { useState } from 'react';

const Register = ({ register, isLoadingRegister, registerResult, getPostList, postList }) => {

  const [user, setUser] = useState({ username: '', password: '', nickname: ''})
  const { username, password, nickname } = user

  const onChangeUser = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    })
  }

  const handleRegist = (e) => {
    e.preventDefault();
    register(user)
  }

  return (
    <div className="wrapper">
      <article className="article register">
        <h2 className="title">會員註冊</h2>
        <form className="userBox" onSubmit={handleRegist}>
          <label htmlFor="nickname">暱稱：</label>
          <input type="text" name="nickname" id="nickname" value={nickname} onChange={onChangeUser}/>
          <label htmlFor="username">帳號：</label>
          <input type="text" name="username" id="username" value={username} onChange={onChangeUser}/>
          <label htmlFor="password">密碼：</label>
          <input type="password" name="password" id="password" value={password} onChange={onChangeUser}/>
          <input className="submit edit__btn" type="submit" value="註冊" />
          <div className="clearfix"></div>
        </form>
        
        <a className="toLogin" href="/login">已經是會員？</a>
        <br />
        <a className="back__btn" href="/comments">回到文章列</a>
      </article>
    </div>
  );
};

export default Register;