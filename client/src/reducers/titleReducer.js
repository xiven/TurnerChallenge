import {
  GET_TITLES,
  GET_TITLE_DETAILS,
  SET_LOADING,
  TITLES_ERROR,
  TITLE_DETAILS_ERROR,
  SET_CURRENT,
  CLEAR_CURRENT,
  SEARCH_TITLES
} from '../actions/types';

const initialState = {
  titles: null,
  titleDetails: null,
  current: null,
  loading: false,
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TITLES:
      return {
        ...state,
        titles: action.payload,
        loading: false
      };
    case GET_TITLE_DETAILS:
      return {
        ...state,
        titleDetails: action.payload,
        loading: false
      };
    case SEARCH_TITLES:
      return {
        ...state,
        titles: action.payload
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case TITLES_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload
      };
    case TITLE_DETAILS_ERROR:
      console.error(action.payload);
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
