import { combineReducers } from "redux";
// import { sessionReducer } from 'redux-react-session';
import { authReducer as auth } from "./auth";
import { postReducer as post } from "./post";

const reducer = combineReducers({
  auth,
  post,
  // session: sessionReducer,
});

export default reducer;
