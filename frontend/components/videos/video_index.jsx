import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container';
import VideoIndexItem from './video_index_item';

class VideosIndex extends React.Component {
    constructor(props) {
        super(props);
        
    }
    
    componentDidMount() {
        this.props.fetchVideos();
    }
    
    render() {
        let videos = this.props.videos.map( video => {
            return (
                <VideoIndexItem 
                video={video}
                key={video.id}
                />
            )
        })
        return (
            <div>
                <NavBarContainer />
                <h1>React is Working</h1>
                <h2>
                    {videos}
                </h2>
            </div>
        )
    }
    
}

export default VideosIndex;