import { RECEIVE_CURRENT_USER,
    RECEIVE_ALL_USERS
} from '../actions/session_actions';

import {
    RECEIVE_ALL_VIDEOS, RECEIVE_VIDEO
} from '../actions/videos_actions';

export default ( state = {}, action ) => {
    Object.freeze(state);
    let newState = {};
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { [action.user.id]: action.user });
        case RECEIVE_ALL_VIDEOS:
            newState = Object.assign({}, state, action.payload.users);
            return newState;
        case RECEIVE_VIDEO:
            newState = Object.assign({}, state, { [action.payload.user.id]: action.payload.user });
            return newState;
        default:
            return state;
    }
}