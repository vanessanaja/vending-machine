import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Message from './Message';

class Fruit extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className='Vending-Machine'>
        <h1>This is the Fruit Component</h1>
        <Link to='/'>Back</Link>
      </div>
    )
  }
}

export default Fruit;