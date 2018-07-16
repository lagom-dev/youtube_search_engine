import React from 'react';
import {VIDEO_THUMB_PLACEHOLDER_URL} from '../constants.js';
import PropTypes from 'prop-types';

export default class VideoListItem extends React.Component {

    constructor(props) {
        super(props);

        this.playVideo = () => {
            this.props.playVideo(this.props.item.id.videoId);
        }

        this.onImageError = (evt) => {
            let img = evt.target;
            img.setAttribute('src', VIDEO_THUMB_PLACEHOLDER_URL);
        }
    }

    render() {
        let videoId = this.props.item && this.props.item.id ? this.props.item.id.videoId : -1;
        let thumbUrl = this.props.item && this.props.item.snippet && this.props.item.snippet.thumbnails.default && this.props.item.snippet.thumbnails.default.url ? this.props.item.snippet.thumbnails.default.url : VIDEO_THUMB_PLACEHOLDER_URL;
        let videoTitle =  this.props.item && this.props.item.snippet && this.props.item.snippet.title ? this.props.item.snippet.title : 'N/A';
        let channelTitle =  this.props.item && this.props.item.snippet && this.props.item.snippet.channelTitle ? this.props.item.snippet.channelTitle : 'N/A';
        let description =  this.props.item && this.props.item.snippet && this.props.item.snippet.description ? this.props.item.snippet.description : 'N/A';
        return (
            <li id={videoId} className='result-list-item row'>
                <div className='four columns'> <img alt="Video Thumbnail" src={thumbUrl} onerror={this.onImageError} className='result-list-item-thumb twelve columns' />
                    <input type='button' value='Play' className='play-button twelve columns' onClick={this.playVideo} /></div>
                <div className='eight columns'><label>Title:</label><span>{videoTitle}</span>
                    <br /><label>Channel:</label><span>{channelTitle}</span>
                    <br />
                    <label>Description:</label><span>{description || 'N/A'}</span></div>

            </li>
        );
    }
    
}

VideoListItem.propTypes = {
    item: PropTypes.object
};

