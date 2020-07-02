import produce from 'immer';

export const initialState = {
  results: {},
  isLoading: false,
  isLoaded: false,
};

export const TRENDING_MOIVES_REQUEST = 'TRENDING_MOIVES_REQUEST';
export const TRENDING_MOIVES_SUCCESS = 'TRENDING_MOIVES_SUCCESS';
export const TRENDING_MOIVES_FAILURE = 'TRENDING_MOIVES_FAILURE';

export default (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case TRENDING_MOIVES_REQUEST: {
        draft.isLoading = true;
        draft.isLoaded = false;
        break;
      }
      case TRENDING_MOIVES_SUCCESS: {
        const randomIdLength = parseInt(action.data.length, 10);
        const randomIdIndex = Math.floor(Math.random() * randomIdLength);
        const moviePosterpath = action.data[`${randomIdIndex}`].poster_path;
        const movieBackdroppath = action.data[`${randomIdIndex}`].backdrop_path;
        const movieTitle = action.data[`${randomIdIndex}`].title;
        const movieVoteaverage = action.data[`${randomIdIndex}`].vote_average;
        draft.moviePosterpath = moviePosterpath;
        draft.movieBackdroppath = movieBackdroppath;
        draft.movieTitle = movieTitle;
        draft.movieVoteaverage = movieVoteaverage;
        draft.isLoading = false;
        draft.isLoaded = true;
        break;
      }
      case TRENDING_MOIVES_FAILURE: {
        draft.isLoading = false;
        draft.isLoaded = false;
        break;
      }
      default: {
        break;
      }
    }
  });
};
