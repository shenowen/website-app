import React, { Component } from 'react';
import "../App.css";
import PagesPDFViewer from './PagesPDFViewer.js';
import resumeShen from './assets/Owen-Shen-2020-Resume-Summer.pdf';
import { Header } from 'semantic-ui-react';

export default class Resume extends Component{
    render(){
        return(
            <div className='page'>
                <Header size = 'huge'>
                    <big>My Resume</big>
                </Header>
                <PagesPDFViewer pdf = {resumeShen}/>
            </div>
        );
    }
}