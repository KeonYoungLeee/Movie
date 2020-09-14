import produce from 'immer';

export const initialState = {
  results: {
    id: '',
    title: '',
    backdrop_path: '',
    vote_average: '',
  },
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
        draft.id = action.results.id;
        draft.title = action.results.title;
        draft.backdrop_path = action.results.backdrop_path;
        draft.vote_average = action.results.vote_average;
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
