import React, { Component } from 'react';
import CreateSkill from './createSkill';
import DisplaySkills from './displaySkill';
import logo from './logo.svg';
import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CreateSkill />
        <DisplaySkills />
      </div>
    );
  }
}

export default App;
