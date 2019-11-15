import React from "react";
import { Link, withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVideo,
  faSearch,
  faUserCircle,
  faHome,
  faSignOutAlt
} from "@fortawesome/free-solid-svg-icons";

class NavBar extends React.Component {
  // ({ currentUser, logout, clearErrors }) =>
  constructor(props) {
    super(props);
    this.state = {
      modalButton: document.getElementsByClassName("nav-bar-right-profile-btn"),
      modalDisplay: false,
      modal: document.getElementsByClassName("profile-button-modal")
    }; // may need refactoring b/c update is returning a pojo
    this.handleLogout = this.handleLogout.bind(this);
    this.handleErrors = this.handleErrors.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleHomePage = this.handleHomePage.bind(this);
    this.handleUploadPage = this.handleUploadPage.bind(this);
    this.displayProfileModel = this.displayProfileModel.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    // need to bind update function
  }

  componentDidMount() {
    this.displayProfileModel;
    // window.onClick = e => {
    //   console.log("WE ARE LOOKING AT WHAT WINDOW CLICK LOOKS LIKE: ", e.target);
    // };
  }

  toggleModal() {
    debugger;
    if (!this.state.modalDisplay) {
      this.setState({ modalDisplay: true });
    } else {
      this.setState({ modalDisplay: false });
    }
  }

  displayProfileModel() {
    let that = this;
    window.addEventListener("click", e => {
      console.log("WE ARE LOOKING AT WHAT WINDOW CLICK LOOKS LIKE: ", e.target);
      if (e.target == that.state.modal) {
        that.toggleModal();
      } else {
        that.setState({
          modalDisplay: false
        });
      }
      // if (e.target.value)
    });

    // window.addEventListener("click", e => {
    //   console.log("WE ARE LOOKING AT WHAT WINDOW CLICK LOOKS LIKE: ", e.target);
    //   if (e.target == that.state.modal) {
    //     that.toggleModal();
    //   } else {
    //     that.setState({
    //       modalDisplay: false
    //     });
    //   }
    //   // if (e.target.value)
    // });
  }

  handleLogout(e) {
    this.props.logout();
  }

  handleErrors(e) {
    this.props.clearErrors();
  }

  handleClick(e) {
    this.props.history.push("/login");
  }

  handleHomePage(e) {
    this.props.history.push("/");
  }

  handleUploadPage(e) {
    this.props.history.push(`/upload`);
  }

  // update() {
  //     return e => this.setState({

  //     })
  // }

  handleDropDown(modal) {}

  handleSubmit(e) {
    // this is for search bar form
    // some ajax call to fetch an index of videos that have matching words in the title
    //  this.props.action(this.state)  which will send the update state for a query to back end
  }

  render() {
    console.log("FUNCTION: ", this.displayProfileModel);

    if (this.state.modal.length) {
      console.log(
        "THIS IS THE PROFILE BUTTON HTML ELEMENT: ",
        this.state.modal
      );
      console.log(
        "THIS IS THE PROFILE BUTTON HTML ELEMENT NO.2!!!!: ",
        this.state.modal[0].style.display
      );

      if (this.state.modalDisplay) {
        this.state.modal[0].style.display = "flex";
      } else {
        this.state.modal[0].style.display = "none";
      }
    }

    // debugger
    console.log("DISPLAYING USER POJO ON NAV BAR: ", this.props.currentUser);
    const display = this.props.currentUser ? (
      <div className="nav-bar-container">
        <div className="nav-bar-left" onClick={this.handleHomePage}>
          <img src={window.twixLogo} className="twixtertube-logo" />
          <span>TwixterTube</span>
        </div>

        <div className="nav-bar-search">
          <form className="search-bar">
            <input type="text" placeholder="Search" onChange={this.update} />{" "}
            {/* Search Bar should be wrapped in a form */}
          </form>
          <button className="search-button">
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>

        <div className="nav-bar-right">
          <FontAwesomeIcon
            icon={faVideo}
            className="nav-bar-upload-button"
            onClick={this.handleUploadPage}
          />
          <div className="nav-bar-right-profile-btn" onClick={this.toggleModal}>
            <FontAwesomeIcon icon={faUserCircle} />
            {/* <button onClick={this.handleLogout}>Sign Out</button> */}
          </div>
        </div>

        <div className="profile-button-modal">
          <div className="profile-dropdown-content">
            <div className="dropdown-header">
              <div className="dropdown-header-icon">
                <FontAwesomeIcon icon={faUserCircle} />
              </div>
              <div className="dropdown-header-user">
                <ul>
                  <li className="dropdown-header-username">
                    {this.props.currentUser.username}
                  </li>
                  <li className="dropdown-header-email">
                    {this.props.currentUser.email}
                  </li>
                </ul>
              </div>
            </div>

            <div className="dropdown-main">
              <Link to="/" className="dropdown-item">
                <span>
                  <FontAwesomeIcon icon={faHome} />
                </span>
                <h2>Home</h2>
              </Link>

              <div className="dropdown-item">
                <span>
                  <FontAwesomeIcon icon={faVideo} />
                </span>
                <h2>Upload</h2>
              </div>

              <button className="dropdown-item" onClick={this.handleLogout}>
                <span>
                  <FontAwesomeIcon icon={faSignOutAlt} />
                </span>
                <h2>Sign Out</h2>
              </button>
            </div>
          </div>
        </div>
      </div>
    ) : (
      <div className="nav-bar-container">
        <div className="nav-bar-left">
          {/* <img src={window.twixLogo} /> */}
          <img src={window.twixLogo} className="twixtertube-logo" />

          <span onClick={this.handleHomePage}>TwixterTube</span>
        </div>

        <div className="nav-bar-search">
          <form onSubmit={this.handleSubmit} className="search-bar">
            <input type="text" placeholder="Search" onChange={this.update} />
            {/* update function may need refactoring */}
          </form>
          <button className="search-button">
            <FontAwesomeIcon icon={faSearch} />
          </button>
          {/*  */}
        </div>

        <div className="nav-bar-right">
          <button onClick={this.handleClick} className="sign-in-button">
            <p>SIGN IN</p>
          </button>
        </div>
      </div>
    );

    return (
      <header>
        <div>{display}</div>
      </header>
    );
  }
}

export default withRouter(NavBar);
