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
    <div className="side-bar-container">
      <div className="side-bar-main">
        <Link to="/" className="sidebar-content-item">
          <FontAwesomeIcon icon={faHome} />
          <span>Home</span>
        </Link>
        <Link to={`${uploadSend}`} className="sidebar-content-item">
          <FontAwesomeIcon icon={faVideo} />
          <span>Upload</span>
        </Link>
        <a
          href="https://github.com/ashap94"
          className="sidebar-content-item"
          target="_blank"
        >
          <FontAwesomeIcon icon={faGithub} />
          <span>GitHub</span>
        </a>
        <a
          href="https://www.linkedin.com/in/aaron-shapiro1994/"
          className="sidebar-content-item"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedin} />
          <span>LinkedIn</span>
        </a>
        {/* Next SideBar item will be your profile page link */}
      </div>
    </div>
  );
};

export default SideBar;
