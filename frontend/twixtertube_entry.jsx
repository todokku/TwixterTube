import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';
import entitiesReducer from './reducers/entities_reducer';
import usersReducer from './reducers/users_reducer';

document.addEventListener( 'DOMContentLoaded', () => {
    const root = document.getElementById('root');
    let preLoadedState = {};
    if (window.currentUser) {
        preLoadedState = {
            entities: {
                users: { 
                    [window.currentUser.id]: window.currentUser
                }
            },
            session: {
                currentUser: window.currentUser.id
            }
        }
    }
    const store = configureStore(preLoadedState);
    window.getState = store.getState;
    ReactDOM.render(< Root store={store}/> ,root);
})