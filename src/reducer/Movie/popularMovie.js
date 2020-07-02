import produce from 'immer';

export const initialState = {
  popularResults: {},
  isLoading: false,
  isLoaded: false,
};

export const POPULAR_MOIVES_REQUEST = 'POPULAR_MOIVES_REQUEST';
export const POPULAR_MOIVES_SUCCESS = 'POPULAR_MOIVES_SUCCESS';
export const POPULAR_MOIVES_FAILURE = 'POPULAR_MOIVES_FAILURE';

export default (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case POPULAR_MOIVES_REQUEST: {
        draft.isLoading = true;
        draft.isLoaded = false;
        break;
      }
      case POPULAR_MOIVES_SUCCESS: {
        draft.isLoading = false;
        draft.isLoaded = true;
        draft.popularResults = action.populardata;
        break;
      }
      case POPULAR_MOIVES_FAILURE: {
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
