import React, { Component } from 'react';
import CreateSkill from './skills-files/createSkill';
import DisplaySkills from './skills-files/displaySkill';
import './css/App.css';
//import MaterialTableDemo from './test-table'; <MaterialTableDemo />


class SkillsPage extends Component {
  render() {
    return (
      <div className="SkillsPage">
        <div className=" blue-text"><h4>Maintain Skills</h4></div>
      <div class="row" justify="center">
      <div class="col s1"></div>
      <div class="col s5">
      <div class="col s12 blue-text"><h5>Add a new skill</h5></div>
      <div class="col s12 blue-text"> <h5> </h5> </div>
      <CreateSkill />
      </div>
      <div class="col s5">

      <div class="col s12 blue-text"><h5>Edit Skills</h5></div>
      <DisplaySkills />
      </div>
    </div>

        
        
      </div>
    );
  }
}

export default SkillsPage;

