import React from 'react';
import NavBarContainer from './nav_bar/nav_bar_container';
import VideoIndexContainer from './videos/video_index_container';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute,
    ProtectedRoute
} from '../util/route_utils';

export default ({ location, match }) => {
    // if (location.pathname !== '/signup' || location.pathname !== '/login' ) {
        return (
            <div>
                {/* <Route path='/' component={NavBarContainer} /> */}
                {/* <Switch> */}
                    <Route exact path='/' component={VideoIndexContainer} />
                {/* </Switch> */}
            </div>
        )
    // }

};