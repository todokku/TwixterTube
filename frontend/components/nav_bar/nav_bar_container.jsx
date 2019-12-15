import React from "react";
import { connect } from "react-redux";
import NavBar from "./nav_bar";
import { logout, clearErrors } from "../../actions/session_actions";

const msp = (state, ownProps) => {
  //     let url = ownProps.match.url;

  return {
    currentUser: state.entities.users[state.session.currentUser]
    // currentUser: state.session.currentUser

    //   url: url
  };
};

const mdp = dispatch => ({
  logout: () => dispatch(logout()),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(msp, mdp)(NavBar);
