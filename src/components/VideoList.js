import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as videoActions from '../actions/videoActions';
import PropTypes from 'prop-types';
import React from 'react';


class VideoList extends React.Component {

    componentWillMount() { // HERE WE ARE TRIGGERING THE ACTION
        this.props.videoActions.fetchVideos();
    }


    renderData() {
        return this.props.video.map(item => {

            return (
                <div key={item.id.videoId}>
                    <h3>{item.snippet.title}</h3>
                    <p>{item.snippet.description}</p>
                </div>
            );
        });
    }


    render() {
        return (
            <div className="">
                {this.props.video.length > 0 ?
                    this.renderData()
                    :
                    <div className="">
                        No Data
            </div>
                }
            </div>
        );
    }
}

VideoList.propTypes = {
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
)(VideoList);