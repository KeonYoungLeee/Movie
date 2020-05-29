export const initialState = {
  results: {},
  currentResults: {},
  upcompingResults: {},
  popularResults: {},
  detailResults: {},
  imageResults: {},
  creditsResults: {},
  isLoading: false,
  isLoaded: false,
};


export const CURRENT_MOVIES_REQUEST = 'CURRENT_MOVIE_REQUEST';
export const CURRENT_MOVIES_SUCCESS = 'CURRENT_MOVIE_SUCCESS';
export const CURRENT_MOVIES_FAILURE = 'CURRENT_MOVIE_FAILURE';

export const TRENDING_MOIVES_REQUEST = 'TRENDING_MOIVES_REQUEST';
export const TRENDING_MOIVES_SUCCESS = 'TRENDING_MOIVES_SUCCESS';
export const TRENDING_MOIVES_FAILURE = 'TRENDING_MOIVES_FAILURE';

export const UPCOMPING_MOIVES_REQUEST = 'UPCOMPING_MOIVES_REQUEST';
export const UPCOMPING_MOIVES_SUCCESS = 'UPCOMPING_MOIVES_SUCCESS';
export const UPCOMPING_MOIVES_FAILURE = 'UPCOMPING_MOIVES_FAILURE';

export const POPULAR_MOIVES_REQUEST = 'POPULAR_MOIVES_REQUEST';
export const POPULAR_MOIVES_SUCCESS = 'POPULAR_MOIVES_SUCCESS';
export const POPULAR_MOIVES_FAILURE = 'POPULAR_MOIVES_FAILURE';

export const DETAIL_MOVIES_REQUEST = 'DETAIL_MOVIES_REQUEST';
export const DETAIL_MOVIES_SUCCESS = 'DETAIL_MOVIES_SUCCESS';
export const DETAIL_MOVIES_FAILURE = 'DETAIL_MOVIES_FAILURE';

export const IMAGES_MOVIES_REQUEST = 'IMAGES_MOVIES_REQUEST';
export const IMAGES_MOVIES_SUCCESS = 'IMAGES_MOVIES_SUCCESS';
export const IMAGES_MOVIES_FAILURE = 'IMAGES_MOVIES_FAILURE';

export const CREDITS_MOVIES_REQUEST = 'CREDITS_MOVIES_REQUEST';
export const CREDITS_MOVIES_SUCCESS = 'CREDITS_MOVIES_SUCCESS';
export const CREDITS_MOVIES_FAILURE = 'CREDITS_MOVIES_FAILURE';

export default (state = initialState, action) => {
  switch (action.type) {
    case TRENDING_MOIVES_REQUEST: {
      return {
        ...state,
      };
    }
    case TRENDING_MOIVES_SUCCESS: {
      const randomIdLength = parseInt(action.data.length, 10);
      const randomIdIndex = Math.floor(Math.random() * randomIdLength);
      const moviePosterpath = action.data[`${randomIdIndex}`].poster_path;
      const movieBackdroppath = action.data[`${randomIdIndex}`].backdrop_path;
      const movieTitle = action.data[`${randomIdIndex}`].title;
      const movieVoteaverage = action.data[`${randomIdIndex}`].vote_average;
      return {
        ...state,
        results: action.data,
        moviePosterpath,
        movieBackdroppath,
        movieTitle,
        movieVoteaverage,
      };
    }
    case TRENDING_MOIVES_FAILURE: {
      return {
        ...state,
      };
    }

    case CURRENT_MOVIES_REQUEST: {
      return {
        ...state,
        isLoaded: false,
      };
    }
    case CURRENT_MOVIES_SUCCESS: {
      return {
        ...state,
        currentResults: action.currentData,
        isLoaded: true,
      };
    }
    case CURRENT_MOVIES_FAILURE: {
      return {
        ...state,
        isLoaded: false,
      };
    }

    case UPCOMPING_MOIVES_REQUEST: {
      return {
        ...state,
        isLoaded: false,
      };
    }
    case UPCOMPING_MOIVES_SUCCESS: {
      return {
        ...state,
        upcompingResults: action.upCompingdata,
        isLoaded: true,
      };
    }
    case UPCOMPING_MOIVES_FAILURE: {
      return {
        ...state,
        isLoaded: false,
      };
    }

    case POPULAR_MOIVES_REQUEST: {
      return {
        ...state,
        isLoaded: false,
      };
    }
    case POPULAR_MOIVES_SUCCESS: {
      return {
        ...state,
        popularResults: action.populardata,
        isLoaded: true,
      };
    }
    case POPULAR_MOIVES_FAILURE: {
      return {
        ...state,
        isLoaded: false,
      };
    }
    case DETAIL_MOVIES_REQUEST: {
      return {
        ...state,
        isLoaded: false,
        id: action.id,
      };
    }
    case DETAIL_MOVIES_SUCCESS: {
      return {
        ...state,
        detailResults: action.detaildata,
        isLoaded: true,
      };
    }
    case DETAIL_MOVIES_FAILURE: {
      return {
        ...state,
        isLoaded: false,
      };
    }
    case IMAGES_MOVIES_REQUEST: {
      return {
        ...state,
        isLoaded: false,
        id: action.id,
      };
    }
    case IMAGES_MOVIES_SUCCESS: {
      return {
        ...state,
        imageResults: action.imagedata,
        isLoaded: true,
      };
    }
    case IMAGES_MOVIES_FAILURE: {
      return {
        ...state,
        isLoaded: false,
      };
    }

    case CREDITS_MOVIES_REQUEST: {
      return {
        ...state,
        isLoaded: false,
        id: action.id,
      };
    }
    case CREDITS_MOVIES_SUCCESS: {
      return {
        ...state,
        creditsResults: action.creditsdata,
        isLoaded: true,
      };
    }
    case CREDITS_MOVIES_FAILURE: {
      return {
        ...state,
        isLoaded: false,
      };
    }

    default: {
      return {
        ...state,
      };
    }
  }
};
