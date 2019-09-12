import { RECEIVE_CURRENT_USER } from '../actions/session_actions';

export default ( state = {}, action ) => {
    Object.freeze(state);
    let newState = {};
    switch(action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, state, { [action.user.id]: action.user });
            
        default:
            return state;
    }
}