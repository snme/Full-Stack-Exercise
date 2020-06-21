import React, { Component } from 'react';
import CreateSkill from './skills-files/createSkill';
import DisplaySkills from './skills-files/displaySkill';
import './css/App.css';
import MaterialTableDemo from './test-table';


class SkillsPage extends Component {
  render() {
    return (
      <div className="SkillsPage">
        <h3>Add, Update, and Delete Skills!</h3>
        hey yall? what's brackin
        <CreateSkill />
        <DisplaySkills />
        <MaterialTableDemo />
      </div>
    );
  }
}

export default SkillsPage;

