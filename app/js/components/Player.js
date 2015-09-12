import React from 'react';
import Video from './gui/Video';

class Player extends React.Component {
    constructor(media) {
        super();

        this._media = media || {};
        this._media.url = 'http://www.w3schools.com/tags/movie.mp4';
    }

    render() {
        return <div className="player">
                    <Video src={this._media.url}/>
               </div>;
    }
}

export default Player;
