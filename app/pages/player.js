import React, { Component } from 'react';
import Progress from '../components/progress';
import $ from 'jquery';
import jPlayer from 'jplayer';
import './player.less';

let duration = null;

class Player extends Component {
    constructor(){
        super();
        this.state = {progress: '-'}
    }

    componentDidMount(){
        $('#player').bind($.jPlayer.event.timeupdate, (e) => {
            duration = e.jPlayer.status.duration;
            this.setState({
                progress: e.jPlayer.status.currentPercentAbsolute
            });
        });
    }

    componentWillUnmount(){
        $('#player').unbind($.jPlayer.event.timeupdate);
    }

    progressChangeHandler(progress){
        $('#player').jPlayer('play', duration*progress);
    }

    render() {
        return (
            <Progress 
                progress={this.state.progress} 
                onProgressChange={this.progressChangeHandler}
            />
        );
    }
}

export default Player;