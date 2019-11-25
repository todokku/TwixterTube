import React from "react";
import { Link, withRouter } from "react-router-dom";
import NavBarContainer from "../nav_bar/nav_bar_container";
import VideoShowIndexItem from "../videos/video_show_index_item";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";

class VideoShow extends React.Component {
  constructor(props) {
    super(props);
    // let views = this.props.video ? this.props.video.views + 1 : 1;
    this.state = {
      currentUser: this.props.currentUser,
      video: this.props.video,
      loaded: false,
      views: 0
      // url: this.props.match.url
    };
    this.handleEdit = this.handleEdit.bind(this);
    // this.shuffle = this.shuffle.bind(this);
  }

  // shuffle(array) {
  //     array.sort(() => Math.random() - 0.5);
  // }

  componentDidMount() {
    console.log("MOUNTING VIDEO COMPONENT!!!!===========");
    // debugger;

    // let that = this;
    // this.props.fetchVideo(this.props.match.params.videoId).then(s => {
    //   that.props.fetchVideos();
    //   that.props
    //     .updateViewCount({
    //       id: that.props.match.params.videoId,
    //       views: that.props.video.views + 1
    //     })
    //     .then(s =>
    //       that.setState({ loaded: true, views: that.props.video.views })
    //     );
    // });

    let that = this;
    this.props.fetchVideos().then(s => {
      that.props.fetchVideo(that.props.match.params.videoId);
      that.props
        .updateViewCount({
          id: that.props.match.params.videoId,
          views: that.props.video.views + 1
        })
        .then(s =>
          that.setState({
            loaded: true,
            views: that.props.video.views
            // url: this.props.match.url
          })
        );
    });

    // this.props.video;
    // this.props.video[views]++;    need an action to update back end, optional for now
  }

  componentDidUpdate(prevProps) {
    console.log("GOING ON TO NEXT VIDEO FROM NEW PROPS: ", prevProps);
    // if (prevProps.video.id !== this.props.video.id)
    if (this.props.match.url !== prevProps.match.url) {
      this.props
        .updateViewCount({
          id: this.props.match.params.videoId,
          views: this.props.video.views + 1
        })
        .then(s =>
          this.setState({
            views: this.props.video.views
            // url: this.props.match.url
          })
        );
    }
  }

  handleEdit(e) {
    this.props.history.push(`/videos/${this.props.video.id}/edit`);
  }

  render() {
    // if (!this.state.video) {
    //   return null;
    // }
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
      let currentLike = this.props.video;
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
        <NavBarContainer url={this.props.url} />
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
                  <div className="video-show-details-top-top">
                    <h1>{this.props.video.title}</h1>
                    {editButton}
                  </div>
                  <div className="video-show-details-top-bottom">
                    <p>{this.state.views} Views</p>
                    <div className="like-system-container">
                      <div className="like-thumbs-container">
                        {/* <div className="thumbs-up">
                          <FontAwesomeIcon icon={faThumbsUp}/>
                          {this.props.}
                        </div> */}
                        <div className="thumbs-down"></div>
                      </div>
                      <div className="like-bar"></div>
                    </div>
                  </div>
                  {/* <button onClick={this.handleEdit} className="edit-button">Edit</button> */}
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
