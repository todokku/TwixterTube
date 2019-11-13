import React from "react";
import { Link, withRouter } from "react-router-dom";
import NavBarContainer from "../nav_bar/nav_bar_container";
import VideoShowIndexItem from "../videos/video_show_index_item";

class VideoShow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: this.props.currentUser,
      video: this.props.video,
      loaded: false
    };
    this.handleEdit = this.handleEdit.bind(this);
    // this.shuffle = this.shuffle.bind(this);
  }

  // shuffle(array) {
  //     array.sort(() => Math.random() - 0.5);
  // }

  componentDidMount() {
    // debugger;
    let that = this;
    this.props.fetchVideo(this.props.match.params.videoId).then(s => {
      that.props.fetchVideos();
      that.props
        .updateViewCount({
          id: that.props.match.params.videoId,
          views: that.props.video.views + 1
        })
        .then(s => that.setState({ loaded: true }));
    });
    // this.props.video;
    // this.props.video[views]++;    need an action to update back end, optional for now
  }

  handleEdit(e) {
    this.props.history.push(`/videos/${this.props.video.id}/edit`);
  }

  render() {
    if (!this.state.loaded) {
      return null;
    }
    let url = this.props.video.videoUrl;
    let videos = [];
    this.props.videos.slice(0, 10).forEach(video => {
      if (this.props.video.id === video.id) {
        return null;
      }
      videos.push(
        <VideoShowIndexItem
          video={video}
          key={video.id}
          uploader={this.props.uploader}
        />
      );
      // videos.sort(() => Math.random() - 0.5);  // shuffles videos array
    });
    let editButton =
      this.props.currentUser &&
      this.props.video.uploader_id === this.props.currentUser ? (
        <button onClick={this.handleEdit} className="edit-button">
          Edit
        </button>
      ) : null;

    return (
      <div>
        <NavBarContainer />
        <div className="video-show-wrapper">
          <span> </span>
          <div className="video-show-page">
            <div className="video-show-container">
              <div className="video-container">
                <video controls key={url}>
                  <source src={url} />
                </video>
              </div>

              <div className="video-show-details">
                <div className="video-show-details-top">
                  <div className="video-show-details-top-text">
                    <h1>{this.props.video.title}</h1>
                    <p>{this.props.video.views} Views</p>
                  </div>
                  {/* <button onClick={this.handleEdit} className="edit-button">Edit</button> */}
                  {editButton}
                </div>
                <div className="video-show-details-bottom">
                  <h1>{this.props.uploader.username}</h1>
                  <h2>Published on {this.props.video.published}</h2>
                  <p>{this.props.video.description}</p>
                </div>
              </div>
            </div>

            <div className="video-show-index-container">
              <h3>Up Next</h3>
              <ul className="video-show-index-list">{videos}</ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(VideoShow);
