import React, { Component } from 'react';
import CreateSkill from './createSkill';
import DisplaySkills from './displaySkill';
import logo from './logo.svg';
import './css/App.css';
import { useState } from 'react';
import Header from './header';
import Footer from './footer';


class SkillsPage extends Component {
  render() {
    return (
      <div className="SkillsPage">
        <CreateSkill />
        <DisplaySkills />
      </div>
    );
  }
}

export default SkillsPage;

