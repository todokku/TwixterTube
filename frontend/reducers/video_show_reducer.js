import { RECEIVE_VIDEO, UPDATE_VIEW_COUNT } from "../actions/videos_actions";

export default (state = {}, action) => {
  Object.freeze(state);
  let newState = {};

  switch (action.type) {
    case RECEIVE_VIDEO:
      // console.log(
      //   "IN THE ACTIONS SHOW WHAT VIDEO SHOW PAYLOAD LOOKS LIKE: ",
      //   action.payload
      // );
      //   newState = Object.assign({}, state, {
      //     [action.payload.video.id]: action.payload.video
      //   });
      newState = Object.assign({}, state, {
        like: action.payload.like,
        video: action.payload.video,
        user: action.payload.user
      });
      return newState;

    case UPDATE_VIEW_COUNT:
      return action.payload;

    default:
      return state;
  }
};
