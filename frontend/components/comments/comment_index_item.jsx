import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-solid-svg-icons";

// import { withRouter } from "react-router-dom";

const CommentIndexItem = props => {
  //   [like, setLike] = useState(false);
  //   [dislike, setDislike] = useState(false);

  //   let commenterIcon;
  //   if (props) {
  //     commenterIcon = this.props.comment.commenter.slice(0, 1).toUpperCase();
  //   } else {
  //     commenterIcon = null;
  //   }

  useEffect(() => {
    console.log(
      "HERE ARE THE PROPS:   ",
      props.comment,
      props.currentUser,
      props.comment.id
    );
  });

  function handleDelete() {
    props.deleteComment(props.commentId);
  }

  let deleteBtn;
  if (props.currentUser) {
    if (props.currentUser.id == props.comment.user_id) {
      deleteBtn = (
        <button className="comment-delete-button" onClick={handleDelete}>
          Delete
        </button>
      );
    }
  }

  return (
    <li className="comment-container-item">
      <div className="comment-styling-container">
        <div className="comment-user-icon-container">
          <p className="comment-user-icon">
            {props.comment.author.slice(0, 1).toUpperCase()}
          </p>
        </div>
        <div className="comment-details-container">
          <p className="comment-username">{props.comment.author}</p>
          <p className="comment-body">{props.comment.body}</p>
        </div>
      </div>
      <div>
        <div className="comment-button-container">{deleteBtn}</div>
      </div>
    </li>
  );
};

export default CommentIndexItem;
