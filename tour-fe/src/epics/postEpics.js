import { ofType } from "redux-observable";
import { of, from } from "rxjs";
import { catchError, map, switchMap } from "rxjs/operators";
import { ActionTypes, Actions } from "../actions";
import * as api from "../api";

export const getPostList = action$ =>
  action$.pipe(
    ofType(ActionTypes.GET_POST_LIST),
    switchMap(action =>
      from(api.getPostList(action.payload)).pipe(
        map(res =>
          Actions.GET_POST_LIST_RESULT(null, res.data, action.payload)
        ),
        catchError(err => of(Actions.GET_POST_LIST_RESULT(err.message)))
      )
    )
  );

export const getPost = action$ =>
  action$.pipe(
    ofType(ActionTypes.GET_POST),
    switchMap(action =>
      from(api.getPost(action.id)).pipe(
        map(res => Actions.GET_POST_RESULT(null, res.data, action.payload)),
        catchError(err => of(Actions.GET_POST_RESULT(err.message)))
      )
    )
  );

export const createPost = action$ =>
  action$.pipe(
    ofType(ActionTypes.CREATE_POST),
    switchMap(action =>
      from(api.createPost(action.payload)).pipe(
        map((res) => {
          return Actions.CREATE_POST_RESULT(res.data)
        }),
        catchError(err => of(Actions.CREATE_POST_RESULT(null, err.message)))
      )
    )
  );

export const deletePost = action$ =>
  action$.pipe(
    ofType(ActionTypes.DELETE_POST),
    switchMap(action =>
      from(api.deletePost(action.id)).pipe(
        map(() => Actions.DELETE_POST_RESULT(null)),
        catchError(err => of(Actions.DELETE_POST_RESULT(err.message)))
      )
    )
  );

export const updatePost = action$ =>
  action$.pipe(
    ofType(ActionTypes.UPDATE_POST),
    switchMap(action =>
      from(api.updatePost(action.id, action.payload)).pipe(
        map(() => Actions.UPDATE_POST_RESULT(null)),
        catchError(err => of(Actions.UPDATE_POST_RESULT(err.message)))
      )
    )
  );

  // Category
export const createCategory = action$ =>
  action$.pipe(
    ofType(ActionTypes.CREATE_CATEGORY),
    switchMap(action =>
      from(api.createCategory(action.payload)).pipe(
        map(() => Actions.CREATE_CATEGORY_RESULT(null)),
        catchError(err => of(Actions.CREATE_CATEGORY_RESULT(err.message)))
      )
    )
  );

export const getCategoryList = action$ =>
  action$.pipe(
    ofType(ActionTypes.GET_CATEGORY_LIST),
    switchMap(action =>
      from(api.getCategoryList(action.payload)).pipe(
        map((res) => Actions.GET_CATEGORY_LIST_RESULT(null, res.data, action.payload)),
        catchError(err => of(Actions.GET_CATEGORY_LIST_RESULT(err.message)))
      )
    )
  );

  export const getMaps = action$ =>
  action$.pipe(
    ofType(ActionTypes.GET_GOOGLEMAPS_LIST),
    switchMap(action =>
      from(api.getMaps(action.payload)).pipe(
        map(res =>
          Actions.GET_GOOGLEMAPS_LIST_RESULT(null, res.data, action.payload)
        ),
        catchError(err => of(Actions.GET_GOOGLEMAPS_LIST_RESULT(err.message)))
      )
    )
  );

  export const createMap = action$ =>
  action$.pipe(
    ofType(ActionTypes.CREATE_GOOGLEMAPS),
    switchMap(action =>
      from(api.createMap(action.id, action.payload)).pipe(
        map(() => Actions.CREATE_GOOGLEMAPS_RESULT(null)),
        catchError(err => of(Actions.CREATE_GOOGLEMAPS_RESULT(err.message)))
      )
    )
  );
  