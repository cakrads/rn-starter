import * as TYPE from './type';
import * as API from '../../api';

export const getMoviePopular = (firstInit = false) => {
  return async (dispatch, getState) => {
    try {
      let page = firstInit ? 1 : getState().movieReducer.page;
      let param = {page: page};

      if (firstInit) {
        dispatch({
          type: TYPE.SET_MOVIE_POPULAR_LIST_RESET,
        });
      }

      const response = await API.getMoviePopular(param);

      dispatch({
        type: TYPE.SET_MOVIE_POPULAR_LIST,
        data: response.results,
        page: page + 1,
      });
      // console.log('getState().movieReducer: ', getState().movieReducer);

      return {
        status: true,
        message: 'success',
      };
    } catch (error) {
      throw {
        status: false,
        message: error,
      };
    }
  };
};

export const getMovieInTheater = (firstInit = false) => {
  return async (dispatch, getState) => {
    try {
      let page = firstInit ? 1 : getState().movieReducer.page;
      let param = {page: page};

      if (firstInit) {
        dispatch({
          type: TYPE.SET_MOVIE_THEATER_LIST_RESET,
        });
      }

      const response = await API.getMovieInTheater(param);

      dispatch({
        type: TYPE.SET_MOVIE_THEATER_LIST,
        data: response.results,
        page: page + 1,
      });
      // console.log('getState().movieReducer: ', getState().movieReducer);

      return {
        status: true,
        message: 'success',
      };
    } catch (error) {
      throw {
        status: false,
        message: error,
      };
    }
  };
};

export const getMovieDetail = movieID => {
  return async (dispatch, getState) => {
    try {
      const response = await API.getMovieDetail(movieID);
      console.log(response);
      dispatch({
        type: TYPE.SET_MOVIE_DETAIL,
        data: response,
      });
      // console.log('getState().movieReducer: ', getState().movieReducer);

      return {
        status: true,
        message: 'success',
      };
    } catch (error) {
      throw {
        status: false,
        message: error,
      };
    }
  };
};
