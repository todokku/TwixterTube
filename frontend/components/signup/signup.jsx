import React from 'react';
import { Link, withRouter } from 'react-router-dom';

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "",
            email: "",
            password: ""
        }
        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field) {
        return e => this.setState({
            [field]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.createUser(this.state)
            .then( () => this.props.history.push('/'));
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error, idx) => (
                    <li key={idx}>{error}</li>
                ))}
            </ul>
        )
    }

    nextPath(path) {
        this.props.history.push(path);
    }

    render() {
        return (
            <div className='session-form-container'>
                <form onSubmit={this.handleSubmit} className='session-form'>
                <div className="logo">
                    <h2>TwixterTube</h2>
                </div>
                <header className="session-form-header">
                    <h2>Create your Account</h2>
                    <h4>to continue to TwixterTube</h4>
                </header>
                    <div className='session-input-fields'>
                        <label>
                            <input type="text" value={this.state.username} id='username-input' placeholder='Username' onChange={this.update('username')} />
                        </label>
                        <label>
                            <input type="text" value={this.state.email} id='email-input' placeholder='Email' onChange={this.update('email')}/>
                        </label>
                        <label>
                            <input type="password" value={this.state.password} id='password-input' placeholder='Password' onChange={this.update('password')} />
                        </label>
                    </div>
                    <div className='session-form-buttons'>
                        <Link to={`/login`} className='session-form-buttons-Links'>
                            Sign in instead
                            </Link>
                        {/* <button onClick= {() => this.nextPath('/login')}>
                            Sign in instead
                        </button> */}
                        <button onClick={this.handleSubmit} className='next-button'>Next</button>
                    </div>
                </form>
                {this.renderErrors()}
            </div>
        )
    }
}

export default withRouter(Signup);