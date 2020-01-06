import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faVideo,
  faUser,
  faBars
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const SideBar = props => {
  let uploadSend;
  if (props.currentUser) {
    uploadSend = "/upload";
  } else {
    uploadSend = "/login";
  }

  return (
    <div className="sidebar-container">
      <div className="sidebar-main">
        {/* <div className="sidebar-bars-button-container">
          <FontAwesomeIcon icon={faBars} id="bars-icon-button" />
        </div> */}
        <Link to="/" className="sidebar-content-item">
          <FontAwesomeIcon icon={faHome} className="sidebar-icon" />
          <span className="sidebar-item-title">Home</span>
        </Link>
        <Link to={uploadSend} className="sidebar-content-item">
          <FontAwesomeIcon icon={faVideo} className="sidebar-icon" />
          <span className="sidebar-item-title">Upload</span>
        </Link>

        <a
          href="https://www.linkedin.com/in/aaron-shapiro1994/"
          className="sidebar-content-item"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedin} className="sidebar-icon" />
          <span className="sidebar-item-title">LinkedIn</span>
        </a>

        <a
          href="https://github.com/ashap94"
          className="sidebar-content-item"
          target="_blank"
        >
          <FontAwesomeIcon icon={faGithub} className="sidebar-icon" />
          <span className="sidebar-item-title">GitHub</span>
        </a>

        <a
          href="https://ashap94.github.io/"
          className="sidebar-content-item"
          target="_blank"
        >
          <FontAwesomeIcon icon={faUser} className="sidebar-icon" />
          <span className="sidebar-item-title">Author</span>
        </a>
        {/* Next SideBar item will be your profile page link */}
      </div>
    </div>
  );
};

export default SideBar;
