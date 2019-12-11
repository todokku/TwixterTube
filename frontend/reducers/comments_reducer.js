import { RECEIVE_COMMENT, REMOVE_COMMENT } from "../actions/comments_actions";

import { RECEIVE_VIDEO } from "../actions/videos_actions";

export default (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_VIDEO:
      if (!action.payload.comments) {
        return state;
      } else {
        return action.payload.comments;
      }

    case RECEIVE_COMMENT:
      newState = Object.assign({}, state, {
        [action.comment.id]: action.comment
      });
      return newState;

    case REMOVE_COMMENT:
      newState = Object.assign({}, state);
      delete newState[action.commentId];
      return newState;

    default:
      return state;
  }
};
