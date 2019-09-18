import React from 'react';
import { connect } from 'react-redux';
import { postVideo } from '../../actions/videos_actions';
import UploadVideoForm from './upload_video_form';


const msp = state => {

    return ({
        video: { title: "", description: "" },
        formType: 'Publish',
        formTitle: 'Select video to upload',
        currentUser: state.entities.users[state.session.currentUser]
    })

}

const mdp = dispatch => {

    return ({
        action: videoForm => dispatch(postVideo(videoForm)),
    })

}

export default connect(msp, mdp)(UploadVideoForm);