import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import NavBarContainer from '../nav_bar/nav_bar_container';

class EditVideoForm extends React.Component {
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
        .then( () => this.props.history.push(`/videos/${this.props.video.id}`));
    }
    
    componentDidMount() {
        this.props.fetchVideo(this.props.match.params.videoId)
            .then( (response) => {
                this.setState({
                    id: this.props.match.params.videoId,
                    title: response.payload.video.title,
                    description: response.payload.video.description
                })
            } )
        ;
        // debugger
    }

    render() {
        if (!this.props.video.uploader_id) {
            return null;
        }
        console.log(this.state);

        if (this.props.currentUser.id !== this.props.video.uploader_id) {
            this.props.history.push('/');
        }
        // if (!this.props.currentUser) {
        //     this.props.history.replace('/login');
        // }

        return (
            <div>
                <NavBarContainer />
                <h2>{this.props.formTitle}</h2>
                <form onSubmit={this.handleSubmit} className='edit-form'>
                        <input
                            type="text"
                            placeholder='Title'
                            value={this.state.title} 
                            onChange={this.update('title')} />
                            
                        <textarea
                            placeholder='Description'
                            value={this.state.description}
                            onChange={this.update('description')} />

                    <button className="next-button" onClick={this.handleSubmit}>{this.props.formType}</button>
                </form>
            </div>
        )
    }

}

export default withRouter(EditVideoForm);