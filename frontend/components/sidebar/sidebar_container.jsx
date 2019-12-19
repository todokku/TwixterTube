import { connect } from "react-redux";
import SideBar from "./sidebar";

const msp = (state, ownProps) => {
  let currentUser = state.entities.users[state.session.currentUser];

  return {
    currentUser
  };
};

// const mdp = dispatch => {
//   return {};
// };

export default connect(msp, null)(SideBar);
