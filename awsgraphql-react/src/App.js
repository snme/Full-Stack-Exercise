import React, { Component } from 'react';
import CreateSkill from './createSkill';
import DisplaySkills from './displaySkill';
import logo from './logo.svg';
import './css/App.css';
import { useState } from 'react';


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

