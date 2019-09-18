import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import NavBarContainer from '../nav_bar/nav_bar_container';

class UploadVideoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.props.video;
        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field){
        return e => this.setState({
            [field]: e.target.value
        });
    }
    
    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state)
        .then( (video) => this.props.history.push(`/videos/${video.id}`));
    }
    
    render() {
        if (!this.props.currentUser) {
            this.props.history.replace('/login');
        }

        return (
            <div>
                <NavBarContainer />
                <h2>{this.props.formTitle}</h2>
                <form onSubmit={this.handleSubmit} className='edit-form'>
                    <label> {/* TITLE */}
                        <input
                            type="text"
                            placeholder='Title'
                            value={this.state.title}
                            onChange={this.update('title')} />
                    </label>

                    <label> {/* DESCRIPTION */}
                        <textarea
                            placeholder='Description'
                            value={this.state.description}
                            onChange={this.update('description')} />
                    </label>

                    <button className="next-button" onClick={this.handleSubmit}>{this.props.formType}</button>
                </form>
            </div>
        )
    }

}

export default withRouter(UploadVideoForm);