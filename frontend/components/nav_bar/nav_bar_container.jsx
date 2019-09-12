import React from 'react';
import { connect } from 'react-redux';
import NavBar from './nav_bar';
import { logout, clearErrors } from '../../actions/session_actions';

const msp = state => ({
    currentUser: state.entities.users[state.session.currentUser]
})

const mdp = dispatch => ({
    logout: () => dispatch(logout()),
    clearErrors: () => dispatch(clearErrors())

})

export default connect(msp, mdp)(NavBar);