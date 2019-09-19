import React from 'react';
import { Link, withRouter, Redirect } from 'react-router-dom';
import NavBarContainer from '../nav_bar/nav_bar_container';

class UploadVideoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: "",
            videoFile: null,
            thumbnailFile: null
        };
        this.update = this.update.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleVideoFile = this.handleVideoFile.bind(this);
        this.handleThumbnailFile = this.handleThumbnailFile.bind(this);
    }

    update(field){
        return e => this.setState({
            [field]: e.target.value
        });
    }
    
    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('video[title]', this.state.title);
        formData.append('video[description]', this.state.description);
        formData.append('video[vid]', this.state.videoFile);
        formData.append('video[thumbnail]', this.state.thumbnailFile);
        this.props.action(formData)
        .then( 
            (response) => {
                // debugger
                this.props.history.push(`/videos/${response.payload.video.id}`)
            });
    }
    
    handleVideoFile(e) {
        this.setState({ videoFile: e.currentTarget.files[0]})
    }

    handleThumbnailFile(e) {
        this.setState({ thumbnailFile: e.currentTarget.files[0] })
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
                    <label >Upload Video
                        <input type="file" placeholder='Upload Video' onChange={this.handleVideoFile}/>
                    </label>
                    {/* className="custom-file-upload" */}
                    {/* THIS CSS CLASS NAME IS GONNA BE INCLUDED IN LABLES */}
                    <label >Upload Thumbnail
                        <input type="file" placeholder="Upload Thumbnail" onChange={this.handleThumbnailFile}/>
                    </label>
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