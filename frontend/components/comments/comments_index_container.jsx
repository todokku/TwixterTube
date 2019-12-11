import { connect } from "react-redux";
import CommentsIndex from "./comments_index";
import * as CommentActions from "../../actions/comments_actions";

const msp = (state, ownProps) => {
  let comments = state.entities.comments;

  return {
    comments
  };
};

const mdp = dispatch => {
  return {
    addComment: commentData => dispatch(CommentActions.addComment(commentData)),
    editComment: commentData =>
      dispatch(CommentActions.editComment(commentData)),
    deleteComment: commentId =>
      dispatch(CommentActions.deleteComment(commentId))
  };
};

export default connect(msp, mdp)(CommentsIndex);
