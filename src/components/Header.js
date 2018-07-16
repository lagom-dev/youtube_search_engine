import React, { Component } from 'react';
import '../css/Header.css';

export default class Header extends React.Component {

    render() {
        return (
            <div className="Header row">
                <h1>{this.props.text}</h1>
            </div>
        )
    }
}