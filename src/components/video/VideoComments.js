import './VideoComments.css';
import React from 'react';

const VideoComments = ({ comment }) => {

    return (
        <div className="comment">
            <span className="avatar"><img alt="avatar" src={comment.snippet.topLevelComment.snippet.authorProfileImageUrl} /></span>
            <div className="content">
                <span className="author">{comment.snippet.topLevelComment.snippet.authorDisplayName}</span>
                <div className="metadata">
                    <span className="date">{comment.snippet.topLevelComment.snippet.updatedAt}</span>
                </div>
                <div className="text">
                {comment.snippet.topLevelComment.snippet.textDisplay}
                </div>
            </div>
        </div>
    )
}

export default VideoComments;