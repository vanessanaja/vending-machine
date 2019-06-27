import React, { Component } from 'react';

class Fruit extends Component {
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div className='Vending-Machine'>
        <h1>This is the Fruit Component</h1>
      </div>
    )
  }
}

export default Fruit;