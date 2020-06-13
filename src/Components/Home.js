import React, { Component } from 'react';
import "../App.css";
import { Header } from 'semantic-ui-react';

export default class Home extends Component{
    render(){
        return(
            <div className='page'>
                <Header size = 'huge'>Owen Shen</Header>
            </div>
        );
    }
}