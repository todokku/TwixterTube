import React from "react";
import SignupContainer from "./signup/signup_container";
import LoginContainer from "./login/login_container";
import NavBarContainer from "./nav_bar/nav_bar_container";
import VideoIndexContainer from "./videos/video_index_container";
import VideoShowContainer from "./videos/videos_show_container";
import EditVideoContainer from "./videos/edit_video_form_container";
import UploadFormContainer from "./videos/upload_video_form_container";
import SearchVideoIndexContainer from "./search/search_video_index_container";
import { Route, Switch } from "react-router-dom";
import { AuthRoute, ProtectedRoute } from "../util/route_util";

export default ({ location, match }) => {
  // if (location.pathname !== '/signup' || location.pathname !== '/login' ) {
  // console.log(
  //   "DO THE IMAGES SHOW HERE ON APP PAGE?:   ",
  //   twixLogo,
  //   searchErrorPuppy
  // );
  return (
    <div>
      <Switch>
        <AuthRoute
          exact
          path="/signup"
          component={SignupContainer}
          // component={() => <SignupContainer twixLogo={twixLogo} />}
        />
        <AuthRoute
          exact
          path="/login"
          component={LoginContainer}
          // component={() => <LoginContainer twixLogo={twixLogo} />}
        />
        <ProtectedRoute
          path="/videos/:videoId/edit"
          component={EditVideoContainer}
          // component={() => <EditVideoContainer twixLogo={twixLogo} />}
        />
        <Route
          exact
          path="/search/:query"
          // component={() => (
          //   <SearchVideoIndexContainer
          //     searchErrorPuppy={searchErrorPuppy}
          //     twixLogo={twixLogo}
          //   />
          // )}
          component={SearchVideoIndexContainer}
        />
        <Route
          path="/videos/:videoId"
          component={VideoShowContainer}
          // component={() => <VideoShowContainer twixLogo={twixLogo} />}
        />
        <ProtectedRoute
          path="/upload"
          component={UploadFormContainer}
          // component={() => <UploadFormContainer twixLogo={twixLogo} />}
        />
        <Route
          path="/"
          component={VideoIndexContainer}
          // component={() => <VideoIndexContainer twixLogo={twixLogo} />}
        />
      </Switch>
    </div>
  );
  // }
};
