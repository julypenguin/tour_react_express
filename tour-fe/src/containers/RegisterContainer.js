import React from 'react';
import Register from '../components/Register';
import { connect } from "react-redux";
import { Actions } from "../actions";


const RegisterContainer = props => <Register {...props} />

const mapStateToProps = store => ({
  isLoadingRegister: store.auth.isLoadingRegister,
  registerResult: store.auth.registerResult,
});

const mapDispatchToProps = {
  register: Actions.REGISTER,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegisterContainer);