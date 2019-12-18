import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle,
  faUser,
  faThumbsDown
} from "@fortawesome/free-solid-svg-icons";
import { withRouter } from "react-router-dom";
import CommentIndexItem from "./comment_index_item";

const CommentIndex2 = props => {
  const [body, setBody] = useState("");
  const [buttonHide, setButtonHide] = useState(true);
  const [submitActive, setSubmitActive] = useState(false);

  function handleInput(e) {
    // this.setState({ body: e.currentTarget.value, submitActive: true });
    setBody(e.target.value);
    setSubmitActive(true);
  }

  function toggleBtns() {
    if (buttonHide) {
      //   this.setState({ buttonHide: !this.state.buttonHide });
      setButtonHide(!buttonHide);
    }
  }

  function loggedOutUserClick(e) {
    props.history.push("/login");
  }

  function handleSubmit(e) {
    e.preventDefault();
    props
      .addComment({
        body: body,
        video_id: props.videoId
      })
      .then(() => {
        setBody("");
        setButtonHide(true);
      });
    // setState({ body: "", buttonHide: true });
  }

  function handleCancel() {
    // this.setState({ body: "", buttonHide: true });
    setBody("");
    setButtonHide(true);
  }

  let currentUserIcon;
  let commentFormInput;
  if (props.currentUser) {
    currentUserIcon = (
      <p className="current-user-icon">
        {props.currentUser.username.slice(0, 1).toUpperCase()}
      </p>
    );
    commentFormInput = (
      <input
        type="text"
        value={body}
        placeholder="Add a public comment..."
        onChange={handleInput}
        onFocus={toggleBtns}
        onBlur={toggleBtns}
        className="signed-in"
      />
    );
  } else {
    currentUserIcon = (
      <FontAwesomeIcon icon={faUserCircle} className="comment-user-circle" />
    );
    commentFormInput = (
      <input
        type="text"
        value={body}
        placeholder="Please sign in to post a public comment"
        onChange={handleInput}
        onFocus={toggleBtns}
        onBlur={toggleBtns}
        // onClick={loggedOutUserClick}
        className="signed-out"
        disabled
      />
    );
  }

  let buttonClass;
  if (buttonHide) {
    buttonClass = "hidden";
  } else {
    buttonClass = "";
  }

  let active;
  if (submitActive && body !== "") {
    active = "comment-submit-btn-active";
    setTimeout(() => {
      document.getElementById("comment-disable").disabled = false;
    }, 1);
  } else {
    active = "comment-submit-btn";
    setTimeout(() => {
      document.getElementById("comment-disable").disabled = true;
    }, 1);
  }

  return (
    <div className="video-show-comments-container">
      <h3>{props.comments.length} Comments</h3>
      <div className="video-show-comments-form-container">
        <div className="comment-form-icon-container">{currentUserIcon}</div>

        <div className="comments-form-styling-container">
          <div className="video-show-comments-form">
            <form>
              <span className="comment-form-input-container">
                {commentFormInput}
              </span>
            </form>

            <div className={`comment-form-buttons ${buttonClass}`}>
              <button className="comment-cancel-btn" onClick={handleCancel}>
                CANCEL
              </button>
              <button
                id="comment-disable"
                className={active}
                onClick={handleSubmit}
              >
                COMMENT
              </button>
            </div>
          </div>
        </div>
      </div>

      <ul className="video-show-comments">
        {props.comments.map((comment, idx) => (
          <CommentIndexItem
            comment={comment}
            deleteComment={props.deleteComment}
            currentUser={props.currentUser}
            key={`comment-${idx}`}
          />
        ))}
      </ul>
    </div>
  );
};

export default CommentIndex2;
