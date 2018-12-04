import axios from 'axios';

const KEY = 'AIzaSyBLAPKJGCT9Wl2fa_4ZnlK28_ceCZxw87k';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        key: KEY
    }
});
