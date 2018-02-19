import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import EmptyResume from '../images/resume-bg.png'
import FullResume from '../images/full-resume.png'
import { inputName, inputTitle } from '../actions/resume'
import { onClickFullName, renderFullResume } from '../actions/footer'
import '../css/Resume.css'

class ResumeContainer extends Component {
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

    onFullNameEnter(e) {
        const { onClickFullName } = this.props

        if (e.key === 'Enter') {
            onClickFullName()
        }
    }

    onJobTitleEnter(e) {
        const { renderFullResume } = this.props

        if (e.key === 'Enter') {
            renderFullResume(true)
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
                        onChange={e => inputName(e.target.value)}
                        onKeyPress={e => this.onFullNameEnter(e)}
                        disabled={shouldRenderFullResume}
                        placeholder="YOUR NAME"
                    />
                    { shouldRenderJobTitle
                        ? <input
                            ref={input => this.inputJobTitle = input}
                            className="job-title"
                            type="text"
                            value={jobTitle}
                            onChange={e => inputTitle(e.target.value)}
                            onKeyPress={e => this.onJobTitleEnter(e)}
                            disabled={shouldRenderFullResume}
                            placeholder="Your next desired role?"
                        />
                        : null
                    }
                    
                </div>
                { shouldRenderFullResume
                    ? <img src={FullResume} alt="resume"/>
                    :  <img src={EmptyResume} alt="resume"/>
                }
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
        onClickFullName,
        renderFullResume
    }, dispatch)
)(ResumeContainer)
