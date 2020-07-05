import produce from 'immer';

export const initialState = {
  detailResults: {},
  isLoading: false,
  isLoaded: false,
  titleLength: 0,
  genres: [],
};

export const DETAIL_MOVIES_REQUEST = 'DETAIL_MOVIES_REQUEST';
export const DETAIL_MOVIES_SUCCESS = 'DETAIL_MOVIES_SUCCESS';
export const DETAIL_MOVIES_FAILURE = 'DETAIL_MOVIES_FAILURE';

export default (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case DETAIL_MOVIES_REQUEST: {
        draft.isLoading = true;
        draft.isLoaded = false;
        break;
      }
      case DETAIL_MOVIES_SUCCESS: {
        const titleLength = action.detaildata.title.length;
        draft.isLoading = true;
        draft.isLoaded = false;
        draft.detailResults = action.detaildata;
        draft.titleLength = titleLength;
        draft.genres = genres;
        break;
      }
      case DETAIL_MOVIES_FAILURE: {
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
