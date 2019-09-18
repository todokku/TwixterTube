import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import NavBarContainer from '../nav_bar/nav_bar_container';

class VideoShow extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchVideo(this.props.match.params.videoId);
        // this.props.
        // this.props.video[views]++;    need an action to update back end, optional for now
    }

    render() {
        
        if (!this.props.video) {
            return null;
        }
        let url = this.props.video.videoUrl;
        return (
            <div>
                <NavBarContainer />
                
                <video controls>
                    <source src={url}/>
                </video>
                <div>
                    <h1>{this.props.video.title}</h1>
                    <label>Author:
                        <p>{this.props.uploader.username}</p>
                    </label>
                    <label>Views:
                        <p>{this.props.video.views}</p>
                    </label>
                    <label>Description:
                        <p>{this.props.video.description}</p>
                    </label>

                </div>
            </div>
        )
    }

}

export default VideoShow;