import { connect } from 'react-redux';
import VideoShow from './video_show';
import { fetchVideo } from '../../actions/videos_actions';

const msp = (state, ownProps) => {
    let video = state.entities.videos[ownProps.match.params.videoId];
    let uploader = video ? state.entities.users[video.uploader_id] : null;
    return ({
        video: video,
        uploader: uploader
    })

}

const mdp = dispatch => {

    return ({
        fetchVideo: (id) => dispatch(fetchVideo(id))
    })

}

export default connect(msp, mdp)(VideoShow);