import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Carrots extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className='Vending-Machine'>
        <h1>This is the Carrots Component</h1>
        <Link to='/'>Back</Link>
      </div>
    )
  }
}

export default Carrots;