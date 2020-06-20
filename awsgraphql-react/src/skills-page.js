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
        <h3>Add, Update, and Delete Skills!</h3>
        hey yall? what's brackin
        <CreateSkill />
        <DisplaySkills />
      </div>
    );
  }
}

export default SkillsPage;

