import produce from 'immer';

export const initialState = {
  currentResults: {},
  isLoading: false,
  isLoaded: false,
};


export const CURRENT_MOVIES_REQUEST = 'CURRENT_MOVIE_REQUEST';
export const CURRENT_MOVIES_SUCCESS = 'CURRENT_MOVIE_SUCCESS';
export const CURRENT_MOVIES_FAILURE = 'CURRENT_MOVIE_FAILURE';

export default (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case CURRENT_MOVIES_REQUEST: {
        draft.isLoading = true;
        draft.isLoaded = false;
        break;
      }
      case CURRENT_MOVIES_SUCCESS: {
        draft.isLoading = false;
        draft.isLoaded = true;
        draft.currentResults = action.currentData;
        break;
      }
      case CURRENT_MOVIES_FAILURE: {
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
