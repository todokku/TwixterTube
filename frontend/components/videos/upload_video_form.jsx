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
      videoUploaded: false,
      uploadIconElement: ""
      // loaded: false
      // purpose of having this property in state is so that
      // upload icon can be retrieved properly

      // changeToTrue: false,
    };
    this.update = this.update.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleVideoFile = this.handleVideoFile.bind(this);
    this.handleThumbnailFile = this.handleThumbnailFile.bind(this);
  }

  componentDidMount() {
    // this.setState({ loaded: true });
    this.setState({
      uploadIconElement: document.getElementsByClassName(
        "upload-thumbnail-icon"
      )
    });
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

    // this.state.uploadIconElement[0].style.fontSize = 0;
    // this.state.uploadIconElement[0].style.background = this.state.thumbnailUrl;

    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  render() {
    if (!this.props.currentUser) {
      this.props.history.replace("/login");
    }

    if (this.state.uploadIconElement) {
      console.log(
        "HERE'S WHAT THE UPLOAD ICON ELEMENT LOOKS LIKE SECOND TIME: ",
        this.state.uploadIconElement
      );
    }

    console.log(
      "HERE'S WHAT THUMBNAIL URL LOOKS LIKE: ",
      this.state.thumbnailUrl
    );
    console.log(
      "HERE'S WHAT THUMBNAIL FILE LOOKS LIKE: ",
      this.state.thumbnailFile
    );

    // if (this.state.thumbnailUrl) {
    // }

    // const thumbnailPreview = this.state.thumbnailUrl ? (
    //   <img src={this.state.thumbnailUrl} />
    // ) : (
    //   <FontAwesomeIcon icon={faCamera} className="upload-thumbnail-icon" />
    // );

    const videoPreview = this.state.videoFile ? (
      <FontAwesomeIcon icon={faCheck} className="upload-video-icon-check" />
    ) : (
      <FontAwesomeIcon icon={faVideo} className="upload-video-icon" />
    );

    return (
      <div>
        <NavBarContainer />
        <div className="upload-form-background">
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
                  <div className="upload-thumbnail-icon">
                    <FontAwesomeIcon icon={faCamera} />
                  </div>
                  {/* {thumbnailPreview} */}
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
      </div>
    );
  }
}

export default withRouter(UploadVideoForm);
