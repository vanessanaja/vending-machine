import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Water extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className='Vending-Machine'>
        <h1>This is Water Component</h1>
        <Link to='/'>Back</Link>
      </div>
    )
  }
}

export default Water;