import * as CommentUtil from "../util/comments_util";

// export const RECEIVE_VIDEO = "RECEIVE_VIDEO";
// ^^ this serves as the index of all comments for VideoShow's video
// ^^ THIS IS ACTUALLY HANDLED IN VIDEO ACTIONS, SO NO REAL NEED FOR IT HERE
export const RECEIVE_COMMENT = "RECEIVE_COMMENT";
// ^^ upon receiving an updated comment or creating one, reassign comments slice
export const REMOVE_COMMENT = "REMOVE_COMMENT";

const receiveComment = comment => ({
  type: RECEIVE_COMMENT,
  comment
});

const removeComment = comment => ({
  type: REMOVE_COMMENT,
  commentId: comment.id
});

export const addComment = commentData => dispatch =>
  CommentUtil.addComment(commentData).then(comment =>
    dispatch(receiveComment(comment))
  );

export const deleteComment = commentId => dispatch =>
  CommentUtil.deleteComment(commentId).then(comment =>
    dispatch(removeComment(comment))
  );

export const editComment = commentData => dispatch =>
  CommentUtil.editComment(commentData).then(comment =>
    dispatch(receiveComment(comment))
  );
