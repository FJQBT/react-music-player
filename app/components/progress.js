import React, { Component } from 'react';
import './progress.less'

class Progress extends Component {
    constructor(){
        super();
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            backgroundColor: '#2f9842'
        }
    }

    handleClick(e){
        let progressBar = this.refs.progressBar;
        let progress = (e.clientX - progressBar.getBoundingClientRect().left) / 
        progressBar.clientWidth;
        //console.log(progress);
        this.props.onProgressChange && this.props.onProgressChange(progress);
    }

    render() {
        return (
            <div className="components-progress" onClick={this.handleClick} ref="progressBar">
                <div 
                    className="progress" 
                    style={{width: `${this.props.progress}%`, background: this.state.backgroundColor }}
                >
                </div>
            </div>
        );
    }
}

export default Progress;