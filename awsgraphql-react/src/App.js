import React, { Component } from 'react';
import './css/App.css';
import Header from './navigation/header';
import Footer from './navigation/footer';

import { Switch, Route } from 'react-router-dom';
import SkillsPage from './skills-page.js';
import EmployeesPage from './employees-page.js';

const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/' component={SkillsPage}></Route>
      <Route exact path='/employees' component={EmployeesPage}></Route>
      <Route exact path='/skills' component={SkillsPage}></Route>
    </Switch>
  );
}

class App extends Component {
  render() {
    return (
      <div className="App">
    	<Header />
      	<Main />
    	<Footer />	
      </div>
    );
  }
}

export default App;

