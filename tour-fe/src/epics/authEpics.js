import { ofType } from "redux-observable";
import { of, from } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import Cookies from 'js-cookie';
import { ActionTypes, Actions } from "../actions";
import * as api from "../api";


export const registerEpic = action$ =>
  action$.pipe(
    ofType(ActionTypes.REGISTER),
    mergeMap(action =>
      from(api.register(action.user)).pipe(
        map(() => Actions.REGISTER_RESULT("success")),
        catchError(error => of(Actions.REGISTER_RESULT(error.message)))
      )
    )
  );

  export const loginEpic = action$ =>
  action$.pipe(
    ofType(ActionTypes.LOGIN),
    mergeMap(action =>
      from(api.login(action.user)).pipe(
        map((res) => {
          if (res.data && !res.data.errorMessage) {
            Cookies.set('nickname', res.data, { expires: 7, path: '' })
          }
          return Actions.LOGIN_RESULT(res.data)
        }),
        catchError(error => of(Actions.LOGIN_RESULT(error.message)))
      )
    )
  );

export const logout = action$ =>
  action$.pipe(
    ofType(ActionTypes.LOGOUT),
    mergeMap(action =>
      from(api.logout(action.payload)).pipe(
        map((res) => {
          if (res.data === 'success') {
            Cookies.remove('nickname')            
          }
          return Actions.LOGOUT_RESULT(res.data)
        }),
        catchError(error => of(Actions.LOGOUT_RESULT(error.message)))
      )
    )
  );

  export const getUserEpic = action$ =>
  action$.pipe(
    ofType(ActionTypes.GET_USER),
    mergeMap(action =>
      from(api.getUser(action.payload)).pipe(
        map((res) => {
          if (!res.data) {
            Cookies.remove('nickname')            
          }
          return Actions.GET_USER_RESULT(null, res.data, action.payload)
        }),
        catchError(error => of(Actions.GET_USER_RESULT(error.message)))
      )
    )
  );
