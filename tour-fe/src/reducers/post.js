import { ActionTypes } from "../actions";

const defaultState = {
  postList: [],
  categoryList: [],
  googleMapsList: [],
  post: {},
  isLoadingGetPostList: false,
  isLoadingGetPost: false,
  isLoadingCreatePost: false,
  isLoadingDeletePost: false,
  isLoadingUpdatePost: false,
  isLoadingGetGoogleMapsList: false,
  isLoadingCreateGoogleMaps: false,
  createPostResult: null,
  getPostListError: null,
  getPostError: null,
  updatePostError: null,
  createPostError: null,
  deletePostError: null,
  getGoogleMapsListError: null,
  createGoogleMapsError: null,
  isRequestAgain: false,
  linkTo: false,
};

function postReducer(state = defaultState, action) {
  switch (action.type) {
    case ActionTypes.GET_POST_LIST:
      return {
        ...state,
        isLoadingGetPostList: true,
        getPostListError: null
      };

    case ActionTypes.GET_POST_LIST_RESULT:
      return {
        ...state,
        isLoadingGetPostList: false,
        getPostListError: action.error,
        postList: action.list || []
      };

    case ActionTypes.GET_POST:
      return {
        ...state,
        isLoadingGetPost: true,
        getPostError: null
      };

    case ActionTypes.GET_POST_RESULT:
      return {
        ...state,
        isLoadingGetPost: false,
        getPostError: action.error,
        post: action.item || {}
      };

    case ActionTypes.CREATE_POST:
      return {
        ...state,
        isLoadingCreatePost: true,
        createPostError: null
      };

    case ActionTypes.CREATE_POST_RESULT:
      return {
        ...state,
        isLoadingCreatePost: false,
        createPostResult: action.result,
        createPostError: action.error,
        linkTo: action.error ? false : true,
      };

    case ActionTypes.CLEAR_POST_RESULT:
      return {
        ...state,
        createPostResult: null,
      };

    case ActionTypes.CLEAR_CREATE_ERR:
      return {
        ...state,
        createPostError: null,
        linkTo: false,
      };

    case ActionTypes.DELETE_POST:
      return {
        ...state,
        isLoadingDeletePost: true
      };

    case ActionTypes.DELETE_POST_RESULT:
      return {
        ...state,
        isLoadingDeletePost: false,
        deletePostError: action.error,
        isRequestAgain: !state.isRequestAgain,
        linkTo: action.error ? false : true,
      };

    case ActionTypes.CLEAR_DELETE_ERROR:
      return {
        ...state,
        deletePostError: null,
        linkTo: false,
      };

    case ActionTypes.UPDATE_POST:
      return {
        ...state,
        isLoadingUpdatePost: true,
        updatePostError: null
      };

    case ActionTypes.UPDATE_POST_RESULT:
      return {
        ...state,
        isLoadingUpdatePost: false,
        updatePostError: action.error,
        isRequestAgain: !state.isRequestAgain,
      };

    // CATEGORY
    case ActionTypes.CREATE_CATEGORY:
      return {
        ...state,
        isLoadingCreateCategory: true,
        createCategoryError: null
      };

    case ActionTypes.CREATE_CATEGORY_RESULT:
      return {
        ...state,
        isLoadingCreateCategory: false,
        createCategoryError: action.error,
      };

    case ActionTypes.GET_CATEGORY_LIST:
      return {
        ...state,
        isLoadingGetCategory: true,
        getCategoryError: null
      };

    case ActionTypes.GET_CATEGORY_LIST_RESULT:
      return {
        ...state,
        isLoadingGetCategory: false,
        getCategoryError: action.error,
        categoryList: action.list || []
      };

    // googleMaps
    case ActionTypes.CREATE_GOOGLEMAPS:
      return {
        ...state,
        isLoadingCreateGoogleMaps: true,
        createGoogleMapsError: null
      };

    case ActionTypes.CREATE_GOOGLEMAPS_RESULT:
      return {
        ...state,
        isLoadingCreateGoogleMaps: false,
        createGoogleMapsError: action.error,
        isRequestAgain: !state.isRequestAgain,
      };

    case ActionTypes.GET_GOOGLEMAPS_LIST:
      return {
        ...state,
        isLoadingGetGoogleMapsList: true,
        getGoogleMapsListError: null
      };

    case ActionTypes.GET_GOOGLEMAPS_LIST_RESULT:
      return {
        ...state,
        isLoadingGetGoogleMapsList: false,
        getGoogleMapsListError: action.error,
        googleMapsList: action.list || []
      };

    default:
      return state;
  }
}

export { postReducer, defaultState };
