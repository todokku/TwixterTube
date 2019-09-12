import { connect } from 'react-redux';
import { login, logout, clearErrors } from '../../actions/session_actions';
import Login from './login';

const msp = (state, ownProps) => {

    return ({
        errors: Object.values(state.errors.session)
    })

}

const mdp = dispatch => ({
    login: formUser => dispatch(login(formUser)),
    logout: () => dispatch(logout()),
    clearErrors: () => dispatch(clearErrors())
})

export default connect(msp, mdp)(Login);