import { connect } from 'react-redux';
import VideoShow from './video_show';
import { fetchVideo, fetchVideos } from '../../actions/videos_actions';

const msp = (state, ownProps) => {
    let currentUser = state.session.currentUser;
    let videos = Object.values(state.entities.videos).sort(() => Math.random() - 0.5);
    let video = state.entities.videos[ownProps.match.params.videoId];
    let uploader = video ? state.entities.users[video.uploader_id] : null;
    return ({
        videos: videos,
        video: video,
        uploader: uploader,
        currentUser: currentUser
    })

}

const mdp = dispatch => {

    return ({
        fetchVideos: () => dispatch(fetchVideos()),
        fetchVideo: (id) => dispatch(fetchVideo(id))
    })

}

export default connect(msp, mdp)(VideoShow);