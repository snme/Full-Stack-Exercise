import React, { Component } from 'react';
import CreateSkill from './skills-files/createSkill';
import DisplaySkills from './skills-files/displaySkill';
import './css/App.css';
//import MaterialTableDemo from './test-table'; <MaterialTableDemo />


class SkillsPage extends Component {
  render() {
    return (
      <div className="SkillsPage">
        <h3>Add, Update, and Delete Skills!</h3>
      <div class="row" justify="center">
      <div class="col s1"></div>
      <div class="col s5">
      <div class="col s12"><h4>Add New Skills</h4></div>
      <CreateSkill />
      </div>
      <div class="col s5">

      <div class="col s12"><h4>Edit or Delete Skills</h4></div>
      <DisplaySkills />
      </div>
    </div>

        
        
      </div>
    );
  }
}

export default SkillsPage;

