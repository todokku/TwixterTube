import { connect } from "react-redux";
import CommentsIndex from "./comments_index";
import * as CommentActions from "../../actions/comments_actions";

const msp = (state, ownProps) => {
  let comments = Object.values(state.entities.comments);
  let currentUser = state.entities.users[state.session.currentUser];
  //   console.log("NOW IN THE COMMENTS CONTAINER");
  console.log("HERE ARE THE COMMENTS IN ARRAY FORM:   ", comments);
  return {
    comments,
    currentUser
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
