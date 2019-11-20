import React from 'react';
import { Route, withRouter } from 'react-router-dom';

const NavMenu = ({ to, children, history }) => {
  return (
    <Route
      path={to}
      exact={true}
      children={({ match }) => (
        <li className={`nav-menu ${match ? "nav-current" : ""}`} onClick={() => {
          history.push(to)
        }}>
          { children }
        </li>
      )}
    />
  );
};

export default withRouter(NavMenu);