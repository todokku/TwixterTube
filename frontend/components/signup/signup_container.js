import { connect } from 'react-redux';
import { createUser, clearErrors } from '../../actions/session_actions';
import Signup from './signup';

const msp = (state, ownProps) => {

    return ({
        errors: Object.values(state.errors.session)
    })

}

const mdp = dispatch => ({
    createUser: formUser => dispatch(createUser(formUser)),
    clearErrors: () => dispatch(clearErrors())
})

export default connect(msp, mdp)(Signup);