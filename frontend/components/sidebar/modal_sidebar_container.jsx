import { connect } from "react-redux";
import ModalSideBar from "./modal_sidebar";

const msp = (state, ownProps) => {
  let currentUser = state.entities.users[state.session.currentUser];

  return {
    currentUser
  };
};

// const mdp = dispatch => {
//   return {};
// };

export default connect(msp, null)(ModalSideBar);
