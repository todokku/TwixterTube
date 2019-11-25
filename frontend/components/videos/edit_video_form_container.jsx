import React from "react";
import { connect } from "react-redux";
import EditVideoForm from "./edit_video_form";
import {
  editVideo,
  fetchVideo,
  deleteVideo
} from "../../actions/videos_actions";

const msp = (state, ownProps) => {
  let video = state.entities.videos[ownProps.match.params.videoId]
    ? state.entities.videos[ownProps.match.params.videoId]
    : { id: "", title: "", description: "" };

  let url = ownProps.match.url;

  return {
    video: video,
    formType: "Edit Video",
    formTitle: "Update your Video details",
    currentUser: state.entities.users[state.session.currentUser],
    url: url
  };
};

const mdp = dispatch => {
  return {
    fetchVideo: id => dispatch(fetchVideo(id)),
    deleteVideo: id => dispatch(deleteVideo(id)),
    action: videoForm => dispatch(editVideo(videoForm))
  };
};

export default connect(msp, mdp)(EditVideoForm);

// class EditVideoForm extends React.Component {

//     componentDidMount() {
//         this.props.fetchVideo(this.props.match.params.videoId);
//     }

//     render() {
//         if (!this.props.video) {
//             return null;
//         }

//         if (this.props.currentUser.id !== this.props.video.uploader_id) {
//             this.props.history.replace('/')
//         }

//         const { action, formType, video, currentUser } = this.props;
//         return (
//             <EditVideoForm
//             action={action}
//             formType={formType}
//             video={video}
//             currentUser={currentUser}
//             />
//         )
//     }

// }
