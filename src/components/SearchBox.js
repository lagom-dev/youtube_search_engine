import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as videoActions from '../actions/videoActions';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

class SearchBox extends Component {

  constructor(props) {
    super(props);

    this.state = {
      inputValue: '',
    };

    this.updateInputValue =  (evt) => {
      this.setState({
        inputValue: evt.target.value,
      });
        setTimeout(() => {
          this.props.videoActions.fetchVideos(this.state.inputValue);
        }, 500);
    }

    this.loadMore = () => {
      console.log(this.props.page);
      let newPage = this.props.page + 5;
      this.props.videoActions.fetchVideos(this.state.inputValue, newPage);
    }
  }


  render() {
    return (
      <div className="SearchBox">
        <input type="text" placeholder="Start typing..." value={this.state.inputValue} onChange={this.updateInputValue} />
        <input type="button" onClick={this.loadMore} value="Load more" />
      </div>
    );
  }
}

SearchBox.propTypes = {
  videoActions: PropTypes.object,
  page: PropTypes.number,
};

function mapStateToProps(state) {
  console.log('state', state);
  return {
    page : state.video.page
  };
}

function mapDispatchToProps(dispatch) {
  return {
    videoActions: bindActionCreators(videoActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBox);

