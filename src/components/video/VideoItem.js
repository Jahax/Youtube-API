import './VideoItem.css';
import React from 'react';
import { connect } from 'react-redux';

import { passSelectedVideo } from '../../actions';

class VideoItem extends React.Component {

    onVideoSelect = (video) => {
        this.props.passSelectedVideo(video);
    };

    render() {
        return (
            <div onClick={() => this.onVideoSelect(this.props.video)} className="item video-item">
                <img className="ui image" alt={this.props.video.snippet.title} src={this.props.video.snippet.thumbnails.medium.url} />
                <div className="content">
                    <div className="header">{this.props.video.snippet.title}</div>
                </div>
            </div>
        )
    }
};

export default connect(
    null,
    { passSelectedVideo }
)(VideoItem);