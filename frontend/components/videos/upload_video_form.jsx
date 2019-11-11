import React from "react";
import { Link, withRouter, Redirect } from "react-router-dom";
import NavBarContainer from "../nav_bar/nav_bar_container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVideo, faCamera, faCheck } from "@fortawesome/free-solid-svg-icons";

class UploadVideoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      videoFile: null,
      thumbnailFile: null,
      thumbnailUrl: null,
      videoUploaded: false
    };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleVideoFile = this.handleVideoFile.bind(this);
    this.handleThumbnailFile = this.handleThumbnailFile.bind(this);
  }

  update(field) {
    return e =>
      this.setState({
        [field]: e.target.value
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("video[title]", this.state.title);
    formData.append("video[description]", this.state.description);
    formData.append("video[vid]", this.state.videoFile);
    formData.append("video[thumbnail]", this.state.thumbnailFile);
    this.props.action(formData).then(response => {
      // debugger
      this.props.history.push(`/videos/${response.payload.video.id}`);
    });
  }

  handleVideoFile(e) {
    this.setState({ videoFile: e.currentTarget.files[0] });
  }

  handleThumbnailFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ thumbnailFile: file, thumbnailUrl: fileReader.result });
    };

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  render() {
    if (!this.props.currentUser) {
      this.props.history.replace("/login");
    }
    const thumbnailPreview = this.state.thumbnailUrl ? (
      <img src={this.state.thumbnailUrl} />
    ) : (
      <FontAwesomeIcon icon={faCamera} className="upload-thumbnail-icon" />
    );

    const videoPreview = this.state.videoFile ? (
      <FontAwesomeIcon icon={faCheck} className="upload-video-icon-check" />
    ) : (
      <FontAwesomeIcon icon={faVideo} className="upload-video-icon" />
    );

    return (
      <div>
        <NavBarContainer />
        <div className="video-form-container">
          <h2>{this.props.formTitle}</h2>
          <form onSubmit={this.handleSubmit} className="edit-form">
            <div className="video-form-input-buttons">
              <label className="custom-file-upload">
                {/* <FontAwesomeIcon icon={faVideo} className="upload-video-icon"/> */}
                <input
                  type="file"
                  accept="video/mp4,video/x-m4v,video/*"
                  onChange={this.handleVideoFile}
                />
                {videoPreview}
              </label>
              {/* className="custom-file-upload" */}
              {/* THIS CSS CLASS NAME IS GONNA BE INCLUDED IN LABLES */}
              <label className="custom-file-thumbnail">
                {/* <FontAwesomeIcon icon={faCamera} className="upload-thumbnail-icon"/> */}
                <input
                  type="file"
                  accept="image/*"
                  onChange={this.handleThumbnailFile}
                />
                {thumbnailPreview}
              </label>
            </div>
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
            </div>

            <div className="edit-form-buttons">
              <button className="publish-button" onClick={this.handleSubmit}>
                {this.props.formType}
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default withRouter(UploadVideoForm);
