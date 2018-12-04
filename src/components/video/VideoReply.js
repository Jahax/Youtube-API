import './VideoReply.css';
import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import GoogleAuth from '../auth/GoogleAuth';

import { postComment } from '../../actions';

class VideoItem extends React.Component {

    renderError({ error, touched }) {
        if (touched && error) {
            return (
                <div className="ui error message">
                    <div className="header">{error}</div>
                </div>
            );
        }
    }

    renderInput = ({ input, placeholder, meta }) => {
        const className = `field ${meta.error && meta.touched ? 'error': ''}`;
        return (
            <div className={className}>
                <input {...input} autoComplete="off" placeholder={placeholder} />
                {this.renderError(meta)}
            </div>
        );
    }

    onSubmit(formValues) {
        this.props.postComment(formValues.comment, this.props.selectedVideo.id.videoId);
    }

    render() {
        if (this.props.isSignedIn) {
            return (
                <div>
                <form onSubmit={this.props.handleSubmit(this.onSubmit.bind(this))} className="ui reply form">
                    <div className="field">
                        <Field name="comment" component={this.renderInput} placeholder="Enter Comment..." />
                    </div>
                    <button className="ui button primary ">Save</button>
                </form>
                <GoogleAuth />
                </div>
            )
        } else {
            return (
                <div>
                    <p className="disabled">Sign in to comment.</p>
                    <GoogleAuth />
                </div>
            )
        }
    }
};

const validate = (formValues) => {
    const errors = {};

    if (!formValues.comment){
        errors.comment = 'You must enter a comment.';
    }
    return errors;
};

const mapStateToProps = (state) => {
    return {
        isSignedIn: state.auth.isSignedIn,
        selectedVideo: state.selectedVideo,
    };
 }

export default reduxForm({
    form: 'postComment',
    validate
  })(connect(mapStateToProps, { postComment })(VideoItem))