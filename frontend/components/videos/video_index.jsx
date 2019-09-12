import React from 'react';
import NavBarContainer from '../nav_bar/nav_bar_container';

class VideosIndex extends React.Component {
    
    // componentDidMount() {
    //     this.props.fetchVideos();
    // }
    
    render() {
        return (
            <div>
                <NavBarContainer />
                <h2>
                    Videos Index
                </h2>
            </div>
        )
    }
    
}

export default VideosIndex;