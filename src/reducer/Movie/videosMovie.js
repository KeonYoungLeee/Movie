import produce from 'immer';

export const initialState = {
  videosResults: {},
  isLoading: false,
  isLoaded: false,
};

export const VIDEOS_MOVIES_REQUEST = 'VIDEOS_MOVIES_REQUEST';
export const VIDEOS_MOVIES_SUCCESS = 'VIDEOS_MOVIES_SUCCESS';
export const VIDEOS_MOVIES_FAILURE = 'VIDEOS_MOVIES_FAILURE';

export default (state = initialState, action) => {
  return produce (state, (draft) => {
    switch (action.type) {
      case VIDEOS_MOVIES_REQUEST: {
        draft.isLoading = true;
        draft.isLoaded = false;
        draft.id = action.id;
        break;
      }
      case VIDEOS_MOVIES_SUCCESS: {
        draft.isLoading = false;
        draft.isLoaded = true;
        draft.videosResults = action.videosdata;
        break;
      }
      case VIDEOS_MOVIES_FAILURE: {
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
