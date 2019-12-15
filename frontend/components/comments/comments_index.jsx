import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { withRouter } from "react-router-dom";
import CommentIndexItem from "./comment_index_item";

const CommentsIndex = props => {
  const [user, setUser] = useState(props.currentUser);
  const [body, setBody] = useState("");
  const [editCommentIndex, setCommentIndex] = useState(null);
  //   const [buttonHide, setButtonHide] = useState(true);
  //   const [submitActive, setSubmitActive] = useState(false);

  useEffect(() => {
    console.log("WHERE ARE THE COMMENTS?  : ", props.comments);
    // $("textarea").autoResize();
  }, []);

  function handleInput(e) {
    setBody(e.target.value);
  }

  function loggedOutUserClick(e) {
    props.history.push("/login");
  }

  const handleCreateComment = e => {
    if (body.length != 0) {
      props.addComment({
        video_id: props.videoId,
        body: body
      });
    }
  };

  const handleEditComment = commentData => {
    props.editComment(commentData);
  };

  const handleDeleteComment = commentId => {};

  let currentUserIcon;
  let commentFormInput;
  if (props.currentUser) {
    currentUserIcon = (
      <p className="current-user-icon">
        {props.currentUser.username.slice(0, 1).toUpperCase()}
      </p>
    );
    commentFormInput = (
      <textarea
        className="comment-textarea"
        value={body}
        onChange={handleInput}
        placeholder="Add a public comment..."
      />
      //   <input
      //     type="text"
      //     value={body}
      //     onChange={handleInput}
      //     placeholder="Add a public comment..."
      //   />
    );
  } else {
    currentUserIcon = (
      <FontAwesomeIcon icon={faUserCircle} className="comment-user-circle" />
    );
    commentFormInput = (
      <textarea
        className="comment-textarea"
        value={body}
        onChange={handleInput}
        placeholder="Add a public comment..."
        // disabled
        onClick={loggedOutUserClick}
      />
      //   <input type="text" placeholder disabled onClick={loggedOutUserClick} />
    );
  }

  return (
    <div className="video-show-comments-container">
      <h3>{props.comments.length} Comments</h3>
      <div className="video-show-comments-form-container">
        <div className="comment-form-icon-container">{currentUserIcon}</div>
        <div className="comments-form-styling-container">
          <div className="video-show-comments-form">
            {/* <form> */}
            {commentFormInput}
            {/* </form> */}
            <div className="comment-form-buttons ">
              <button onClick={handleCreateComment}>COMMENT</button>
            </div>
          </div>
        </div>
      </div>
      <ul className="video-show-comments">
        {props.comments.map((comment, idx) => (
          <CommentIndexItem
            comment={comment.body}
            author={comment.author}
            likes={comment.likes}
            dislikes={comment.dislikes}
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
