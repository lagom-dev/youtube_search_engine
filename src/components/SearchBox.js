import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as videoActions from '../actions/videoActions';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import VideoList from '../components/VideoList';
import LoadMoreButton from '../components/LoadMoreButton';

class SearchBox extends Component {

  constructor(props) {
    super(props);
  
    this.state = {
      queryValue: '',
      isPagination: false,
    };

   
    this.load = (_isPag) => {
      this.props.videoActions.fetchVideos(this.state.queryValue, this.props.video.nextPageToken,_isPag);
    }


    this.updateInputValue = (evt) => {
      let inputValue = evt.target.value; /*TODO: sanitize typed value */
      this.setState({
        queryValue: inputValue,
        isPagination: false,
      });
      setTimeout(() => {
        this.load();
      }, 1000);
    }


    this.loadMore = () => {
      this.setState({
        isPagination: true,
      });
      this.load(true);
    }
  }

  render() {
    let videos = this.props.video.video || [];
    return (
      <div className="SearchBox six columns">
        <span>Youtube Search:</span><input type="text" placeholder="Start typing..." value={this.state.inputValue} onChange={this.updateInputValue} />
        <label>Showing {videos.length} Videos</label>
        <VideoList videos={videos} isPagination={this.state.isPagination} />
        <LoadMoreButton loadMore={this.loadMore} display={videos.length > 0 ? 'block' : 'none'} />
      </div>
    );
  }
}

VideoList.propTypes = {
  videoActions: PropTypes.object,
  video: PropTypes.array,
  nextPageToken: PropTypes.string,
};

function mapStateToProps(state) {
  return {
    video: state.video,
    nextPageToken: state.nextPageToken,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    videoActions: bindActionCreators(videoActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBox);

