import React, { Component } from 'react'
import '../css/Button.css'

export default class Button extends Component {
    constructor() {
        super()
        this.onButtonClick = this.onButtonClick.bind(this)
    }
    
    onButtonClick() {
        const { onClick } = this.props

        if (onClick) {
            onClick()
        }
    }

    render() {

        const { text, className = '' } = this.props

        return (
            <button className={`btn ${className}`} onClick={this.onButtonClick}>
                {text}
            </button>
        );
    }
}