import React from 'react';
import VideoListItem from '../components/VideoListItem';
import PropTypes from 'prop-types';

export default class VideoList extends React.Component {


    scrollToBottom = () => {
        this.listEnd.scrollIntoView({ behavior: 'smooth' });
    }

    componentDidMount() {
        this.scrollToBottom();
    }

    componentDidUpdate() {
        this.scrollToBottom();
    }

    render() {
        //console.log('nextprops', this.props.video,  this.props);
        return (
            <ul className='result-list twelve columns'>
                {this.props.videos && this.props.videos.length > 0 ?

                    this.renderList()
                    :
                    <div className='empty-result-list'>
                        No Results were found for this search

        </div>
                }
                <div style={{ float: "left", clear: "both" }}
                    ref={(el) => { this.listEnd = el; }}>
                </div>
            </ul>
        );
    }

    renderList() {
        // console.log('nextprops', this.props.video);

        return this.props.videos.map(item => {
            return (
                <VideoListItem key={item.id.videoId} item={item} />
            );
        });
    }
}

VideoList.propTypes = {
    videos: PropTypes.array
};

