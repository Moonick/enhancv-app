import React, { Component } from 'react'
import '../css/ProgressBar.css'


export default class ProgressBar extends Component {
    getBarWidth() {
        const { progress } = this.props
        
        return ({
            width: `${progress}%`
        })
    }

    render() {
        const { width } = this.props
        return (
            <div className="progress-bar">
                <div>Progress</div>
                <div className="status">
                    <div
                        id="fullBar"
                        className="bar"
                        style={this.getBarWidth()}
                    ></div>
                    <div id="emptyBar" className="bar"></div>
                </div>
            </div>
        );
    }
}