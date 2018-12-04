import './VideoList.css';
import React from 'react';
import { connect } from 'react-redux';

import VideoItem from './VideoItem';

class VideoList extends React.Component{

    renderList() {
        return this.props.videos.map(video => {
            return (
                <VideoItem 
                    key={video.id.videoId ? video.id.videoId : Math.random()} video={video} 
                />
            )
        })
    }

    render() {
        if(!this.props.videos){
            return(<div>Loading...</div>);
        }

        return <div className="ui relaxed divided list">{this.renderList()}</div>;
    }
};

const mapStateToProps = (state) => {
    return {
        videos: state.videos.items
    };
 }
 
export default connect(
    mapStateToProps
)(VideoList);