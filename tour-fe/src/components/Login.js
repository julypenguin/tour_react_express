import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { withRouter } from 'react-router-dom';
import Cookies from 'js-cookie';
import '../loginAndRegister.css';
 
const Login = ({ login, getUser, handleLoginDiv }) => {
  const [user, setUser] = useState({ username: '', password: '', nickname: ''})
  const { username, password } = user

  const onChangeUser = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    })
  }

  const handleLogin = (e) => {
    e.preventDefault();
    login(user)
  }

  useEffect(() => {
    getUser()
    if(Cookies.get('nickname')) {
      handleLoginDiv()
    }
  },[getUser, handleLoginDiv])


  return createPortal(
    <div className="wrapper">
      <article className="article login">
        <h2 className="title">會員登入</h2>
        <form className="userBox" onSubmit={handleLogin}>
          <label htmlFor="username">帳號：
            <input type="text" name="username" id="username" value={username} onChange={onChangeUser}/>
          </label>
          <label htmlFor="password">密碼：
            <input type="password" name="password" id="password" value={password} onChange={onChangeUser}/>
          </label>
          <input className="submit edit__btn" type="submit" value="登入" />
          <div className="cancel__btn" onClick={handleLoginDiv}>取消</div>
        </form>
        
        <p className="note__register">目前不開放註冊唷！</p>
      </article>
    </div>,
    document.getElementById('loginAndRegister'),
  );
}

export default withRouter(Login);