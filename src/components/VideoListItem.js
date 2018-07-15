import React from 'react';
import PropTypes from 'prop-types';

export default class VideoListItem extends React.Component {


    onImageError = (evt) => {
        let img = evt.target;
        img.setAttribute('src', '../images/placeholder-video-320x180.png');
    }

    render() {
        //console.log('nextprops', this.props.video,  this.props);
        return (
            <li id={this.props.item.id.videoId} className='result-list-item row'>
                <div className='four columns'> <img src={this.props.item.snippet.thumbnails.default.url} onerror={this.onImageError} className='result-list-item-thumb twelve columns' />
                    <input type='button' value='Play' className='play-button twelve columns' /></div>
                <div className='eight columns'><label>Title:</label><span>{this.props.item.snippet.title}</span>
                    <br /><label>Channel:</label><span>{this.props.item.snippet.channelTitle}</span>
                    <br /><label>Published At:</label><span>{this.props.item.snippet.publishedAt
                    }</span><br />
                    <label>Description:</label><span>{this.props.item.snippet.description || 'N/A'}</span></div>

            </li>
        );
    }
}

VideoListItem.propTypes = {
    item: PropTypes.object
};

