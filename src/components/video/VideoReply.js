import React from 'react';
import { connect } from 'react-redux';

import GoogleAuth from '../auth/GoogleAuth';

class VideoItem extends React.Component {

    render() {
        if (this.props.isSignedIn) {
            return (
                <div>
                <form className="ui reply form">
                    <div className="field">
                        <textarea></textarea>
                    </div>
                    <div className="ui blue labeled submit icon button">
                        <i className="icon edit"></i> Add Reply
                    </div> 
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

const mapStateToProps = (state) => {
    return {
        isSignedIn: state.auth.isSignedIn
    };
 }

export default connect(
    mapStateToProps
)(VideoItem);