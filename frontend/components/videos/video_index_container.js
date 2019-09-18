import { connect } from 'react-redux';
import VideosIndex from './video_index';
import { fetchVideos } from '../../actions/videos_actions';
import { withRouter } from 'react-router';

const msp = state => {
    let videos = Object.values(state.entities.videos);
    let uploaders = videos.map( video => {
        let user = state.entities.users[video.uploader_id];
        return ( user );
    })
    return ({
        videos: videos,
        uploaders: uploaders
    })

};

const mdp = dispatch => {

    return ({
        fetchVideos: () => dispatch(fetchVideos()),
    })

};

export default connect(msp, mdp)(VideosIndex);