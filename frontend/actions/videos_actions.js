import * as VideoUtil from '../util/videos'; 
// {
//     fetchVideos,
//     fetchVideo,
//     postVideo,
//     editVideo,
//     deleteVideo
// } from '../util/videos';

export const RECEIVE_ALL_VIDEOS = 'RECEIVE_ALL_VIDEOS';
export const RECEIVE_VIDEO = 'RECEIVE_VIDEO';
export const REMOVE_VIDEO = 'REMOVE_VIDEO';
export const RECEIVE_UPLOADERS = 'RECEIVE_UPLOADERS';

const receiveAllVideos = (payload) => ({
    type: RECEIVE_ALL_VIDEOS,
    payload
})

const receiveVideo = (payload) => ({
    type: RECEIVE_VIDEO,
    payload
})

const removeVideo = (payload) => ({
    type: REMOVE_VIDEO,
    videoId: payload.video.id
})

const receiveUploaders = (payload) => ({
    type: RECEIVE_ALL_VIDEOS,
    payload
})

const receiveUploader = (payload) => ({
    type: RECEIVE_VIDEO,
    payload
})

export const fetchVideos = () => dispatch => VideoUtil.fetchVideos()
    .then(payload => dispatch(receiveAllVideos(payload)));

export const fetchVideo = (id) => dispatch => VideoUtil.fetchVideo(id)
    .then(payload => dispatch(receiveVideo(payload)));

export const postVideo = (videoForm) => dispatch => VideoUtil.postVideo(videoForm)
    .then(payload => dispatch(receiveVideo(payload)));

export const editVideo = (videoForm) => dispatch => VideoUtil.editVideo(videoForm)
    .then(payload => dispatch(receiveVideo(payload)));

export const deleteVideo = (id) => dispatch => VideoUtil.deleteVideo(id)
    .then(payload => dispatch(removeVideo(payload)));