import produce from 'immer';

export const initialState = {
  creditsResults: {},
  isLoading: false,
  isLoaded: false,
};

export const CREDITS_MOVIES_REQUEST = 'CREDITS_MOVIES_REQUEST';
export const CREDITS_MOVIES_SUCCESS = 'CREDITS_MOVIES_SUCCESS';
export const CREDITS_MOVIES_FAILURE = 'CREDITS_MOVIES_FAILURE';

export default (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case CREDITS_MOVIES_REQUEST: {
        draft.isLoading = true;
        draft.isLoaded = false;
        draft.id = action.id;
        break;
      }
      case CREDITS_MOVIES_SUCCESS: {
        draft.isLoading = false;
        draft.isLoaded = true;
        draft.creditsResults = action.creditsResults;
        break;
      }
      case CREDITS_MOVIES_FAILURE: {
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
