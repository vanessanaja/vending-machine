import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Message from './Message';
import waterIMG from './waterIMG.png';
import './Water.css';

class Water extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className='Vending-Machine'>
      <Message>
        <h1>This is Water Component</h1>
        <img src={waterIMG} alt='water' className='drop'></img>
        <Link to='/'>Back</Link>
        </Message> 
      </div>
    )
  }
}

export default Water;