import React from "react";
import { connect } from "react-redux";
import { postVideo } from "../../actions/videos_actions";
import UploadVideoForm from "./upload_video_form";

const msp = (state, ownProps) => {
  let url = ownProps.match.url;

  return {
    video: { title: "", description: "" },
    formType: "Publish",
    formTitle: "Upload a video",
    currentUser: state.entities.users[state.session.currentUser],
    url: url
  };
};

const mdp = dispatch => {
  return {
    action: videoForm => dispatch(postVideo(videoForm))
  };
};

export default connect(msp, mdp)(UploadVideoForm);
