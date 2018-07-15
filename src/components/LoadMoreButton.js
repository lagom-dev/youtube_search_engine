import React from 'react';

export default class LoadMoreButton extends React.Component {

    render() {
        return (
            <input className={`LoadMoreButton ${this.props.display}`} type='button' onClick={this.props.loadMore} value='Load more' style={{display:`${ this.props.display}`}} />
        );
    }
}

