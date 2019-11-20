import { ActionTypes } from "../actions";

const defaultState = {
  error: null,
  loginStatus: "LOADING",
  isLogin: false,
  user: null,
  isLoadingRegister: false,
  registerResult: null,
  isLoadingGetUser: false,
  isLoadingLogin: false,
  loginResult: null,
  isLoadingLogout: false,
  logoutResult: null,
  getUserResult: {nickname: ''},
};

function authReducer(state = defaultState, action) {
  switch (action.type) {

    case ActionTypes.REGISTER:
      return {
        ...state,
        isLoadingRegister: true,
        registerResult: null
      };

    case ActionTypes.REGISTER_RESULT:
      return {
        ...state,
        isLoadingRegister: false,
        registerResult: action.result
      };

    case ActionTypes.LOGIN:
      return {
        ...state,
        isLoadingLogin: true,
        loginResult: null
      };

    case ActionTypes.LOGIN_RESULT:
      return {
        ...state,
        isLogin: true,
        isLoadingLogin: false,
        loginResult: action.result,
      };

    case ActionTypes.LOGOUT:
      return {
        ...state,
        isLoadingLogout: true,
        logoutResult: null
      };

    case ActionTypes.LOGOUT_RESULT:
      return {
        ...state,
        isLoadingLoout: false,
        logoutResult: action.result
      };

    case ActionTypes.GET_USER:
      return {
        ...state,
        isLoadingGetUser: true,
        getUserResult: {},
      };

    case ActionTypes.GET_USER_RESULT:
      return {
        ...state,
        isLoadingGetUser: false,
        getUserResult: action.result
      };

    default:
      return state;
  }
}

export { authReducer, defaultState };
