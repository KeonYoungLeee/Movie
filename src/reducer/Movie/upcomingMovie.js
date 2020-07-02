import produce from 'immer';

export const initialState = {
  upcompingResults: {},
  isLoading: false,
  isLoaded: false,
};

export const UPCOMPING_MOIVES_REQUEST = 'UPCOMPING_MOIVES_REQUEST';
export const UPCOMPING_MOIVES_SUCCESS = 'UPCOMPING_MOIVES_SUCCESS';
export const UPCOMPING_MOIVES_FAILURE = 'UPCOMPING_MOIVES_FAILURE';

export default (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case UPCOMPING_MOIVES_REQUEST: {
        draft.isLoading = true;
        draft.isLoaded = false;
        break;
      }
      case UPCOMPING_MOIVES_SUCCESS: {
        draft.isLoading = false;
        draft.isLoaded = true;
        draft.upcompingResults = action.upCompingdata;
        break;
      }
      case UPCOMPING_MOIVES_FAILURE: {
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
