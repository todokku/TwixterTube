import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";

const SearchVideoIndexItem = props => {
  function handleVideoClick(e) {
    props.history.push(`/videos/${props.video.id}`);
  }

  let videoDescription;

  return (
    <li className="search-video-index-item" onClick={handleVideoClick}>
      <div className="search-video-item-thumbnail">
        <img src={props.video.thumbnailUrl} />
      </div>
      <div className="search-video-item-details">
        <h2 className="search-video-item-title">{props.video.title}</h2>
        <p className="search-video-item-info">
          {props.uploader.username} · {props.video.views} views ·{" "}
          {props.video.publishedAgo} ago
        </p>
        <p className="search-video-item-description">
          {props.video.description}
        </p>
      </div>
    </li>
  );
};

export default withRouter(SearchVideoIndexItem);
