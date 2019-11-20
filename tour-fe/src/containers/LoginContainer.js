import React from 'react';
import Login from '../components/Login';
import { connect } from "react-redux";
import { Actions } from "../actions";

const LoginContainer = props => <Login {...props} />

const mapDispatchToProps = {
  login: Actions.LOGIN,
  getUser: Actions.GET_USER,
};

export default connect(null, mapDispatchToProps)(LoginContainer);