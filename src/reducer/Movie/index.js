import { combineReducers } from 'redux';

import Credits from './creditsMovie';
import Current from './currentMovie';
import Detail from './detailMovie';
import Images from './imagesMovie';
import Popular from './popularMovie';
import Trending from './trendingMovie';
import Upcoming from './upcomingMovie';
import Videos from './videosMovie';

const rootReducer = combineReducers({
  Credits,
  Current,
  Detail,
  Images,
  Popular,
  Trending,
  Upcoming,
  Videos,
});

export default rootReducer;
