import React from "react";
import SignupContainer from "./signup/signup_container";
import LoginContainer from "./login/login_container";
import NavBarContainer from "./nav_bar/nav_bar_container";
import VideoIndexContainer from "./videos/video_index_container";
import VideoShowContainer from "./videos/videos_show_container";
import EditVideoContainer from "./videos/edit_video_form_container";
import UploadFormContainer from "./videos/upload_video_form_container";
import { Route, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";

export default ({ location, match }) => {
  // if (location.pathname !== '/signup' || location.pathname !== '/login' ) {
  return (
    <div>
      <Switch>
        <AuthRoute exact path="/signup" component={SignupContainer} />
        <AuthRoute exact path="/login" component={LoginContainer} />
        <ProtectedRoute
          path="/videos/:videoId/edit"
          component={EditVideoContainer}
        />
        <Route path="/videos/:videoId" component={VideoShowContainer} />
        <ProtectedRoute path="/upload" component={UploadFormContainer} />
        <Route path="/" component={VideoIndexContainer} />
      </Switch>
    </div>
  );
  // }
};
