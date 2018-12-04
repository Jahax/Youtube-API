import React from 'react';
import { connect } from 'react-redux';

import SearchBar from './search/SearchBar';
import VideoList from './video/VideoList';
import VideoDetail from './video/VideoDetail';

import { fetchVideos } from '../actions';

class App extends React.Component {

    componentDidMount() {
        this.props.fetchVideos('Whistler Snowboard');
    };

    render() {
        return (
            <div className="ui container">
                <SearchBar />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column"><VideoDetail /></div>
                        <div className="five wide column"><VideoList /></div>
                    </div>
                </div>
            </div>
        )
    }
}
 
export default connect(
    null,
    { fetchVideos }
)(App);