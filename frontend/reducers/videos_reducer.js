import {
  RECEIVE_ALL_VIDEOS,
  RECEIVE_VIDEO,
  REMOVE_VIDEO,
  UPDATE_VIEW_COUNT,
  REMOVE_ALL_VIDEOS
} from "../actions/videos_actions";

export default (state = {}, action) => {
  Object.freeze(state);
  let newState = {};
  switch (action.type) {
    case RECEIVE_ALL_VIDEOS:
      return action.payload.videos;

    // case RECEIVE_VIDEO:
    //   console.log(
    //     "IN THE ACTIONS SHOW WHAT PAYLOAD LOOKS LIKE: ",
    //     action.payload
    //   );
    //   // [action.payload.video.id]: action.payload.video
    //   // reason for sending payload to see if there is a like property
    //   // then check on component of like property exists, then do
    //   // proper css for highlighting proper like / dislike node
    //   newState = Object.assign({}, state, {
    //     [action.payload.video.id]: action.payload
    //   });
    //   return newState;

    // case UPDATE_VIEW_COUNT:
    //   newState = Object.assign({}, state, {
    //     [action.payload.video.id]: action.payload.video
    //   });
    //   return newState;

    case REMOVE_VIDEO:
      newState = Object.assign({}, state);
      delete newState[action.videoId];
      return newState;

    case REMOVE_ALL_VIDEOS:
      return {};

    default:
      return state;
  }
};
