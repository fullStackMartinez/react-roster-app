import React, { Component } from 'react';
import Roster from './components/Roster';
import Drills from './components/Drills';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="container">

         <Roster className="roster" />
        <Drills />

      </div>
    );
  }
}

export default App;
