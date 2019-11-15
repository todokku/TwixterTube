import {
  RECEIVE_ALL_VIDEOS,
  RECEIVE_VIDEO,
  REMOVE_VIDEO,
  UPDATE_VIEW_COUNT
} from "../actions/videos_actions";

export default (state = {}, action) => {
  Object.freeze(state);
  let newState = {};
  switch (action.type) {
    case RECEIVE_ALL_VIDEOS:
      return action.payload.videos;
    case RECEIVE_VIDEO:
      // console.log(
      //   "IN THE ACTIONS SHOW WHAT PAYLOAD LOOKS LIKE: ",
      //   action.payload
      // );
      newState = Object.assign({}, state, {
        [action.payload.video.id]: action.payload.video
      });
      return newState;

    case UPDATE_VIEW_COUNT:
      newState = Object.assign({}, state, {
        [action.payload.video.id]: action.payload.video
      });
      return newState;

    case REMOVE_VIDEO:
      newState = Object.assign({}, state);
      delete newState[action.videoId];
      return newState;
    default:
      return state;
  }
};
