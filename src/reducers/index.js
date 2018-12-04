import { combineReducers } from 'redux';

import authReducer from './authReducer';
import videosReducer from './videosReducer';
import selectedReducer from './selectedReducer';
import commentsReducer from './commentsReducer';

export default combineReducers({
    auth: authReducer,
    videos: videosReducer,
    selectedVideo: selectedReducer,
    comments: commentsReducer,
});