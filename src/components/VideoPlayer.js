import React from 'react';
import PropTypes from 'prop-types';

export default class VideoPlayer extends React.Component {

    render() {
        return (<iframe className="videoPlayer"
        src='https://www.youtube.com/embed/tgbNymZ7vqY' />);
    } 
}