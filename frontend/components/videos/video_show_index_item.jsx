import React from 'react';
import { Link, withRouter } from 'react-router-dom';
    
class VideoShowIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e) {
        // debugger
        this.props.history.replace(`/videos/${this.props.video.id}`);
    }
    
    render() {
        // debugger
        return (
            <li className="video-show-list-item" onClick={this.handleClick}>
                <div className="video-show-list-item-image-container">
                    <img src={this.props.video.thumbnailUrl} />  
                </div>
                <div className="video-show-list-item-details">
                    <h1>{this.props.video.title}</h1>
                    <p>{this.props.uploader.username}</p>
                    <p>{this.props.video.views} Views</p>
                </div>
            </li>
        )
    }
    
}   
    
export default withRouter(VideoShowIndexItem);