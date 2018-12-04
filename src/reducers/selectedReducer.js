import { PASS_SELECTED } from '../actions/types';

export default (state = null, action) => {
    
    switch (action.type) {
        case PASS_SELECTED:
            return action.payload;
        default:
            return state;
    }
    
};