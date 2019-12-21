import React from "react";
import { Provider } from "react-redux";
import { HashRouter } from "react-router-dom";
import App from "./app";
import UserAuth from "./user_auth";

const Root = ({ store, searchErrorPuppy, twixLogo }) => (
  <Provider store={store}>
    <HashRouter>
      <App searchErrorPuppy={searchErrorPuppy} twixLogo={twixLogo} />
    </HashRouter>
  </Provider>
);

export default Root;
