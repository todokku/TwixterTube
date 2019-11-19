import { RECEIVE_VIDEO } from "../actions/videos_actions";

export default (state = {}, action) => {
  Object.freeze(state);
  let newState = {};

  switch (action.type) {
    // case RECEIVE_VIDEO:
    //   console.log(
    //     "IN THE ACTIONS SHOW WHAT VIDEO SHOW PAYLOAD LOOKS LIKE: ",
    //     action.payload
    //   );
    //   //   newState = Object.assign({}, state, {
    //   //     [action.payload.video.id]: action.payload.video
    //   //   });
    //   return action.payload.video;

    default:
      return state;
  }
};
