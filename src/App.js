import React, { Component } from 'react';
import Roster from './components/Roster';
import Drills from './components/Drills';

class App extends Component {
  render() {
    return (
      <div className="container">

         <Roster />
        <Drills />

      </div>
    );
  }
}

export default App;
