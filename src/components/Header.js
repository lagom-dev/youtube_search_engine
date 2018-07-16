import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/Header.css';

export default class Header extends Component {

    render() {
        return (
            <div className="Header row">
                <h1>{this.props.headerText}</h1>
            </div>
        )
    }
}

Header.propTypes = {
    text: PropTypes.string,
};
