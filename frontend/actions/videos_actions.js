import * as VideoUtil from "../util/videos_util";
// {
//     fetchVideos,
//     fetchVideo,
//     postVideo,
//     editVideo,
//     deleteVideo
// } from '../util/videos';

export const RECEIVE_ALL_VIDEOS = "RECEIVE_ALL_VIDEOS";
export const RECEIVE_VIDEO = "RECEIVE_VIDEO";
export const REMOVE_VIDEO = "REMOVE_VIDEO";
export const RECEIVE_UPLOADERS = "RECEIVE_UPLOADERS";
export const UPDATE_VIEW_COUNT = "UPDATE_VIEW_COUNT";

const receiveAllVideos = payload => ({
  type: RECEIVE_ALL_VIDEOS,
  payload
});

export const receiveVideo = payload => ({
  type: RECEIVE_VIDEO,
  payload
});

const removeVideo = payload => ({
  type: REMOVE_VIDEO,
  videoId: payload.video.id
});

const receiveUploaders = payload => ({
  type: RECEIVE_ALL_VIDEOS,
  payload
});

const receiveUploader = payload => ({
  type: RECEIVE_VIDEO,
  payload
});

export const updateViews = payload => ({
  type: UPDATE_VIEW_COUNT,
  payload
});

export const fetchVideos = () => dispatch =>
  VideoUtil.fetchVideos().then(payload => dispatch(receiveAllVideos(payload)));

export const fetchVideo = id => dispatch => {
  return VideoUtil.fetchVideo(id).then(payload => {
    debugger;
    console.log("IN THE ACTIONS SHOW WHAT PAYLOAD LOOKS LIKE: ", payload);
    dispatch(receiveVideo(payload));
  });
};

export const postVideo = videoForm => dispatch =>
  VideoUtil.postVideo(videoForm).then(payload =>
    dispatch(receiveVideo(payload))
  );

export const editVideo = videoForm => dispatch =>
  VideoUtil.editVideo(videoForm).then(payload =>
    dispatch(receiveVideo(payload))
  );

export const deleteVideo = id => dispatch =>
  VideoUtil.deleteVideo(id).then(payload => {
    dispatch(removeVideo(payload));
  });

// video payload just has id and updated view count attributes that rails
// will only accept into the params

export const updateViewCount = videoPayload => dispatch =>
  VideoUtil.updateVideoViewCount(videoPayload).then(payload => {
    debugger;
    console.log("IN THE ACTIONS SHOW WHAT PAYLOAD LOOKS LIKE: ", payload);
    dispatch(updateViews(payload));
  });
