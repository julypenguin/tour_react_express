import React, { useState, useEffect, Fragment } from 'react';
import { withRouter, Route } from 'react-router-dom';
import Cookies from 'js-cookie';
import NavMenu from './NavMenu';
import HeaderImgBox from './HeaderImgBox'
import Login from '../containers/LoginContainer';

const Header = ({ history, logout, getUser, loginResult, logoutResult }) => {
  const [isLoginDiv, setIsLoginDiv] = useState(false);

  const handleLoginDiv = () => {
    setIsLoginDiv(!isLoginDiv)
  }

  useEffect(() => {
    getUser()
  }, [getUser, loginResult, logoutResult])

  return (
    <header className="App-header">
      <nav className="App-header-nav">
        <div className="nav-center">
          <div className="nav-menus">
            <div className="nav-left">
              <div className="nav-logo" onClick={() => history.push('/')}>Blog</div>
              <NavMenu to='/'>首頁</NavMenu>
              <NavMenu to='/write-post'>發文</NavMenu>
            </div>

            <div className="nav-right">
            
            { !Cookies.get('nickname')
            
              ? <div className="nav-menu" onClick={handleLoginDiv}>登入</div>
              : <Fragment>
                  <div className="nav-nickname" >{Cookies.get('nickname')}</div>
                  <div className="nav-menu" onClick={() => {
                    logout()
                    console.log(logoutResult)
                    history.push('/')
                  }}>登出</div>
                </Fragment>
            }

            </div>

          </div>
        </div>
      </nav>
      <div className="header-top__div"></div>
      <Route exact path="/" component={HeaderImgBox}/>
      { isLoginDiv && <Login handleLoginDiv={handleLoginDiv}/>}
    </header>
  );
};

export default withRouter(Header);
