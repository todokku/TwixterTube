import { connect } from 'react-redux';
import VideosIndex from './video_index';


const msp = state => {
    // let videos = Object.values(state.entities.videos);
    return ({
        // videos: videos,
    })

};

const mdp = dispatch => {

    return ({
        // fetchVideos: () => dispatch(fetchVideos()),
    })

};

export default connect(msp, mdp)(VideosIndex);