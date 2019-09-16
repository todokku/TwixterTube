import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class VideoIndexItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let url = this.props.video.videoUrl;
        return(
            <div>
                <h1>{this.props.video.title}</h1>
                <video controls>
                    <source src={url}/>
                </video>
            </div>
            
        )
    }

}

export default VideoIndexItem;