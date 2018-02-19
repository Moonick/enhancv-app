import React, { Component } from 'react'
import { PROGRESS } from '../constants'
import '../css/Progress.css'


export default class Progress extends Component {
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
                <div>{PROGRESS}</div>
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