import React from 'react';

class Header extends React.Component {
    render() {
        return (
            <header className="bar bar-nav">
                <h1 className="title">{this.props.text}</h1>
            </header>
        );
    }
};
export default Header;