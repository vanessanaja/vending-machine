import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Water from './Water';
import Carrots from './Carrots';
import Fruit from './Fruit'

class VendinMachine extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className='Vending-Machine'>
        <h1>This is the Vending Machine Component</h1>
        <Link to='/water'>Water</Link>
        <Link to='/carrots'>Carrots</Link>
        <Link to='/fruit'>Fruit</Link>
      </div>
    )
  }
}

export default VendinMachine;