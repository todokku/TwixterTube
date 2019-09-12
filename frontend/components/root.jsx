import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './app';
import UserAuth from './user_auth';

const Root = ({ store }) => (
    <Provider store={store}>
        <HashRouter>
            <UserAuth />
            <App />
        </HashRouter>
    </Provider>
);

export default Root;