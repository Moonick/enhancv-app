import React, { Component } from 'react'
import {
    HeaderContainer,
    ResumeContainer,
    FooterContainer
} from '../containers'
import '../css/App.css'

export default class App extends Component {
    render() {
        return (
            <div className="img-bg">
                <HeaderContainer />
                <ResumeContainer />
                <FooterContainer />
            </div>
        );
    }
}