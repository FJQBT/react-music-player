import React, { Component } from 'react';
import './progress.less'

class Progress extends Component {
    constructor(){
        super();
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        let progressBar = this.refs.progressBar;
        let progress = (e.clientX - progressBar.getBoundingClientRect().left) / 
        progressBar.clientWidth;
        console.log(progress);
    }

    render() {
        return (
            <div className="components-progress" onClick={this.handleClick} ref="progressBar">
                <div 
                    className="progress" 
                    style={{width: `${this.props.progress}%`}}
                >
                </div>
            </div>
        );
    }
}

export default Progress;