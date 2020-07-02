import produce from 'immer';

export const initialState = {
  imageResults: {},
  isLoading: false,
  isLoaded: false,
};

export const IMAGES_MOVIES_REQUEST = 'IMAGES_MOVIES_REQUEST';
export const IMAGES_MOVIES_SUCCESS = 'IMAGES_MOVIES_SUCCESS';
export const IMAGES_MOVIES_FAILURE = 'IMAGES_MOVIES_FAILURE';

export default (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case IMAGES_MOVIES_REQUEST: {
        draft.isLoading = true;
        draft.isLoaded = false;
        draft.id = action.id;
        break;
      }
      case IMAGES_MOVIES_SUCCESS: {
        draft.isLoading = false;
        draft.isLoaded = true;
        draft.imageResults = action.imagedata;
        break;
      }
      case IMAGES_MOVIES_FAILURE: {
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
