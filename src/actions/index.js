import { SIGN_IN, SIGN_OUT, FETCH_VIDEOS, FETCH_COMMENTS, PASS_SELECTED } from './types';
import youtube from '../apis/youtube';

// Signin to Google Auth
export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    };
};

// Signout of Google Auth
export const signOut = () => {
    return {
        type: SIGN_OUT
    };
};

// Fetch Videos from Axios Youtube API using search term
export const fetchVideos = (term) => async dispatch => {      
    const response = await youtube.get('/search', {
        params: {
            q: term,
            part: 'snippet',
            maxResults: 5
        }
    });
    dispatch({ type: FETCH_VIDEOS, payload: response.data });
    dispatch(passSelectedVideo(response.data.items[0]));
    dispatch(fetchComments(response.data.items[0].id.videoId));
};

// Fetch Comments from Axios Youtube API using videoId
export const fetchComments = (videoId) => async dispatch => {      
    const response = await youtube.get('/commentThreads', {
        params: {
            part: 'snippet,replies',
            videoId: videoId,
            maxResults: 10,
            order: 'relevance'
        }
    });
    dispatch({ type: FETCH_COMMENTS, payload: response.data });
};

// Pass the newly selected video to the selectedVideo state
export const passSelectedVideo = (video) => async dispatch => {  
    dispatch(fetchComments(video.id.videoId));
    dispatch({ type: PASS_SELECTED, payload: video });
};

// Insert Comment to Youtube Video
export const insertComments = (term) => async dispatch => {      
    const response = await youtube.post('/commentThreads', {
        params: {
            part: 'snippet',
            properties: { 
                'snippet.channelId': '',
                'snippet.videoId': '',
                'snippet.topLevelComment.snippet.textOriginal': ''
        },
      }
    });

};