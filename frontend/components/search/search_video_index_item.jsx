import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

const SearchVideoIndexItem = props => {
  function handleVideoClick(e) {
    props.history.push(`/videos/${props.video.id}`);
  }

  let videoDescription = props.video.description;
  let title = props.video.title;
  let username = props.uploader.username;
  //   let username =
  //     "najfonaewiofjenwiofjewpafjewiugphewuipafhewuihfewhfiweuaphfewaiuhfewiewfupaiuwefp";

  if (videoDescription.length > 125) {
    videoDescription = videoDescription.slice(0, 125) + "...";
  }

  if (title.length > 67) {
    title = title.slice(0, 67) + "...";
  }

  if (username.length > 35) {
    username = username.slice(0, 35) + "...";
  }

  if (props)
    return (
      <li className="search-video-index-item" onClick={handleVideoClick}>
        <div className="search-video-item-thumbnail">
          <img src={props.video.thumbnailUrl} />
        </div>
        <div className="search-video-item-details">
          <h2 className="search-video-item-title">
            {/* {props.video.title} */}
            {title}
          </h2>
          <p className="search-video-item-info">
            {username} · {props.video.views} views · {props.video.publishedAgo}{" "}
            ago
          </p>
          <p className="search-video-item-description">
            {/* {props.video.description} */}
            {videoDescription}
          </p>
        </div>
      </li>
    );
};

export default withRouter(SearchVideoIndexItem);
