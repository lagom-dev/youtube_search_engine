import React, { Component } from 'react';

export default class Header extends React.Component {

    render() {
        return (
            <div className="header row">
                <h1>{this.props.text}</h1>
            </div>
        )
    }
}