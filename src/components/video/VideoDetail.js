import './VideoDetail.css';
import React from 'react';
import { connect } from 'react-redux';

import VideoComments from './VideoComments';
import VideoReply from './VideoReply';

class VideoDetail extends React.Component {
    
    videoSrc () { 
        return `https://www.youtube.com/embed/${this.props.selectedVideo.id.videoId}`;
    }

    renderComments() {
        if (this.props.comments && this.props.comments.length) {
            return this.props.comments.map(comment => {
                return (
                    <VideoComments 
                        key={comment.id} comment={comment} 
                    />
                )
            })
        } else {
            return(
                <div className="disabled">Comments Disabled.</div>
            )
        }
    }
    
    render() {  
        if(!this.props.selectedVideo) {
            return (
            <div>Loading...</div>
            );
        }
        return (
            <div>
                <div className="ui embed">
                    <iframe title="video player" src={this.videoSrc()} />
                </div>
                <div className="ui segment">
                    <h4 className="ui header">{this.props.selectedVideo.snippet.title}</h4>
                    <p>{this.props.selectedVideo.snippet.description}</p>
                </div>
                <div className="ui comments">
                    <VideoReply />
                    <h3 className="ui dividing header">Top Comments</h3>
                    {this.renderComments()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        selectedVideo: state.selectedVideo,
        comments: state.comments.items
    };
 }
 
export default connect(
    mapStateToProps
)(VideoDetail);