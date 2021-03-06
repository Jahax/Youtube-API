import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import authReducer from './authReducer';
import videosReducer from './videosReducer';
import selectedReducer from './selectedReducer';
import commentsReducer from './commentsReducer';

export default combineReducers({
    auth: authReducer,
    form: formReducer,
    videos: videosReducer,
    selectedVideo: selectedReducer,
    comments: commentsReducer,
});