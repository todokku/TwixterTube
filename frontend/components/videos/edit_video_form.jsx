import React from "react";
import { Link, withRouter, Redirect } from "react-router-dom";
import NavBarContainer from "../nav_bar/nav_bar_container";

class EditVideoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.video;
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDeleteVideo = this.handleDeleteVideo.bind(this);
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.target.value
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props
      .action(this.state)
      .then(() => this.props.history.push(`/videos/${this.props.video.id}`));
  }

  handleDeleteVideo(e) {
    e.preventDefault();
    this.props
      .deleteVideo(this.state.id)
      .then(() => this.props.history.push("/"));
  }

  componentDidMount() {
    this.props.fetchVideo(this.props.match.params.videoId).then(response => {
      this.setState({
        id: this.props.match.params.videoId,
        title: response.payload.video.title,
        description: response.payload.video.description
      });
    });
    // debugger
  }

  render() {
    if (!this.props.video.uploader_id) {
      return null;
    }
    console.log(this.state);

    if (this.props.currentUser.id !== this.props.video.uploader_id) {
      this.props.history.push("/");
    }
    // if (!this.props.currentUser) {
    //     this.props.history.replace('/login');
    // }

    return (
      <div className="upload-form-container">
        <NavBarContainer url={this.props.url} />
        <div className="upload-form-background">
          <div className="video-form-container">
            <h2>{this.props.formTitle}</h2>
            <form onSubmit={this.handleSubmit} className="edit-form">
              <div className="edit-form-bottom">
                <input
                  type="text"
                  placeholder="Title"
                  value={this.state.title}
                  onChange={this.update("title")}
                />

                <textarea
                  placeholder="Description"
                  value={this.state.description}
                  onChange={this.update("description")}
                />

                <div className="edit-form-buttons">
                  <button className="next-button" onClick={this.handleSubmit}>
                    {this.props.formType}
                  </button>
                  <button
                    className="delete-button"
                    onClick={this.handleDeleteVideo}
                  >
                    Delete Video
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(EditVideoForm);
