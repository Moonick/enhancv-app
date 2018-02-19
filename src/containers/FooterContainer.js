import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Button } from '../components'
import { onClickFullName, renderFullResume } from '../actions/footer'
import { setProgress } from '../actions/header'
import { NEXT, CHANGE_JOB } from '../constants';
import '../css/Footer.css'


class FooterContainer extends Component {
    renderMessage() {
        const { fullName, jobTitle, setProgress } = this.props
        const { onClickFullName, renderFullResume } = this.props
        const { shouldRenderJobTitle, shouldRenderFullResume } = this.props

        if (fullName !== '' && !shouldRenderJobTitle) {
            setProgress(25)
            
            return (
                <div>
                    <div className="h1">Well done! Select next to continue.</div>
                    <Button className="fixed" text={NEXT} onClick={onClickFullName} />
                </div>
            )
        }
        
        if (fullName !== '' && jobTitle === '' && shouldRenderJobTitle) {
            return (
                <div>
                    <div className="h1">Now type the next role you are applying for</div>
                    <div className="h2">E.g. Senior Web Developer, Product Manager, CEO, Director of Finance, Retail Manager</div>
                </div>
            )
        }
        
        
        if (fullName !== '' && jobTitle !== '' && !shouldRenderFullResume) {
            setProgress(50)

            return (
                <div>
                    <div className="h1">Enter a specific role. It helps us personalize your resume template to it.</div>
                    <div className="h2">E.g. Senior Web Developer, Product Manager, CEO, Director of Finance, Retail Manager</div>
                    <Button text={NEXT} onClick={() => renderFullResume(true)} />
                </div>
            )
        }

        if (fullName !== '' && jobTitle !== '' && shouldRenderFullResume) {
            setProgress(100)

            return (
                <div>
                    <div className="h1">Great, your resume is now tailored for a {jobTitle} position</div>
                    <div className="h2">This is not the role you are applying for?
                        <Button
                            className='change-job'
                            text={CHANGE_JOB}
                            onClick={() => renderFullResume(false)}
                        />
                    </div>
                    <Button className="fixed" text={NEXT} />
                </div>
            ) 
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
        onClickFullName,
        renderFullResume,
        setProgress
    }, dispatch)
)(FooterContainer)