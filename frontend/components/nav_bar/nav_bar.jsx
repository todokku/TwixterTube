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
      modalButton: null,
      modalDisplay: false,
      modal: null,
      search: ""
    }; // may need refactoring b/c update is returning a pojo
    this.handleLogout = this.handleLogout.bind(this);
    this.handleErrors = this.handleErrors.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.handleHomePage = this.handleHomePage.bind(this);
    this.handleUploadPage = this.handleUploadPage.bind(this);
    // this.displayProfileModel = this.displayProfileModel.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.handleSearchInput = this.handleSearchInput.bind(this);
    // need to bind update function
  }

  componentDidMount() {
    this.setState({
      modalButton: document.getElementsByClassName("nav-bar-right-profile-btn"),
      modal: document.getElementsByClassName("profile-button-modal")
    });

    // console.log("THIS IS THE MODAL: ", !!modal.style.display);
    let that = this;
    // document.getElementById("modal-button").onclick = function() {
    //   that.toggleModal();
    //   // alert("you are clicking on the parent stop it");
    // };
    document.onclick = function(e) {
      let parentId = e.target.parentNode ? e.target.parentNode.id : null;
      if (e.target.id === "modal-button" || parentId === "modal-button") {
        that.toggleModal();
      } else if (
        !(
          e.target.id === "modal" ||
          e.target.id === "dropdown-ul" ||
          e.target.id === "dropdown-icon" ||
          e.target.id === "profile-dropdown-content" ||
          e.target.id === "dropdown-header" ||
          parentId === "dropdown-ul" ||
          parentId === "dropdown-icon" ||
          parentId === "profile-dropdown-content" ||
          parentId === "dropdown-header"
        ) &&
        !!that.state.modalDisplay
      ) {
        that.setState({ modalDisplay: false });
      }
      // console.log("EVENT TARGET:  ", e);
    };

    // let that = this;
    // window.onclick = e => {
    //   if (e.target == that.state.modalButton) {
    //     that.toggleModal();
    //   } else if (e.target != that.state.modal) {
    //     that.setState({ modalDisplay: false });
    //   }
    // };
  }

  handleSearch(e) {}

  toggleModal() {
    // debugger;
    if (!this.state.modalDisplay) {
      this.setState({ modalDisplay: true });
    } else {
      this.setState({ modalDisplay: false });
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.url !== prevProps.url) {
      this.setState({ modalDisplay: false });
    }
  }

  // displayProfileModel() {
  //   let that = this;
  //   window.addEventListener("click", e => {
  //     console.log("WE ARE LOOKING AT WHAT WINDOW CLICK LOOKS LIKE: ", e.target);
  //     if (e.target == that.state.modal) {
  //       that.toggleModal();
  //     } else {
  //       that.setState({
  //         modalDisplay: false
  //       });
  //     }
  //     // if (e.target.value)
  //   });

  //   // window.addEventListener("click", e => {
  //   //   console.log("WE ARE LOOKING AT WHAT WINDOW CLICK LOOKS LIKE: ", e.target);
  //   //   if (e.target == that.state.modal) {
  //   //     that.toggleModal();
  //   //   } else {
  //   //     that.setState({
  //   //       modalDisplay: false
  //   //     });
  //   //   }
  //   //   // if (e.target.value)
  //   // });
  // }
  handleLogout(e) {
    this.props.logout().then(() => this.props.history.push("/"));
  }

  handleErrors(e) {
    this.props.clearErrors();
  }

  handleLogin(e) {
    this.props.history.push("/login");
  }

  handleHomePage(e) {
    this.setState({ modalDisplay: false });
    if (this.props.match.url !== "/") {
      this.props.history.push("/");
    }
  }

  handleUploadPage(e) {
    this.setState({ modalDisplay: false });
    this.props.history.push(`/upload`);
  }

  handleSearchInput(e) {
    this.setState({ search: e.target.value });
  }

  handleDropDown(modal) {}

  handleSearch(e) {
    // this is for search bar form
    // some ajax call to fetch an index of videos that have matching words in the title
    //  this.props.action(this.state)  which will send the update state for a query to back end

    if (this.state.search !== "") {
      this.props.history.push(`/search/${this.state.search}`);
    }
    this.setState({ body: "" });
  }

  render() {
    if (this.state.modal) {
      if (this.state.modal.length) {
        // console.log(
        //   "THIS IS THE PROFILE BUTTON HTML ELEMENT: ",
        //   this.state.modal
        // );
        // console.log(
        //   "THIS IS THE PROFILE BUTTON HTML ELEMENT NO.2!!!!: ",
        //   this.state.modal[0].style.display
        // );

        if (this.state.modalDisplay) {
          this.state.modal[0].style.display = "flex";
        } else {
          this.state.modal[0].style.display = "none";
        }
      }
    }

    // debugger
    // console.log("DISPLAYING USER POJO ON NAV BAR: ", this.props.currentUser);
    const display = this.props.currentUser ? (
      <div className="nav-bar-container">
        <div className="nav-bar-left" onClick={this.handleHomePage}>
          <img src={window.twixLogo} className="twixtertube-logo" />
          <span>TwixterTube</span>
        </div>

        <div className="nav-bar-search">
          <form className="search-bar" onSubmit={this.handleSearch}>
            <input
              type="text"
              value={this.state.search}
              placeholder="Search"
              onChange={this.handleSearchInput}
            />
            {/* Search Bar should be wrapped in a form */}
          </form>
          <button className="search-button" onClick={this.handleSearch}>
            <FontAwesomeIcon icon={faSearch} />
          </button>
        </div>

        <div className="nav-bar-right">
          <FontAwesomeIcon
            icon={faVideo}
            className="nav-bar-upload-button"
            onClick={this.handleUploadPage}
          />
          <div
            className="nav-bar-right-profile-btn"
            // onClick={this.toggleModal}
          >
            <div>
              <FontAwesomeIcon icon={faUserCircle} id="modal-button" />
            </div>
            {/* <button onClick={this.handleLogout}>Sign Out</button> */}
          </div>
        </div>

        <div className="profile-button-modal" id="modal">
          <div
            className="profile-dropdown-content"
            id="profile-dropdown-content"
          >
            <div className="dropdown-header" id="dropdown-header">
              <div className="dropdown-header-icon">
                <FontAwesomeIcon icon={faUserCircle} id="dropdown-icon" />
              </div>
              <div className="dropdown-header-user">
                <ul id="dropdown-ul">
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
              <div
                to="/"
                className="dropdown-item"
                onClick={this.handleHomePage}
              >
                <span>
                  <FontAwesomeIcon icon={faHome} />
                </span>
                <h2>Home</h2>
              </div>

              <div className="dropdown-item" onClick={this.handleUploadPage}>
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
        <div className="nav-bar-left" onClick={this.handleHomePage}>
          {/* <img src={window.twixLogo} /> */}
          <img src={window.twixLogo} className="twixtertube-logo" />

          <span>TwixterTube</span>
        </div>

        <div className="nav-bar-search">
          <form onSubmit={this.handleSearch} className="search-bar">
            <input
              type="text"
              placeholder="Search"
              value={this.state.search}
              onChange={this.handleSearchInput}
            />
          </form>
          <button className="search-button" onClick={this.handleSearch}>
            <FontAwesomeIcon icon={faSearch} onClick={this.handleSearch} />
          </button>
        </div>

        <div className="nav-bar-right">
          <button onClick={this.handleLogin} className="sign-in-button">
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
