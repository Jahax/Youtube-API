import './SearchBar.css';
import React from 'react';

class SearchBar extends React.Component {
    state = {
        term: 'Whistler Snowboard'
    };

    onFormSubmit = e => {
        e.preventDefault();

        this.props.onFormSubmit(this.state.term);
    };

    render() {
        return(
            <div className="search-bar ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <img className="ui middle aligned tiny image" alt="Youtube Logo" src="http://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c545.png" />
                        <span className="header-size">Youtube Video API Search</span>

                        <div className="ui icon input">
                        <input placeholder="Search..." type="text" value={this.state.term} onChange={e => this.setState({term: e.target.value})} />
                        <i className="circular search link icon" onClick={this.onFormSubmit}></i>
                    </div></div>
                </form>
            </div>
        );
    }
}

export default SearchBar;