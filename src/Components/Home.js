import React, { Component } from 'react';
import "../App.css";
import { Header, Grid, Image, Container } from 'semantic-ui-react';
import introPicture from './assets/Hiking boi cropped.jpg';

export default class Home extends Component{
    render(){
        return(
            <div className='page'>
                <Header size = 'huge'>
                    <big>Owen Shen</big>
                </Header>
                <Container fluid>
                    <Grid columns={2} divided padded doubling>
                        <Grid.Column width = {8}>
                            <Image src= {introPicture} />
                        </Grid.Column>
                        <Grid.Column>
                        <h2>Purdue University - Major in Computer Science, Minor in Psychology Class of 2021</h2>
                        <h2 className = 'left-align'>
                        Howdy! Welcome to my personal website! This is a simple portfolio of more stuff about me
                        </h2>
                        <h2 className = 'left-align'>
                        Click through the navigation bar to see more stuff, such as pictures from trips I've gone on, and my resume
                        </h2>
                        </Grid.Column>
                    </Grid>
                </Container>
                
            </div>
        );
    }
}