import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import './Navbar.css';

class Navbar extends Component{
  render(){
    return(
      <div className='Navbar'>
        <NavLink exact activeClassName='Navbar-active' to='/'>Home</NavLink>
        <NavLink exact activeClassName='Navbar-active' to='water'>Water</NavLink>
        <NavLink exact activeClassName='Navbar-active' to='carrots'>Carrots</NavLink>
        <NavLink exact activeClassName='Navbar-active' to='fruit'>Fruit</NavLink>
      </div>
    )
  }
}

export default Navbar;