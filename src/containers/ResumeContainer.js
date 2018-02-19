import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import EmptyResume from '../images/resume-bg.png'
import FullResume from '../images/full-resume.png'
import {
    inputName,
    inputTitle,
    setShouldRenderJobTitle,
    setShouldRenderFullResume
} from '../actions/resume'
import '../css/Resume.css'

class ResumeContainer extends Component {
    constructor() {
        super()
        this.onFullNameChange = this.onFullNameChange.bind(this)
        this.onJobTitleChange = this.onJobTitleChange.bind(this)
        this.onFullNameEnter = this.onFullNameEnter.bind(this)
        this.onJobTitleEnter = this.onJobTitleEnter.bind(this)
    }

    componentDidUpdate({
        shouldRenderJobTitle : prevShouldRenderJobTitle,
        shouldRenderFullResume: prevShouldRenderFullResume
    }) {
        const { shouldRenderJobTitle, shouldRenderFullResume } = this.props

        if (!prevShouldRenderJobTitle && shouldRenderJobTitle) {
            this.inputJobTitle.focus()
        }

        if (prevShouldRenderFullResume && !shouldRenderFullResume) {
            this.inputJobTitle.select()
        }
    }

    onFullNameChange({ target: { value } }) {
        const { inputName } = this.props

        inputName(value)
    }

    onJobTitleChange({ target: { value } }) {
        const { inputTitle } = this.props

        inputTitle(value)
    }

    onFullNameEnter(e) {
        const { setShouldRenderJobTitle } = this.props

        if (e.key === 'Enter') {
            setShouldRenderJobTitle()
        }
    }

    onJobTitleEnter(e) {
        const { setShouldRenderFullResume } = this.props

        if (e.key === 'Enter') {
            setShouldRenderFullResume(true)
        }
    }

    render() {
        const { fullName, jobTitle, inputName, inputTitle } = this.props
        const { shouldRenderJobTitle, shouldRenderFullResume } = this.props
        
        return (
            <div className="resume-bg">
                <div className="name-title">
                    <input
                        className="full-name"
                        type="text"
                        value={fullName}
                        onChange={this.onFullNameChange}
                        onKeyPress={this.onFullNameEnter}
                        disabled={shouldRenderFullResume}
                        placeholder="YOUR NAME"
                    />
                    { shouldRenderJobTitle
                        ? <input
                            ref={input => this.inputJobTitle = input}
                            className="job-title"
                            type="text"
                            value={jobTitle}
                            onChange={this.onJobTitleChange}
                            onKeyPress={this.onJobTitleEnter}
                            disabled={shouldRenderFullResume}
                            placeholder="Your next desired role?"
                        />
                        : null
                    }
                    
                </div>
                <img src={shouldRenderFullResume ? FullResume : EmptyResume} alt="resume" />
            </div>
        );
    }
}

export default connect(
    ({resume}) => ({
        fullName: resume.fullName,
        jobTitle: resume.jobTitle,
        shouldRenderJobTitle: resume.shouldRenderJobTitle,
        shouldRenderFullResume: resume.shouldRenderFullResume
    }),
    dispatch => bindActionCreators({
        inputName,
        inputTitle,
        setShouldRenderJobTitle,
        setShouldRenderFullResume
    }, dispatch)
)(ResumeContainer)
