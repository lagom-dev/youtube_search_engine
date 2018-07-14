import React from 'react';

export default class LoadMoreButton extends React.Component {

    render() {
        return (
            <input type="button" onClick={this.props.loadMore} value="Load more" />
        );
    }
}

