import React, { useState, useEffect } from "react";
import { Link, withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faVideo,
  faUser,
  faBars
} from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const ModalSideBar = props => {
  const [modalHidden, setModalHidden] = useState(true);
  const [modal, setModal] = useState(null);

  function toggleModal(e) {
    if (modalHidden) {
      setModalHidden(false);
    } else {
      setModalHidden(true);
    }
  }

  function handleLogoClick(e) {
    if (props.match.url !== "/") {
      setModalHidden(true);
      props.history.push("/");
    } else {
      setModalHidden(true);
    }
  }

  useEffect(() => {
    // setModalHidden(document.getElementsByClassName());
    window.onclick = e => {
      if (e.target.className == "sidebar-modal") {
        setModalHidden(true);
      }
    };
  }, []);

  useEffect(() => {
    setModalHidden(true);
  }, [props.match.url]);

  let display;
  if (modalHidden) {
    display = " hidden";
  } else {
    display = "";
  }

  let upload;
  if (props.currentUser) {
    upload = "/upload";
  } else {
    upload = "/login";
  }

  return (
    <div className="sidebar-modal-parent-container">
      <button className="sidebar-bars-button" onClick={toggleModal}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      <div className={`sidebar-modal${display}`}>
        <div className="sidebar-modal-content">
          <div className="inner-sidebar-modal-button-title">
            <button className="sidebar-bars-button" onClick={toggleModal}>
              <FontAwesomeIcon icon={faBars} />
            </button>
            <div className="inner-sidebar-modal-logo" onClick={handleLogoClick}>
              <img
                src="https://twixtertube-dev.s3-us-west-1.amazonaws.com/twixter_logo.png"
                className="sidebar-twixtertube-logo"
              />
              <span>TwixterTube</span>
            </div>
          </div>
          <div className="sidebar-modal-content-items">
            <Link
              to="/"
              className="sidebar-modal-content-item"
              onClick={toggleModal}
            >
              <FontAwesomeIcon icon={faHome} className="sidebar-modal-icon" />
              <span className="sidebar-modal-item-title">Home</span>
            </Link>
            <Link
              to={upload}
              className="sidebar-modal-content-item"
              onClick={toggleModal}
            >
              <FontAwesomeIcon icon={faVideo} className="sidebar-modal-icon" />
              <span className="sidebar-modal-item-title">Upload</span>
            </Link>

            <a
              href="https://www.linkedin.com/in/aaron-shapiro1994/"
              className="sidebar-modal-content-item"
              target="_blank"
              onClick={toggleModal}
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="sidebar-modal-icon"
              />
              <span className="sidebar-modal-item-title">LinkedIn</span>
            </a>
            <a
              href="https://github.com/ashap94"
              className="sidebar-modal-content-item"
              target="_blank"
              onClick={toggleModal}
            >
              <FontAwesomeIcon icon={faGithub} className="sidebar-modal-icon" />
              <span className="sidebar-modal-item-title">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(ModalSideBar);
