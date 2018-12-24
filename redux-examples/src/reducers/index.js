import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import tracks from './tracks';
import playLists from './playLists';
import filterTracks from './filterTracks';

export default combineReducers({
    routing: routerReducer,
    tracks,
    playLists,
    filterTracks,
});