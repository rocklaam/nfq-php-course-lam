import React from 'react';

class SearchBar extends React.Component {
    searchHandler(e) {
        this.props.searchHandler(e.target.value);
    }

    render () {
        return (
            <div className="bar bar-standard bar-header-secondary">
                <input type="search" onChange={this.searchHandler.bind(this)} value={this.props.searchKey} />
            </div>
        );
    }
};

export default SearchBar;