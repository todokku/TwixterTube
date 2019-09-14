import {
    RECEIVE_ALL_VIDEOS,
    RECEIVE_VIDEO,
    REMOVE_VIDEO
} from '../actions/videos_actions';

export default ( state = {}, action ) => {
    Object.freeze(state);
    let newState = {};
    switch(action.type) {
        case RECEIVE_ALL_VIDEOS:
            return action.videos;
        case RECEIVE_VIDEO:
            newState = Object.assign({}, state, { [action.video.id]: action.video } );
            return newState;
        case REMOVE_VIDEO:
            newState = Object.assign({}, state);
            delete newState[action.videoId]
            return newState;
        default:
            return state;
    }
}