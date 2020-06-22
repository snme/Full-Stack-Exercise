import React from 'react';
import CreateEmployee from './employees-files/createEmployee';
import DisplayEmployee from './employees-files/displayEmployee';
import './css/App.css';

class EmployeesPage extends React.Component {
  render() {
    return (
      <div className="EmployeesPage">
        <div className=" blue-text" ><h4>Maintain Employees</h4></div>
      <div class="row" justify="center">
      <div class="col s1"></div>
      <div class="col s5">
      <div class="col s12 blue-text"><h5>Add a new employee</h5></div>
      <div class="col s12 blue-text"> <h5> </h5> </div>
      <CreateEmployee />
      </div>
      <div class="col s5">

      <div class="col s12 blue-text"><h5>Edit Employees and Add Skills</h5></div>
      
      <DisplayEmployee />
      </div>
    </div>
      </div>
    );
  }
}
export default EmployeesPage;

