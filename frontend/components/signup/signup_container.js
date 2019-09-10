import { connect } from 'react-redux';
import { createUser } from '../../actions/session';
import Signup from './signup';

const mdp = dispatch => ({
    createUser: formUser => dispatch(createUser(formUser))
})

export default connect(null, mdp)(Signup);