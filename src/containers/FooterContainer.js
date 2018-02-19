import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Button } from '../components'
import {
    setProgress,
    setShouldRenderJobTitle,
    setShouldRenderFullResume
} from '../actions/resume'
import '../css/Footer.css'


class FooterContainer extends Component {
    constructor() {
        super()
        this.onFinish = this.onFinish.bind(this)
        this.onChangeJob = this.onChangeJob.bind(this)
    }

    onFinish() {
        const { setShouldRenderFullResume } = this.props

        setShouldRenderFullResume(true)
    }

    onChangeJob() {
        const { setShouldRenderFullResume } = this.props

        setShouldRenderFullResume(false)
    }

    renderWellDoneMessage() {
        const { setShouldRenderJobTitle } = this.props

        return (
            <div>
                <div className="h1">Well done! Select next to continue.</div>
                <Button className="fixed" text="Next" onClick={setShouldRenderJobTitle} />
            </div>
        )
    }

    renderEnterFullNameMessage() {
        return (
            <div>
                <div className="h1">Now type the next role you are applying for</div>
                <div className="h2">E.g. Senior Web Developer, Product Manager, CEO, Director of Finance, Retail Manager</div>
                </div>
            )
        }
        
    renderEnterJobTitleMessage() {
        return (
            <div>
                <div className="h1">Enter a specific role. It helps us personalize your resume template to it.</div>
                <div className="h2">E.g. Senior Web Developer, Product Manager, CEO, Director of Finance, Retail Manager</div>
                <Button text="Next" onClick={this.onFinish} />
            </div>
        )
    }
    
    renderFinalMessage() {
        const { jobTitle } = this.props
        return (
            <div>
                <div className="h1">Great, your resume is now tailored for a {jobTitle} position</div>
                <div className="h2">This is not the role you are applying for?
                    <Button
                        className='change-job'
                        text="Change next desired role"
                        onClick={this.onChangeJob}
                    />
                </div>
                <Button className="fixed" text="Next"/>
            </div>
        ) 
    }

    renderMessage() {
        const { fullName, jobTitle, setProgress } = this.props
        const { shouldRenderFullResume, shouldRenderJobTitle } = this.props

        if (fullName !== '' && jobTitle === '') {
            setProgress(25)
            return this.renderWellDoneMessage()
        }
        
        if (fullName !== '' && jobTitle === '' && shouldRenderJobTitle) {
            return this.renderEnterFullNameMessage()
        }
        
        
        if (fullName !== '' && jobTitle !== '' && !shouldRenderFullResume) {
            setProgress(50)
            return this.renderEnterJobTitleMessage()
        }

        if (fullName !== '' && jobTitle !== '' && shouldRenderFullResume) {
            setProgress(100)
            return this.renderFinalMessage()
        }

        setProgress(0)

        return <div className="h1">5 quick steps to Enhancv. First, type your name.</div>
    }

    render() {

        return (
            <footer>
                {this.renderMessage()}
            </footer>
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
        setShouldRenderJobTitle,
        setShouldRenderFullResume,
        setProgress
    }, dispatch)
)(FooterContainer)