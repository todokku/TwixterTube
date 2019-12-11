import { combineReducers } from "redux";
import usersReducer from "./users_reducer";
import videosReducer from "./videos_reducer";
import videoShowReducer from "./video_show_reducer";
import commentsReducer from "./comments_reducer";

const entitiesReducer = combineReducers({
  users: usersReducer,
  videos: videosReducer,
  videoShow: videoShowReducer,
  comments: commentsReducer
  // currentLike:
});

export default entitiesReducer;
