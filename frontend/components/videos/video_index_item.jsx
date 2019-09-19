import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class VideoIndexItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleVidClick = this.handleVidClick.bind(this);
    }

    handleVidClick(e) {
        let vidId = this.props.video.id;
        this.props.history.push(`/videos/${vidId}`);
    }

    render() {
        let url = this.props.video.videoUrl;
        let thumbnail = this.props.video.thumbnailUrl;
        let author = ""; 
        this.props.uploaders.forEach( uploader => {
            if (uploader.id === this.props.video.uploader_id) {
                author = uploader;
            }
        })
        return(
            <li className="video-item-container" onClick={this.handleVidClick}>
                {/* <video controls>
                    <source src={url}/>
                </video> */}
                {/* <button onClick={this.handleVidClick}>
                    <img src={thumbnail}/>
                </button> */}
                <img src={thumbnail} />
                <div className="video-details">
                    <h1>{this.props.video.title}</h1>
                    <p id='vid-item-text'>{author.username}</p>
                    <p id='vid-item-text'>{this.props.video.views} Views · {this.props.video.publishedAgo} ago</p>
                    {/* <label>Description:
                        <p>{this.props.video.description}</p>
                    </label> */}
                </div>
            </li>
        )
    }

}

export default withRouter(VideoIndexItem);