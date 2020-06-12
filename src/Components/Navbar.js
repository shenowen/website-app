import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";
import "../App.css";

export default class Navbar extends Component{
    state = {}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

    return (
      <Menu>
        <Menu.Item
          as = { Link }
          to = '/'
          name='Home'
          active={activeItem === 'Home'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='reviews'
          active={activeItem === 'reviews'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name='upcomingEvents'
          active={activeItem === 'upcomingEvents'}
          onClick={this.handleItemClick}
        />
      </Menu>
    )
  }
}