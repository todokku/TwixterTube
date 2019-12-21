import React, { useState, useEffect } from "react";
import { withRouter } from "react-router-dom";
import NavBarContainer from "../nav_bar/nav_bar_container";
import SearchVideoIndexItem from "./search_video_index_item";
import ModalSideBarContainer from "../sidebar/modal_sidebar_container";
import SideBarContainer from "../sidebar/sidebar_container";
import searchErrorPuppy from "../../../app/assets/images/cute_doggy.jpeg";

const SearchVideoIndex = props => {
  useEffect(() => {
    window.scrollTo(0, 0);
    console.log("WHAT DOES LOGO LOOK LIKE:  ", searchErrorPuppy);
    props.fetchVideos(props.match.params.query);
  }, []);

  useEffect(() => {
    props.fetchVideos(props.match.params.query);
  }, [props.match.params.query]);

  let content =
    props.videos.length == 0 ? (
      <div>
        <NavBarContainer url={props.url} />
        <div className="search-container">
          {/* <div className="sidebar-main"></div> */}
          <ModalSideBarContainer />
          <SideBarContainer />
          <div className="search-video-index-container">
            <header className="search-results-header">Search Results</header>
            <p className="search-results-error">No results found</p>
            <p className="search-results-error-message">
              Try different keywords
            </p>
            <div className="search-error-puppy-container">
              <img
                src="https://twixtertube-dev.s3-us-west-1.amazonaws.com/cute_doggy.jpeg
"
                className="search-error-puppy"
              />
              {/* <img
                src={require("../../../images/cute_doggy.jpeg")}
                className="search-error-puppy"
              /> */}
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div>
        <NavBarContainer url={props.url} />
        <ModalSideBarContainer />

        <div className="search-container">
          {/* <div className="sidebar-main"></div> */}
          <SideBarContainer />

          <div className="search-video-index-container">
            <header className="search-results-header">Search Results</header>
            <ul className="search-video-list">
              {props.videos.map((video, idx) => {
                let uploader = props.users[video.uploader_id];
                return (
                  <SearchVideoIndexItem
                    video={video}
                    key={`video-${idx}`}
                    uploader={uploader}
                  />
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );

  return content;
};

export default withRouter(SearchVideoIndex);
