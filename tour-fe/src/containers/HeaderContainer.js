import React from 'react';
import Header from '../components/Header';
import { connect } from "react-redux";
import { Actions } from "../actions";

const HeaderContainer = (props) => <Header {...props}/>

const mapStateToProps = store => ({
  loginResult: store.auth.loginResult,
  logoutResult: store.auth.logoutResult,
});

const mapDispatchToProps = {
  logout: Actions.LOGOUT,
  getUser: Actions.GET_USER,
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
