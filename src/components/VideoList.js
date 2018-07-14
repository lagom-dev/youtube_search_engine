import React from 'react';
import PropTypes from 'prop-types';

export default class VideoList extends React.Component {
    
    renderData() {
        console.log('nextprops', this.props.video);
        
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
        console.log('nextprops', this.props.video,  this.props);
        return (
            <div className="">
                {this.props.video && this.props.video.length > 0 ?
                
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
    video: PropTypes.array
  };

