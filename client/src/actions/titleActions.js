import {
  GET_TITLES,
  GET_TITLE_DETAILS,
  SET_LOADING,
  TITLES_ERROR,
  TITLE_DETAILS_ERROR,
  SET_CURRENT,
  CLEAR_CURRENT,
  SEARCH_TITLES
} from './types';

// Get titles from server
export const getTitles = () => async dispatch => {
  try {
    setLoading();
    const res = await fetch('/titles', {
      headers: {
        'API-Key': process.env.REACT_APP_API_KEY
      }
    });
    const data = await res.json();
    //console.log(data);

    dispatch({
      type: GET_TITLES,
      payload: data
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: TITLES_ERROR,
      payload: err.response.statusText
    });
  }
};

//Get title detail
export const getTitleDetails = titleId => async dispatch => {
  try {
    setLoading();
    const res = await fetch(`/titles/details?id=${titleId}`, {
      headers: {
        'API-Key': process.env.REACT_APP_API_KEY
      }
    });
    const data = await res.json();

    dispatch({
      type: GET_TITLE_DETAILS,
      payload: data
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: TITLE_DETAILS_ERROR,
      payload: err.response.statusText
    });
  }
};

// Search titles
export const searchTitles = text => async dispatch => {
  try {
    setLoading();

    const res = await fetch(`/titles/?id=${text}`, {
      headers: {
        'API-Key': process.env.REACT_APP_API_KEY
      }
    });
    const data = await res.json();

    dispatch({
      type: SEARCH_TITLES,
      payload: data
    });
  } catch (err) {
    console.log(err);
    dispatch({
      type: TITLES_ERROR,
      payload: err.response.statusText
    });
  }
};

// Set current title
export const setCurrent = title => {
  return {
    type: SET_CURRENT,
    payload: title
  };
};

// Clear current log
export const clearCurrent = () => {
  return {
    type: CLEAR_CURRENT
  };
};

// Set loading to true
export const setLoading = () => {
  return {
    type: SET_LOADING
  };
};
