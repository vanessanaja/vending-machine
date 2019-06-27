import React from 'react';
import VendingMachine from './VendingMachine';
import Navbar from './Navbar';
import Water from './Water';
import Carrots from './Carrots';
import Fruit from './Fruit'
import { Route, Switch } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="App">
    <Navbar />
      <Switch>
        <Route exact path='/' render={() => <VendingMachine />} />  
        <Route exact path='/water' render={() => <Water/>} />  
        <Route exact path='/carrots' render={() => <Carrots />} />
        <Route exact path='/fruit' render={() => <Fruit />} />  
      </Switch>
    </div>
  );
}

export default App;
