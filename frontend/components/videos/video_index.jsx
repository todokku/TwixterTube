import React from "react";
import NavBarContainer from "../nav_bar/nav_bar_container";
import VideoIndexItem from "./video_index_item";
import { withRouter } from "react-router-dom";

class VideosIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    window.scrollTo(0, 0);

    this.props.fetchVideos();
  }

  render() {
    let videos = this.props.videos.map(video => {
      return (
        <VideoIndexItem
          video={video}
          key={video.id}
          uploaders={this.props.uploaders}
        />
      );
    });

    videos.sort(() => Math.random() - 0.5);

    // let videos = this.props.videos.map( video => {

    //     return (
    //         <VideoIndexItem
    //         video={video}
    //         key={video.id}
    //         />
    //     )
    // })

    return (
      <div>
        <NavBarContainer url={this.props.url} />
        {/* <h1>React is Working</h1> */}
        <div className="video-index-container-background">
          <div className="video-index-recommended-header">
            <h1>Recommended</h1>
          </div>
          <div className="video-index-container">
            <ul className="video-index-container-items">{videos}</ul>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(VideosIndex);
