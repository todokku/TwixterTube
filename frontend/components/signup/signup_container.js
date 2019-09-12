import { connect } from 'react-redux';
import { createUser } from '../../actions/session_actions';
import Signup from './signup';

const msp = (state, ownProps) => {

    return ({
        errors: Object.values(state.errors.session)
    })

}

const mdp = dispatch => ({
    createUser: formUser => dispatch(createUser(formUser))
})

export default connect(msp, mdp)(Signup);