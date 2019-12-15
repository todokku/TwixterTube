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

  return (
    <li className="comment-container-item">
      <div className="comment-styling-container">
        <div className="comment-user-icon-container">
          <i className="comment-user-icon">
            {props.author.slice(0, 1).toUpperCase()}
          </i>
        </div>
        <div className="comment-details-container">
          <p className="comment-username">{props.author}</p>
          <p className="comment-body">{props.comment}</p>
        </div>
      </div>
    </li>
  );
};

export default CommentIndexItem;
