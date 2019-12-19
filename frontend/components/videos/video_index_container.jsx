import { connect } from "react-redux";
import VideosIndex from "./video_index";
import { fetchVideos } from "../../actions/videos_actions";
import { withRouter } from "react-router";

const msp = (state, ownProps) => {
  let videos = Object.values(state.entities.videos);
  let uploaders = videos.map(video => {
    let user = state.entities.users[video.uploader_id];
    return user;
  });

  let url = ownProps.match.url;
  console.log("WHAT DOES PROPS.MATCH.URL LOOK LIKE:   ", url, url === "/");

  return {
    videos: videos,
    uploaders: uploaders,
    url: url
  };
};

const mdp = dispatch => {
  return {
    fetchVideos: query => dispatch(fetchVideos(query))
  };
};

export default connect(msp, mdp)(VideosIndex);
