import EasyActions from "redux-easy-actions";

const { Actions, Constants } = EasyActions({
  //post
  GET_POST_LIST(type, payload) {
    return { type, payload };
  },

  GET_POST_LIST_RESULT(type, error, list) {
    return { type, error, list };
  },

  GET_POST(type, id) {
    return { type, id };
  },

  GET_POST_RESULT(type, error, item) {
    return { type, error, item };
  },

  CREATE_POST(type, payload) {
    return { type, payload };
  },

  CREATE_POST_RESULT(type, result) {
    return { type, result };
  },
  
  CLEAR_POST_RESULT(type) {
    return { type }
  },

  CLEAR_CREATE_ERR(type) {
    return { type }
  },

  DELETE_POST(type, id) {
    return { type, id };
  },

  DELETE_POST_RESULT(type, error) {
    return { type, error };
  },

  CLEAR_DELETE_ERROR(type) {
    return { type }
  },

  UPDATE_POST(type, id, payload) {
    return { type, id, payload };
  },

  UPDATE_POST_RESULT(type, error) {
    return { type, error };
  },

  // Category
  CREATE_CATEGORY(type, payload) {
    return { type, payload };
  },

  CREATE_CATEGORY_RESULT(type, error) {
    return { type, error };
  },

  GET_CATEGORY_LIST(type, payload) {
    return { type, payload };
  },

  GET_CATEGORY_LIST_RESULT(type, error, list) {
    return { type, error, list };
  },

  // googleMaps
  GET_GOOGLEMAPS_LIST(type, payload) {
    return { type, payload };
  },

  GET_GOOGLEMAPS_LIST_RESULT(type, error, list) {
    return { type, error, list };
  },

  CREATE_GOOGLEMAPS(type, id, payload) {
    return { type, id, payload };
  },

  CREATE_GOOGLEMAPS_RESULT(type, error) {
    return { type, error };
  },

  // register
  REGISTER(type, user) {
    return { type, user };
  },

  REGISTER_RESULT(type, result) {
    return { type, result };
  },

  LOGIN(type, user) {
    return { type, user };
  },

  LOGIN_RESULT(type, result) {
    return { type, result };
  },

  LOGOUT(type) {
    return { type };
  },

  LOGOUT_RESULT(type, result) {
    return { type, result };
  },

  // user
  GET_USER(type, payload) {
    return { type, payload };
  },

  GET_USER_RESULT(type, err, result) {
    return { type, err, result };
  },

});

export { Actions, Constants as ActionTypes };
