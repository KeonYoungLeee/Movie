import produce from 'immer';

export const initialState = {
  searchResults: [],
  isLoading: false,
  isLoaded: false,
  id: [],
  title: [],
};

export const SEARCH_MOIVES_REQUEST = 'SEARCH_MOIVES_REQUEST';
export const SEARCH_MOIVES_SUCCESS = 'SEARCH_MOIVES_SUCCESS';
export const SEARCH_MOIVES_FAILURE = 'SEARCH_MOIVES_FAILURE';

export default (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case SEARCH_MOIVES_REQUEST: {
        draft.isLoading = true;
        draft.isLoaded = false;
        break;
      }
      case SEARCH_MOIVES_SUCCESS: {
        draft.isLoading = false;
        draft.isLoaded = true;
        draft.searchResults = action.searchdata;
        draft.id = action.searchdata.map((items) => items.id);
        draft.title = action.searchdata.map((items) => items.title);
        break;
      }
      case SEARCH_MOIVES_FAILURE: {
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
