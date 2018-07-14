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
      let inputValue = this.state.inputValue;
        setTimeout(() => {
          this.props.videoActions.fetchVideos(this.state.inputValue);
        }, 500);
    }
  }


  render() {
    return (
      <div className="SearchBox">
        <input type="text" placeholder="Start typing..." value={this.state.inputValue} onChange={this.updateInputValue} />
      </div>
    );
  }
}

SearchBox.propTypes = {
  videoActions: PropTypes.object,
  videos: PropTypes.array
};

function mapStateToProps(state) {
  return {
    video: state.video
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

