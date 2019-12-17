import { connect } from "react-redux";
import { fetchVideos } from "../../actions/videos_actions";
import SearchVideoIndex from "./search_video_index";

const msp = (state, ownProps) => {
  let videos = Object.values(state.entities.videos);
  let query = ownProps.match.params.query;
  let url = ownProps.match.url;
  let users = state.entities.users;

  return {
    videos,
    query,
    url,
    users
  };
};

const mdp = dispatch => {
  return {
    fetchVideos: query => dispatch(fetchVideos(query))
  };
};

export default connect(msp, mdp)(SearchVideoIndex);
