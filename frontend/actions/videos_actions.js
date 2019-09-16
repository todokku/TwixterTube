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

const receiveAllVideos = (videos) => ({
    type: RECEIVE_ALL_VIDEOS,
    videos
})

const receiveVideo = (video) => ({
    type: RECEIVE_VIDEO,
    video
})

const removeVideo = (video) => ({
    type: REMOVE_VIDEO,
    videoId: video.id
})

export const fetchVideos = () => dispatch => VideoUtil.fetchVideos()
    .then( videos => dispatch(receiveAllVideos(videos)));

export const fetchVideo = (id) => dispatch => VideoUtil.fetchVideo(id)
    .then( video => dispatch(receiveVideo(video)));

export const postVideo = (videoForm) => dispatch => VideoUtil.postVideo(videoForm)
    .then(video => dispatch(receiveVideo(video)));

export const editVideo = (videoForm) => dispatch => VideoUtil.editVideo(videoForm)
    .then(video => dispatch(receiveVideo(video)));

export const deleteVideo = (id) => dispatch => VideoUtil.deleteVideo(id)
    .then(video => dispatch(removeVideo(video)));