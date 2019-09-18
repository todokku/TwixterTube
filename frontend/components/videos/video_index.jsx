import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container';
import VideoIndexItem from './video_index_item';
import { withRouter } from 'react-router-dom';

class VideosIndex extends React.Component {
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {
        this.props.fetchVideos();
    }
    
    render() {
        let videos = [];
        this.props.videos.forEach( video => {
            this.props.uploaders.forEach( uploader => {
                if ( video.uploader_id === uploader.id ) {
                    videos.push(
                    <VideoIndexItem
                    video={video}
                    key={video.id}
                    uploader={uploader}
                    />
                    )
                }
            })
        })
        // let videos = this.props.videos.map( video => {

        //     return (
        //         <VideoIndexItem 
        //         video={video}
        //         key={video.id}
        //         />
        //     )
        // })

        return (
            <div>
                <NavBarContainer />
                {/* <h1>React is Working</h1> */}
                <div>
                    {videos}
                </div>
                    
            </div>
        )
    }
    
}

export default withRouter(VideosIndex);