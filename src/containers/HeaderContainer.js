import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Button, Progress } from '../components'
import { SING_IN } from '../constants'
import '../css/Header.css'

class HeaderContainer extends Component {
    render() {
        const { progress } = this.props

        return (
            <header>
                <img
                    src="https://app.enhancv.com/2577a4aaebb51878c8d496093056f3c5.svg"
                    width="43px"
                    height="23px"
                    alt="logo"
                />
                <Progress progress={progress}/>
                <Button text={SING_IN} />
            </header>
        );
    }
}

export default connect(
    ({resume}) => ({
        progress: resume.progress
    }),
    dispatch => bindActionCreators({
        
    }, dispatch)
)(HeaderContainer)