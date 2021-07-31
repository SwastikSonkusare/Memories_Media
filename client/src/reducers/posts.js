import {
  COMMENT,
  CREATE,
  DELETE,
  FETCH_ALL,
  FETCH_BY_SEARCH,
  FETCH_POST,
  START_LOADING,
  STOP_LOADING,
  UPDATE,
} from "../constants/actionTypes";

export default (state = { isLoading: true, posts: [] }, action) => {
  switch (action.type) {
    case START_LOADING:
      return {
        ...state,
        isLoading: true,
        isPostUpdated: false,
        isPostCreated: false,
      };

    case STOP_LOADING:
      return {
        ...state,
        isLoading: false,
        isPostUpdated: false,
        isPostCreated: false,
      };

    case FETCH_ALL:
      return {
        ...state,
        posts: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages,
        isPostUpdated: false,
        isPostCreated: false,
      };

    case FETCH_BY_SEARCH:
      return {
        ...state,
        posts: action.payload,
        isPostUpdated: false,
        isPostCreated: false,
      };

    case FETCH_POST:
      return {
        ...state,
        post: action.payload,
        isPostUpdated: false,
        isPostCreated: false,
      };

    case CREATE:
      return {
        ...state,
        posts: [...state.posts, action.payload],
        isPostUpdated: false,
        isPostCreated: true,
      };

    case COMMENT:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === action.payload._id ? action.payload : post
        ),
        isPostUpdated: false,
        isPostCreated: false,
      };

    case UPDATE:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === action.payload._id ? action.payload : post
        ),
        isPostUpdated: true,
        isPostCreated: false,
      };

    case DELETE:
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== action.payload),
        isPostUpdated: false,
      };

    default:
      return state;
  }
};
