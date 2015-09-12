import React from 'react';
import _ from 'underscore';

class Video extends React.Component {
    constructor() {
        super();

        _.bindAll(this, 'setState', 'handleClick');

        this._id = _.uniqueId('video_');
        this.state = this.getInitialState();
    }

    getInitialState() {
        return {
            playing: false
        };
    }

    setState(state) {
        _.extend(this.state, state);
        this.render();
    }

    handleClick() {
        console.log(this);
        this.setState({ playing: !this.state.playing });
    }

    render () {
        console.log(this.state.playing);
        return <video id={this._id} src={this.props.src} onClick={this.handleClick}></video>;
    }
}

export default Video;
