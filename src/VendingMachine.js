import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Message from './Message';

class VendinMachine extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className='Vending-Machine'>
      <Message>
        <h1>This is the Vending Machine Component</h1>
      </Message>
      <Message>
        <Link exact to='/water'>Water</Link>
        <Link exact to='/carrots'>Carrots</Link>
        <Link exact to='/fruit'>Fruit</Link>
        </Message> 
      </div>
    )
  }
}

export default VendinMachine;