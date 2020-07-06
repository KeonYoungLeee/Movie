import produce from 'immer';

export const initialState = {
  detailResults: {},
  isLoading: false,
  isLoaded: false,
  titleLength: 0,
  genresFeatures: [],
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
        draft.isLoading = false;
        draft.isLoaded = true;
        draft.detailResults = action.detaildata;
        draft.titleLength = action.detaildata.title.length;
        draft.genresFeatures = action.detaildata.genres.map(v => v.name);
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
