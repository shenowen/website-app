import React, { Component } from 'react';
import "../App.css";
import { Header, Grid, Image, Container } from 'semantic-ui-react';
import BdayLunch from './assets/21st Bday Lunch Argentina.jpg';
import CrimsonChin from './assets/Crimson Chin.jpg';
import CSGOLUL from './assets/CS Go LUL.jpg';
import EuropePizza from './assets/Europe Pizza.jpg';
import FormalVince from './assets/Formal with Vince.jpg';
import FortnitePano from './assets/Fortnite Panorama.jpg';
import GlacierFam from './assets/Glacier Family Pic.jpg';
import GymPic from './assets/Gym Pic.jpg';
import TotemGang from './assets/Totem Gang.jpg';
import WaterfallCheese from './assets/Waterfalls Cheese with Vince.jpg';

export default class Gallery extends Component{
    render(){
        return(
            <div className ='page'>
                <h2>DIS DA GALLERY</h2>
                <Container fluid>
                    <Grid columns={2} divided padded doubling>
                        <Grid.Row>
                            <Grid.Column>
                                <Container>
                                    <Image src= {BdayLunch} centered/>
                                    <Header>21st Birthday Lunch in Argentina</Header>
                                </Container>  
                            </Grid.Column>
                            <Grid.Column>
                                <Container>
                                    <Image src= {CSGOLUL} centered/>
                                    <Header>Sunglasses Family Friends Picture in Perito Morreno</Header>
                                </Container>  
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                <Container>
                                    <Image src= {CrimsonChin}/>
                                    <Header>Black and White in Europe, chin edition</Header>
                                </Container>  
                            </Grid.Column>
                            <Grid.Column>
                                <Container>
                                    <Image src= {FormalVince} size='large' centered/>
                                    <Header>Linked arms with my childhood friend in a shop in Argentina</Header>
                                </Container>  
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                <Container>
                                    <Image src= {FortnitePano}/>
                                    <Header>Taking an L as my alter ego looks on incredulously</Header>
                                </Container>  
                            </Grid.Column>
                            <Grid.Column>
                                <Container>
                                    <Image src= {EuropePizza} size='large' centered/>
                                    <Header>Eating Pizza in Europe</Header>
                                </Container>  
                            </Grid.Column>
                        </Grid.Row>     
                        <Grid.Row>
                            <Grid.Column>
                                <Container>
                                    <Image src= {GlacierFam} size='large' centered/>
                                    <Header>Picture with my Family on Glacier Perito Morreno</Header>
                                </Container>  
                            </Grid.Column>
                            <Grid.Column>
                                <Container>
                                    <Image src= {WaterfallCheese} size='medium' centered/>
                                    <Header>Just before going under a waterfall in Argentina</Header>
                                </Container>  
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column>
                                <Container>
                                    <Image src= {TotemGang} size='large' centered/>
                                    <Header>Mimicing the Totem with the sis and family friends</Header>
                                </Container>  
                            </Grid.Column>
                            <Grid.Column>
                                <Container>
                                    <Image src= {GymPic} size='large' centered/>
                                    <Header>Acquiring selfie gains at the apartment complex gym</Header>
                                </Container>  
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Container>
            </div>
        );
    }
}