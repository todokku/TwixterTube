import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { withRouter } from "react-router-dom";
import CommentIndexItem from "./comment_index_item";

const CommentsIndex = props => {
  const [body, setBody] = useState("");
  const [buttonHide, setButtonHide] = useState(true);
  const [submitActive, setSubmitActive] = useState(false);

  //   const [buttonHide, setButtonHide] =
  //   const [submitActive, setSubmitActive] = useState(false);

  useEffect(() => {
    // console.log("WHERE ARE THE COMMENTS?  : ", props.comments);
    // $("textarea").autoResize();
  }, []);

  function handleInput(e) {
    setBody(e.target.value);
    setSubmitActive(true);
  }

  function loggedOutUserClick(e) {
    props.history.push("/login");
  }

  const toggleBtns = () => {
    if (buttonHide) {
      setButtonHide(!buttonHide);
    }
  };

  const handleCreateComment = e => {
    e.preventDefault();

    if (body.length != 0) {
      props.addComment({
        video_id: props.videoId,
        body: body
      });
      setBody("");
      setButtonHide(true);
    }
  };

  const handleEditComment = commentData => {
    props.editComment(commentData);
  };

  const handleCancel = () => {
    setBody("");
    setButtonHide(true);
  };

  let currentUserIcon;
  let commentFormInput;
  if (props.currentUser) {
    currentUserIcon = (
      <p className="current-user-icon">
        {props.currentUser.username.slice(0, 1).toUpperCase()}
      </p>
    );
    commentFormInput = (
      //   <textarea
      //     className="comment-textarea"
      //     value={body}
      //     onChange={handleInput}
      //     placeholder="Add a public comment..."
      //   />
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
      //   <textarea
      //     className="comment-textarea"
      //     value={body}
      //     onChange={handleInput}
      //     placeholder="Add a public comment..."
      //     // disabled
      //     onClick={loggedOutUserClick}
      //   />
      <input
        type="text"
        value={body}
        placeholder="Please sign in to post a public comment"
        onChange={handleInput}
        onFocus={toggleBtns}
        onBlur={toggleBtns}
        onClick={loggedOutUserClick}
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
  if (submitActive && body != "") {
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
                onClick={handleCreateComment}
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
            currentUser={props.currentUser}
            comment={comment}
            commentId={comment.id}
            editComment={props.editComment}
            deleteComment={props.deleteComment}
            key={`comment-${idx}`}
          />
        ))}
      </ul>
    </div>
  );
};

export default withRouter(CommentsIndex);
